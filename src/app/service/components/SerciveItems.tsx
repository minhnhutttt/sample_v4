'use client';

import { ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

const ServiceItem = ({
  id,
  number,
  text,
  image,
  children,
}: {
  id: string;
  number: string;
  text: string;
  image: string;
  children: ReactNode;
}) => (
  <div
    id={id}
    className="service-section group relative flex justify-between gap-5 pr-[68px] pl-16 leading-[1.75] max-lg:flex-col max-md:items-center md:pl-[252px] lg:even:flex-row-reverse"
  >
    <div className="absolute h-[440px] bg-white/10 group-odd:top-13 group-odd:-left-7 group-odd:w-[740px] group-even:top-15 group-even:right-6 group-even:w-[500px]"></div>
    <div className="fade-up relative">
      <Image
        src={image}
        alt={text}
        width={400}
        height={400}
        className="relative"
      />
    </div>
    <div className="fade-up lg:pt-44">
      <div className="flex items-center gap-5 md:gap-8">
        <div>
          <p className="text-[22px] font-medium text-white/40 md:text-[28px]">
            サービス
          </p>
          <p className="text-[14px] text-white/40 md:text-[16px]">service</p>
        </div>
        <p className="font-dm text-[44px] leading-none text-white/30 md:text-[76px]">
          {number}
        </p>
      </div>
      <div className="pt-6 md:pt-12.5">
        <div className="w-full max-w-[440px]">
          <p className="u-text-gradient text-[22px] font-medium md:text-[28px]">
            {text}
          </p>
          <p className="mt-6 text-[14px] md:mt-11 md:text-[16px]">{children}</p>
        </div>
      </div>
    </div>
  </div>
);

const SerciveItems = () => {
  const [active, setActive] = useState('service-01');

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActive(id);
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll('.service-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="sticky top-1/2 left-3 z-40 w-9 -translate-y-1/2 divide-y divide-white/50 text-[13px] leading-[1.75] md:left-10 md:w-[132px] md:text-[14px]">
        {[
          { id: 'service-01', number: '01', label: '弁設備工事' },
          { id: 'service-02', number: '02', label: '保温工事' },
          { id: 'service-03', number: '03', label: '回転機整備' },
        ].map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer list-none py-4 transition-all ${
              active === item.id ? 'font-bold text-white' : 'text-white/50'
            }`}
          >
            <p>{item.number}</p>
            <p className="max-md:hidden">{item.label}</p>
          </li>
        ))}
      </div>

      <div className="mx-auto -mt-[420px] mb-32 w-full max-w-[1280px] space-y-30 overflow-hidden md:mb-[155px] md:space-y-47">
        <ServiceItem
          id="service-01"
          number="01"
          text="弁設備工事"
          image="/assets/images/service-img-05.png"
        >
          工場、プラント、ビルなどの配管用バルブ（弁）の整備工事に対応します。仕切弁、玉形弁、逆止弁、ボール弁、バタフライ弁など、あらゆる種類のバルブを取り扱い、専門技術による確実な施工を実施。劣化診断から分解整備、パッキン交換、グランド調整まで幅広く対応します。定期メンテナンスから緊急の弁交換まで迅速に対応し、設備の安定稼働をサポート。弁の選定や更新計画についてもお気軽にお問い合わせください。
        </ServiceItem>
        <ServiceItem
          id="service-02"
          number="02"
          text="保温工事"
          image="/assets/images/service-img-06.png"
        >
          工場、プラント、ビルなどの配管・機器の保温工事に対応します。蒸気配管、温水配管、冷却水配管、冷媒配管など、用途と温度条件に応じて最適な保温材（グラスウール、ロックウール、ウレタンフォーム等）を選定し、確実な施工を実施。熱損失防止、凍結防止、結露防止、火傷防止など、目的に応じた保温・保冷工事に対応します。老朽化保温材の撤去・更新工事も承り、省エネルギー効果の向上と設備の長寿命化に貢献します。
        </ServiceItem>
        <ServiceItem
          id="service-03"
          number="03"
          text="回転機整備"
          image="/assets/images/service-img-08.png"
        >
          ターボブロワ、コンプレッサー、ポンプ、モーターなどの回転機械の分解整備・オーバーホールに対応します。現地での分解点検から精密測定、据付調整まで一貫して実施し、設備の稼働率向上とメンテナンスコスト削減に貢献します。
        </ServiceItem>
      </div>
    </>
  );
};

export default SerciveItems;
