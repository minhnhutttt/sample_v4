import type { Metadata } from 'next';
import Link from 'next/link';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

import { PartnerData } from '../data/partners';

export const metadata: Metadata = {
  title: 'Partners',
  openGraph: {
    ...OG,
    title: 'Partners',
    url: '/partners',
  },
  twitter: {
    ...TWITTER,
    title: 'Partners',
  },
  alternates: {
    canonical: '/partners',
  },
};

const PartnersPage = () => {
  const partner01 = PartnerData.find((item) => item.id === '01');
  const partner02 = PartnerData.find((item) => item.id === '02');
  const partner03 = PartnerData.find((item) => item.id === '03');
  const partner04 = PartnerData.find((item) => item.id === '04');
  const partner05 = PartnerData.find((item) => item.id === '05');

  return (
    <div>
      <div className="px-5 pt-32 pb-32 md:pt-[250px] md:pb-40">
        <div className="relative mx-auto w-full max-w-160 md:max-w-[1280px]">
          <div>
            <Title title="PARTNER’s" sub="パートナー様ご紹介" />
          </div>
          <div className="my-18 flex flex-wrap justify-center gap-2.5 md:my-25">
            <Link
              href="#partner01"
              className="flex h-14 items-center justify-between gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 max-md:w-[300px] md:h-[74px] md:px-[30px] md:text-[20px]"
            >
              メインパートナー
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="rotate-90 max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
            <Link
              href="#partner02"
              className="flex h-14 items-center justify-between gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 max-md:w-[300px] md:h-[74px] md:px-[30px] md:text-[20px]"
            >
              オフィシャルパートナー
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="rotate-90 max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
            <Link
              href="#partner03"
              className="flex h-14 items-center justify-between gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 max-md:w-[300px] md:h-[74px] md:px-[30px] md:text-[20px]"
            >
              オフィシャル
              <br />
              メディカルパートナー
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="rotate-90 max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
            <Link
              href="#partner04"
              className="flex h-14 items-center justify-between gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 max-md:w-[300px] md:h-[74px] md:px-[30px] md:text-[20px]"
            >
              メディアパートナー
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="rotate-90 max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
          </div>
          <div className="">
            <h2
              id="partner01"
              className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]"
            >
              メインパートナー
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              メインパートナー様、現在16社様のご支援をいただいています
            </p>
            <div className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5">
              <div className="flex items-center gap-2.5 border-b border-[#C0C0C0] pb-2.5">
                <figure>
                  <img
                    src="/assets/images/leo-logo.png"
                    alt=""
                    className="w-[46px]"
                  />
                </figure>
                <span className="text-[18px] font-semibold md:text-[22px]">
                  レオブラックス　メインパートナー
                </span>
              </div>
              <div className="flex flex-wrap gap-[3%] gap-y-5 md:mt-6 md:gap-[35px]">
                {partner01?.partners.map((item, i) => (
                  <div key={i} className="block max-md:max-w-[30%]">
                    <a href={item.url} className="flex justify-center">
                      <img src={item.logo} alt="" className="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5">
              <div className="flex items-center gap-2.5 border-b border-[#C0C0C0] pb-2.5">
                <figure>
                  <img
                    src="/assets/images/logo2.png"
                    alt=""
                    className="w-[32px]"
                  />
                </figure>
                <span className="text-[18px] font-semibold md:text-[22px]">
                  レオナイナーズ　メインパートナー
                </span>
              </div>
              <div className="flex flex-wrap gap-[3%] gap-y-5 md:mt-6 md:gap-[35px]">
                {partner02?.partners.map((item, i) => (
                  <div key={i} className="block max-md:max-w-[30%]">
                    <a href={item.url} className="flex justify-center">
                      <img src={item.logo} alt="" className="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <h2
              id="partner02"
              className="mt-30 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[156px] md:border-l-[8px] md:text-[32px]"
            >
              オフィシャルパートナー
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              メインパートナー様、現在〇〇社様のご支援をいただいています
            </p>
            <div className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5">
              <div className="flex flex-wrap gap-[3%] gap-y-5 md:mt-6 md:gap-[35px]">
                {partner03?.partners.map((item, i) => (
                  <div key={i} className="block max-md:max-w-[30%]">
                    <a href={item.url} className="flex justify-center">
                      <img src={item.logo} alt="" className="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <h2
              id="partner03"
              className="mt-30 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[156px] md:border-l-[8px] md:text-[32px]"
            >
              オフィシャルメディカルパートナー
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              メインパートナー様、現在〇〇社様のご支援をいただいています
            </p>
            <div className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5">
              <div className="flex flex-wrap gap-[3%] gap-y-5 md:mt-6 md:gap-[35px]">
                {partner04?.partners.map((item, i) => (
                  <div key={i} className="block max-md:max-w-[30%]">
                    <a href={item.url} className="flex justify-center">
                      <img src={item.logo} alt="" className="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <h2
              id="partner04"
              className="mt-30 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[156px] md:border-l-[8px] md:text-[32px]"
            >
              メディアパートナー
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              メインパートナー様、現在〇〇社様のご支援をいただいています
            </p>
            <div className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5">
              <div className="flex flex-wrap gap-[3%] gap-y-5 md:mt-6 md:gap-[35px]">
                {partner05?.partners.map((item, i) => (
                  <div key={i} className="block max-md:max-w-[30%]">
                    <a href={item.url} className="flex justify-center">
                      <img src={item.logo} alt="" className="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
