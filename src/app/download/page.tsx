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
        text={
          <>
            KIVO App <br />
            Download
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
              <h1 className="text-[50px] font-bold md:text-[70px]">
                まずはここから始めよう。
              </h1>
              <div className="mt-10 max-md:pl-[42%] md:mt-20">
                <p className="text-[18px] font-medium md:text-[40px]">
                  KIVOは招待制です。招待リンクをお持ちの方は、今すぐダウンロードできます。
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
          <h2 className="text-center text-[50px] font-bold md:text-[70px]">
            始めるのは、驚くほどシンプルです。
          </h2>
          <p className="text-center text-[20px] md:text-[28px]">
            電話番号もメールアドレスも不要です。
          </p>
          <div className="grid grid-cols-2 gap-1 pt-12 md:grid-cols-4 md:pt-20">
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <figure>
                <img src="/assets/images/1.png" alt="" />
              </figure>
              <div className="pt-5">
                <p className="text-[14px] font-bold md:text-[20px]">
                  01.招待リンクを受け取る
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <figure>
                <img src="/assets/images/2.png" alt="" />
              </figure>
              <div className="pt-5">
                <p className="text-[14px] font-bold md:text-[20px]">
                  02.App Storeからダウンロード
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <figure>
                <img src="/assets/images/3.png" alt="" />
              </figure>
              <div className="pt-5">
                <p className="text-[14px] font-bold md:text-[20px]">
                  03.招待リンクからアプリを開いてアカウント作成
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#242424]/90 p-2.5 md:p-5">
              <figure>
                <img src="/assets/images/4.png" alt="" />
              </figure>
              <div className="pt-5">
                <p className="text-[14px] font-bold md:text-[20px]">
                  04.KIVOへようこそ！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default DownloadPage;
