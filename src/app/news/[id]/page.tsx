import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Title from '@/components/common/Title';
import { News } from '@/types/news';

import { getAdjacentNews, getNewsDetail } from '../../libs/getNews';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const news = await getNewsDetail(id);

    return {
      title: news.title,
      description: news.headline,
      openGraph: {
        title: news.title,
        description: news.headline,
        images: [
          {
            url: news.thumbnail.url,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'News Detail',
    };
  }
}

const NewsDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  let news: News;

  try {
    news = await getNewsDetail(id);
  } catch {
    notFound();
  }

  const { prev, next } = await getAdjacentNews(news.publishedAt || news.date);
  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto flex w-full max-w-160 items-center justify-center md:max-w-[840px]">
        <div className="">
          <Title title="NEWS" sub="お知らせ＆ニュース" />
          <div className="mt-16 md:mt-[90px]">
            {/* Title */}
            <h1 className="mb-3 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
              {news.title}
            </h1>

            {/* Date */}
            {/* Category */}
            <div className="flex items-center gap-5">
              <div className="text-[12px] md:text-[14px]">
                {dayjs(news.date).format('YYYY.MM.DD')}
              </div>
              <div className="flex h-[26px] items-center bg-[linear-gradient(94deg,_#FF5E5E_3.04%,_#FF4E4E_113.13%)] px-[15px] text-[14px] text-white md:text-[16px]">
                {news.category}
              </div>
            </div>

            <ul className="my-5 flex items-center justify-center gap-[14px]">
              <li>
                <Link
                  href="https://www.facebook.com/basket.saiko"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/ic-fb.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/basket.saiko"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/ic-yt.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/leoblackssaga/"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/ic-instagram.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <Image
                    src="/assets/images/ic-link.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
            </ul>

            {/* Main Image */}
            <div className="mb-10 md:mb-[50px]">
              <Image
                src={news.newsimage?.url || news.thumbnail.url}
                alt={news.title}
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Headline */}
            {news.headline && (
              <h2 className="mb-5 border-b border-[#ccc] py-1 text-[18px] font-bold md:text-[22px]">
                {news.headline}
              </h2>
            )}

            {/* Subhead */}
            {news.subhead && (
              <h3 className="mb-5 text-[16px] font-medium md:text-[20px]">
                {news.subhead}
              </h3>
            )}

            {/* Content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: news.newstext,
              }}
            />
          </div>
          {/* Navigation */}
          <div className="mt-[90px] flex max-md:flex-wrap">
            {/* Previous */}
            {prev ? (
              <Link
                href={`/news/${prev.id}`}
                className="flex h-12 flex-1 items-center bg-[#F1F1F1] px-5 text-[14px] duration-300 hover:opacity-75 max-md:order-2 md:h-[60px] md:text-[16px]"
              >
                ＜　前の記事へ
              </Link>
            ) : (
              <div className="flex-1 max-md:order-2" />
            )}
            <Link
              href="/news"
              className="flex h-12 w-full items-center justify-center gap-5 bg-[linear-gradient(94deg,_#FF5E5E_3.04%,_#FF4E4E_113.13%)] px-5 text-[14px] text-white duration-300 hover:opacity-75 md:h-[60px] md:w-[200px] md:text-[16px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                  fill="white"
                />
              </svg>
              <span>NEWS一覧</span>
            </Link>
            {/* Next */}
            {next ? (
              <Link
                href={`/news/${next.id}`}
                className="flex h-12 flex-1 items-center justify-end bg-[#F1F1F1] px-5 text-[14px] duration-300 hover:opacity-75 max-md:order-3 md:h-[60px] md:text-[16px]"
              >
                次の記事へ　＞
              </Link>
            ) : (
              <div className="flex-1 max-md:order-3" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
