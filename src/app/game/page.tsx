import { ReactNode } from 'react';

import type { Metadata } from 'next';

import Title from '@/components/common/title';
import { TransitionLink } from '@/components/navigation/TransitionLink';
// import Matches from '@/components/matches';
import { OG, TWITTER } from '@/config/constants';

import GameSlider from './components/gameSlider';

export const metadata: Metadata = {
  title: 'History',
  openGraph: {
    ...OG,
    title: 'game',
    url: '/game',
  },
  twitter: {
    ...TWITTER,
    title: 'game',
  },
  alternates: {
    canonical: '/game',
  },
};

const Item = ({ title, texts }: { title: string; texts: string[] }) => (
  <div>
    <p className="border-b border-[#C0C0C0] pb-1 text-[18px] font-bold md:text-[22px]">
      {title}
    </p>
    <ul className="space-y-3 py-5 text-[12px] md:py-[25px] md:text-[14px]">
      {texts.map((text, i) => (
        <li className="flex gap-2 md:gap-2.5" key={i}>
          <span>
            <img src="/assets/images/ic-ball.svg" alt="" />
          </span>
          <span className="flex-1">{text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex gap-5 max-md:flex-col md:gap-10 md:gap-[55px]">
    <figure className="md:w-[326px]">
      <img src={image} alt="" className="max-md:w-full" />
    </figure>
    <div className="flex-1">
      <p className="mb-5 text-[20px] font-bold md:text-[24px]">{title}</p>
      <p className="text-[13px] md:text-[14px]">{children}</p>
    </div>
  </div>
);

const GamePage = () => {
  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto w-full max-w-160 md:max-w-[1060px]">
        <div>
          <Title title="Game" sub="観戦する" />
          <h1 className="mt-12 mb-8 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:mb-12 md:border-l-[8px] md:text-[32px]">
            試合予定
          </h1>
          {/* <Matches /> */}
          <p className="text-center text-[18px] font-bold text-[#222] md:text-[24px]">
            準備中
          </p>
          <div className="mt-12 flex justify-center md:mt-[54px]">
            <TransitionLink
              href="/news/9oyk6m96irx6"
              className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:px-[30px] md:text-[20px]"
            >
              レオブラックスの現在ランキング
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="max-md:w-4"
                  alt=""
                />
              </span>
            </TransitionLink>
          </div>
          <div className="mt-25 w-full md:mt-[166px]">
            <h2 className="mt-12 mb-8 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:mb-12 md:border-l-[8px] md:text-[32px]">
              3x3 UNITED（スリー・エックス・スリー・ユナイテッド）とは？
            </h2>
            <div className="mt-6 flex gap-10 max-lg:flex-col md:mt-[35px] md:gap-[55px]">
              <GameSlider />
              <div className="flex-1">
                <Item
                  title="ROUND5（男子）ホーム戦"
                  texts={[
                    '西日本で人気だったリーグがパワーアップして誕生した、日本全国を舞台にするプロリーグです。',
                    '北は群馬から南は鹿児島まで、全国から15ものプロチームが集まって頂点を目指します。',
                  ]}
                />
                <Item
                  title="ショッピングモールが会場に！"
                  texts={[
                    '普段みんなが買い物に行くイオンモールなどのオープンスペースに、突如としてバスケットコートが出現します。',
                    '専用の「パズルコート」とノリノリの音楽、実況MCの声が響き渡る、まるでお祭りのような空間です。',
                  ]}
                />
                <Item
                  title="だれでも「無料」で観戦できる！"
                  texts={[
                    'プロの迫力あるプレーを、チケットなしで、だれでもタダで楽しめます。',
                    '通りかかった瞬間に、プロのスピードとパワーを目の前で体感できるのが最大の魅力です。',
                  ]}
                />
              </div>
            </div>
            <div className="mt-12 flex justify-center md:mt-[54px]">
              <TransitionLink
                href="/about"
                className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:px-[30px] md:text-[20px]"
              >
                3x3についてもっと知る
                <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                  <img
                    src="/assets/images/btn-arrow.svg"
                    className="max-md:w-4"
                    alt=""
                  />
                </span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>

      <div
        id="guide"
        className="mx-auto mt-22 w-full max-w-[1200px] rounded-[40px] border border-[#ABABAB] bg-[#F4FAFA] p-5 md:mt-[132px]"
      >
        <div className="pn-25 mx-auto w-full max-w-[1085px] pt-3 md:pb-[146px]">
          <div className="relative mx-auto flex h-[50px] w-[300px] bg-[url(/assets/images/bar.png)] bg-size-[100%_100%] px-8 max-md:items-center md:w-[632px]">
            <div className="max-md:w-[64px] md:-mt-1">
              <img src="/assets/images/logo33.png" alt="" className="" />
            </div>
            <span className="ml-3 text-[20px] font-semibold text-white text-shadow-2xs md:mt-1 md:text-[24px]">
              観戦ガイド
            </span>
            <div className="absolute right-2 bottom-0 md:right-4">
              <img src="/assets/images/throw.png" alt="" className="" />
            </div>
          </div>
          <div className="mt-15 space-y-12 md:mt-20">
            <Step
              image="/assets/images/step-01.png"
              title="STEP 1：【前日まで】スケジュールと会場をチェック"
            >
              公式サイトで日程を確認:
              「GAME」ページのスケジュールから、対戦カードと開催場所（イオンタウン姶良やイオンモール岡山など）をチェックします
              。<br />
              観戦は「完全無料」: 3x3
              UNITEDはオープンスペースで開催されるため、チケット購入の手間や費用は一切かかりません。
            </Step>
            <Step
              image="/assets/images/step-02.png"
              title="STEP 2：【当日：会場到着】ショッピングのついでにコートへ"
            >
              会場は日常の場所: 商業施設のセンターコートや駅前広場が舞台です
              。いつもの買い物と同じ服装でOKです。座席の確保:
              立ち見はもちろん自由ですが、コートサイドに設置される特別席（もしあれば）や、周辺のベンチなど、お好みの位置を確保しましょう。
            </Step>
            <Step
              image="/assets/images/step-03.png"
              title="STEP 3：【試合開始前】DJとMCが会場を盛り上げる"
            >
              音楽とバスケの融合:
              3x3は常に音楽が流れるお祭りのような雰囲気です。DJの選曲とMCの解説が、初めての人でもルールを分かりやすく盛り上げます。
              <br />
              選手のアップを間近で:
              5人制よりもコートと観客席が近いため、プロ選手のシュートの音やスピード感を目の前で体感できます
              。
            </Step>
            <Step
              image="/assets/images/step-04.png"
              title="STEP 4：【試合中】10分間の超高速バトル"
            >
              12秒の攻防:
              攻撃時間はわずか12秒。息つく暇もないスピーディーな展開が魅力です。
              <br />
              ルールはシンプル:
              「10分1本勝負」または「どちらかが21点先取」で決着します。細かいルールを知らなくても、その場の熱気で楽しめます。
            </Step>
            <Step
              image="/assets/images/step-05.png"
              title="STEP 5：【試合終了後】選手との交流とショッピング"
            >
              選手がすぐそこに:
              試合直後の選手とハイタッチや写真撮影ができるチャンスが多いのも3x3の魅力です。そのままお買い物へ:
              試合を楽しんだ後は、商業施設内で食事や買い物を楽しんで帰路へ。地域とチームが一体となった一日を締めくくります。
              <br />
              レオブラックスならではの「持ち物・準備」アドバイス
              <br />
              カメラ・スマホ:
              選手との距離が近いため、迫力ある写真が撮りやすいです。
            </Step>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
