import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeBusinesses from './components/homeBusinesses';
import HomeFv from './components/homeFv';
import HomePoint from './components/homePoint';
import HomeReasons from './components/homeReasons';
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
      <HomeBusinesses />
    </div>
  );
};

export default IndexPage;
