import type { ReactNode } from 'react';

import Image from 'next/image';

import PositiveTestimonial from './PositiveTestimonial';

const Bold = ({ children }: { children: ReactNode }) => (
  <span className="text-[17px] font-bold tracking-[0.36px] text-white md:text-[24px] md:tracking-[0.72px]">
    {children}
  </span>
);

const Positive = () => {
  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-white bg-[url(/assets/images/positive/bg-pattern.png)] bg-cover">
        <div className="relative mx-auto mt-9 flex max-w-[1120px] flex-col items-center gap-[60px] px-[20px] py-[64px] md:gap-[74px] md:pt-[85px] md:pb-[80px]">
          <h2 className="relative flex flex-col items-center text-center leading-[1.2] italic">
            <Image
              src="/assets/images/positive/sparkle.svg"
              alt=""
              aria-hidden
              width={158}
              height={72}
              className="absolute -top-10 right-[-30px] w-[70px] -scale-y-100 -rotate-[-120deg] md:top-[-40px] md:right-[-100px] md:w-[149px]"
            />
            <Image
              src="/assets/images/positive/sparkle.svg"
              alt=""
              aria-hidden
              width={158}
              height={72}
              className="absolute -bottom-10 left-[-40px] w-[70px] -scale-y-100 rotate-[-56deg] md:bottom-[-60px] md:left-[-120px] md:w-[149px]"
            />

            <span className="flex items-baseline pr-12">
              <span className="text-[40px] font-black tracking-[0.72px] text-[#f03d22] md:text-[96px] md:tracking-[1.92px]">
                食
              </span>
              <span className="text-[30px] font-black tracking-[0.26px] text-[#f03d22] md:text-[64px] md:tracking-[0.64px]">
                べて
              </span>
              <span className="text-[30px] font-black tracking-[0.26px] text-[#434f8e] md:text-[64px] md:tracking-[0.64px]">
                くれたから
              </span>
            </span>
            <span className="flex items-baseline md:pl-[100px]">
              <span className="text-[40px] font-black tracking-[0.72px] text-[#f03d22] md:text-[96px] md:tracking-[1.92px]">
                良
              </span>
              <span className="text-[30px] font-black tracking-[0.26px] text-[#f03d22] md:text-[64px] md:tracking-[0.64px]">
                さ
              </span>
              <span className="text-[30px] font-black tracking-[0.26px] text-[#434f8e] md:text-[64px] md:tracking-[0.64px]">
                が伝わった
              </span>
            </span>
          </h2>

          <div className="flex w-full flex-col items-center gap-[24px] md:gap-[36px]">
            <PositiveTestimonial
              avatar="/assets/images/positive/avatar-kikkoman.png"
              avatarAlt="キッコーマン様の商品である冷奴の写真"
              attribution="（キッコーマン様）"
              quote={
                <>
                  商品を見て、気になり、試食された方の反応を確認できたことが良かった。
                  <br />
                  <Bold>一般的な調査では出てこないようなこと</Bold>
                  がお客様、店頭スタッフの方から確認することができます。また、ある程度の期間展開することで、
                  <Bold>季節性も考慮した結果</Bold>
                  が出てくると思います。
                </>
              }
            />

            <PositiveTestimonial
              avatar="/assets/images/positive/avatar-tachiyoshi.png"
              avatarAlt="割烹立よし様のスタッフが魚を持っている写真"
              attribution="（割烹立よし様）"
              quote={
                <>
                  スタッフの皆さまの対応がとても良く、
                  <Bold>自社の営業みたいに商品を売り込んで</Bold>
                  くれます。
                  <Bold>大手メディア</Bold>
                  で取り上げてもらえることも有り、反響があります。何より、一般消費者様の声をくみ取ることができるので、
                  <Bold>商品の改良や次の商品開発</Bold>
                  にも役立ちます。また、集めたアンケートを自社の営業活動にも使うことにより、営業先からの信頼を得ることが出来ました。
                </>
              }
            />

            <PositiveTestimonial
              avatar="/assets/images/positive/avatar-narimasu.png"
              avatarAlt="成増農園様のりんごとジュースの写真"
              attribution="（成増農園様）"
              quote={
                <>
                  <Bold>出店する価値は間違いなくあります。</Bold>
                  <br />
                  当社のように<Bold>発送をメインで行っている</Bold>
                  企業様、または
                  <Bold>地方でなかなかお客様の声を聴くことができない</Bold>
                  企業様は特にです。
                </>
              }
            />

            <PositiveTestimonial
              avatar="/assets/images/positive/avatar-ogano.png"
              avatarAlt="小鹿野町特定地域づくり事業協同組合様のスタッフが商品を持っている写真"
              attribution="（小鹿野町特定地域づくり事業協同組合様）"
              quote={
                <>
                  日本全国には、まだ知られていない優れた商品があると思います。多くの観光客・インバウンドが集まる浅草に商品を出して、
                  <Bold>地域や商品を紹介する機会が得られる</Bold>
                  ことは貴重です。
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="min-h-[304px] rounded-[20px] bg-[url(/assets/images/positive/resolve.png)] px-5 pt-[72px] text-center font-bold text-white [box-shadow:10px_18px_0_0_rgba(11,_95,_158,_0.20)] md:rounded-[40px]">
            <p className="md:text-[32px]">私たちが提供するのは、</p>
            <p className="md:text-[32px]">
              <span className="font-black md:text-[42px]">
                「食べてもらう体験」
              </span>
              から<span className="font-black md:text-[42px]">「購入」</span>
              への最短ルートです。
            </p>
          </div>
        </div>
        <div className="relative z-10 -mt-16 flex items-start justify-center">
          <Image
            src="/assets/images/positive/resolve-arrow.png"
            alt=""
            aria-hidden
            width={332}
            height={598}
            className="w-[161px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Positive;
