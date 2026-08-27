'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
};

const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`lp-reveal${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
