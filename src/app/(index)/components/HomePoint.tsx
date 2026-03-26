'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

const CIRCLE_CIRCUMFERENCE = 283;

export default function HomePoint() {
  const [activeCircles, setActiveCircles] = useState<Set<number>>(new Set());
  const [pointNum, setPointNum] = useState('01');
  const [pointNumVisible, setPointNumVisible] = useState(true);
  const [isCentered, setIsCentered] = useState(false);
  const [uiVisible, setUiVisible] = useState(true);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [componentActive, setComponentActive] = useState(false);
  const [headerPos, setHeaderPos] = useState({ top: 60, left: 0 });
  const [bgPos, setBgPos] = useState({ bottom: 50, left: 40 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const textbox1Ref = useRef<HTMLElement>(null);
  const textbox2Ref = useRef<HTMLElement>(null);
  const textbox3Ref = useRef<HTMLElement>(null);
  const triggerFinalRef = useRef<HTMLDivElement>(null);

  const updatePositions = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setHeaderPos({
      top: Math.max(0, rect.top) + 60,
      left: rect.left,
    });
    setBgPos({
      bottom: Math.max(0, window.innerHeight - rect.bottom) + 50,
      left: rect.left + 40,
    });
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const visObs = new IntersectionObserver(
      ([entry]) => {
        setComponentActive(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsCentered(false);
          setUiVisible(true);
        }
      },
      { threshold: 0 },
    );
    visObs.observe(wrapper);
    return () => visObs.disconnect();
  }, []);

  useEffect(() => {
    updatePositions();
    window.addEventListener('scroll', updatePositions, { passive: true });
    window.addEventListener('resize', updatePositions);
    return () => {
      window.removeEventListener('scroll', updatePositions);
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);

  const switchPointNum = useCallback((newNum: string) => {
    setPointNumVisible(false);
    setTimeout(() => {
      setPointNum(newNum);
      setPointNumVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        if (id.startsWith('textbox')) {
          const index = parseInt(id.replace('textbox', ''), 10);
          setUiVisible(true);
          setIsCentered(false);
          setActiveCircles((prev) => new Set([...prev, index]));
          setActiveDotIndex(index - 1);
          switchPointNum(`0${index}`);
        }
        if (id === 'trigger-final') {
          setUiVisible(false);
          setIsCentered(true);
        }
      });
    }, opts);

    [textbox1Ref, textbox2Ref, textbox3Ref, triggerFinalRef].forEach((r) => {
      if (r.current) obs.observe(r.current);
    });
    return () => obs.disconnect();
  }, [switchPointNum]);

  return (
    <>
      <style>{`
        @keyframes sd-fadeNum {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sd-point-num-enter { animation: sd-fadeNum 0.3s ease forwards; }
        .sd-circle-path {
          fill: none;
          stroke: #fff;
          stroke-width: 1;
          stroke-dasharray: ${CIRCLE_CIRCUMFERENCE};
          stroke-dashoffset: ${CIRCLE_CIRCUMFERENCE};
          transition: stroke-dashoffset 1.5s ease;
        }
        .sd-circle-path.active { stroke-dashoffset: 0; }
        .sd-sticky-visual {
          transition: width 1s cubic-bezier(0.65,0,0.35,1),
                      transform 1s cubic-bezier(0.65,0,0.35,1),
                      background-color 1s ease;
        }
        .sd-sticky-visual.is-centered {
          transform: translateX(-50%);
        }
      `}</style>

      <div
        ref={wrapperRef}
        className="relative mx-auto mt-50 w-full max-w-[500px] px-5 md:max-w-[1240px]"
      >
        {componentActive && (
          <div
            className="pointer-events-none fixed z-[100] transition-opacity duration-700"
            style={{
              top: headerPos.top,
              left: headerPos.left,
              opacity: uiVisible ? 1 : 0,
            }}
          >
            <h4 className="u-text-gradient p-5 text-[20px] leading-[1.75] font-medium md:text-[28px]">
              選ばれる3つの理由
            </h4>
          </div>
        )}

        {componentActive && (
          <div
            className="pointer-events-none fixed z-0 transition-opacity duration-700 select-none"
            style={{
              bottom: bgPos.bottom,
              left: bgPos.left,
              opacity: uiVisible ? 1 : 0,
            }}
          >
            <p className="font-dm text-[85px] leading-none whitespace-nowrap text-white/15 md:text-[120px] lg:text-[140px]">
              <span>
                Point
                <span
                  className="ml-2 text-[110px] md:text-[140px] lg:text-[160px]"
                  style={{
                    opacity: pointNumVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {pointNum}
                </span>
              </span>
            </p>
            <div className="flex justify-end gap-3 pl-2.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-2.5 w-2.5 rotate-45 transition-all duration-300"
                  style={{
                    backgroundColor:
                      i === activeDotIndex ? '#fff' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex">
          <div className="z-[2] w-1/2">
            <section
              ref={textbox1Ref}
              id="textbox1"
              className="my-[400px] flex items-center"
            >
              <div className="md:max-w-[400px]">
                <h4 className="text-[16px] font-medium md:text-[20px]">
                  地域密着の実績と信頼
                </h4>
                <div className="mt-4 text-[13px] md:mt-7 md:text-[16px]">
                  愛媛県新居浜市を拠点に、地域の企業・施設を支えてきた確かな実績。工場設備から公共施設まで、幅広い現場での施工経験があります。
                </div>
              </div>
            </section>

            <section
              ref={textbox2Ref}
              id="textbox2"
              className="my-[400px] flex items-center"
            >
              <div className="md:max-w-[400px]">
                <h4 className="text-[16px] font-medium md:text-[20px]">
                  地域密着の実績と信頼
                </h4>
                <div className="mt-4 text-[13px] md:mt-7 md:text-[16px]">
                  愛媛県新居浜市を拠点に、地域の企業・施設を支えてきた確かな実績。工場設備から公共施設まで、幅広い現場での施工経験があります。
                </div>
              </div>
            </section>

            <section
              ref={textbox3Ref}
              id="textbox3"
              className="my-[400px] flex items-center"
            >
              <div className="md:max-w-[400px]">
                <h4 className="text-[16px] font-medium md:text-[20px]">
                  地域密着の実績と信頼
                </h4>
                <div className="mt-4 text-[13px] md:mt-7 md:text-[16px]">
                  愛媛県新居浜市を拠点に、地域の企業・施設を支えてきた確かな実績。工場設備から公共施設まで、幅広い現場での施工経験があります。
                </div>
              </div>
            </section>

            <div
              ref={triggerFinalRef}
              id="trigger-final"
              className="h-screen"
            />
          </div>

          <div
            className={
              'sd-sticky-visual sticky top-0 right-0 z-10 flex h-screen w-1/2 flex-col items-center justify-center pt-10' +
              (isCentered ? ' is-centered left-0' : '')
            }
          >
            <div
              className={`relative flex items-center justify-center bg-white/15 duration-300 ${isCentered ? 'h-[400px] w-[360px] md:h-[493px] md:w-[550px] xl:w-[880px]' : 'h-[434px] w-[150px] md:w-[380px] xl:w-[550px]'}`}
            >
              <div className="relative h-[360px] w-[300px] md:h-[360px] md:w-[360px]">
                <CircleItem
                  id="circle1"
                  label="実績"
                  isActive={activeCircles.has(1)}
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                />
                <CircleItem
                  id="circle2"
                  label="品質"
                  isActive={activeCircles.has(2)}
                  className="absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 md:bottom-0 md:left-0"
                />
                <CircleItem
                  id="circle3"
                  label="スピード"
                  isActive={activeCircles.has(3)}
                  className="absolute bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 md:right-0"
                />
              </div>
            </div>

            <div
              className={`box-border flex items-center justify-between ${isCentered && 'w-[360px] md:w-[550px] xl:w-[880px]'}`}
              style={{
                opacity: isCentered ? 1 : 0,
                transform: isCentered ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1s ease 0.6s, transform 1s ease 0.6s',
              }}
            >
              <div className="mt-3 flex w-full justify-between gap-5 max-md:flex-col md:mt-15 md:items-end">
                <div>
                  <p className="text-[16px] font-medium md:text-[20px]">
                    なぜ、大矢工業なのか
                  </p>
                  <p className="mt-3 max-w-[440px] text-[13px] md:mt-4.5 md:text-[16px]">
                    地域の信頼、確かな品質、迅速な対応。 この3つが揃っていることが、お客様に選ばれ続けている理由です。 私たちの強みについて、ぜひ詳しくご覧ください。
                  </p>
                </div>
                <Link
                  href="/advantage"
                  className="flex h-12 w-[180px] items-center justify-center border border-white text-[14px] duration-300 hover:opacity-75 max-md:ml-auto md:h-[60px] md:w-[224px] md:text-[18px]"
                >
                  強みをさらに見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface CircleItemProps {
  id: string;
  label: string;
  isActive: boolean;
  className?: string;
}

function CircleItem({ id, label, isActive, className = '' }: CircleItemProps) {
  return (
    <div
      id={id}
      className={
        'flex h-[120px] w-[120px] items-center justify-center md:h-[220px] md:w-[220px] ' +
        className
      }
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          className={'sd-circle-path' + (isActive ? ' active' : '')}
        />
      </svg>
      <span
        className="relative z-10 text-xs font-bold text-white transition-opacity duration-700"
        style={{
          opacity: isActive ? 1 : 0,
          transitionDelay: isActive ? '0.5s' : '0s',
        }}
      >
        {label}
      </span>
    </div>
  );
}
