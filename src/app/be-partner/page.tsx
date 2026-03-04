import { ReactNode } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'BePartner',
  openGraph: {
    ...OG,
    title: 'BePartner',
    url: '/be-partner',
  },
  twitter: {
    ...TWITTER,
    title: 'BePartner',
  },
  alternates: {
    canonical: '/be-partner',
  },
};

const AboutItem = ({
  image,
  title,
  children,
}: {
  image: string;
  title: ReactNode;
  children: ReactNode;
}) => (
  <div className="">
    <figure>
      <img src={image} alt="" className="max-md:w-full" />
    </figure>
    <div className="px-[5px] py-2">
      <p className="text-[16px] font-bold md:text-[18px]">{title}</p>
      <p className="mt-0.5 text-[14px] md:text-[16px]">{children}</p>
    </div>
  </div>
);

const BePartnerPage = () => {
  return (
    <div>
      <div className="relative min-h-[400px] md:min-h-[600px]">
        <div className="absolute inset-0 flex flex-col justify-between px-5 pt-32 pb-20 text-center md:pt-24 md:pb-20 xl:py-[5%]">
          <h1 className="text-[24px] font-extrabold text-white md:text-[40px] xl:text-[85px]">
            佐賀から世界へ。 <br />
            共に戦い、共に成長する。
          </h1>
          <p className="text-[18px] font-extrabold text-white md:text-[24px]">
            LEO BLACKS SAGAはパートナー様と世界に挑戦し続けます
          </p>
        </div>
        <img
          src="/assets/images/be-partner.png"
          alt=""
          className="h-full min-h-[600px] w-full object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 p-5 max-md:px-0 md:gap-x-12 md:p-8">
        {[
          {
            id: '#section01',
            text: <>代表メッセージ</>,
          },
          {
            id: '#section02',
            text: <>パートナーシップメニュー</>,
          },
          {
            id: '#section03',
            text: <>実績</>,
          },
          {
            id: '#section04',
            text: <>パートナー紹介</>,
          },
          {
            id: '#section05',
            text: <>お問い合わせ</>,
          },
          {
            id: '#section06',
            text: <>ふるさと納税</>,
          },
        ].map((item, i) => (
          <Link
            href={item.id}
            className="flex h-12 w-[150px] items-center border-l-[4px] border-[#FF0000] pl-3 text-[15px] font-medium duration-200 hover:text-[#FF0000] md:h-[62px] md:w-[243px] md:border-l-[8px] md:pl-5 md:text-[18px] xl:text-[20px]"
            key={i}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="px-5 pt-20 pb-32 md:pt-[60px] md:pb-40">
        <div className="relative mx-auto w-full max-w-160 md:max-w-[992px]">
          <div>
            <Title title="BE PARTNER" sub="パートナー募集" />
            {/* Title */}
            <h1 className="mt-12 mb-8 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:mb-12 md:border-l-[8px] md:text-[32px]">
              レオブラックスのパートナーシップ価値
            </h1>
            <div className="flex gap-10 max-md:flex-col-reverse md:gap-[55px] md:px-10">
              <p className="flex-1 text-[15px] leading-[1.45] md:pt-9 md:text-[18px]">
                LEO BLACKS
                SAGAは、2018年の創設以来、佐賀県唐津市を拠点に3x3バスケットボールを通じた地域活性化と青少年育成に取り組んでまいりました。2019年には日本一の栄冠を勝ち取り、世界大会への出場を果たしました。
                パートナーの皆様には、LEO BLACKS
                SAGAとともに「佐賀から、世界へ。」というビジョンを実現いただけます。地域貢献、ブランド露出、CSR活動など、多様な価値をご提供いたします。
                LEO BLACKS
                SAGAはパートナー様一社一社との関係を大切にし、それぞれの目的に合わせた柔軟なパートナーシップメニューをご用意しております。LEO
                BLACKS
                SAGAは皆様の支援によって、日本一、そして世界へと挑戦を続けます。ともに佐賀のスポーツ文化を盛り上げ、次世代に夢と感動を届けませんか。
              </p>
              <div className="">
                <img src="/assets/images/leo-map.png" alt="" />
              </div>
            </div>
            <div className="pt-20 md:pt-30">
              <h2 className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]">
                代表メッセージ
              </h2>
              <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
                企業名や商品のPRだけではなく、ビジネスパートナーとして企業さまの課題解決に
                <br />
                レオブラックスがお役に立てるようメニューをご用意しております。
              </p>
              <div className="mt-8 flex justify-center gap-10 md:mt-15 md:gap-[96px]">
                <div className="">
                  <img src="/assets/images/be-partner-01.png" alt="" />
                </div>
                <div className="">
                  <img src="/assets/images/be-partner-02.png" alt="" />
                </div>
              </div>
              <p className="mt-8 text-[14px] md:mt-14 md:text-[16px]">
                LEO BLACKS
                SAGAは、佐賀から世界を目指すチームとして8年目のシーズンを迎えます。
                <br />
                <br />
                ここまで歩んでこられたのは、地元佐賀の皆さま、そしてチームを支えてくださるすべてのパートナー企業様のおかげです。{' '}
                <br />
                <br />
                2025年、私たちは再び&quot;世界&quot;に挑みます。
                <br />
                LEO BLACKS
                SAGAらしく、最後まで諦めないバスケットボールで、地域に勇気と感動を届けたい。
                スポーツには、人を動かし、地域を元気にする力があります。
                <br />
                <br />
                共に佐賀を盛り上げ、次世代に誇れるチームを育てていきましょう。
                引き続き、熱いご支援をよろしくお願いいたします。
              </p>
              <div className="mt-12 flex justify-center md:mt-[54px]">
                <Link
                  href="https://massive-drive.com/#top_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:px-[30px] md:text-[20px]"
                >
                  株式会社マッシヴドライヴへ
                  <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-11">
                    <img
                      src="/assets/images/ic-extention.svg"
                      className="max-md:w-4"
                      alt=""
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-20 md:pt-30">
            <h2 className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]">
              パートナーシップメニュー
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              企業名や商品のPRだけではなく、ビジネスパートナーとして企業さまの課題解決に
              <br />
              レオブラックスがお役に立てるようメニューをご用意しております。
            </p>
            <div id="section01" className="mx-auto mt-[50px] w-full md:pb-7.5">
              <div className="mx-auto mt-10 grid w-full gap-y-10 max-md:max-w-[320px] md:mt-15 md:grid-cols-3 md:gap-x-6 md:gap-y-[106px] lg:gap-x-10">
                <AboutItem
                  image="/assets/images/be-01.png"
                  title="オフィシャルパートナー"
                >
                  チームユニフォーム、公式サイト、SNS、試合会場などでロゴを露出。年間を通じて高いブランド認知度を獲得できます。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-02.png"
                  title="スポンサードマッチ"
                >
                  特定の試合を冠試合として開催。会場での企業ブース出展、ハーフタイムでのPR活動、試合前後のイベント協賛など、来場者への直接的なアプローチが可能です。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-03.png"
                  title="ユニフォームスポンサー"
                >
                  選手が着用するユニフォームに企業ロゴを掲載。試合映像、写真、メディア露出を通じて、高い宣伝効果を発揮します。スポーツマーケティングを重視する企業様におすすめです。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-04.png"
                  title="アカデミースポンサー"
                >
                  LEO
                  BLACKSが運営するバスケットボールアカデミーを支援。地域の子どもたちの育成に貢献し、CSR活動としてもアピールできます。青少年育成に関心のある企業様に最適です。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-05.png"
                  title="イベント協賛"
                >
                  チーム主催のイベント、地域貢献活動、ファン交流会などを協賛。地域密着型のPR活動を展開でき、参加者との直接的なコミュニケーションが可能です。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-06.png"
                  title="メディアパートナー"
                >
                  試合の放映、記事掲載、SNS連携など、メディアを通じたパートナーシップ。チームの試合やイベント情報を広く発信し、相互のブランド価値向上を目指します。
                </AboutItem>
              </div>
            </div>
          </div>
          <div className="pt-20 md:pt-30">
            <h2 className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]">
              実績
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              LEO BLACKS
              SAGAは、創設以来、佐賀から世界を目指して数々の挑戦を続けてきました。
              <br />
              地域に根差した活動と国際舞台での戦いを通じて、ビジネスパートナーとしても信頼される実績を積み重ねています。
            </p>
            <div id="section01" className="mx-auto mt-[50px] w-full md:pb-7.5">
              <div className="mx-auto mt-10 grid w-full gap-y-10 max-md:max-w-[320px] md:mt-15 md:grid-cols-3 md:gap-x-6 md:gap-y-[106px] lg:gap-x-10">
                <AboutItem
                  image="/assets/images/be-07.png"
                  title={
                    <>
                      2019年 <br />
                      『3x3.EXE TOURNAMENT 2019』で日本一の栄冠を獲得
                    </>
                  }
                >
                  チームユニフォーム、公式サイト、SNS、試合会場などでロゴを露出。年間を通じて高いブランド認知度を獲得できます。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-08.png"
                  title={
                    <>
                      2021年
                      <br />
                      国内プロリーグより『3x3 TOWN AWARD』を受賞
                    </>
                  }
                >
                  地域に根差した3x3活動とホームタウンの盛り上げが評価され、国内リーグより表彰されました。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-09.png"
                  title={
                    <>
                      2021年
                      <br />
                      3x3世界NO.1強豪国・セルビア共和国の事前キャンプを唐津で受け入れ
                    </>
                  }
                >
                  東京オリンピック前、世界最強国セルビアの事前キャンプを唐津市で実施。地域の国際交流に貢献しました。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-10.png"
                  title={
                    <>
                      2020年
                      <br />
                      佐賀県内全20市町へ表敬訪問
                    </>
                  }
                >
                  チーム立ち上げから今までの活動を報告し、県内各地域とのつながりを強化。佐賀県全体のスポーツ振興に貢献しました。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-11.png"
                  title={
                    <>
                      2020年
                      <br />
                      「バスケの火を絶やすな」クラウドファンディングで200万円を達成
                    </>
                  }
                >
                  アジア圏での経験を積むため、タイの国際リーグへ参戦。世界レベルの戦いに挑戦し、チーム力を向上させています。
                </AboutItem>
                <AboutItem
                  image="/assets/images/be-12.png"
                  title={
                    <>
                      2025年
                      <br />
                      タイリーグ参戦
                    </>
                  }
                >
                  アジア圏での経験を積むため、タイの国際リーグへ参戦。世界レベルの戦いに挑戦し、チーム力を向上させています。
                </AboutItem>
              </div>
            </div>
          </div>
          <div className="pt-20 md:pt-30">
            <h2 className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]">
              パートナー紹介
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              現在110社様のご支援をいただいています
            </p>
            <div
              id="section01"
              className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5"
            >
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
                {Array.from({ length: 12 }, (_, i) => {
                  const index = String(i + 1).padStart(2, '0');
                  const imgSrc = `/assets/images/partners/p-01-${index}.png`;

                  return (
                    <div key={index} className="block max-md:max-w-[30%]">
                      <img src={imgSrc} alt={`partner-${index}`} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              id="section01"
              className="mx-auto mt-[60px] w-full md:mt-[90px] md:pb-7.5"
            >
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
                {Array.from({ length: 4 }, (_, i) => {
                  const index = String(i + 1).padStart(2, '0');
                  const imgSrc = `/assets/images/partners/p-02-${index}.png`;

                  return (
                    <div key={index} className="block max-md:max-w-[30%]">
                      <img src={imgSrc} alt={`partner-${index}`} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-12 flex justify-center md:mt-[54px]">
              <Link
                href="/partners"
                className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:px-[30px] md:text-[20px]"
              >
                パートナーページへ
                <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                  <img
                    src="/assets/images/btn-arrow.svg"
                    className="max-md:w-4"
                    alt=""
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1320px] px-5">
        <div className="rounded-xl bg-[#EBEBEB] px-5 py-20 md:py-25">
          <div className="mx-auto w-full max-w-[992px]">
            <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
              お問い合わせ
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              LEO BLACKS
              SAGAについて、お問い合わせは下記フォームからお願いします。
            </p>
            <div className="mx-auto w-full max-w-[880px] space-y-8 pt-20 md:space-y-[50px] md:pt-[120px]">
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  貴社名
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="株式会社ABC"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  本社所在地の住所<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  ご担当者様名<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  メールアドレス<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="123abc@123abc.com"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  電話番号<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="080-1234-5678"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  ご担当者様名<span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    className="h-[52px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2"
                    placeholder="山田　太郎"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 text-[14px] max-md:flex-col md:items-center md:gap-2.5 md:gap-[30px] md:text-[16px]">
                <label htmlFor="" className="md:w-50">
                  その他：お問い合わせ内容
                  <span className="text-[#F70000]">(必須)</span>
                </label>
                <div className="flex-1">
                  <textarea className="h-[230px] w-full rounded-lg border border-[#E0E0E0] bg-white p-2 md:h-[372px]"></textarea>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center md:mt-24">
              <button className="flex h-14 items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white md:h-[70px] md:px-[30px] md:text-[20px]">
                送信
                <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                  <img
                    src="/assets/images/btn-arrow.svg"
                    className="max-md:w-4"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-25 px-5 md:mt-40">
        <div className="mx-auto w-full max-w-[996px]">
          <h2 className="mt-12 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:border-l-[8px] md:text-[32px]">
            ふるさと納税
          </h2>
          <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
            個人用、企業用のふるさと納税もございます。
          </p>
          <div className="mt-10 flex gap-10 max-md:flex-col md:mt-16">
            <figure>
              <img src="/assets/images/payment.png" alt="" />
            </figure>
            <p className="flex-1 text-[16px] font-medium md:text-[20px]">
              ふるさと納税でレオブラックス佐賀・レオナイナーズを応援しませんか？
              <br />
              我々が拠点を置く佐賀県から、県内にあるプロスポーツチームを地域の「宝」として、新しいふるさと納税メニューの1つとして『チーム支援』を加えて頂きました！
              <br />
              このメニューでは、皆様のお気持ちが、ふるさと納税を通じてレオブラックス佐賀・レオナイナーズに届き、チームのチカラとなります。
            </p>
          </div>
          <div className="mt-20 mb-[150px] flex items-center justify-center gap-6 max-md:flex-col md:mt-[100px] md:mb-[300px] md:gap-[45px]">
            <Link
              href="https://massive-drive.com/#top_page"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 max-w-[350px] items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[90px] md:px-[30px] md:text-[20px]"
            >
              企業版のふるさと納税の
              <br />
              やり方ページへ
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-11">
                <img
                  src="/assets/images/ic-extention.svg"
                  className="max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
            <Link
              href="https://massive-drive.com/#top_page"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 max-w-[350px] items-center justify-center gap-5 bg-[#FF4E4E] px-3 text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[90px] md:px-[30px] md:text-[20px]"
            >
              個人版のふるさと納税の
              <br />
              やり方ページへ
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-11">
                <img
                  src="/assets/images/ic-extention.svg"
                  className="max-md:w-4"
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BePartnerPage;
