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
        工場、商業施設、公共施設、オフィスなどの給排水設備工事に対応します。
        <br />
        <br />
        配管の新設・改修から、設備の更新、メンテナンスまで一貫して施工。
        <br />
        <br />
        豊富な経験と確かな技術力で、安全で快適な水まわり環境を実現します。定期メンテナンスから緊急対応まで、迅速かつ丁寧に対応いたします。
      </>
    ),
  },
  {
    id: 2,
    number: '02',
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
    const clampedScroll = Math.min(
      Math.max(relativeScroll, 0),
      TOTAL_SCROLL_HEIGHT,
    );

    let index = Math.floor(clampedScroll / STEP);
    if (index > SECTIONS.length - 1) index = SECTIONS.length - 1;
    if (index < 0) index = 0;

    const sectionStart = index * STEP;
    let prog = (clampedScroll - sectionStart) / STEP;
    if (index === SECTIONS.length - 1 && clampedScroll >= TOTAL_SCROLL_HEIGHT) {
      prog = 1;
    }
    prog = Math.min(Math.max(prog, 0), 1);

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
      style={{ height: `calc(${TOTAL_SCROLL_HEIGHT}px + 100vh)` }}
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
