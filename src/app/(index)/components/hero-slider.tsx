'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

type HeroSliderProps = {
  sources: string[];
  label: string;
  className?: string;
};

const HOLD_MS = 4500;
const FADE_MS = 1200;
const ZOOM_SCALE = 1.12;

const VISIBLE_MS = HOLD_MS + FADE_MS;
const HeroSlider = ({ sources, label, className }: HeroSliderProps) => {
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasStarted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (sources.length < 2) return;

    let timer = 0;

    const start = () => {
      timer = window.setInterval(
        () => setIndex((current) => (current + 1) % sources.length),
        HOLD_MS + FADE_MS,
      );
    };

    const stop = () => window.clearInterval(timer);

    const onVisibilityChange = () => {
      stop();

      if (!document.hidden) start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [sources.length]);

  return (
    <div role="img" aria-label={label} className={className}>
      {sources.map((src, i) => {
        const isActive = i === index;

        return (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="h-full w-full"
            style={{
              opacity: isActive ? 1 : 0,
              transform: `scale(${isActive && hasStarted ? ZOOM_SCALE : 1})`,
              transition: isActive
                ? `opacity ${FADE_MS}ms ease-in-out, transform ${VISIBLE_MS}ms linear`
                : `opacity ${FADE_MS}ms ease-in-out, transform 0ms linear ${FADE_MS}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroSlider;
