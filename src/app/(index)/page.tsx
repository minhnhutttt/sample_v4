import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeFv from './components/homeFv';
import HomeNews from './components/homeNews';
import HomePartner from './components/homePartner';
import HomeSns from './components/homeSns';
import Topics from './components/topics';

export const dynamic = 'force-dynamic';

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
