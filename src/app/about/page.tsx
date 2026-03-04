import { ReactNode } from 'react';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Title from '@/components/common/Title';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    ...OG,
    title: 'about',
    url: '/about',
  },
  twitter: {
    ...TWITTER,
    title: 'about',
  },
  alternates: {
    canonical: '/about',
  },
};

const AboutItem = ({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="max-w-[320px] md:max-w-[293px]">
    <figure>
      <img src={image} alt="" className="max-md:w-full" />
    </figure>
    <div className="px-[5px] py-5">
      <p className="text-[16px] font-bold md:text-[18px]">{title}</p>
      <p className="mt-0.5 text-[14px] md:text-[16px]">{children}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="px-5 pt-20 pb-32 md:pt-22 md:pb-40">
      <div className="relative mx-auto w-full max-w-160 md:max-w-[1060px]">
        <div>
          <Title title="ABOUT 3×3" sub="3x3の楽しみ方" />
          {/* Title */}
          <h1 className="mt-12 mb-8 border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:mt-[70px] md:mb-12 md:border-l-[8px] md:text-[32px]">
            3x3の楽しみ方
          </h1>
        </div>
        <div>
          <div>
            <img src="/assets/images/about.png" alt="" />
          </div>
          <div className="grid grid-cols-2 flex-wrap items-center gap-x-8 gap-y-5 p-5 max-md:px-0 md:gap-x-12 md:p-8 lg:grid-cols-4">
            {[
              {
                id: '#section01',
                text: (
                  <>
                    3x3バスケットボー
                    <br />
                    ルって？
                  </>
                ),
              },
              {
                id: '#section02',
                text: (
                  <>
                    推し選手を見つけて
                    <br />
                    応援しよう
                  </>
                ),
              },
              {
                id: '#section03',
                text: (
                  <>
                    3x3は
                    <br />
                    「個人スポーツ」
                  </>
                ),
              },
              {
                id: '#section04',
                text: (
                  <>
                    チームを応援する
                    <br />
                    楽しみ方
                  </>
                ),
              },
            ].map((item, i) => (
              <Link
                href={item.id}
                className="flex h-12 border-l-[4px] border-[#FF0000] pl-3 text-[15px] font-medium duration-200 hover:text-[#FF0000] md:h-[62px] md:border-l-[8px] md:pl-5 md:text-[18px] xl:text-[20px]"
                key={i}
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div
            id="section01"
            className="mx-auto mt-[50px] w-full max-w-[960px] md:pb-7.5"
          >
            <p className="border-b border-[#C0C0C0] py-1 text-[18px] font-bold md:text-[22px]">
              推し選手を見つけて応援しよう！
            </p>
            <div className="mx-auto mt-6 grid w-full max-md:max-w-[320px] md:mt-[35px] md:grid-cols-3 md:gap-6 lg:gap-10">
              <AboutItem
                image="/assets/images/about-01.png"
                title="「3人 vs 3人」で戦う"
              >
                コートの半分で3対3。少人数だから一人ひとりの活躍が目立つ！
              </AboutItem>
              <AboutItem
                image="/assets/images/about-02.png"
                title="「10分間」か「21点先取」で決着"
              >
                10分間で勝負が決まる速さ。21点先取ならもっと早く決着！
              </AboutItem>
              <AboutItem
                image="/assets/images/about-03.png"
                title="「街中」でも試合ができる！"
              >
                ショッピングモールや街中の広場が会場。開放的に観れる！
              </AboutItem>
            </div>
          </div>
          <div
            id="section02"
            className="mx-auto mt-[50px] w-full max-w-[960px] md:pb-7.5"
          >
            <p className="border-b border-[#C0C0C0] py-1 text-[18px] font-bold md:text-[22px]">
              推し選手を見つけて応援しよう！
            </p>
            <div className="mx-auto mt-6 grid w-full max-md:max-w-[320px] md:mt-[35px] md:grid-cols-3 md:gap-6 lg:gap-10">
              <AboutItem
                image="/assets/images/about-04.png"
                title="3x3は「個人スポーツ」"
              >
                5人制と違い、選手個人に記録がつく。推しの成長を追える！
              </AboutItem>
              <AboutItem
                image="/assets/images/about-05.png"
                title="選手一人ひとりにポイントがつく"
              >
                試合に出るたびポイント獲得。世界ランキングが毎試合変わる！
              </AboutItem>
              <AboutItem
                image="/assets/images/about-06.png"
                title="個人ランキングで世界に挑戦可能"
              >
                国内10位以内で日本代表候補へ。選手個人が世界を目指せる！
              </AboutItem>
            </div>
          </div>
          <div
            id="section03"
            className="mx-auto mt-[50px] w-full max-w-[960px] md:pb-7.5"
          >
            <p className="border-b border-[#C0C0C0] py-1 text-[18px] font-bold md:text-[22px]">
              LEO BLACKS / LEO NINERSを応援しよう！
            </p>
            <p className="py-[15px] text-[14px] md:text-[16px]">
              選手個人の活躍がチーム全体を押し上げる。それが3x3の面白いところです。LEO
              BLACKSにはチームカラーやエンブレムに込められた意味、チームスローガンがあり、選手たちが一つの目標に向かって戦っています。2025シーズンは、JBA
              JAPAN TOUR、3x3 UNITED、3x3 Super
              Circuitなど、年間を通して多くのリーグや大会に出場します。何度でも応援に行けるチャンスがあるので、チームとしての戦いを一緒に追いかけましょう。
            </p>
            <div className="mt-8 grid gap-10 md:mt-[45px] md:grid-cols-2">
              <div className="">
                <figure>
                  <img src="/assets/images/about-07.png" alt="" />
                </figure>
                <p className="mt-4 text-[14px] md:mt-[25px] md:text-[16px]">
                  3x3のユニークな仕組みとして、選手個人のランキングポイントがチームランキングにも影響します。つまり、一人の選手が頑張ることがチーム全体を強くすることに直結するのです。推しの選手が活躍すれば、その選手だけでなくチーム全体が世界に近づく。この仕組みが、3x3を応援する面白さの一つです。
                </p>
              </div>
              <div className="">
                <figure>
                  <img src="/assets/images/about-08.png" alt="" />
                </figure>
                <p className="mt-4 text-[14px] md:mt-[25px] md:text-[16px]">
                  LEO
                  BLACKSは国内リーグで戦い、日本選手権を目指し、そして世界大会への出場を目標にしています。チームは今どのステージにいて、次はどこを目指しているのか。世界へ続く階段を一段ずつ登っていくチームを、一緒に追いかけて応援しましょう。
                </p>
              </div>
            </div>
          </div>
          <div
            id="section04"
            className="mx-auto mt-[50px] w-full max-w-[960px] md:pb-7.5"
          >
            <p className="border-b border-[#C0C0C0] py-1 text-[18px] font-bold md:text-[22px]">
              さらに詳しく知りたい方へ
            </p>
            <div className="flex justify-center gap-5 py-7.5 text-[14px] max-md:flex-wrap max-md:text-center md:gap-10 md:py-[45px] md:text-[16px]">
              <Link
                href="http://3x3.japanbasketball.jp/what-is"
                className="w-[180px]"
              >
                詳しいルール説明
              </Link>
              <Link href="/history" className="w-[180px]">
                チームの歴史を知る
              </Link>
              <Link href="/team?s=レオブラックス" className="w-[180px]">
                選手をもっと知る
              </Link>
            </div>
            <ul className="my-5 flex items-center justify-center gap-[14px]">
              <li>
                <Link
                  href="https://www.facebook.com/basket.saiko"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/ic-fb.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://bit.ly/36ptJf9" target="_blank">
                  <Image
                    src="/assets/images/ic-yt.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/leoblackssaga/"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/ic-instagram.svg"
                    alt=""
                    width={23}
                    height={23}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
