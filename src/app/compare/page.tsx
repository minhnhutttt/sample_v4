import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, TWITTER } from '@/config/constants';

import CompareApp from './components/compareApp';
import CompareStrengths from './components/compareStrengths';

export const metadata: Metadata = {
  title: 'Compare',
  openGraph: {
    ...OG,
    title: 'Compare',
    url: '/compare',
  },
  twitter: {
    ...TWITTER,
    title: 'Compare',
  },
  alternates: {
    canonical: '/compare',
  },
};

const ComparePage = () => {
  return (
    <div>
      <PageFv
        appLabel="KIVO TALK"
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[153px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-lg:text-[110px] max-md:max-w-[340px] max-md:!whitespace-normal max-md:text-[56px] max-md:tracking-[-1px]"
        titleWrapperClassName="absolute top-[206px] left-1/2 -translate-x-1/2 max-md:top-[170px] whitespace-nowrap"
        text={
          <>
            <span className="whitespace-nowrap">KIVO vs Other</span>
          </>
        }
      />
      <CompareApp />
      <CompareStrengths />
      <div className="grid items-center gap-10 bg-[#242424] px-10 py-20 md:grid-cols-2 lg:px-20">
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/app-img.png"
            alt=""
            className="h-auto w-full max-w-[520px] object-contain p-4"
          />
        </div>

        <div className="flex flex-col items-start gap-[max(20.4px,20.4px+100vw*.0021)] uppercase">
          <div className="bg-[#D2D2D2] leading-none">
            <img
              src="/assets/images/kivo-talk.png"
              alt="KIVO APP"
              className="h-[clamp(104px,78px+6.4vw,224px)] w-auto max-w-full object-contain select-none"
              draggable={false}
            />
          </div>
          <p className="mt-7 max-w-[720px] text-[#ffffff] md:mt-12">
            <span className="block text-[clamp(14px,11px+0.625vw,24px)]">
              クリエイターたちが何を、いくらで届けているか。ファンがコンテンツにどんな言葉を残しているか。アプリで見れます。今すぐダウンロードしてチェックしよう！
            </span>
          </p>
          <div className="mt-7 flex gap-5 md:mt-12">
            <a href="#">
              <img src="/assets/images/btn-appstore.png" alt="" />
            </a>
            <a href="#">
              <img src="/assets/images/btn-google.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
