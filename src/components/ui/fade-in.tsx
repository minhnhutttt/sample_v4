'use client';

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
};

const DURATION_MS = 700;
const REDUCED_DURATION_MS = 200;
const OFFSET_PX = 24;
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(MOTION_QUERY);

  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
};

const getMotionSnapshot = () => window.matchMedia(MOTION_QUERY).matches;

/** The server cannot know the preference; assume animation is welcome. */
const getServerMotionSnapshot = () => false;

/**
 * Reveals its children once they scroll into view.
 *
 * The animated properties are inline styles rather than a class in
 * globals.css: inline styles ship with the markup, so the effect cannot be
 * broken by a stale stylesheet, a cascade-layer conflict, or a Tailwind
 * utility landing on the same element.
 */
const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getServerMotionSnapshot,
  );

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        setIsRevealed(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  const isHidden = !isRevealed;

  // Reduced motion still reveals on scroll — it just drops the travel and
  // fades faster, so the page never animates more than the visitor asked for.
  const duration = prefersReducedMotion ? REDUCED_DURATION_MS : DURATION_MS;
  const stagger = prefersReducedMotion ? 0 : delay;

  const style: CSSProperties = {
    opacity: isHidden ? 0 : 1,
    transform:
      isHidden && !prefersReducedMotion ? `translateY(${OFFSET_PX}px)` : 'none',
    transition: `opacity ${duration}ms ease-out ${stagger}ms, transform ${duration}ms ease-out ${stagger}ms`,
    willChange: isHidden ? 'opacity, transform' : undefined,
  };

  return (
    <div ref={setElement} style={style} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
