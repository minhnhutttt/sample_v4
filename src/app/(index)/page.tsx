import type { Metadata } from 'next';

import Header from '@/components/header';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeSection01 from './components/HomeSection01';
import HomeSection02 from './components/HomeSection02';
import HomeSection03 from './components/HomeSection03';
import HomeSection04 from './components/HomeSection04';
import HomeSection05 from './components/HomeSection05';
import HomeSection07 from './components/HomeSection07';
import HomeSection09 from './components/HomeSection09';
import HomeSection10 from './components/HomeSection10';

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
      <Header />
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection04 />
      <HomeSection05 />
      <HomeSection07 />
      <HomeSection09 />
      <HomeSection03 />
      <HomeSection10 />
    </div>
  );
};

export default IndexPage;
