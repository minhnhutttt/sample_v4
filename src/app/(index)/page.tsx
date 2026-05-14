import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import Creators from './components/creators';
import Title from './components/title';

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
    <div className="bg-[#FFF8F2]">
      <Title />
      <Creators />
    </div>
  );
};

export default IndexPage;
