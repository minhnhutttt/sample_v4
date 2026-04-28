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
        appLabel="We are KIVO"
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[153px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-lg:text-[110px] max-md:max-w-[340px] max-md:!whitespace-normal max-md:text-[56px] max-md:tracking-[-1px]"
        titleWrapperClassName="absolute top-[206px] left-1/2 -translate-x-1/2 max-md:top-[170px] whitespace-nowrap"
        text={
          <>
            <span className="whitespace-nowrap">Company Info</span>
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
