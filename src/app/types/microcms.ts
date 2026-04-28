// src/types/microcms.ts

export type Category =
  | 'アップデート'
  | '使い方'
  | 'プレスリリース'
  | '事例'
  | '運営ブログ';

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type MicroCMSBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// Announcement Bar
export type AnnouncementBarItem = MicroCMSBase & {
  text: string;
  internal_link?: Announcement; // コンテンツ参照
  external_url?: string;
};

// Announcement Article
export type Announcement = MicroCMSBase & {
  eyecatch?: MicroCMSImage;
  title: string;
  category: Category;
  content: string;
};

export type AnnouncementListResponse = {
  contents: Announcement[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type AnnouncementBarListResponse = {
  contents: AnnouncementBarItem[];
  totalCount: number;
  offset: number;
  limit: number;
};
