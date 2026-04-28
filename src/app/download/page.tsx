import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageFv from '@/components/PageFv';
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
      <PageFv
        appLabel="KIVO TALK"
        heightClassName="h-[480px] max-md:h-[360px]"
        titleFinalOpacity={0.85}
        titleClassName="font-anton text-[153px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-lg:text-[110px] max-md:max-w-[340px] max-md:!whitespace-normal max-md:text-[56px] max-md:tracking-[-1px]"
        titleWrapperClassName="absolute top-[206px] left-1/2 -translate-x-1/2 max-md:top-[170px] whitespace-nowrap"
        text={
          <>
            <span className="whitespace-nowrap">Download</span>
          </>
        }
      />
      <div className="px-5 pt-28 md:pt-33.5">
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
              <h1 className="text-[40px] font-bold md:text-[70px]">
                まずはここから始めよう。
              </h1>
              <div className="mt-10 max-md:pl-[46%] md:mt-20">
                <p className="text-[18px] font-medium md:text-[40px]">
                  KIVO
                  TALKは招待制です。招待リンクをお持ちの方は、今すぐダウンロードできます。
                </p>

                <div className="mt-5 mb-4 flex justify-center md:mt-14 md:mb-6">
                  <div className="bg-[#D2D2D2]">
                    <Image
                      src="/assets/images/kivo-talk.png"
                      alt=""
                      width={300}
                      height={300}
                      className="w-22 md:w-[284px]"
                    />
                  </div>
                </div>
                <p className="text-center text-[14px] md:text-[24px]">
                  あなたのコンテンツに、
                  <br className="md:hidden" />
                  正しい価値を保証する。
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
        <div className="mx-auto w-full max-w-100 py-28 text-white md:max-w-[1280px] md:py-40">
          <h2 className="text-center text-[32px] font-bold md:text-[70px]">
            始めるのは、驚くほどシンプルです。
          </h2>
          <p className="text-center text-[18px] md:text-[28px]">
            電話番号もメールアドレスも不要です。
          </p>
          <div className="grid grid-cols-2 gap-1 pt-12 md:grid-cols-4 md:pt-20">
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <div>
                <p className="text-[14px] font-bold md:text-[19px]">
                  01.招待リンクを受け取る
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <div>
                <p className="text-[14px] font-bold md:text-[19px]">
                  02.App Storeからダウンロード
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <div>
                <p className="text-[14px] font-bold md:text-[19px]">
                  03.招待リンクからアプリを開いてアカウント作成
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <div>
                <p className="text-[14px] font-bold md:text-[19px]">
                  04.KIVO TALKへようこそ！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
