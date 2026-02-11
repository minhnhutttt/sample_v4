import type { Metadata } from 'next';

import { OG, TWITTER } from '@/config/constants';

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
  return <div>sample</div>;
};

export default SamplePage;
