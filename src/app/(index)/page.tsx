import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import About from './components/About';
import Fv from './components/Fv';

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
      <Fv />
      <About />
    </div>
  );
};

export default IndexPage;
