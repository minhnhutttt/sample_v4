import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeContent from './components/homeContent';
import HomeKv from './components/homeKv';
import HomeQuestions from './components/homeQuestions';
import HomeStarted from './components/homeStarted';

export const metadata: Metadata = {
  title: SITE_NAME,
  openGraph: {
    ...OG,
    url: '/manga',
  },
  twitter: {
    ...TWITTER,
  },
  alternates: {
    canonical: '/manga',
  },
};

const MangaPage = () => {
  return (
    <div>
      <HomeKv />
      <HomeContent />
      <HomeQuestions />
      <HomeStarted />
    </div>
  );
};

export default MangaPage;
