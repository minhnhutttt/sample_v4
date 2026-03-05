'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { COL_STAGGER, ROW_STAGGER, SLIDES } from '@/app/data/slides';

import LogoCard from './LogoCard';

// Animation durations — must match globals.css keyframes
const OUT_DUR = 320;
const IN_DUR = 400;

// Layout config per breakpoint
const LAYOUT = {
  pc: { cols: 5, rows: 3 }, // 15 cards
  sp: { cols: 2, rows: 8 }, // 15 cards (last row = 1 card)
} as const;

type LayoutKey = keyof typeof LAYOUT;

function getLayout(width: number): LayoutKey {
  return width >= 768 ? 'pc' : 'sp';
}

function waveTotal(cols: number, rows: number, animDur: number) {
  return (cols - 1) * COL_STAGGER + (rows - 1) * ROW_STAGGER + animDur;
}

export default function LogoSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(0);
  const [layout, setLayout] = useState<LayoutKey>('pc');

  const animating = useRef(false);
  const currentRef = useRef(0);
  const layoutRef = useRef<LayoutKey>('pc');
  const tids = useRef<ReturnType<typeof setTimeout>[]>([]);

  // cardRefs[slideIdx][col][row]
  // We allocate for max possible cols/rows (8 rows for SP)
  const MAX_COLS = 5;
  const MAX_ROWS = 8;
  const cardRefs = useRef<(HTMLDivElement | null)[][][]>(
    SLIDES.map(() =>
      Array.from({ length: MAX_COLS }, () => Array(MAX_ROWS).fill(null)),
    ),
  );

  // Detect breakpoint
  useEffect(() => {
    const update = () => {
      const lk = getLayout(window.innerWidth);
      setLayout(lk);
      layoutRef.current = lk;
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => () => tids.current.forEach(clearTimeout), []);

  const after = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    tids.current.push(id);
  };

  const restartAnim = (
    el: HTMLDivElement,
    name: string,
    dur: string,
    ease: string,
  ) => {
    el.style.animation = 'none';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight; // force reflow
    el.style.animation = `${name} ${dur} ${ease} forwards`;
  };

  // Iterate cards in wave order (col → row) for current layout
  const forEachCard = (
    slideIdx: number,
    lk: LayoutKey,
    cb: (el: HTMLDivElement, delay: number) => void,
  ) => {
    const { cols, rows } = LAYOUT[lk];
    const total = SLIDES[slideIdx].logos.length; // 15
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const logoIdx = r * cols + c;
        if (logoIdx >= total) continue; // skip empty slot (SP last row col 1)
        const el = cardRefs.current[slideIdx]?.[c]?.[r];
        if (!el) continue;
        const delay = c * COL_STAGGER + r * ROW_STAGGER;
        cb(el, delay);
      }
    }
  };

  const waveOut = (slideIdx: number, lk: LayoutKey, onDone: () => void) => {
    const { cols, rows } = LAYOUT[lk];
    forEachCard(slideIdx, lk, (el, delay) => {
      after(() => {
        el.style.animationDelay = '0ms';
        restartAnim(el, 'cardOut', '0.32s', 'cubic-bezier(0.55, 0, 1, 0.45)');
      }, delay);
    });
    after(onDone, waveTotal(cols, rows, OUT_DUR));
  };

  const waveIn = (slideIdx: number, lk: LayoutKey) => {
    forEachCard(slideIdx, lk, (el, delay) => {
      el.style.animation = 'none';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight; // force reflow
      el.style.animation = `cardIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms forwards`;
    });
  };

  const goTo = useCallback((idx: number) => {
    if (animating.current || idx === currentRef.current) return;
    animating.current = true;

    const prev = currentRef.current;
    const lk = layoutRef.current;
    currentRef.current = idx;
    setCurrent(idx);

    waveOut(prev, lk, () => {
      setVisible(idx);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          waveIn(idx, layoutRef.current);
          const { cols, rows } = LAYOUT[layoutRef.current];
          after(
            () => {
              animating.current = false;
            },
            waveTotal(cols, rows, IN_DUR),
          );
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initial wave-in
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        waveIn(0, layoutRef.current);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      if (!animating.current) goTo((currentRef.current + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, [goTo]);

  const { cols, rows } = LAYOUT[layout];

  return (
    <>
      <div className="relative w-full">
        {SLIDES.map((slide, slideIdx) => {
          const isVisible = visible === slideIdx;

          return (
            <div
              key={slide.id}
              className="flex flex-col gap-3 px-6 pt-7 pb-20 md:gap-4 md:px-[52px] md:py-[48px]"
              style={
                isVisible
                  ? { position: 'relative' }
                  : {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      visibility: 'hidden',
                      pointerEvents: 'none',
                    }
              }
            >
              {Array.from({ length: rows }, (_, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid gap-3 md:gap-[14px]"
                  style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                >
                  {Array.from({ length: cols }, (_, colIdx) => {
                    const logoIdx = rowIdx * cols + colIdx;
                    const logo = slide.logos[logoIdx];
                    // SP: last row only has 1 card (col 0), skip col 1
                    if (!logo) return <div key={colIdx} />;
                    return (
                      <LogoCard
                        key={logo.name}
                        logo={logo}
                        ref={(el) => {
                          cardRefs.current[slideIdx][colIdx][rowIdx] = el;
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}
        <button
          onClick={() =>
            goTo((currentRef.current - 1 + SLIDES.length) % SLIDES.length)
          }
          className="bg-pink radius-global pointer-events-auto absolute left-[calc(50%-5rem)] flex size-[3.5rem] items-center justify-center transition-colors duration-300 ease-out hover:bg-[#CCE561] max-md:bottom-0 md:top-1/2 md:left-[-2rem] md:size-[5rem] md:-translate-y-1/2"
          aria-label="Previous"
        >
          <svg
            className="h-[1.4rem] w-auto scale-x-[-1] rotate-180 md:h-[2rem]"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9309 2L3.09961 10.1014L10.9309 17.6626"
              className="stroke-[#242424]"
              strokeWidth="4"
            ></path>
            <path
              d="M21 9.83154H4.21862"
              className="stroke-[#242424]"
              strokeWidth="4"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => goTo((currentRef.current + 1) % SLIDES.length)}
          className="bg-pink radius-global pointer-events-auto absolute right-[calc(50%-5rem)] flex size-[3.5rem] items-center justify-center transition-colors duration-300 ease-out hover:bg-[#CCE561] max-md:bottom-0 md:top-1/2 md:right-[-2rem] md:size-[5rem] md:-translate-y-1/2"
          aria-label="Next"
        >
          <svg
            className="h-[1.4rem] w-auto scale-x-[-1] md:h-[2rem]"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9309 2L3.09961 10.1014L10.9309 17.6626"
              className="stroke-[#242424]"
              strokeWidth="4"
            ></path>
            <path
              d="M21 9.83154H4.21862"
              className="stroke-[#242424]"
              strokeWidth="4"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
