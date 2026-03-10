import type { Metadata } from 'next';

import AnimationLoader from '@/components/AnimationLoader';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import Mission from './components/Mission';
import News from './components/News';

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
      <div className="relative">
        <AnimationLoader />
        <News />
      </div>
      <Mission />
    </div>
  );
};

export default IndexPage;
