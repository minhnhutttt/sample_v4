'use client';

import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const HomePointItem = ({
  number,
  text,
  image,
  point,
  children,
}: {
  number: string;
  text: string;
  image: string;
  point: string;
  children: ReactNode;
}) => (
  <div className="flex gap-10 py-10 leading-[1.75] max-md:flex-col-reverse md:py-[77px] md:pl-[60px]">
    <div className="fade-up flex flex-1 flex-col justify-between max-md:w-full">
      <div className="md:max-w-[400px]">
        <h4 className="text-[16px] font-medium md:text-[20px]">{text}</h4>
        <div className="mt-4 text-[13px] md:mt-7 md:text-[16px]">
          {children}
        </div>
      </div>
      <div className="fade-up flex">
        <p className="font-dm text-[85px] leading-none whitespace-nowrap text-white/15 md:text-[120px] lg:text-[140px]">
          <span>
            Point{' '}
            <span className="text-[110px] md:text-[140px] lg:text-[160px]">
              {number}
            </span>
          </span>
          <Image
            src={point}
            alt={number}
            width={77}
            height={15}
            className="ml-auto"
          />
        </p>
      </div>
    </div>
    <div className="fade-up">
      <Image src={image} alt={text} width={550} height={434} className="" />
    </div>
  </div>
);

const HomePoint = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="relative mt-[170px] px-5 pb-[160px] leading-[1.75] md:mt-[315px] md:pb-[260px]"
    >
      <div className="mx-auto w-full max-w-[500px] md:max-w-[1200px]">
        <h4 className="text-[20px] leading-[1.75] font-medium text-[#F5C42B] md:text-[28px]">
          選ばれる3つの理由
        </h4>
        <div className="space-y-15 md:space-y-30">
          <HomePointItem
            number="01"
            text="地域密着の実績と信頼"
            image="/assets/images/home-point-01.png"
            point="/assets/images/point-01.svg"
          >
            愛媛県新居浜市を拠点に、地域の企業・施設を支えてきた確かな実績。工場設備から公共施設まで、幅広い現場での施工経験があります。
          </HomePointItem>
          <HomePointItem
            number="02"
            text="自社施工による高い品質"
            image="/assets/images/home-point-02.png"
            point="/assets/images/point-02.svg"
          >
            下請けを挟まない自社一貫施工で、お客様のご要望を直接現場に反映。窓口が一本化され、スムーズなコミュニケーションと確実な品質管理を実現します。
          </HomePointItem>
          <HomePointItem
            number="03"
            text="緊急対応も可能なスピード対応"
            image="/assets/images/home-point-03.png"
            point="/assets/images/point-03.svg"
          >
            設備トラブルや急な工事依頼にも迅速に対応。地元密着だからこそ実現できるフットワークの軽さで、お客様の「困った」をすぐに解決します。
          </HomePointItem>
        </div>
        <div className="mx-auto mt-30 w-full max-w-[880px] md:mt-50">
          <div className="">
            <Image
              src="/assets/images/point-main.png"
              alt="まとめ"
              width={880}
              height={493}
              className=""
            />
          </div>
          <div className="mt-8 flex justify-between gap-5 max-md:flex-col md:mt-15 md:items-end">
            <div>
              <p className="text-[16px] font-medium md:text-[20px]">まとめ</p>
              <p className="mt-3 max-w-[440px] text-[13px] md:mt-4.5 md:text-[16px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <Link
              href="#"
              className="flex h-12 w-[180px] items-center justify-center border border-white text-[14px] duration-300 hover:opacity-75 max-md:ml-auto md:h-[60px] md:w-[224px] md:text-[18px]"
            >
              強みをさらに見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoint;
