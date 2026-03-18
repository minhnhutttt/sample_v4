'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SERVICES = [
  {
    title: 'MAXIMIZING BUSINESS VALUE.',
    text: '利益を設計する',
    description:
      '私たちは、厳選された高品質なプロダクトの提供を通じて、お客様の事業収益を最大化するパートナーです。単なるツールの導入に留まらず、各企業の収益構造を理解し、無駄を排して利益を確実に残すための最適なソリューションを提案します。 戦略的な視点を持ちながらも、目的はあくまで事業の持続可能性。プロダクトが貴社のオペレーションに深く浸透し、導入した瞬間から実利的なインパクトを生み出すことを約束します。質の高いラインナップは、貴社のビジョンを具現化し、次なる成長ステージへと導く強力な利益のエンジンとなります。',
    riv: '/assets/images/hero_strategy.png',
  },
  {
    title: 'SUSTAINABLE GROWTH FOR EVERY BUSINESS.',
    text: '成長を支える拡張性',
    description:
      'ビジネスの規模やフェーズの変化に合わせ、柔軟に適応できる高い拡張性を備えています。 スタートアップの迅速な収益化から、大企業の複雑な業務最適化まで幅広くカバーし、必要なタイミングで利益貢献度の高いプロダクトを追加・統合できる環境を提供します。 ラインナップが増えても情報が破綻しない体系的な設計により、常に課題に直結する解決策を見つけ出しやすいカタログ的な操作感を実現しました。 課題やカテゴリに基づいた高度なフィルタリング機能を活用することで、将来的な事業拡大にもスムーズに対応し、貴社の持続的な成長を構造面から力強く支え続けます。',
    riv: '/assets/images/hero_strategy.png',
  },
  {
    title: 'OPERATIONAL EFFICIENCY & GOVERNANCE.',
    text: '信頼と実績のパフォーマンス',
    description:
      '最新のテクノロジーを基盤とし、安定した運用と確かな成果を提供します。 各プロダクトは、実戦で鍛え抜かれた高度な技術を採用しており、強固なセキュリティと高い信頼性を両立させています。 導入後のサポート体制や品質保証を明確に定義することで、外部ソリューションの活用において懸念されがちな運用の不安を払拭しました。 複雑な業務プロセスを自動化し、データに基づいた客観的な成果を出し続ける仕組みにより、現場の負担を軽減しながらガバナンスの強化とコストの適正化を同時に実現。 確かな実績に基づき、利益を残すための解決策をお届けします。',
    riv: '/assets/images/hero_strategy.png',
  },
];

const HomeServices = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const isLast = i === SERVICES.length - 1;

      return ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: isLast,
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <div className="w-full py-[9rem] md:pt-[15rem] md:pb-0">
      <div className="site-max flex flex-col items-start">
        <div className="flex flex-col gap-y-[3.5rem]">
          <p className="text-[4rem] font-bold md:text-[7rem]">How We Make</p>
        </div>
      </div>

      <div className="relative mt-[4rem] md:mt-[9rem]">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="h-screen w-full overflow-hidden bg-[#FFF6F6]"
          >
            <div className="relative origin-top md:pt-[10rem]">
              <div className="site-max flex flex-col">
                <div className="relative flex">
                  <div className="acc-services-item__title relative my-[2rem] flex items-center text-[2rem] font-bold text-[#9579C8] md:text-[3.2rem]">
                    {service.title}
                  </div>
                </div>
                <p className="text-[2rem] font-bold">{service.text}</p>
                <div className="acc-services-item__content relative mt-[3rem] overflow-hidden md:mt-[6rem]">
                  <div className="relative flex flex-col max-md:gap-y-[2rem] md:flex-row md:items-start md:gap-x-[16.5rem]">
                    <div className="acc-services-item__media radius-media relative flex flex-1 justify-center md:order-2 md:mt-0">
                      <img src={service.riv} alt="" />
                    </div>
                    <div className="relative flex-1 md:order-1 md:max-w-[65rem]">
                      <p className="text-[1.4rem] md:text-[1.6rem]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
