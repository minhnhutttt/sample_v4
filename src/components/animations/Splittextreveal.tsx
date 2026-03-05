'use client';

import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

type SplitType = 'chars' | 'words' | 'lines' | 'words,chars';
type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface SplitTextRevealProps {
  children: React.ReactNode;
  /** HTML tag để render */
  as?: TagName;
  /** Loại split */
  splitType?: SplitType;
  /** Khoảng cách chữ xuất phát từ dưới (px) */
  yOffset?: number;
  /** Thời gian mỗi phần tử */
  duration?: number;
  /** Delay giữa các phần tử */
  stagger?: number;
  /** Easing GSAP */
  ease?: string;
  /** Delay ban đầu */
  delay?: number;
  /** ScrollTrigger bắt đầu ở đâu */
  triggerStart?: string;
  /** play | reset | restart | reverse | complete | none */
  toggleActions?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SplitTextReveal({
  children,
  as: Tag = 'div',
  splitType = 'lines',
  yOffset = 80,
  duration = 0.5,
  stagger = 0.08,
  ease = 'power3.out',
  delay = 0,
  triggerStart = 'top 85%',
  toggleActions = 'play none none none',
  className,
  style,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const split = new SplitText(el, {
      type: splitType,
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
    });

    // Lấy đúng targets
    let targets: Element[];
    if (splitType === 'chars' || splitType === 'words,chars') {
      targets = split.chars as Element[];
    } else if (splitType === 'words') {
      targets = split.words as Element[];
    } else {
      targets = split.lines as Element[];
    }

    // Với lines: wrap overflow hidden quanh từng dòng để clip chữ
    if (splitType === 'lines') {
      (split.lines as HTMLElement[]).forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'overflow:hidden; display:block;';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });
    }

    gsap.set(targets, { scaleY: 0, opacity: 0, transformOrigin: 'bottom' });

    const tween = gsap.to(targets, {
      scaleY: 1,
      opacity: 1,
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
      split.revert();
    };
  }, [
    splitType,
    yOffset,
    duration,
    stagger,
    ease,
    delay,
    triggerStart,
    toggleActions,
  ]);

  return React.createElement(Tag, { ref, className, style }, children);
}
