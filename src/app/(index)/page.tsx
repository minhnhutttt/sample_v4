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
    <div className="relative">
      <Kv />
      <div className="mt-[100vh]" />
      {/* <OverScroll /> */}
      <div className="sticky inset-x-0 top-0">
        <OwnYourValue />
      </div>
      <div className="inset-x-0 top-0">
        <Toolkit />
      </div>
      <div className="inset-x-0 top-0">
        <Categories />
      </div>
      <KivoPhotos />
      <DeliverValue />
      <Download />
    </div>
  );
};

export default IndexPage;
