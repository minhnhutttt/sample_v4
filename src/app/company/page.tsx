import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, SITE_URL } from '@/config/constants';

import BoardMember from './components/boardMember';
import CompanyProfile from './components/companyProfile';
import History from './components/history';
import KivoPhotos from './components/kivoPhotos';
import Mission from './components/mission';
import OfficeViewPhotos from './components/officeViewPhotos';
import OurBeliefs from './components/ourBeliefs';
import Vision from './components/vision';

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const ClubsPage = () => {
  return (
    <>
      <PageFv
        text={
          <>
            KIVO.INC <br />
            Information
          </>
        }
      />
      <Mission />
      <Vision />
      <BoardMember />
      <OurBeliefs />
      <History />
      <KivoPhotos />
      <CompanyProfile />
      <OfficeViewPhotos />
    </>
  );
};

export default ClubsPage;
