'use client';

import { useState } from 'react';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { News } from '@/types/news';

type Props = {
  initialNews: News[];
  totalCount: number;
  category?: string;
};

export default function NewsList({ initialNews, totalCount, category }: Props) {
  const [news, setNews] = useState(initialNews);
  const [offset, setOffset] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/news?offset=${offset}&category=${category ?? ''}`,
    );

    const data = await res.json();

    setNews((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + 2);
    setLoading(false);
  };

  const hasMore = news.length < totalCount;

  return (
    <>
      <ul className="mt-5 grid w-full max-w-[992px] grid-cols-3 gap-x-10 gap-y-32">
        {news.map((item) => (
          <li key={item.id} className="w-[304px] text-left">
            <Link href={`/news/${item.id}`} className="flex flex-col">
              <Image
                src={item.thumbnail.url}
                alt=""
                width={304}
                height={220}
                className="h-[220px] w-[304px] object-cover"
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
            className="border px-6 py-2"
          >
            {loading ? 'Loading...' : 'More'}
          </button>
        </div>
      )}
    </>
  );
}
