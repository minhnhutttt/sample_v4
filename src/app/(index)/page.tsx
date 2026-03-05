import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeFv from './components/HomeFv';
import HomeNews from './components/HomeNews';
import HomePartner from './components/HomePartner';
import HomeSns from './components/HomeSns';
import Topics from './components/Topics';

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
      <HomeFv topics={<Topics />} />
      <HomeNews />
      <HomeSns />
      <HomePartner />
    </div>
  );
};

export default IndexPage;
