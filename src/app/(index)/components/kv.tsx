'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useSlideTheme } from '@/providers/slide-theme';

gsap.registerPlugin(SplitText);

const SPEED_MULTIPLIER = 3;

const t = (val: number) => val / SPEED_MULTIPLIER;

type SplitOptions = {
  readDelayFromDataset?: boolean;
};

const Kv = ({ options }: { options?: SplitOptions }) => {
  useInfiniteScroll();
  const { setActiveSlide } = useSlideTheme();

  const scope = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const video01Ref = useRef<HTMLDivElement | null>(null);
  const video02Ref = useRef<HTMLDivElement | null>(null);
  const video03Ref = useRef<HTMLDivElement | null>(null);

  const img01Ref = useRef<HTMLDivElement | null>(null);
  const img02Ref = useRef<HTMLDivElement | null>(null);
  const img03Ref = useRef<HTMLDivElement | null>(null);

  const block01Ref = useRef<HTMLDivElement | null>(null);
  const block02Ref = useRef<HTMLDivElement | null>(null);
  const block03Ref = useRef<HTMLDivElement | null>(null);

  const ribbonRef = useRef<HTMLDivElement | null>(null);

  const pagerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!scope.current || !container.current) return;

    const ctx = gsap.context(() => {
      // ===== Setup slides =====
      const slides = [
        {
          video: video01Ref.current,
          img: img01Ref.current,
          block: block01Ref.current,
        },
        {
          video: video02Ref.current,
          img: img02Ref.current,
          block: block02Ref.current,
        },
        {
          video: video03Ref.current,
          img: img03Ref.current,
          block: block03Ref.current,
        },
      ].filter((s) => s.video && s.img && s.block) as {
        video: HTMLDivElement;
        img: HTMLDivElement;
        block: HTMLDivElement;
      }[];
      if (slides.length === 0) return;

      const getVideoElement = (i: number) => {
        return slides[i]?.video.querySelector('video') ?? null;
      };

      const syncActiveVideoPlayback = (activeIndex: number) => {
        slides.forEach((_, i) => {
          const videoEl = getVideoElement(i);
          if (!videoEl) return;
          if (i === activeIndex) {
            const playPromise = videoEl.play();
            playPromise?.catch(() => {});
            return;
          }
          videoEl.pause();
        });
      };

      const showGroup = (i: number) => {
        setActiveSlide(i);
        const s = slides[i];
        if (!s) return;
        gsap.set(s.video, { autoAlpha: 1 });
        gsap.to(s.img, { autoAlpha: 1, duration: t(0.2) });
        gsap.to(s.block, {
          autoAlpha: 1,
          duration: t(0.15),
          ease: 'power1.out',
        });
        syncActiveVideoPlayback(i);
      };
      const hideGroup = (i: number) => {
        const s = slides[i];
        if (!s) return;
        gsap.set(s.video, { autoAlpha: 0 });
        gsap.to(s.img, { autoAlpha: 0, duration: t(0.2) });
        gsap.set(s.block, { autoAlpha: 0 });
        const videoEl = getVideoElement(i);
        videoEl?.pause();
      };
      const showImageOnly = (i: number, opts?: gsap.TweenVars) => {
        const tgt = slides[i]?.img;
        if (tgt) gsap.to(tgt, { autoAlpha: 1, duration: 0, ...opts });
      };
      const hideImageOnly = (i: number, opts?: gsap.TweenVars) => {
        const tgt = slides[i]?.img;
        if (tgt) gsap.to(tgt, { autoAlpha: 0, duration: 0, ...opts });
      };

      gsap.set([topRef.current, bottomRef.current], { yPercent: 0 });
      slides.forEach((_, i) => (i === 0 ? showGroup(0) : hideGroup(i)));

      // ===== Ribbon color — layer độc lập =====
      const RIBBON_COLORS = ['#F78629', '#ffc36a', '#ffffff'];

      const getAllRibbonEls = () =>
        Array.from(
          ribbonRef.current!.querySelectorAll<HTMLElement>('.js-ribbon'),
        );

      gsap.set(getAllRibbonEls(), { backgroundColor: RIBBON_COLORS[0] });

      const animateRibbonColor = (toIndex: number) => {
        gsap.to(getAllRibbonEls(), {
          backgroundColor: RIBBON_COLORS[toIndex],
          duration: t(CLOSE_DUR_BASE + OPEN_DUR_BASE),
          ease: 'power2.inOut',
          overwrite: true,
        });
      };

      // ===== Split marquee =====
      const blocks = gsap.utils.toArray<HTMLDivElement>('.js-split-block');
      const splits: SplitText[] = [];
      const marqueeTLs: gsap.core.Timeline[] = [];

      const addStep = (
        tl: gsap.core.Timeline,
        targets: Element[],
        fromScale: number,
        toScale: number,
        origin: string,
        staggerFrom: 'start' | 'end',
        pos?: gsap.Position,
      ) => {
        tl.fromTo(
          targets,
          {
            scaleY: fromScale,
            force3D: true,
            transformOrigin: origin,
            stagger: { each: t(0.05), from: staggerFrom },
          },
          {
            scaleY: toScale,
            force3D: true,
            transformOrigin: origin,
            stagger: { each: t(0.05), from: staggerFrom },
          },
          pos,
        );
      };

      blocks.forEach((block) => {
        const delay = options?.readDelayFromDataset
          ? t(Number(block.dataset.delay ?? 0) / 1000)
          : 0;
        const topEl = block.querySelector<HTMLSpanElement>('.split-text-top');
        const bottomEl =
          block.querySelector<HTMLSpanElement>('.split-text-bottom');
        if (!topEl || !bottomEl) return;

        const splitTop = new SplitText(topEl, { type: 'chars' });
        const splitBottom = new SplitText(bottomEl, { type: 'chars' });
        splits.push(splitTop, splitBottom);
        gsap.set([...splitTop.chars, ...splitBottom.chars], {
          willChange: 'transform',
        });

        const tl = gsap.timeline({
          defaults: { duration: t(2), ease: 'power3.inOut' },
          repeat: -1,
          repeatDelay: t(1),
          delay,
        });
        addStep(tl, splitTop.chars, 1, 0, '50% 0%', 'start');
        addStep(tl, splitBottom.chars, 0, 1, '50% 100%', 'start', '<');
        addStep(tl, splitBottom.chars, 1, 0, '50% 100%', 'end', `+=${t(1)}`);
        addStep(tl, splitTop.chars, 0, 1, '50% 0%', 'end', '<');
        marqueeTLs.push(tl);
      });

      // ===== Timings & state =====
      // Base values (giá trị gốc — KHÔNG sửa các dòng này)
      const OPEN_DUR_BASE = 1;
      const CLOSE_DUR_BASE = 1;
      const HOLD_BEFORE_CLOSE_BASE = 5;
      const IMAGE_FADE_BASE = 0.6;
      const IMAGE_FADE_DELAY_BASE = 0.15;

      // Scaled values (dùng trong animation)
      const OPEN_DUR = t(OPEN_DUR_BASE);
      const CLOSE_DUR = t(CLOSE_DUR_BASE);
      const HOLD_BEFORE_CLOSE = t(HOLD_BEFORE_CLOSE_BASE);
      const IMAGE_FADE = t(IMAGE_FADE_BASE);
      const IMAGE_FADE_DELAY = t(IMAGE_FADE_DELAY_BASE);

      let current = 0;
      let phase: 'opening' | 'open' | 'closing' = 'opening';
      let autoplayTween: gsap.core.Tween | null = null;
      const progressTweens: Array<gsap.core.Tween | null> = Array(
        slides.length,
      ).fill(null);

      // ===== Pagination build =====
      const pager = pagerRef.current!;
      pager.innerHTML = '';
      const pagerItems: HTMLButtonElement[] = [];

      slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className =
          'group relative h-0.5 w-10 overflow-hidden rounded-full bg-white/40';
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', `Go to slide ${i + 1}`);

        const fill = document.createElement('span');
        fill.className =
          'absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-white/90 transition-[opacity] duration-200 group-aria-[current=false]:opacity-30';
        fill.dataset.role = 'progress';
        btn.appendChild(fill);

        btn.addEventListener('click', () => {
          if (phase !== 'open') return;
          if (i === current) return;
          goTo(i);
        });

        pager.appendChild(btn);
        pagerItems.push(btn);
      });

      const setPagerCurrent = (i: number) => {
        pagerItems.forEach((b, idx) => {
          if (idx === i) b.setAttribute('aria-current', 'true');
          else b.setAttribute('aria-current', 'false');
        });
      };
      const resetProgress = (i?: number) => {
        const setFill = (idx: number) => {
          const fill = pagerItems[idx]?.querySelector<HTMLSpanElement>(
            '[data-role="progress"]',
          );
          if (fill) gsap.set(fill, { scaleX: 0 });
        };
        if (typeof i === 'number') {
          progressTweens[i]?.kill();
          progressTweens[i] = null;
          setFill(i);
        } else {
          progressTweens.forEach((tween, idx) => {
            tween?.kill();
            progressTweens[idx] = null;
            setFill(idx);
          });
        }
      };
      const playProgress = (i: number) => {
        const fill = pagerItems[i]?.querySelector<HTMLSpanElement>(
          '[data-role="progress"]',
        );
        if (!fill) return;
        progressTweens[i]?.kill();
        progressTweens[i] = gsap.to(fill, {
          scaleX: 1,
          duration: HOLD_BEFORE_CLOSE,
          ease: 'none',
        });
      };

      // ===== Helpers =====
      const getHalves = (i: number) => {
        const block = slides[i]!.block;
        const halfTop = Array.from(
          block.querySelectorAll<HTMLElement>('.js-split-half-top'),
        );
        const halfBottom = Array.from(
          block.querySelectorAll<HTMLElement>('.js-split-half-bottom'),
        );
        return { halfTop, halfBottom };
      };

      const getRibbonHalves = () => {
        const halfTop = Array.from(
          ribbonRef.current!.querySelectorAll<HTMLElement>(
            '.js-split-half-top',
          ),
        );
        const halfBottom = Array.from(
          ribbonRef.current!.querySelectorAll<HTMLElement>(
            '.js-split-half-bottom',
          ),
        );
        return { halfTop, halfBottom };
      };

      // ===== OPEN / CLOSE animations =====
      const openSlide = (i: number, onComplete?: () => void) => {
        const { video } = slides[i]!;
        const { halfTop, halfBottom } = getRibbonHalves();

        showGroup(i);
        phase = 'opening';
        gsap
          .timeline({ defaults: { ease: 'power3.inOut' } })
          .to(halfTop, { top: 0, duration: OPEN_DUR }, 4)
          .to(halfBottom, { bottom: 0, duration: OPEN_DUR }, 4)
          .fromTo(
            video,
            {
              clipPath: 'polygon(0 50%,100% 50%,100% 50%,0 50%)',
              willChange: 'clip-path',
            },
            {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              duration: OPEN_DUR,
            },
            4,
          )
          .add(() => {
            phase = 'open';
            setPagerCurrent(i);
            resetProgress();
            playProgress(i);
            onComplete?.();
          });
      };

      const prepareImagesFor = (next: number, curr: number) => {
        showImageOnly(next, { duration: IMAGE_FADE });
        hideImageOnly(curr, { duration: IMAGE_FADE });
      };

      const closeSlide = (i: number, next: number, onComplete?: () => void) => {
        const { video } = slides[i]!;
        const { halfTop, halfBottom } = getRibbonHalves();

        phase = 'closing';
        resetProgress(i);

        animateRibbonColor(next);

        gsap
          .timeline({ defaults: { ease: 'power3.inOut' } })
          .add(() => prepareImagesFor(next, i), IMAGE_FADE_DELAY)
          .to(halfTop, { top: 'auto', duration: CLOSE_DUR }, 0)
          .to(halfBottom, { bottom: 'auto', duration: CLOSE_DUR }, 0)
          .to(
            video,
            {
              clipPath: 'polygon(0 50%,100% 50%,100% 50%,0 50%)',
              willChange: 'clip-path',
              duration: CLOSE_DUR,
            },
            0,
          )
          .add(() => {
            hideGroup(i);
            onComplete?.();
          });
      };

      // ===== Navigation =====
      const openThenScheduleAutoClose = (i: number) => {
        openSlide(i, () => {
          autoplayTween?.kill();
          autoplayTween = gsap.to(
            {},
            {
              duration: HOLD_BEFORE_CLOSE,
              onComplete: () => {
                const next = (i + 1) % slides.length;
                closeSlide(i, next, () => {
                  current = next;
                  openThenScheduleAutoClose(current);
                });
              },
            },
          );
        });
      };

      const goTo = (target: number) => {
        if (target === current) return;
        autoplayTween?.kill();
        const prev = current;
        closeSlide(prev, target, () => {
          current = target;
          openThenScheduleAutoClose(current);
        });
      };

      // ===== Opening overlay =====
      const openingTl = gsap
        .timeline()
        .to(
          topRef.current,
          { yPercent: -100, delay: 2, duration: 1, ease: 'power3.inOut' },
          0,
        )
        .to(
          bottomRef.current,
          { yPercent: 100, delay: 2, duration: 1, ease: 'power3.inOut' },
          0,
        )
        .to(wrapRef.current, { opacity: 0, duration: 1, ease: 'power3.out' })
        .from(
          container.current,
          { scale: 0, duration: 1, ease: 'power3.out' },
          '<',
        )
        .from(
          pagerRef.current,
          { autoAlpha: 0, duration: 1, ease: 'power3.out' },
          '<',
        )
        .add(() => {
          current = 0;
          openThenScheduleAutoClose(current);
        }, '>-0.001');

      return () => {
        openingTl.kill();
        autoplayTween?.kill();
        resetProgress();
        marqueeTLs.forEach((tl) => tl.kill());
        splits.forEach((s) => s.revert());
      };
    }, scope);

    return () => ctx.revert();
  }, [options?.readDelayFromDataset, setActiveSlide]);

  return (
    <>
      <section
        ref={scope}
        className="fixed inset-x-0 top-0 flex h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden md:min-h-screen"
      >
        {/* Background thumb */}
        <div
          ref={thumbRef}
          className="absolute inset-0 flex items-center justify-center"
        />

        {/* Images */}
        <div ref={img01Ref} className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/assets/images/kv.png"
            alt=""
          />
        </div>
        <div ref={img02Ref} className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/assets/images/kv-03.png"
            alt=""
          />
        </div>
        <div ref={img03Ref} className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/assets/images/kv-02.png"
            alt=""
          />
        </div>

        {/* Videos */}
        <div
          ref={video01Ref}
          className="absolute inset-0 z-10 [clip-path:polygon(0_50%,_100%_50%,_100%_50%,_0_50%)]"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/images/kv.png"
            src="/assets/video/video-01.mp4"
          />
          <div className="absolute inset-0 z-40 flex items-center justify-center text-center text-white">
            <div>
              <h3 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(18px,17.415px+100vw*.0015,20px)] leading-[1em] tracking-[-.01em] uppercase">
                CONTENT GUARD
              </h3>
              <h2 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(36px,28.863px+100vw*.0183,60px)] leading-[1em] tracking-[-.01em] uppercase">
                KIVOなら、コンテンツが流出しない
              </h2>
            </div>
          </div>
        </div>

        <div
          ref={video02Ref}
          className="absolute inset-0 z-10 [clip-path:polygon(0_50%,_100%_50%,_100%_50%,_0_50%)]"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/images/kv-02.png"
            src="/assets/video/video-02.mp4"
          />
          <div className="absolute inset-0 z-40 flex items-center justify-center text-center text-white">
            <div>
              <h3 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(18px,17.415px+100vw*.0015,20px)] leading-[1em] tracking-[-.01em] uppercase">
                MAXIMUM VALUE
              </h3>
              <h2 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(36px,28.863px+100vw*.0183,60px)] leading-[1em] tracking-[-.01em] uppercase">
                流出しないから、コンテンツの価値が消耗しない
              </h2>
            </div>
          </div>
        </div>

        <div
          ref={video03Ref}
          className="absolute inset-0 z-10 [clip-path:polygon(0_50%,_100%_50%,_100%_50%,_0_50%)]"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/images/kv-03.png"
            src="/assets/video/video-03.mp4"
          />
          <div className="absolute inset-0 z-40 flex items-center justify-center text-center text-white">
            <div>
              <h3 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(18px,17.415px+100vw*.0015,20px)] leading-[1em] tracking-[-.01em] uppercase">
                FULL REVENUE
              </h3>
              <h2 className="relative mt-[min(20px,20px+100vw*0)] text-[clamp(36px,28.863px+100vw*.0183,60px)] leading-[1em] tracking-[-.01em] uppercase">
                取りこぼされてきた収益が今、全部あなたのものに
              </h2>
            </div>
          </div>
        </div>

        {/* Ribbon layer độc lập */}
        <div
          ref={ribbonRef}
          className="pointer-events-none absolute inset-0 z-20 flex h-screen items-center justify-center"
        >
          <div
            data-infinite-scroll="2:90s"
            className="js-split-half-top absolute flex w-max [clip-path:polygon(0_0,_100%_0,_100%_50%,_0_50%)]"
          >
            <div className="flex shrink-0 items-center [&>*+*]:-ml-px">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center [&>div+div]:-ml-px"
                >
                  <div className="js-ribbon flex items-center px-[max(21px,21px+100vw*.03)]">
                    <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                      <span className="split-text-top inline-block">
                        KIVO APP
                      </span>
                      <span className="split-text-bottom absolute inset-0 inline-block">
                        KIVO APP
                      </span>
                    </div>
                  </div>
                  <div className="js-ribbon flex items-center px-[max(21px,21px+100vw*.03)]">
                    <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                      <span className="split-text-top inline-block">
                        KIVO APP
                      </span>
                      <span className="split-text-bottom absolute inset-0 inline-block">
                        KIVO APP
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-infinite-scroll="2:90s"
            className="js-split-half-bottom absolute flex w-max [clip-path:polygon(0_50%,_100%_50%,_100%_100%,_0_100%)]"
          >
            <div className="flex shrink-0 items-center [&>*+*]:-ml-px">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center [&>div+div]:-ml-px"
                >
                  <div className="js-ribbon flex items-center px-[max(21px,21px+100vw*.03)]">
                    <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                      <span className="split-text-top inline-block">
                        KIVO APP
                      </span>
                      <span className="split-text-bottom absolute inset-0 inline-block">
                        KIVO APP
                      </span>
                    </div>
                  </div>
                  <div className="js-ribbon flex items-center px-[max(21px,21px+100vw*.03)]">
                    <div className="js-split-block relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
                      <span className="split-text-top inline-block">
                        KIVO APP
                      </span>
                      <span className="split-text-bottom absolute inset-0 inline-block">
                        KIVO APP
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee container */}
        <div
          ref={container}
          className="pointer-events-none relative z-20 flex h-screen items-center justify-center"
        >
          <div className="invisible flex items-center opacity-0">
            <div className="relative text-[clamp(80px,36.725px+100vw*.1725,300px)] leading-none font-bold whitespace-nowrap">
              <span className="inline-block">KIVO APP</span>
            </div>
          </div>

          <div ref={block01Ref} className="flex items-center justify-center" />
          <div ref={block02Ref} className="flex items-center justify-center" />
          <div ref={block03Ref} className="flex items-center justify-center" />
        </div>

        {/* Pagination */}
        <div className="pointer-events-auto absolute bottom-[24vh] z-[50] flex w-full items-center justify-center">
          <div
            ref={pagerRef}
            className="flex items-center gap-3 rounded-full"
          />
        </div>
      </section>

      {/* Opening overlay */}
      <div
        ref={wrapRef}
        className="js-overlay pointer-events-none fixed inset-0 z-10000 h-screen w-full bg-stone-900"
      >
        <div
          ref={topRef}
          className="absolute inset-x-0 top-0 h-1/2 bg-[#F78629] will-change-transform"
        />
        <div
          ref={bottomRef}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[#F78629] will-change-transform"
        />
      </div>
    </>
  );
};

export default Kv;
