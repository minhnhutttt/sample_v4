import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SurprisinglySimple from '@/components/common/SurprisinglySimple';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Download',
  openGraph: {
    ...OG,
    title: 'download',
    url: '/download',
  },
  twitter: {
    ...TWITTER,
    title: 'download',
  },
  alternates: {
    canonical: '/download',
  },
};

const DownloadPage = () => {
  return (
    <div>
      <div className="pt-28 pr-3 pl-9 md:px-5 md:pt-33.5">
        <div className="relative mx-auto flex w-full max-w-100 items-center text-white md:max-w-[1280px] md:gap-10 lg:gap-[86px]">
          <div className="max-md:absolute max-md:bottom-0 max-md:w-[43%] max-md:max-w-[145px]">
            <Image
              src="/assets/images/phone.png"
              alt="phone"
              width={324}
              height={668}
              className="md:w-[240px] lg:w-[352px]"
            />
          </div>
          <div className="relative z-10 flex flex-1">
            <div className="w-full">
              <h1 className="text-[50px] font-bold md:text-[70px]">
                拡散されない。
              </h1>
              <p className="text-[18px] font-bold md:text-[40px]">
                スクリーンショットも、無断転送もできない
              </p>
              <div className="mt-10 max-md:pl-[42%] md:mt-20">
                <p className="text-[18px] font-medium md:text-[40px]">
                  情報の価値を守る
                  <br className="md:hidden" />
                  コミュニケーションアプリ
                </p>

                <div className="mt-5 mb-4 flex justify-center md:mt-14 md:mb-6">
                  <Image
                    src="/assets/images/kivo.svg"
                    alt=""
                    width={331}
                    height={225}
                    className="w-22 md:w-[284px]"
                  />
                </div>
                <p className="text-center text-[14px] md:text-[24px]">
                  価値ある情報を、
                  <br className="md:hidden" />
                  軽く扱いたくない発信者へ。
                </p>
                <div className="mt-5 flex justify-center gap-2.5 md:mt-12">
                  <Link href="#">
                    <Image
                      src="/assets/images/btn-appstore.png"
                      alt=""
                      width={280}
                      height={84}
                      className="w-32 md:w-70"
                    />
                    <p className="mt-0.5 text-center text-[12px] md:text-right md:text-[16px]">
                      無料で始められます
                    </p>
                  </Link>

                  <Link href="#" className="max-md:hidden">
                    <Image
                      src="/assets/images/btn-google.png"
                      alt=""
                      width={280}
                      height={84}
                      className="w-32 md:w-70"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SurprisinglySimple />
      </div>
    </div>
  );
};

export default DownloadPage;
