import type { Metadata } from 'next';

import { OG, SITE_URL } from '@/config/constants';

import Categories from './components/categories';
import DeliverValue from './components/deliverValue';
import Download from './components/download';
import KivoPhotos from './components/kivoPhotos';
import Kv from './components/kv';
import OwnYourValue from './components/ownYourValue';
import Toolkit from './components/toolkit';

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const IndexPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Kv />
      <OwnYourValue />
      <Toolkit />
      <Categories />
      <KivoPhotos />
      <DeliverValue />
      <Download />
    </div>
  );
};

export default IndexPage;
