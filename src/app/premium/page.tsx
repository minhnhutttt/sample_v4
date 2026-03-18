import type { Metadata } from 'next';

import PageFv from '@/components/PageFv';
import { OG, TWITTER } from '@/config/constants';

import FAQAccordion from './components/FAQAccordion';

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

const PremiumPage = () => {
  return (
    <div>
      <PageFv
        text={
          <>
            KIVO App <br />
            Premium
          </>
        }
      />
      <div className="bg-white px-5 py-28 md:py-33.5">
        <div className="flex items-start gap-5 max-md:flex-col">
          <div className="flex-1">
            <img
              src="/assets/images/premium-01.webp"
              className="aspect-square h-full w-full rounded-2xl object-cover"
              alt=""
            />
          </div>

          <div className="flex-1">
            <figure>
              <img
                src="/assets/images/premium-qr.svg"
                alt=""
                className="w-[245px] rounded-2xl md:w-[345px]"
              />
            </figure>
            <p className="text-[20px] md:text-[27px]">KIVO Appをダウンロード</p>
            <p className="mt-20 text-[32px] leading-[1.2] xl:text-[50px]">
              クリエイターの可能性を、
              <br />
              Premiumが広げる。 <br />
              <span className="text-[#5c5c5c]">
                発信の規模も、収益の仕組みも、Premiumユーザーにだけ開かれている特別な特典があります。
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto my-20 w-full max-w-[1400px] space-y-[50px] md:my-32 md:space-y-[70px]">
          <div className="flex items-center gap-8 max-md:flex-col-reverse xl:gap-[70px]">
            <div className="flex-1">
              <p className="mb-3 text-[16px] md:text-[20px]">招待リンク</p>
              <p className="text-[20px] font-bold md:text-[24px]">
                Premiumユーザーの招待リンクは、1つのリンクで何人でも、何度でも使えます。Basicユーザーの招待リンクは1つのリンクで使えるのは1人のみ。この差が、コミュニティの広がり方を決めます。
              </p>
            </div>
            <div className="flex-1">
              <img src="/assets/images/premium-02.webp" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-8 max-md:flex-col xl:gap-[70px]">
            <div className="flex-1">
              <img src="/assets/images/premium-03.webp" alt="" />
            </div>
            <div className="flex-1">
              <p className="mb-3 text-[16px] md:text-[20px]">
                アフィリエイト報酬
              </p>
              <p className="text-[20px] font-bold md:text-[24px]">
                招待したユーザーがPremiumである限り、月額の20%が永続的に支払われます。コンテンツを作らなくても、収益が積み上がる仕組みです。
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 max-md:flex-col-reverse xl:gap-[70px]">
            <div className="flex-1">
              <p className="mb-3 text-[16px] md:text-[20px]">
                パブリックチャンネル
              </p>
              <p className="text-[20px] font-bold md:text-[24px]">
                無料チャンネルとして始めて、後から有料化も可能。月額ポイントは値上げのみ可能で、一度作った価値は下がりません。
              </p>
            </div>
            <div className="flex-1">
              <img src="/assets/images/premium-02.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-[rgb(246,246,246)] px-5 py-20 md:py-28">
        <div className="w-full p-5 md:w-1/2 xl:w-1/4">
          <p className="mb-3 text-[36px] lg:text-[50px]">
            KIVOは価値が壊れない設計になっています。
          </p>
          <div className="flex">
            <a
              href="#"
              className="block rounded-full border border-black p-5 text-[18px] md:p-7 md:text-[24px]"
            >
              設計思想について知る
            </a>
          </div>
        </div>
        <div className="w-full p-5 md:w-1/2 xl:w-1/4">
          <figure>
            <img
              src="/assets/images/premium-04.webp"
              className="rounded-2xl"
              alt=""
            />
          </figure>
          <p className="mt-5 text-[20px] md:text-[36px]">
            スクリーンショット制御
          </p>
        </div>
        <div className="w-full p-5 md:w-1/2 xl:w-1/4">
          <figure>
            <img
              src="/assets/images/premium-04.webp"
              className="rounded-2xl"
              alt=""
            />
          </figure>
          <p className="mt-5 text-[20px] md:text-[36px]">
            アプリ外への転送・ダウンロード不可設計
          </p>
        </div>
        <div className="w-full p-5 md:w-1/2 xl:w-1/4">
          <figure>
            <img
              src="/assets/images/premium-04.webp"
              className="rounded-2xl"
              alt=""
            />
          </figure>
          <p className="mt-5 text-[20px] md:text-[36px]">月額の値下げ不可</p>
        </div>
      </div>
      <div className="bg-white">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default PremiumPage;
