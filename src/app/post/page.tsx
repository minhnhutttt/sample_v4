import type { Metadata } from 'next';
import Image from 'next/image';

import { OG, TWITTER } from '@/config/constants';

import { client } from '../libs/client';
import PostList from './component/PostList';

export const metadata: Metadata = {
  title: 'Post',
  openGraph: {
    ...OG,
    title: 'post',
    url: '/post',
  },
  twitter: {
    ...TWITTER,
    title: 'post',
  },
  alternates: {
    canonical: '/post',
  },
};

const PostPage = async () => {
  const data = await client
    .get({
      endpoint: 'news',
    })
    .then((res) => console.log(res));
  return (
    <div>
      <div className="px-5 pt-28 md:pt-[240px]">
        <div className="relative mx-auto flex w-full max-w-100 items-center justify-center text-white md:max-w-[1280px]">
          <div className="relative z-10 text-center">
            <div className="w-full">
              <h1 className="text-[50px] font-bold md:text-[80px]">
                お知らせ・記事
              </h1>
              <div className="mt-10 mb-8 flex justify-center md:mt-20 md:mb-[50px]">
                <Image
                  src="/assets/images/kivo.svg"
                  alt=""
                  width={331}
                  height={225}
                  className="w-22 md:w-[284px]"
                />
              </div>
              <p className="text-[18px] font-bold md:text-[40px]">
                KIVOの最新情報、アップデート、
                <br className="md:hidden" />
                思想や取り組みをお届けします。
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1200px]">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
