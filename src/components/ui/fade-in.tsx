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
  delay?: number;
};

const DURATION_MS = 1000;
const OFFSET_PX = 24;
const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(MOTION_QUERY);

  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
};

const getMotionSnapshot = () => window.matchMedia(MOTION_QUERY).matches;

const getServerMotionSnapshot = () => false;

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

  const stagger = prefersReducedMotion ? 0 : delay;

  const style: CSSProperties = {
    opacity: isHidden ? 0 : 1,
    transform:
      isHidden && !prefersReducedMotion ? `translateY(${OFFSET_PX}px)` : 'none',
    transition: `opacity ${DURATION_MS}ms ${EASING} ${stagger}ms, transform ${DURATION_MS}ms ${EASING} ${stagger}ms`,
    willChange: isHidden ? 'opacity, transform' : undefined,
  };

  return (
    <div ref={setElement} style={style} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
