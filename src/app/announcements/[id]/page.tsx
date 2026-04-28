import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getThumbnail } from '@/app/lib/fallbackImage';
import { getAnnouncementById, getAnnouncements } from '@/app/lib/microcms';
import { Announcement } from '@/app/types/microcms';

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  try {
    const { contents } = await getAnnouncements({ limit: 50 });
    return contents.map((article: Announcement) => ({ id: article.id }));
  } catch (e) {
    console.error('Failed to fetch announcements for static params:', e);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const article = await getAnnouncementById(id);
    return {
      title: `${article.title} | KIVO`,
      description: article.title,
      openGraph: {
        title: article.title,
        images: article.eyecatch ? [{ url: article.eyecatch.url }] : undefined,
      },
    };
  } catch {
    return { title: 'お知らせ | KIVO' };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  let article;
  try {
    article = await getAnnouncementById(id);
  } catch {
    notFound();
  }

  const thumbnail = getThumbnail(article.eyecatch?.url, article.category);
  const publishedAt = new Date(article.publishedAt).toLocaleDateString(
    'ja-JP',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <main className="min-h-screen bg-[#FFF8F2] py-32">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Back link */}
        <Link
          href="/announcements"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#C05F00] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          お知らせ一覧へ
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`rounded-full bg-[#242424] px-2.5 py-1 text-xs font-semibold text-white`}
            >
              {article.category}
            </span>
            <time
              dateTime={article.publishedAt}
              className="text-xs text-gray-400"
            >
              {publishedAt}
            </time>
          </div>
          <h1 className="text-2xl leading-snug font-bold text-[#1A1A1A]">
            {article.title}
          </h1>
        </div>

        {/* Eyecatch */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-[#F0E8DC]">
          <Image
            src={thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
}
