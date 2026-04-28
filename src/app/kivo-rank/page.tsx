import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, SITE_URL } from '@/config/constants';

import KivoPointFaqSection from './components/kivoPointFaqSection';
import KivoPointStatusSection from './components/kivoPointStatusSection';

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const KivoPointPage = () => {
  return (
    <div className="overflow-x-hidden">
      <PageFv
        appLabel="KIVO.INC"
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[168px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-md:text-[84px] max-md:tracking-[-1.4px]"
        titleWrapperClassName="absolute left-1/2 top-[206px] -translate-x-1/2 max-md:top-[168px]"
        text={<>KIVO Point</>}
      />
      <KivoPointStatusSection />
      <KivoPointFaqSection />
    </div>
  );
};

export default KivoPointPage;
