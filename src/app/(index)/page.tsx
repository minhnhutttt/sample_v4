import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeKv from './components/HomeKv';
import HomePoint from './components/HomePoint';
import HomeServices from './components/HomeServices';
import HomeVision from './components/HomeVision';

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
  return (
    <div>
      <HomeKv />
      <HomeVision />
      <HomeServices />
      <HomePoint />
    </div>
  );
};

export default IndexPage;
