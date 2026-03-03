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
          { id: 'service-01', number: '01', label: '冷暖房設備工事' },
          { id: 'service-02', number: '02', label: 'ガス配管工事' },
          { id: 'service-03', number: '03', label: 'ダクト工事' },
          { id: 'service-04', number: '04', label: '浄化槽工事' },
          { id: 'service-05', number: '05', label: '弁設備工事' },
          { id: 'service-06', number: '06', label: '保温工事' },
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
          text="冷暖房設備工事"
          image="/assets/images/service-img-01.png"
        >
          工場、オフィス、店舗などの冷暖房設備工事に対応します。
          <br />
          <br />
          業務用エアコン、パッケージエアコン、チラーユニットなど、施設規模や用途に応じた最適な機器を選定し、室内機・室外機の設置から配管工事、電気配線まで一貫して施工。新設から老朽化設備の更新、省エネ型への入れ替えまで幅広く対応します。
          <br />
          <br />
          試運転調整も確実に行い、快適な室内環境を実現。お客様の用途と予算に合わせた最適なプランをご提案します。
        </ServiceItem>
        <ServiceItem
          id="service-02"
          number="02"
          text="ガス配管工事"
          image="/assets/images/service-img-02.png"
        >
          工場、ビル、商業施設などのガス配管工事に対応します。都市ガス、LPガス、窒素ガス、酸素ガスなど、用途に応じた配管材料を選定し、法令に基づいた安全な施工を実施。新設配管から既設配管の更新、移設工事まで幅広く対応します。ガス漏れ検査や圧力試験も確実に行い、安全性を最優先にした施工を提供。ガス配管の設計段階からのご相談も承ります。
        </ServiceItem>
        <ServiceItem
          id="service-03"
          number="03"
          text="ダクト工事"
          image="/assets/images/service-img-03.png"
        >
          工場、ビル、商業施設などの空調・換気ダクト工事に対応します。空調ダクト、排気ダクト、厨房排気ダクトなど、用途に応じた最適な材質（亜鉛鉄板、ステンレス、塩ビ等）を選定し、法令に基づいた確実な施工を実施。ダクトの設計・製作から現場据付、保温施工まで一貫して対応します。既設ダクトの改修や増設工事も承り、空調効率の改善や換気性能の向上をサポート。複雑な現場条件にも柔軟な対応が可能です。
        </ServiceItem>
        <ServiceItem
          id="service-04"
          number="04"
          text="浄化槽工事"
          image="/assets/images/service-img-04.png"
        >
          住宅、店舗、事業所などの浄化槽工事に対応します。合併処理浄化槽、単独処理浄化槽など、建物規模や用途に応じた適切な浄化槽を選定し、法令に基づいた確実な施工を実施。新設から老朽化浄化槽の交換、既存浄化槽の移設まで幅広く対応します。定期的な保守点検や清掃作業も承り、適切な水質管理をサポート。環境保全を重視した施工を提供します。
        </ServiceItem>
        <ServiceItem
          id="service-05"
          number="05"
          text="弁設備工事"
          image="/assets/images/service-img-05.png"
        >
          工場、プラント、ビルなどの配管用バルブ（弁）の整備工事に対応します。仕切弁、玉形弁、逆止弁、ボール弁、バタフライ弁など、あらゆる種類のバルブを取り扱い、専門技術による確実な施工を実施。劣化診断から分解整備、パッキン交換、グランド調整まで幅広く対応します。定期メンテナンスから緊急の弁交換まで迅速に対応し、設備の安定稼働をサポート。弁の選定や更新計画についてもお気軽にお問い合わせください。
        </ServiceItem>
        <ServiceItem
          id="service-06"
          number="06"
          text="保温工事"
          image="/assets/images/service-img-06.png"
        >
          工場、プラント、ビルなどの配管・機器の保温工事に対応します。蒸気配管、温水配管、冷却水配管、冷媒配管など、用途と温度条件に応じて最適な保温材（グラスウール、ロックウール、ウレタンフォーム等）を選定し、確実な施工を実施。熱損失防止、凍結防止、結露防止、火傷防止など、目的に応じた保温・保冷工事に対応します。老朽化保温材の撤去・更新工事も承り、省エネルギー効果の向上と設備の長寿命化に貢献します。
        </ServiceItem>
      </div>
    </>
  );
};

export default SerciveItems;
