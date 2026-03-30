'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

import gsap from 'gsap';

export interface LoadingScreenHandle {
  play: (onMidpoint?: () => void) => void;
  playExit: () => void;
}

const IMAGES = [
  '/images/emoji-smile.svg',
  '/images/flower.svg',
  '/images/star.svg',
  '/images/loop-arrows.svg',
  '/images/vortex.svg',
];

// How long each image is shown (seconds)
const FRAME_DURATION = 0.12;

const LoadingScreen = forwardRef<LoadingScreenHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Interval ref for cycling
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameIndexRef = useRef(0);

  const stopCycle = () => {
    if (cycleRef.current !== null) {
      clearInterval(cycleRef.current);
      cycleRef.current = null;
    }
  };

  const startCycle = () => {
    stopCycle();
    frameIndexRef.current = 0;
    if (imgRef.current) {
      imgRef.current.src = IMAGES[0];
    }
    cycleRef.current = setInterval(() => {
      frameIndexRef.current = (frameIndexRef.current + 1) % IMAGES.length;
      if (imgRef.current) {
        imgRef.current.src = IMAGES[frameIndexRef.current];
      }
    }, FRAME_DURATION * 1000);
  };

  useImperativeHandle(ref, () => ({
    // play: show bg quickly → cycle images → fade out
    // onMidpoint fires as soon as bg is opaque (route change can begin)
    play(onMidpoint?: () => void) {
      if (!containerRef.current) return;

      gsap.killTweensOf([bgRef.current, imgRef.current]);
      gsap.set(bgRef.current, { opacity: 0 });
      gsap.set(imgRef.current, { opacity: 0, scale: 0.85 });

      const tl = gsap.timeline({
        onComplete: stopCycle,
      });

      tl
        // Fade in bg
        .to(bgRef.current, { opacity: 1, duration: 0.15, ease: 'power2.out' })
        // Fire midpoint → trigger route push in LoadingProvider
        .add(() => {
          onMidpoint?.();
          startCycle();
        })
        // Pop image in
        .to(imgRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: 'back.out(1.7)',
        })
        // Hold while cycling (total cycle window ~0.85s)
        .to({}, { duration: 0.85 })
        // Fade everything out
        .to(imgRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.15,
          ease: 'power2.in',
        })
        .to(
          bgRef.current,
          { opacity: 0, duration: 0.2, ease: 'power2.inOut' },
          '-=0.08',
        );
    },

    // playExit: initial page load — longer, more deliberate reveal then out
    playExit() {
      if (!containerRef.current) return;

      gsap.killTweensOf([bgRef.current, imgRef.current]);
      gsap.set(bgRef.current, { opacity: 1 });
      gsap.set(imgRef.current, { opacity: 0, scale: 0.7 });

      startCycle();

      const tl = gsap.timeline({
        onComplete: stopCycle,
      });

      tl
        // Image pops in
        .to(
          imgRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: 'back.out(2)',
          },
          '+=0.05',
        )
        // Hold + cycle runs
        .to({}, { duration: 1.1 })
        // Image scales up & fades (exit punch)
        .to(imgRef.current, {
          opacity: 0,
          scale: 1.25,
          duration: 0.25,
          ease: 'power3.in',
        })
        // Bg fades
        .to(
          bgRef.current,
          { opacity: 0, duration: 0.3, ease: 'power2.inOut' },
          '-=0.1',
        );
    },
  }));

  return (
    <>
      <style>{`
        @keyframes loading-spin {
          to { transform: rotate(360deg); }
        }
        .loading-img-cycle {
          /* subtle continuous wiggle while cycling */
          animation: loading-wiggle 0.4s ease-in-out infinite alternate;
        }
        @keyframes loading-wiggle {
          0%   { transform: rotate(-4deg) scale(1); }
          100% { transform: rotate(4deg)  scale(1.04); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[#f4793a]"
          style={{ opacity: 0 }}
        />

        {/* Center image */}
        <div className="absolute inset-0 flex items-center justify-center">
          { }
          <img
            ref={imgRef}
            src={IMAGES[0]}
            alt=""
            aria-hidden="true"
            className="loading-img-cycle size-[100px]"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </>
  );
});

LoadingScreen.displayName = 'LoadingScreen';
export default LoadingScreen;
