'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

interface Section {
  id: number;
  number: string;
  text: string;
  image: string;
  description: ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: 1,
    number: '01',
    text: '管工事',
    image: '/assets/images/home-service-img-01.png',
    description: (
      <>
        冷暖房設備、空調設備、給排水設備、ガス管配管、ダクト工事、浄化槽工事など、建物の「生命線」となる設備工事を一貫して対応します。
        <br />
        <br />
        工場、商業施設、公共施設まで、幅広い現場での施工実績があり、新設から改修、定期メンテナンスまでトータルサポート。
        <br />
        <br />
        設備の老朽化やトラブルにも迅速に対応し、快適な環境づくりをお手伝いします。
      </>
    ),
  },
  {
    id: 2,
    number: '02',
    text: '空調設備工事',
    image: '/assets/images/home-service-img-02.png',
    description: (
      <>
        オフィス、工場、店舗など、あらゆる施設の空調設備工事に対応。
        <br />
        <br />
        エアコンの新設・更新から、大型空調システムの設計・施工まで、お客様の用途と予算に合わせた最適なプランをご提案します。
        <br />
        <br />
        省エネ性能の高い最新設備の導入支援や、既存設備の効率化改善も承ります。快適な室内環境を実現するため、確かな技術でお応えします。
      </>
    ),
  },
  {
    id: 3,
    number: '03',
    text: 'とび・土工工事',
    image: '/assets/images/home-service-img-03.png',
    description: (
      <>
        重量物の据付から足場の組立・解体まで、建設現場の基盤を支える工事を担当します。
        <br />
        <br />
        工場設備の据付工事、プラント機器の搬入・設置、高所作業用の足場組立など、
        専門技術を要する作業に対応。大型クレーンを用いた精密な据付作業や、
        複雑な現場条件下での足場構築も、熟練の職人が安全かつ確実に施工します。
        <br />
        <br />
        安全管理を徹底し、正確な作業で建設プロジェクトの円滑な進行をサポート。
        地域の建設会社様との協力実績も豊富です。
      </>
    ),
  },
];

const STEP = 1500;
const TOTAL_SCROLL_HEIGHT = STEP * SECTIONS.length;

export default function HomeServicesItem() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;

    const relativeScroll = window.scrollY - wrapperTop;

    if (relativeScroll < 0 || relativeScroll > TOTAL_SCROLL_HEIGHT) return;

    let index = Math.floor(relativeScroll / STEP);
    if (index > SECTIONS.length - 1) index = SECTIONS.length - 1;
    if (index < 0) index = 0;

    let prog = (relativeScroll % STEP) / STEP;
    if (relativeScroll >= STEP * SECTIONS.length) prog = 1.0;

    setCurrentIndex(index);
    setProgress(prog);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const id = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(id);
    };
  }, [handleScroll]);

  useEffect(() => {
    innerBarRefs.current.forEach((bar, i) => {
      if (!bar) return;
      if (i < currentIndex) {
        bar.style.transform = 'scaleY(1)';
      } else if (i === currentIndex) {
        bar.style.transform = `scaleY(${progress})`;
      } else {
        bar.style.transform = 'scaleY(0)';
      }
    });
  }, [currentIndex, progress]);

  return (
    /**
     * Outer wrapper = total scroll zone.
     * The sticky child pins itself to the viewport only while the user
     * is scrolling through this wrapper — then releases naturally.
     */
    <div
      ref={wrapperRef}
      style={{ height: `${TOTAL_SCROLL_HEIGHT + 100}px` }}
      className="relative w-full"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Content sections */}
        <div className="relative h-screen w-full max-w-[540px] md:max-w-[1200px]">
          {SECTIONS.map((section, i) => (
            <section
              key={i}
              className={[
                'absolute inset-0 flex items-center px-5 pr-32 max-md:pr-14',
                'transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                currentIndex === i
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-10 opacity-0',
              ].join(' ')}
            >
              <div className="flex w-full justify-between gap-5 max-md:flex-col max-md:items-center max-md:pt-10 md:even:flex-row-reverse">
                <div className="fade-up max-md:w-full">
                  <div className="relative">
                    <span className="font-dm text-[140px] leading-none text-white/15 md:text-[160px]">
                      {section.number}
                    </span>
                    <span className="u-text-gradient absolute bottom-0 left-0 text-[16px] leading-[3.5] font-medium md:text-[20px]">
                      {section.text}
                    </span>
                  </div>
                  <div className="mt-5 max-w-[440px] text-[13px] leading-[1.75] md:mt-[35px] md:text-[16px]">
                    {section.description}
                  </div>
                </div>
                <div className="fade-up mt-[30px]">
                  <Image
                    src={section.image}
                    alt={section.text}
                    width={660}
                    height={690}
                    className=""
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Side navigation */}
        <nav className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col gap-5 md:right-10">
          {SECTIONS.map((section, i) => {
            const isActive = i === currentIndex;
            return (
              <div
                key={section.id}
                className="flex justify-end gap-2.5 md:gap-[15px]"
              >
                <span
                  className={[
                    'flex flex-col items-center justify-center text-[14px] leading-none transition-colors duration-500 md:text-[16px]',
                    isActive ? 'gap-2 text-white' : 'text-white/50',
                  ].join(' ')}
                >
                  {isActive && <span className="h-full w-px bg-white"></span>}
                  {String(section.id).padStart(2, '0')}
                  {isActive && <span className="h-full w-px bg-white"></span>}
                </span>

                <div
                  className={[
                    'relative w-1 overflow-hidden bg-white/30 md:w-[6px]',
                    'transition-[height] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                    isActive ? 'h-[200px] md:h-[300px]' : 'h-[28px]',
                  ].join(' ')}
                >
                  <div
                    ref={(el) => {
                      innerBarRefs.current[i] = el;
                    }}
                    className="absolute inset-0 origin-top bg-white"
                    style={{
                      transform: 'scaleY(0)',
                      transition: 'transform 0.1s linear',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
