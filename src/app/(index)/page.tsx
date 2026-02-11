import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: SITE_NAME,
  openGraph: {
    ...OG,
    url: '/',
  },
  twitter: {
    ...TWITTER,
  },
  alternates: {
    canonical: '/',
  },
};

const IndexPage = () => {
  return <div className="">home</div>;
};

export default IndexPage;
