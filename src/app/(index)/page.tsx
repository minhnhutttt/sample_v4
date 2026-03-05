import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeClients from './components/HomeClients';
import HomeKv from './components/HomeKv';
import HomeServices from './components/HomeServices';

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
      <HomeServices />
      <HomeClients />
    </div>
  );
};

export default IndexPage;
