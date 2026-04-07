'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

import gsap from 'gsap';

export interface LoadingScreenHandle {
  play: (onMidpoint?: () => void) => void;
  playExit: () => void;
}

const GLITCH_DURATION = 0.75;

const LoadingScreen = forwardRef<LoadingScreenHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const loadingWrapRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2WrapRef = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img2FakeRef = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);

  const sagaWrapRef = useRef<HTMLDivElement>(null);
  const sagaRef = useRef<HTMLImageElement>(null);
  const sagaJuRef = useRef<HTMLImageElement>(null);
  const sagaJRef = useRef<HTMLImageElement>(null);
  const sagaURef = useRef<HTMLImageElement>(null);

  const mapRef = useRef<HTMLImageElement>(null);
  const textWrapRef = useRef<HTMLImageElement>(null);
  const textLine1Ref = useRef<HTMLParagraphElement>(null);
  const textLine2Ref = useRef<HTMLParagraphElement>(null);
  const textLine3Ref = useRef<HTMLParagraphElement>(null);

  const triggerImg2Glitch = () => {
    const wrap = img2WrapRef.current;
    if (!wrap) return;
    wrap.classList.remove('is-glitching');
    void wrap.offsetWidth;
    wrap.classList.add('is-glitching');
  };

  useImperativeHandle(ref, () => ({
    play(onMidpoint?: () => void) {
      if (!containerRef.current) return;
      loadingWrapRef.current?.classList.add('is-play');
      gsap.set(bgRef.current, { opacity: 0, backgroundColor: '#000' });
      gsap.set(mapRef.current, { opacity: 0 });
      gsap.set(
        [textLine1Ref.current, textLine2Ref.current, textLine3Ref.current],
        { opacity: 0, yPercent: 100 },
      );

      const tl = gsap.timeline();

      tl.to(bgRef.current, { opacity: 1, duration: 0.15, ease: 'power2.out' })
        .add(() => onMidpoint?.())
        .to(
          img1Ref.current,
          { opacity: 1, duration: 0.15, ease: 'power2.out' },
          '+=0.05',
        )
        .to(img2WrapRef.current, { opacity: 1, duration: 0 }, '+=0.05')
        .add(() => {
          triggerImg2Glitch();
        })
        .to({}, { duration: 0.3 + 0.25 }) // 0.3 + 0.25 = 0.55s
        .to(
          img3Ref.current,
          { opacity: 1, duration: 0.15, ease: 'power2.out' },
          '+=0.05',
        )
        .to(
          [img1Ref.current, img2WrapRef.current, img3Ref.current],
          { opacity: 0, duration: 0.15, ease: 'power2.in' },
          '+=0.05',
        )
        .to(
          bgRef.current,
          { opacity: 0, duration: 0.2, ease: 'power2.inOut' },
          '-=0.05',
        );
    },

    playExit() {
      if (!containerRef.current) return;

      gsap.set(bgRef.current, { opacity: 1 });
      gsap.set([img1Ref.current, img2WrapRef.current, img3Ref.current], {
        opacity: 0,
      });
      gsap.set(sagaWrapRef.current, { opacity: 1 });
      gsap.set(sagaJuRef.current, { opacity: 0 });
      gsap.set([sagaRef.current, sagaJRef.current, sagaURef.current], {
        opacity: 0,
        skewY: 24,
        yPercent: 100,
      });
      gsap.set(mapRef.current, { opacity: 0 });
      gsap.set(
        [textLine1Ref.current, textLine2Ref.current, textLine3Ref.current],
        { opacity: 0, yPercent: 100 },
      );

      const tl = gsap.timeline();

      tl
        // 3 ảnh loading — 0s → ~1.3s
        .to(
          img1Ref.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          '+=0.05',
        )
        .to(img2WrapRef.current, { opacity: 1, duration: 0 }, '+=0.05')
        .add(() => {
          triggerImg2Glitch();
        })
        .to({}, { duration: GLITCH_DURATION }) // 0.75s
        .to(
          img3Ref.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          '+=0.05',
        )
        .to(
          [img1Ref.current, img2WrapRef.current, img3Ref.current],
          { opacity: 0, duration: 0.15, ease: 'power2.in', stagger: 0.04 },
          '+=0.05',
        )

        // 4 lớp SAGA — ~1.3s → ~2.1s
        .to(
          sagaRef.current,
          {
            opacity: 1,
            skewY: 0,
            yPercent: 0,
            duration: 0.25,
            transformOrigin: '0% 0%',
            ease: 'power3.out',
          },
          '+=0.05',
        )
        .to(
          sagaJuRef.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          '+=0.06',
        )
        .to(
          sagaJRef.current,
          {
            opacity: 1,
            skewY: 0,
            yPercent: 0,
            duration: 0.2,
            ease: 'power3.out',
          },
          '+=0.03',
        )
        .to(
          sagaURef.current,
          {
            opacity: 1,
            skewY: 0,
            yPercent: 0,
            duration: 0.2,
            ease: 'power3.out',
          },
          '+=0.01',
        )

        // Map — ~2.1s → ~2.45s
        .to(
          mapRef.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          '+=0.08',
        )

        // Saga + Map fade out — ~2.5s → ~2.7s
        .to(
          [sagaWrapRef.current, mapRef.current],
          { opacity: 0, duration: 0.2, ease: 'power2.inOut' },
          '+=0.1',
        )

        .to(
          textWrapRef.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          '+=0.08',
        )
        // 3 dòng text slide up — ~2.8s → ~3.3s
        .to(
          textLine1Ref.current,
          { opacity: 1, yPercent: 0, duration: 0.3, ease: 'power3.out' },
          '+=0.1',
        )
        .to(
          textLine2Ref.current,
          { opacity: 1, yPercent: 0, duration: 0.3, ease: 'power3.out' },
          '+=0.1',
        )
        .to(
          textLine3Ref.current,
          { opacity: 1, yPercent: 0, duration: 0.3, ease: 'power3.out' },
          '+=0.1',
        )

        // Giữ text đủ lâu để đọc — hold 0.7s
        .to({}, { duration: 0.7 })

        // Text + bg fade out — ~4.2s → ~4.5s
        .to(
          [
            bgRef.current,
            textLine1Ref.current,
            textLine2Ref.current,
            textLine3Ref.current,
          ],
          { opacity: 0, duration: 0.3, ease: 'power2.inOut' },
        );
    },
  }));

  return (
    <>
      <style>{`
        .img02-glitch-wrap {
          position: absolute;
          inset: 0;
        }
        .img02-glitch-wrap .fake-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          clip-path: rect(35% 100% 35% 0%);
          transform: translate(0px, 0%);
          pointer-events: none;
          opacity: 0;
        }
        .img02-glitch-wrap .fake-glitch img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .img02-glitch-wrap.is-glitching {
          animation: anim-glitch-skew 0.75s ease 1 forwards;
        }
        .img02-glitch-wrap.is-glitching .fake-glitch {
          opacity: 1;
          animation:
            anim-glitch-clip 0.4s 0.4s ease 1,
            anim-glitch-clip 0.4s 1.1s ease 1 reverse;
        }
        @keyframes anim-glitch-skew {
          0%       { transform: skew(88deg) scale(1, 1.2); }
          5.40541% { transform: skew(88deg) scale(1, 1.2); }
          10.8108% { transform: skew(0deg) scale(1); }
          37.8378% { transform: skew(0deg) scale(1); }
          43.2432% { transform: skew(-12deg) scale(1); }
          47.2973% { transform: skew(0deg) scale(1); }
          81.0811% { transform: skew(0deg) scale(1); }
          86.4865% { transform: skew(8deg) scale(1); }
          90.5405% { transform: skew(-82deg, 1deg) scale(1); }
          95.9459% { transform: skew(-12deg) scale(1); }
          100%     { transform: skew(0deg) scale(1); }
        }
        @keyframes anim-glitch-clip {
          25%   { clip-path: rect(55% 100% 80% 0%); transform: scaleX(0.98) translate(-4px); }
          37.5% { clip-path: rect(55% 100% 80% 0%); transform: scaleX(0.98) translate(-4px); }
          75%   { clip-path: rect(12% 100% 42% 0%); transform: scaleX(0.92) translate(-4px); }
          100%  { clip-path: rect(95% 100% 95% 0%); transform: scaleX(0.91) translate(-4px); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      >
        <div ref={bgRef} className="absolute inset-0 bg-[#FF0000]" />

        {/* 3 ảnh loading */}
        <div
          ref={loadingWrapRef}
          className="group absolute inset-0 flex h-full w-full items-center justify-center p-5"
        >
          <div className="relative group-[.is-play]:w-[300px] md:group-[.is-play]:w-[500px]">
            <img
              ref={img1Ref}
              className="relative z-10 opacity-0"
              src="/assets/images/loading-img-01.png"
              alt=""
            />
            <div ref={img2WrapRef} className="img02-glitch-wrap z-20 opacity-0">
              <img
                ref={img2Ref}
                src="/assets/images/loading-img-02.png"
                alt=""
                className="h-full w-full object-contain"
              />
              <div ref={img2FakeRef} className="fake-glitch">
                <img
                  src="/assets/images/loading-img-02.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
            <img
              ref={img3Ref}
              className="absolute inset-0 opacity-0"
              src="/assets/images/loading-img-03.png"
              alt=""
            />
          </div>
        </div>

        {/* 4 lớp SAGA */}
        <div
          ref={sagaWrapRef}
          className="absolute inset-0 flex h-full w-full items-center justify-center p-5 opacity-0"
        >
          <div className="relative">
            <div className="relative z-10 overflow-hidden">
              <img ref={sagaRef} src="/assets/images/loading-saga.png" alt="" />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img
                ref={sagaJuRef}
                src="/assets/images/loading-saga-ju.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img
                ref={sagaJRef}
                src="/assets/images/loading-saga-j.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img
                ref={sagaURef}
                src="/assets/images/loading-saga-u.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="absolute inset-0 flex h-full w-full items-center justify-center p-5">
          <img
            ref={mapRef}
            src="/assets/images/loading-map.png"
            alt=""
            className="opacity-0"
            aria-hidden="true"
          />
        </div>

        {/* Text — mỗi dòng wrap trong overflow-hidden để clip slide up */}
        <div className="@container absolute inset-0 flex h-full w-full items-center justify-center p-5">
          <div
            ref={textWrapRef}
            className="relative text-center text-[5cqw] font-bold text-white opacity-0 md:text-[3.556cqw]"
          >
            <div className="overflow-hidden">
              <p ref={textLine1Ref}>「3x3（スリーエックススリー）」で</p>
            </div>
            <div className="overflow-hidden">
              <p ref={textLine2Ref}>日本一と世界進出を果たした2019年...</p>
            </div>
            <div className="mt-[4cqw] overflow-hidden">
              <p ref={textLine3Ref}>私たちは再び「世界」を目指します。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

LoadingScreen.displayName = 'LoadingScreen';
export default LoadingScreen;
