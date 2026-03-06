import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeAbout from './components/HomeAbout';
import HomeAwards from './components/HomeAwards';
import HomeClients from './components/HomeClients';
import HomeInsights from './components/HomeInsights';
import HomeKv from './components/HomeKv';
import HomeServices from './components/HomeServices';
import HomeSlider from './components/HomeSlider';
import HomeSolutions from './components/HomeSolutions';

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
      <HomeServices />
      <HomeClients />
      <HomeSolutions />
      <HomeSlider />
      <HomeInsights />
      <HomeAbout />
      <HomeAwards />
    </div>
  );
};

export default IndexPage;
