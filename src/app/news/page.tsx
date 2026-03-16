import type { Metadata } from 'next';

import Title from '@/components/common/title';
import { OG, PER_PAGE, TWITTER } from '@/config/constants';
import { getNewsList } from '@/services/microcms';

import CategorySelect from './components/categorySelect';
import NewsList from './components/newsList';

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

const PostPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const params = await searchParams;
  const data = await getNewsList(params?.category, PER_PAGE, 0);
  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto flex w-full max-w-160 items-center justify-center md:max-w-[1280px]">
        <div className="md:px-4">
          <Title title="NEWS" sub="お知らせ＆ニュース" />
          <div className="flex items-center justify-center py-12 md:py-18">
            <p className="px-3 text-[13px] md:text-[14px]">カテゴリー</p>
            <div className="w-[200px] md:w-[390px]">
              <CategorySelect />
            </div>
          </div>
          <NewsList
            key={params?.category ?? ''}
            initialNews={data.contents}
            totalCount={data.totalCount}
            category={params?.category}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
