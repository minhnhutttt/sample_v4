import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, TWITTER } from '@/config/constants';

import SupportFaq from './components/supportFaq';

export const metadata: Metadata = {
  title: 'Support',
  openGraph: {
    ...OG,
    title: 'support',
    url: '/support',
  },
  twitter: {
    ...TWITTER,
    title: 'support',
  },
  alternates: {
    canonical: '/support',
  },
};

const SupportPage = () => {
  return (
    <div className="bg-[#FFF8F2]">
      <PageFv
        appLabel="KIVO TALK"
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[153px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-lg:text-[110px] max-md:max-w-[340px] max-md:!whitespace-normal max-md:text-[56px] max-md:tracking-[-1px]"
        titleWrapperClassName="absolute top-[206px] left-1/2 -translate-x-1/2 max-md:top-[170px] whitespace-nowrap"
        text={
          <>
            <span className="whitespace-nowrap">Support</span>
          </>
        }
      />
      <div className="px-5 pt-20 md:pt-[100px]">
        <div className="relative mx-auto flex w-full max-w-100 items-center justify-center text-white md:max-w-[1280px] md:gap-10 lg:gap-[86px]">
          <div className="relative z-10 text-center">
            <div className="w-full">
              <p className="text-[18px] font-bold text-black md:text-[40px]">
                困っていることはありませんか？
                <br />
                KIVOサポートが、丁寧にお答えします。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-25">
          <div className="mx-auto w-full max-w-[900px]">
            <SupportFaq />
          </div>

          <div className="mt-16 bg-white py-16 md:mt-24 md:py-24">
            <div className="mx-auto w-full max-w-[900px]">
              <p className="text-center text-[16px] font-medium md:text-[24px]">
                FAQで解決しない場合は、こちらからお気軽にご連絡ください。
              </p>
              <h4 className="text-center text-[24px] font-bold md:text-[50px]">
                ご質問・ご相談はこちら
              </h4>

              <div className="mt-8 text-[#1E1E1E] md:mt-[50px]">
                <iframe
                  className="airtable-embed"
                  src="https://airtable.com/embed/appmyl8b8OPaeclGH/pagF9C86JcmP9qxTN/form"
                  frameBorder="0"
                  width="100%"
                  height="800"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
