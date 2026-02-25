import dayjs from 'dayjs';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
      <div className="mx-auto max-w-[800px]">
        {/* Category */}
        <div className="mb-4 text-sm text-gray-500">{news.category?.name}</div>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">{news.title}</h1>

        {/* Date */}
        <div className="mb-8 text-sm text-gray-400">
          {dayjs(news.date).format('YYYY.MM.DD')}
        </div>

        {/* Main Image */}
        <div className="mb-8">
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
          <h2 className="mb-4 text-xl font-semibold">{news.headline}</h2>
        )}

        {/* Subhead */}
        {news.subhead && (
          <h3 className="mb-4 text-lg font-medium text-gray-600">
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
      <div className="mt-16 flex justify-between border-t pt-8">
        {/* Previous */}
        {prev ? (
          <Link href={`/news/${prev.id}`} className="text-sm hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/news/${next.id}`}
            className="text-right text-sm hover:underline"
          >
            {next.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
