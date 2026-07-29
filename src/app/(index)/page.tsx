import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import Fv from './components/Fv';
import Lightblue from './components/Lightblue';
import Positive from './components/Positive';
import Story from './components/Story';

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
    <>
      <Fv />
      <Story />
      <Positive />
      <Lightblue />
    </>
  );
};

export default IndexPage;
