import dayjs from 'dayjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { client } from '@/app/libs/client';
import Breadcrumb from '@/components/common/Breadcrumb';

export const revalidate = 60; // ISR: rebuild sau 60s

type Params = Promise<{ id: string }>;

type ArticleDetail = {
  id: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  publishedAt: string;
  updatedAt: string;
};

/* ============================= */
/* Fetch single post */
/* ============================= */
async function getPost(id: string): Promise<ArticleDetail> {
  try {
    const data = await client.get({
      endpoint: 'news',
      contentId: id,
    });

    return data;
  } catch {
    notFound();
  }
}

/* ============================= */
/* SEO dynamic metadata */
/* ============================= */
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;

  const post = await getPost(id);

  return {
    title: post.title,
    description: post.content.replace(/<[^>]+>/g, '').slice(0, 120),
    openGraph: {
      title: post.title,
      url: `/post/${id}`,
      type: 'article',
    },
  };
}

/* ============================= */
/* Static generation */
/* ============================= */
export async function generateStaticParams() {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      fields: 'id',
    },
  });

  return data.contents.map((item: { id: string }) => ({
    id: item.id,
  }));
}

/* ============================= */
/* Page Component */
/* ============================= */
const PostDetailPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <div className="px-5 py-28 md:pt-28">
      <Breadcrumb
        items={[
          { label: 'お知らせ・記事 ', href: '/post' },
          { label: post.title },
        ]}
      />
      <div className="mx-auto my-16 max-w-[1220px] text-white md:my-[94px]">
        {/* Title */}
        <h1 className="mb-4 text-[24px] font-medium md:text-[50px]">
          {post.title}
        </h1>

        {/* Date */}
        <span className="flex items-center gap-4">
          <span className="rounded-lg border border-white/20 bg-[rgba(255,255,255,0.02)] p-2 leading-none font-medium text-[#F78629] [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter">
            {post.category.name}
          </span>
          <span className="text-[#888]">
            {dayjs(post.publishedAt).format('YYYY.MM.DD')}
          </span>
        </span>

        {/* Content */}
        <article
          className="prose prose-invert mt-12 max-w-none md:mt-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default PostDetailPage;
