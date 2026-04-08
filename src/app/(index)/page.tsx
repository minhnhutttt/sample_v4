import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeBusinesses from './components/homeBusinesses';
import HomeCta from './components/homeCta';
import HomeFaq from './components/homeFaq';
import HomeFv from './components/homeFv';
import HomePoint from './components/homePoint';
import HomeReasons from './components/homeReasons';
import HomeSteps from './components/homeSteps';
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
      <HomeSteps />
      <HomeFaq />
      <HomeCta />
    </div>
  );
};

export default IndexPage;
