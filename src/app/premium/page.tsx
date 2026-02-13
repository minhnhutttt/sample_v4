import type { Metadata } from 'next';
import Image from 'next/image';

import Article from '@/components/common/Article';
import Button from '@/components/common/Button';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Premium',
  openGraph: {
    ...OG,
    title: 'premium',
    url: '/premium',
  },
  twitter: {
    ...TWITTER,
    title: 'premium',
  },
  alternates: {
    canonical: '/premium',
  },
};

const PremiumPage = () => {
  return (
    <div>
      <div className="pt-28 pr-3 pl-9 md:px-5 md:pt-33.5">
        <div className="relative mx-auto flex w-full max-w-100 items-center text-white md:max-w-[1280px] md:gap-10 lg:gap-[105px]">
          <div className="max-md:absolute max-md:right-4 max-md:bottom-0 max-md:w-[43%] max-md:max-w-[145px]">
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
              <h1 className="text-[50px] font-bold max-md:leading-[1.2] md:text-[80px]">
                価値を、
                <br />
                守りきるための
                <br className="md:hidden" />
                選択。
              </h1>
              <div className="max-md:pr-[43%] max-md:pb-12">
                <p className="py-10 text-[18px] font-bold text-[#F78629] md:py-[50px] md:text-[40px]">
                  Premium Channelは、
                  <br />
                  発信を“続ける人”のためのチャンネルです。
                </p>
                <p className="text-[14px] md:text-[24px]">
                  一度出した情報を、
                  <br className="md:hidden" />
                  安売りしないために。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-24 w-full max-w-[1440px] px-5 md:my-[170px]">
        <h3 className="text-center text-[35px] font-black md:text-[70px]">
          チャンネルの違い
        </h3>
        <p className="mb-[60px] text-center text-[16px] font-bold md:mb-[72px] md:text-[25px]">
          用途によって使い分けることができます。
        </p>
        <div className="mx-auto grid w-full max-w-[1297px] grid-cols-1 gap-[35px] md:gap-[50px] lg:grid-cols-2">
          <div className="rounded-[10px] border border-white p-[30px] xl:p-[60px]">
            <h4 className="text-[35px] font-bold md:text-[50px]">
              Free Channel
            </h4>
            <p className="mt-5 text-[18px] font-medium text-[#888] md:text-[24px]">
              何のために使うか
            </p>
            <p className="text-[35px] leading-[1.6] font-bold md:text-[40px]">
              届ける。
              <br />
              試す。
              <br />
              反応を見る。
            </p>
            <p className="mt-5 text-[18px] font-medium text-[#888] md:text-[24px]">
              できること
            </p>
            <p className="text-[35px] leading-[1.6] font-bold md:text-[40px]">
              無料コンテンツと単発コンテンツを届けられます。
              <br />
              まずは感覚をつかむための場所です。
            </p>
          </div>
          <div className="rounded-[10px] border border-[#F78629] bg-[#F78629]/80 p-[30px] xl:p-[60px]">
            <h4 className="text-[35px] font-bold md:text-[50px]">
              Premium Channel
            </h4>
            <p className="mt-5 text-[18px] font-medium text-[#888] md:text-[24px]">
              何のために使うか
            </p>
            <p className="text-[35px] leading-[1.6] font-bold md:text-[40px]">
              守る。
              <br />
              続ける。
              <br />
              信頼を積み重ねる。
            </p>
            <p className="mt-5 text-[18px] font-medium text-[#888] md:text-[24px]">
              できること
            </p>
            <p className="text-[35px] leading-[1.6] font-bold md:text-[40px]">
              サブスクリプションで参加できるチャンネル。
              <br />
              情報を軽く扱わず、価値として届け続けるための設計です。
            </p>
          </div>
        </div>
      </div>
      <div className="relative my-24 px-5 md:my-[170px]">
        <div className="relative mx-auto flex w-full max-w-[1312px] items-center justify-center gap-10 max-md:flex-col xl:gap-20">
          <div>
            <h3 className="flex h-[95px] items-center text-center text-[24px] font-black before:h-[95px] before:w-[40px] before:bg-[url(/assets/images/frame.svg)] before:bg-cover after:h-[95px] after:w-[40px] after:rotate-180 after:bg-[url(/assets/images/frame.svg)] after:bg-cover md:h-[133px] md:text-[40px] md:before:h-[133px] md:before:w-[56px] md:after:h-[133px] md:after:w-[56px]">
              <span className="-mx-2 whitespace-nowrap">
                なぜ、Premiumが必要なのか
              </span>
            </h3>
          </div>
          <div className="flex w-full">
            <div className="text-[18px] font-bold md:text-[25px]">
              Premium Channelでは、
              <br />
              発信は「消費されるもの」ではなく、
              <br />
              関係が続いていくものとして設計されています。
              <br />
              <br />
              読む人は、「たまたま見た人」ではなく、
              <br />
              価値に共感し、関わることを選んだ人です。
              <br />
              <br />
              だから、焦らなくていい。
              <br />
              無理に広げなくていい。
              <br />
              信頼を積み重ねる時間を、きちんと持てます。
              <br />
              <br />
              それを可能にするのが、
              <br />
              KIVOのPremium Channelです。
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-24 px-2 text-center md:my-[170px]">
          <h3 className="text-[35px] font-black md:text-[70px]">
            Premiumで守られること
          </h3>
          <p className="mb-8 text-[16px] font-bold md:mb-[150px] md:text-[25px]">
            「一度出した情報が、どう扱われるか」まで設計されています。
          </p>
          <div className="mx-auto grid w-full max-w-[1440px] gap-2 md:grid-cols-3">
            <Article
              link="#"
              sm
              image="/assets/images/premium-01.png"
              title="勝手に広がらない"
              text={
                <>
                  情報は「流れる前提」ではありません。
                  <br />
                  必要な人が、必要な場所で受け取ります。
                </>
              }
            />
            <Article
              link="#"
              sm
              image="/assets/images/premium-02.png"
              title="切り取られない"
              text={
                <>
                  スクリーンショットや無断転送を前提にしない設計。
                  <br />
                  意味や文脈が壊れません。
                </>
              }
            />
            <Article
              link="#"
              sm
              image="/assets/images/premium-03.png"
              title="価値として扱われる"
              text={
                <>
                  「これは大切だ」と選んだ人だけが集まる。
                  <br />
                  だから、情報が軽くなりません。
                </>
              }
            />
          </div>
        </div>
        <div className="my-24 px-2 text-center md:my-[170px]">
          <h3 className="text-[35px] font-black md:text-[70px]">
            Premium Channelをはじめよう
          </h3>
          <p className="mb-8 text-[16px] font-bold md:mb-[150px] md:text-[25px]">
            3ステップでかんたんに始めることができます。
          </p>
          <div className="mx-auto grid w-full max-w-[1440px] gap-2 md:grid-cols-3">
            <Article
              link="#"
              sm
              image="/assets/images/image-02-01.png"
              title="1.アプリをダウンロード"
              text={
                <>
                  まずは、触ってみてください。
                  <br />
                  無料のまま、KIVOの感覚を確かめられます。
                </>
              }
            />
            <Article
              link="#"
              sm
              image="/assets/images/image-02-02.png"
              title="2.Subscription Planにアップグレード"
              text={
                <>
                  Premium Channelを作る準備をします。
                  <br />
                  アップグレードは、App Storeの決済で完了します。
                </>
              }
            />
            <Article
              link="#"
              sm
              image="/assets/images/image-02-03.png"
              title="3.Premium Channelを作成"
              text={
                <>
                  特別なことは、何もいりません。
                  <br />
                  いつも通りの発信が、価値として届きます。
                </>
              }
            />
          </div>
        </div>
        <div className="my-24 px-2 text-center md:my-[170px]">
          <h3 className="text-[35px] font-black md:text-[70px]">
            Premium Channelについて
          </h3>
          <p className="mb-8 text-[16px] font-bold md:mb-[50px] md:text-[25px]">
            価値を守りながら、発信を続けるための、ひとつの選択です。
          </p>
          <div className="mx-auto flex w-full max-w-[1200px] items-center max-md:flex-col">
            <div className="-mr-5">
              <Image
                src="/assets/images/phone3.png"
                alt=""
                width={775}
                height={806}
                className="max-lg:-ml-10 max-md:w-[330px] md:w-[660px]"
              />
            </div>
            <div className="space-y-18 text-left">
              <h4 className="text-[24px] font-bold md:text-[26px]">
                発信を続けるための“環境”を選ぶプランです。
              </h4>
              <div>
                <p className="text-[18px] font-medium md:text-[30px]">
                  ¥3,000<span className="text-[#888]">(税別)</span> / 月
                </p>
                <p className="text-[20px] font-medium">いつでも停止できます</p>
              </div>
              <p className="text-[24px] font-medium">
                Premium Channelの作成・運用が含まれます。
                <br />
                発信のペースや形は、あなた自身が決められます。
              </p>
            </div>
          </div>
          <div className="my-24 md:my-[170px]">
            <p className="text-center text-[18px] font-semibold md:text-[30px]">
              価値を守ることこそ、
              <br />
              発信を続けるための条件です。
            </p>
            <div className="mt-[35px] md:mt-[90px]">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
