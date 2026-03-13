import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeBanner from './components/HomeBanner';
import HomeCan from './components/HomeCan';
import HomeFaq from './components/HomeFaq';
import HomeKv from './components/HomeKv';
import HomePartner from './components/HomePartner';
import HomePoint from './components/HomePoint';
import HomeReassurance from './components/HomeReassurance';
import HomeStart from './components/HomeStart';
import HomeWorries from './components/HomeWorries';

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
      <HomeKv />
      <HomeWorries />
      <HomePoint />
      <HomeBanner />
      <HomeStart />
      <HomeCan />
      <HomeBanner />
      <HomeReassurance />
      <HomeFaq />
      <HomePartner />
    </div>
  );
};

export default IndexPage;
