import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeChoose from './components/HomeChoose';
import HomeFaq from './components/HomeFaq';
import HomeFreePremium from './components/HomeFreePremium';
import HomeFv from './components/HomeFv';
import HomeIntroduction from './components/HomeIntroduction';
import HomeSimple from './components/HomeSimple';
import HomeSlider from './components/HomeSlider';
import HomeValue from './components/HomeValue';

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
    <main className="relative">
      <HomeFv />
      <HomeIntroduction />
      <HomeValue />
      <HomeChoose />
      <HomeFreePremium />
      <HomeSimple />
      <HomeSlider />
      <HomeFaq />
    </main>
  );
};

export default IndexPage;
