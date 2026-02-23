import { News } from '@/types/news';

import { client } from './client';

export const getNewsList = async () => {
  const data = await client.get({
    endpoint: 'newsss',
    queries: {
      orders: '-publishedAt',
    },
  });

  return data.contents as News[];
};

export const getNewsDetail = async (id: string) => {
  const data = await client.get({
    endpoint: 'newsss',
    contentId: id,
  });

  return data as News;
};
