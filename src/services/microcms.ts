'use server';

import { createClient } from 'microcms-js-sdk';

import { PER_PAGE } from '@/config/constants';
import { News, NewsList } from '@/types/news';
import { TeamList } from '@/types/team';

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

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

export const getConfigs = async () => {
  const data = await client.get({
    endpoint: 'config',
  });

  return data;
};

export const getMatches = async () => {
  const data = await client.get({
    endpoint: 'matches',
  });

  return data;
};

export const getTeamList = async (team?: string) => {
  const teamSelected = team ?? 'レオブラックス';
  const data = await client.get({
    endpoint: 'team',
    queries: {
      filters: `team[contains]${teamSelected}`,
    },
  });

  return data as TeamList;
};

export const getHistory = async () => {
  const data = await client.get({
    endpoint: 'history',
  });

  return data;
};

export const getNewsPage = async (offset: number, category?: string) => {
  const safeOffset = Number.isFinite(offset) && offset >= 0 ? offset : 0;
  return getNewsList(category, PER_PAGE, safeOffset);
};
