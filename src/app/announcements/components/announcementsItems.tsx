import Link from 'next/link';

import { getThumbnail } from '@/app/lib/fallbackImage';
import { getAnnouncements } from '@/app/lib/microcms';
import { Announcement, Category } from '@/app/types/microcms';

export const AnnouncementsItem = ({ article }: { article: Announcement }) => {
  const thumbnail = getThumbnail(article.eyecatch?.url, article.category);
  const publishedAt = new Date(article.publishedAt).toLocaleDateString(
    'ja-JP',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );
  return (
    <Link href={`/announcements/${article.id}`} className="group">
      <figure>
        <img
          src={thumbnail}
          alt={article.title}
          className="aspect-video rounded-xl object-cover"
        />
      </figure>
      <div className="">
        <div className="mt-3 flex flex-wrap items-center gap-3 md:mt-5">
          <p className="flex h-[30px] items-center justify-center rounded-2xl border border-black px-2 text-[14px] md:h-[34px] md:px-3">
            {article.category}
          </p>
          <p className="text-[14px]"> {publishedAt}</p>
        </div>
        <h4 className="mt-2.5 pr-5 text-[18px] md:mt-[15px] lg:text-[24px]">
          <span className="bg-[linear-gradient(#000,#000),linear-gradient(#f78629,#f78629)] bg-[size:0_.05em,0_1em] bg-[position:0_95%,0_90%] bg-no-repeat [transition:background-size_.75s_cubic-bezier(.19,1,.22,1)] group-hover:[background-size:100%_.05em,100%_1em]">
            {article.title}
          </span>
        </h4>
      </div>
    </Link>
  );
};

export const revalidate = 60;

const CATEGORIES: { label: string; value: Category | 'all' }[] = [
  { label: 'すべて', value: 'all' },
  { label: 'アップデート', value: 'アップデート' },
  { label: '使い方', value: '使い方' },
  { label: 'プレスリリース', value: 'プレスリリース' },
  { label: '事例', value: '事例' },
  { label: '運営ブログ', value: '運営ブログ' },
];

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function AnnouncementsItems({ searchParams }: Props) {
  const { category } = await searchParams;
  const activeCategory = category && category !== 'all' ? category : undefined;

  const { contents: articles, totalCount } = await getAnnouncements({
    limit: 12,
    category: activeCategory,
  });

  return (
    <main className="min-h-screen bg-[#FFF8F2]">
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-[#1A1A1A]">お知らせ</h1>
          <p className="text-sm text-gray-500">{totalCount}件の記事</p>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive =
              cat.value === 'all'
                ? !activeCategory
                : activeCategory === cat.value;
            return (
              <a
                key={cat.value}
                href={
                  cat.value === 'all'
                    ? '/news'
                    : `/news?category=${encodeURIComponent(cat.value)}`
                }
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#C05F00] text-white'
                    : 'border border-[#D9C8B8] bg-white text-[#1A1A1A] hover:border-[#C05F00] hover:text-[#C05F00]'
                } `}
              >
                {cat.label}
              </a>
            );
          })}
        </div>

        {/* Article grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
