import type { Metadata } from 'next';

import Header from '@/components/header';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeFv from './components/HomeFv';

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
    <div className="scrollable scrollable--root">
      <div className="scrollable__area lenis">
        <div className="">
          <div className="scrollable__area-inner">
            <Header />
            <HomeFv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
