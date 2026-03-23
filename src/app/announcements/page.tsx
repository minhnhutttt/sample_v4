import { Suspense } from 'react';

import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, TWITTER } from '@/config/constants';

import { getAnnouncements } from '../lib/microcms';
import { AnnouncementFilter } from './components/announcementFilter';
import AnnouncementsHead from './components/announcementsHead';
import { AnnouncementsItem } from './components/announcementsItems';

export const metadata: Metadata = {
  title: 'Announcements',
  openGraph: {
    ...OG,
    title: 'announcements',
    url: '/announcements',
  },
  twitter: {
    ...TWITTER,
    title: 'announcements',
  },
  alternates: {
    canonical: '/announcements',
  },
};

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ category?: string; q?: string }>;
};
export default async function AnnouncementsPage({ searchParams }: Props) {
  const { category, q } = await searchParams;

  const { contents: articles } = await getAnnouncements({
    limit: 12,
    category: category || undefined,
    q: q || undefined,
  });
  return (
    <div>
      <PageFv
        text={
          <>
            KIVO App <br />
            Announcements
          </>
        }
      />
      <div className="bg-[#FAF2E8]">
        <div className="py-28 md:py-33.5">
          <AnnouncementsHead />
          <div className="py-15 md:py-20">
            <Suspense
              fallback={<div className="h-[112px] border-y border-black/20" />}
            >
              <AnnouncementFilter />
            </Suspense>
          </div>
          <div className="px-5">
            {articles.length > 0 ? (
              <div className="grid gap-8 max-md:mx-auto max-md:max-w-[440px] md:grid-cols-3 lg:gap-20">
                {articles.map((article) => (
                  <AnnouncementsItem key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center text-gray-400">
                <p className="text-lg">記事がありません</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
