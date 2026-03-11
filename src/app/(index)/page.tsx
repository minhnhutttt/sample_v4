import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeKv from './components/HomeKv';
import HomeServices from './components/HomeServices';
import HomeSlider from './components/HomeSlider';

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
      <HomeSlider />
    </div>
  );
};

export default IndexPage;
