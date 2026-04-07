import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeFv from './components/HomeFv';
import HomePoint from './components/HomePoint';
import HomeReasons from './components/HomeReasons';
import HomeTrust from './components/homeTrust';

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
    <div className="">
      <HomeFv />
      <HomePoint />
      <HomeReasons />
      <HomeTrust />
    </div>
  );
};

export default IndexPage;
