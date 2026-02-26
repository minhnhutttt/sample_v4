'use client';

import { ReactNode } from 'react';

import Image from 'next/image';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const HomeServicesItem = ({
  number,
  text,
  image,
  children,
}: {
  number: string;
  text: string;
  image: string;
  children: ReactNode;
}) => (
  <div className="flex justify-between gap-5 max-md:flex-col max-md:items-center md:even:flex-row-reverse">
    <div className="fade-up max-md:w-full">
      <div className="relative">
        <span className="font-dm text-[140px] leading-none text-white/15 md:text-[160px]">
          {number}
        </span>
        <span className="u-text-gradient absolute bottom-0 left-0 text-[16px] leading-[3.5] font-medium md:text-[20px]">
          {text}
        </span>
      </div>
      <div className="mt-5 max-w-[440px] text-[13px] leading-[1.75] md:mt-[35px] md:text-[16px]">
        {children}
      </div>
    </div>
    <div className="fade-up mt-[30px]">
      <Image src={image} alt={text} width={660} height={690} className="" />
    </div>
  </div>
);

const HomeServices = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="relative mt-[170px] px-5 md:mt-[190px]">
      <div className="mx-auto w-full max-w-[1200px] space-y-20 md:space-y-33">
        <HomeServicesItem
          number="01"
          text="管工事"
          image="/assets/images/home-service-img-01.png"
        >
          冷暖房設備、空調設備、給排水設備、ガス管配管、ダクト工事、浄化槽工事など、建物の「生命線」となる設備工事を一貫して対応します。
          <br />
          <br />
          工場、商業施設、公共施設まで、幅広い現場での施工実績があり、新設から改修、定期メンテナンスまでトータルサポート。
          <br />
          <br />
          設備の老朽化やトラブルにも迅速に対応し、快適な環境づくりをお手伝いします。
        </HomeServicesItem>
        <HomeServicesItem
          number="02"
          text="空調設備工事"
          image="/assets/images/home-service-img-02.png"
        >
          オフィス、工場、店舗など、あらゆる施設の空調設備工事に対応。
          <br />
          <br />
          エアコンの新設・更新から、大型空調システムの設計・施工まで、お客様の用途と予算に合わせた最適なプランをご提案します。
          <br />
          <br />
          省エネ性能の高い最新設備の導入支援や、既存設備の効率化改善も承ります。快適な室内環境を実現するため、確かな技術でお応えします。
        </HomeServicesItem>
        <HomeServicesItem
          number="03"
          text="とび・土工工事"
          image="/assets/images/home-service-img-03.png"
        >
          重量物の据付から足場の組立・解体まで、建設現場の基盤を支える工事を担当します。{' '}
          <br />
          <br />
          工場設備の据付工事、プラント機器の搬入・設置、高所作業用の足場組立など、
          専門技術を要する作業に対応。大型クレーンを用いた精密な据付作業や、
          複雑な現場条件下での足場構築も、熟練の職人が安全かつ確実に施工します。{' '}
          <br />
          <br />
          安全管理を徹底し、正確な作業で建設プロジェクトの円滑な進行をサポート。
          地域の建設会社様との協力実績も豊富です。
        </HomeServicesItem>
      </div>
    </div>
  );
};

export default HomeServices;
