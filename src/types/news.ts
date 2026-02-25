export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  date: string;
  thumbnail: {
    url: string;
  };
  newsimage: {
    url: string;
  };
  headline: string;
  subhead: string;
  newstext: string;
  publishedAt?: string;
};
