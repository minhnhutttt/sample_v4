export type News = {
  id: string;
  title: string;
  category: string;
  date: string;
  headline?: string;
  thumbnail: {
    url: string;
  };
  newsimage?: {
    url: string;
  };
  subhead_1?: string;
  subhead?: string;
  newstext_1?: string;
  publishedAt?: string;
};
export type NewsList = {
  contents: News[];
  totalCount: number;
};
