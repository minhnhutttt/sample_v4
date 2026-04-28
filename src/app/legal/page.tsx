import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, SITE_URL } from '@/config/constants';

import LegalArticles from './components/legalArticles';

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const LegalPage = () => {
  return (
    <div className="overflow-x-hidden">
      <PageFv
        appLabel=""
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[168px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-md:text-[84px] max-md:tracking-[-1.4px]"
        titleWrapperClassName="absolute left-1/2 top-[206px] -translate-x-1/2 max-md:top-[168px]"
        text={<>LEGAL</>}
      />
      <div className="bg-[#FFF8F2] px-5 pt-20 pb-25 md:pt-[120px] md:pb-[180px]">
        <div className="relative mx-auto flex min-h-[140px] w-full max-w-[1180px] items-center justify-center px-6 md:px-10">
          <span className="absolute top-0 left-0">
            <img
              className="max-md:w-8"
              src="/assets/images/compare-title.png"
              alt=""
            />
          </span>
          <span className="absolute bottom-0 left-0 rotate-270">
            <img
              className="max-md:w-8"
              src="/assets/images/compare-title.png"
              alt=""
            />
          </span>
          <h2 className="text-center text-[24px] font-bold md:text-[40px]">
            法務関連
          </h2>
          <span className="absolute top-0 right-0 rotate-90">
            <img
              className="max-md:w-8"
              src="/assets/images/compare-title.png"
              alt=""
            />
          </span>
          <span className="absolute right-0 bottom-0 rotate-180">
            <img
              className="max-md:w-8"
              src="/assets/images/compare-title.png"
              alt=""
            />
          </span>
        </div>
        <div className="py-20 text-center text-[16px] font-medium md:py-25 md:text-[20px]">
          KIVOに関するポリシー、規約、表記をまとめています。
          <br />
          ご利用前にご確認ください。
        </div>
        <LegalArticles />
      </div>
    </div>
  );
};

export default LegalPage;
