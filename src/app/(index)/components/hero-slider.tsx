'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

type HeroSliderProps = {
  /** Shown in order, then looped back to the first. */
  sources: string[];
  /** Describes the photography for screen readers, announced once. */
  label: string;
  className?: string;
};

/** How long a slide sits still before the next one starts fading in. */
const HOLD_MS = 4500;
/** Crossfade length — matches the unhurried feel of <FadeIn />. */
const FADE_MS = 1200;
/**
 * How far the Ken Burns push travels over a slide's whole visible life. The
 * duration is pinned to VISIBLE_MS, so this figure alone sets the pace: 1.12
 * over 5.7s works out at roughly 2.1% per second.
 */
const ZOOM_SCALE = 1.12;

/** A slide is on screen from the moment it fades in until it has faded out. */
const VISIBLE_MS = HOLD_MS + FADE_MS;

/**
 * Autoplaying crossfade for the hero photography, with a slow push-in on
 * whichever slide is showing.
 *
 * Every slide stays mounted and stacked, so a tick only changes opacity and
 * transform — both compositor properties, no layout work.
 *
 * The outgoing slide keeps its zoom for the length of the crossfade and only
 * snaps back afterwards (a zero-length transition on a FADE_MS delay), so the
 * reset always lands while the image is already at opacity 0.
 */
const HeroSlider = ({ sources, label, className }: HeroSliderProps) => {
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // The first slide has to paint un-zoomed before its zoom has anywhere to
    // travel from — without this frame it renders already scaled and sits still.
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

    // A backgrounded tab throttles timers; restarting on return avoids the
    // burst of queued advances that would otherwise skip several slides.
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
