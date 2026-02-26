import { News, NewsList } from '@/types/news';

import { client } from './client';

export const getNewsList = async (category?: string, limit = 9, offset = 0) => {
  const data = await client.get({
    endpoint: 'newsss',
    queries: {
      orders: '-publishedAt',
      limit,
      offset,
      ...(category && {
        filters: `category[contains]${category}`,
      }),
    },
  });

  return data as NewsList;
};

export const getNewsDetail = async (id: string) => {
  const data = await client.get({
    endpoint: 'newsss',
    contentId: id,
  });

  return data as News;
};

export const getAdjacentNews = async (publishedAt: string) => {
  const [prev, next] = await Promise.all([
    client.get({
      endpoint: 'newsss',
      queries: {
        filters: `publishedAt[greater_than]${publishedAt}`,
        orders: 'publishedAt',
        limit: 1,
      },
    }),

    client.get({
      endpoint: 'newsss',
      queries: {
        filters: `publishedAt[less_than]${publishedAt}`,
        orders: '-publishedAt',
        limit: 1,
      },
    }),
  ]);

  return {
    prev: prev.contents[0] || null,
    next: next.contents[0] || null,
  };
};
