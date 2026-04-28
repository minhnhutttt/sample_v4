import type { Metadata } from 'next';

import { OG, SITE_URL } from '@/config/constants';
import { VideoModalProvider } from '@/providers/VideoModalProvider';

import Categories from './components/categories';
import DeliverValue from './components/deliverValue';
import KivoPhotos from './components/kivoPhotos';
import Kv from './components/kv';
import OwnYourValue from './components/ownYourValue';
import Toolkit from './components/toolkit';
import Video from './components/video';
import VideoModalRender from './components/videoModalRender';

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
    <div>
      <VideoModalProvider>
        <Kv />
        <div className="mt-[100vh]" />
        <div className="sticky inset-x-0 top-0">
          <OwnYourValue />
        </div>
        <Toolkit />
        <div className="sticky inset-x-0 top-0">
          <Video />
        </div>
        <Categories />
        <KivoPhotos />
        <div className="mt-[100vh]" />
        <div className="overflow-x-hidden">
          <DeliverValue />
        </div>
        <VideoModalRender />
      </VideoModalProvider>
    </div>
  );
};

export default IndexPage;
