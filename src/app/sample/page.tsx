import type { Metadata } from 'next';

import { OG, TWITTER } from '@/config/constants';

import AnimationLoader from './components/AnimationLoader';

export const metadata: Metadata = {
  title: 'sample',
  openGraph: {
    ...OG,
    title: 'sample',
    url: '/sample',
  },
  twitter: {
    ...TWITTER,
    title: 'sample',
  },
  alternates: {
    canonical: '/sample',
  },
};

const SamplePage = () => {
  return (
    <div>
      <AnimationLoader />
    </div>
  );
};

export default SamplePage;
