'use client';

import { useMemo, useState } from 'react';

import dayjs from 'dayjs';
import Link from 'next/link';

import { ArticleProps } from '../page';

const PostList = ({ data }: { data: ArticleProps[] }) => {
  const categories = useMemo(() => {
    const unique = data.reduce<{ id: string; name: string }[]>((acc, item) => {
      if (item.category && !acc.find((c) => c.id === item.category.id)) {
        acc.push(item.category);
      }
      return acc;
    }, []);

    return unique;
  }, [data]);

  const [tab, setTab] = useState<string>('all');

  // Filter theo ID
  const filteredPosts =
    tab === 'all' ? data : data.filter((item) => item.category?.id === tab);

  return (
    <div className="mt-25 md:mt-[140px]">
      {/* Tabs */}
      <div className="grid grid-cols-2 flex-wrap justify-center gap-x-10 max-md:mx-auto max-md:w-full max-md:max-w-[440px] md:flex md:gap-20">
        {/* Tab All */}
        <button
          className={`border-b-[3px] py-2 text-[18px] font-medium whitespace-nowrap duration-300 hover:-translate-y-2 md:text-[30px] ${
            tab === 'all'
              ? 'border-[#F78629] text-[#F78629]'
              : 'border-transparent text-white'
          }`}
          onClick={() => setTab('all')}
        >
          すべての記事
        </button>

        {/* Dynamic Category Tabs */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`border-b-[3px] py-2 text-[18px] font-medium whitespace-nowrap duration-300 hover:-translate-y-2 md:text-[30px] ${
              tab === cat.id
                ? 'border-[#F78629] text-[#F78629]'
                : 'border-transparent text-white'
            }`}
            onClick={() => setTab(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="mt-12 mb-20 space-y-8 md:mt-20 md:mb-32 md:space-y-[55px]">
        {filteredPosts.map((post) => (
          <Link
            href={`post/${post.id}`}
            key={post.id}
            className="group flex rounded-[15px] border border-white/20 bg-[rgba(255,255,255,0.02)] p-6 [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter duration-300 hover:border-white md:p-12.5"
          >
            <span className="flex flex-col space-y-4 border-l-3 border-[#F78629] pl-5 text-[16px] font-medium md:pl-25 md:text-[24px]">
              <span className="flex items-center gap-4">
                <span className="rounded-lg border border-white/20 bg-[rgba(255,255,255,0.02)] p-2 leading-none font-medium text-[#F78629] [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter">
                  {post.category.name}
                </span>
                <span className="text-[#888]">
                  {dayjs(post.publishedAt).format('YYYY.MM.DD')}
                </span>
              </span>
              <h5 className="line-clamp-2 text-[22px] font-medium text-white md:text-[50px]">
                {post.title}
              </h5>
              <span className="line-clamp-2">{post.description}</span>
              <span className="flex w-full justify-end font-bold text-[#F78629] duration-300 group-hover:translate-x-2">
                読む→
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
