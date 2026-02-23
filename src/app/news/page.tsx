import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Link from 'next/link';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

import { getNewsList } from '../libs/getNews';

export const metadata: Metadata = {
  title: 'News',
  openGraph: {
    ...OG,
    title: 'news',
    url: '/news',
  },
  twitter: {
    ...TWITTER,
    title: 'news',
  },
  alternates: {
    canonical: '/news',
  },
};

const PostPage = async () => {
  const news = await getNewsList();
  return (
    <div>
      <div className="px-5 py-30">
        <div className="relative mx-auto flex w-full max-w-100 items-center justify-center md:max-w-[1280px]">
          <div className="md:px-4">
            <Title title="NEWS" sub="ニュース" />
            <ul className="mt-2 space-y-[15px]">
              {news.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.id}`}
                    className="flex items-center gap-3 bg-[#F4F4F4] px-3.75 py-4 leading-[1.3] md:gap-5"
                  >
                    <span className="text-[14px] md:text-[18px]">
                      {dayjs(item.date).format('YYYY.MM.DD')}
                    </span>
                    <span className="flex h-5.5 items-center bg-[#CE2A2D] px-2 text-[13px] whitespace-nowrap text-white md:px-5 md:text-[15px]">
                      試合結果
                    </span>
                    <span className="line-clamp-1 text-[14px] md:text-[18px]">
                      予選①　vs B-LAB MIYAZAKI
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
