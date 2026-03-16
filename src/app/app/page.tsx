import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, SITE_URL } from '@/config/constants';

import Download from '../(index)/components/download';
import Products from './components/products';

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const AppPage = () => {
  return (
    <div>
      <PageFv />
      <Download />
      <Products />
    </div>
  );
};

export default AppPage;
