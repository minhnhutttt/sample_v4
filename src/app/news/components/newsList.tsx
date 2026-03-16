'use client'

import { useState } from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { PER_PAGE } from '@/config/constants';
import { getNewsPage } from '@/services/microcms';
import { News } from '@/types/news';

type Props = {
  initialNews: News[];
  totalCount: number;
  category?: string;
};

export default function NewsList({ initialNews, totalCount, category }: Props) {
  const [news, setNews] = useState(initialNews);
  const [offset, setOffset] = useState(PER_PAGE);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const data = await getNewsPage(offset, category);

    setNews((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + PER_PAGE);
    setLoading(false);
  };

  const hasMore = news.length < totalCount;

  return (
    <>
      <ul className="mt-5 grid w-full max-w-[992px] grid-cols-2 gap-x-5 gap-y-12 md:gap-x-10 md:gap-y-32 lg:grid-cols-3">
        {news.map((item) => (
          <li key={item.id} className="text-left md:w-[304px]">
            <Link href={`/news/${item.id}`} className="flex flex-col">
              <Image
                src={item.thumbnail.url}
                alt=""
                width={304}
                height={220}
                className="aspect-304/220 w-full object-cover md:h-[220px] md:w-[304px]"
              />
              <span className="py-2 text-[12px] md:text-[14px]">
                {dayjs(item.date).format('YYYY.MM.DD')}
              </span>
              <span className="line-clamp-2 text-[14px] md:text-[16px]">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className={`flex size-13 items-center justify-center rounded-full bg-[#FF5E5E] text-[30px] text-white duration-200 md:size-[65px] md:text-[35px] ${loading ? 'rotate-90' : ''}`}
          >
            ＋
          </button>
        </div>
      )}
    </>
  );
}
