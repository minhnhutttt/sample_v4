import Image from 'next/image';

import { getNewsDetail, getNewsList } from '@/app/libs/getNews';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const news = await getNewsList();
  return news.map((item) => ({
    id: item.id,
  }));
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;
  const news = await getNewsDetail(id);

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      {/* CATEGORY */}
      <div className="mb-4">
        <span className="bg-black px-3 py-1 text-xs tracking-wider text-white uppercase">
          {news.category.name}
        </span>
      </div>

      {/* TITLE */}
      <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
        {news.title}
      </h1>

      {/* DATE */}
      <p className="mb-8 text-sm text-gray-500">{news.date}</p>

      {/* HERO IMAGE */}
      {news.thumbnail && (
        <div className="mb-10">
          <Image
            src={news.thumbnail.url}
            alt={news.title}
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {/* HEADLINE */}
      <p className="mb-4 text-xl font-semibold">{news.headline}</p>

      {/* SUBHEAD */}
      <p className="mb-8 text-lg text-gray-700">{news.subhead}</p>

      {/* NEWS IMAGE */}
      {news.newsimage && (
        <div className="mb-8">
          <Image
            src={news.newsimage.url}
            alt="news image"
            width={1000}
            height={600}
            className="h-auto w-full"
          />
        </div>
      )}

      {/* CONTENT */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: news.newstext }}
      />
    </article>
  );
}
