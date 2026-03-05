'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Link from 'next/link';

gsap.registerPlugin(SplitText);

type Props = {
  href: string;
  text: string;
};

const Button = ({ href, text }: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const textBottomRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const link = linkRef.current;
    const bg = bgRef.current;
    const textTop = textTopRef.current;
    const textBottom = textBottomRef.current;

    if (!link || !bg || !textTop || !textBottom) return;

    // Split both text layers into words
    const splitTop = new SplitText(textTop, { type: 'words' });
    const splitBottom = new SplitText(textBottom, { type: 'words' });

    // Set initial states
    // bg: hidden below, ready to slide up
    gsap.set(bg, { yPercent: 100 });

    // Top text words: visible initially, will slide up on hover
    gsap.set(splitTop.words, { yPercent: 0, opacity: 1 });

    // Bottom text words: hidden below, will slide up into view
    gsap.set(splitBottom.words, { yPercent: 100, opacity: 1 });

    // Build the hover-in timeline (paused)
    const tl = gsap.timeline({ paused: true });

    // 1. Background slides up from bottom
    tl.to(
      bg,
      {
        yPercent: 0,
        duration: 0.45,
        ease: 'power3.out',
      },
      0,
    );

    // 2. Top text words slide up and out (exit)
    tl.to(
      splitTop.words,
      {
        yPercent: -120,
        duration: 0.5,
        ease: 'power2.in',
        stagger: 0.06,
      },
      0,
    );

    // 3. Bottom text words slide up into view (enter)
    tl.to(
      splitBottom.words,
      {
        yPercent: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.06,
      },
      0.06,
    );

    tlRef.current = tl;

    const handleEnter = () => {
      tlRef.current?.kill();

      // Reset về trạng thái ban đầu trước khi play
      gsap.set(bg, { yPercent: 100 });
      gsap.set(splitTop.words, { yPercent: 0, opacity: 1 });
      gsap.set(splitBottom.words, { yPercent: 100, opacity: 1 });

      tlRef.current = gsap.timeline();

      tlRef.current.to(
        bg,
        {
          yPercent: 0,
          duration: 0.5,
          ease: 'power3.inOut',
        },
        0,
      );

      tlRef.current.to(
        splitTop.words,
        {
          yPercent: -120,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: 0.06,
        },
        0,
      );

      tlRef.current.to(
        splitBottom.words,
        {
          yPercent: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: 0.06,
        },
        0.06,
      );
    };

    const handleLeave = () => {
      tlRef.current?.kill();

      gsap.set(splitTop.words, { yPercent: 100 });

      const tlLeave = gsap.timeline();

      tlLeave.to(
        bg,
        {
          yPercent: -100,
          duration: 0.5,
          ease: 'power3.inOut',
        },
        0,
      );

      tlLeave.to(
        splitBottom.words,
        {
          yPercent: -120,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: 0.06,
        },
        0,
      );

      tlLeave.to(
        splitTop.words,
        {
          yPercent: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: 0.06,
        },
        0.06,
      );

      tlLeave.set(bg, { yPercent: 100 });
      tlLeave.set(splitBottom.words, { yPercent: 100 });

      tlRef.current = tlLeave;
    };

    link.addEventListener('mouseenter', handleEnter);
    link.addEventListener('mouseleave', handleLeave);

    return () => {
      link.removeEventListener('mouseenter', handleEnter);
      link.removeEventListener('mouseleave', handleLeave);
      splitTop.revert();
      splitBottom.revert();
      tl.kill();
    };
  }, [text]);

  return (
    <Link
      ref={linkRef}
      href={href}
      className="group btn bg-pink radius-global relative inline-flex overflow-hidden text-black"
    >
      {/* Sliding green background */}
      <div
        ref={bgRef}
        className="bg-green-electric absolute inset-0 z-1 rounded-[1rem]"
      />

      {/* Button content */}
      <div className="relative z-2 flex h-[5rem] w-full items-center justify-between gap-x-[1.5rem] px-[1.3rem] text-[1.5rem] font-bold whitespace-nowrap md:h-[5.5rem] md:gap-x-[2rem] md:px-[1.5rem] md:text-[1.7rem]">
        {/* Text container — clips both layers */}
        <div className="relative flex h-full leading-none">
          {/* Top text (visible by default, exits upward on hover) */}
          <div
            ref={textTopRef}
            className="text-[1.8rem] [&>div]:leading-[5.5rem]"
            aria-hidden="false"
          >
            {text}
          </div>

          {/* Bottom text (hidden below, enters upward on hover) */}
          <div
            ref={textBottomRef}
            className="absolute inset-0 text-[1.8rem] [&>div]:leading-[5.5rem]"
            aria-hidden="true"
          >
            {text}
          </div>
        </div>

        <svg
          className="relative size-[2rem] flex-shrink-0 duration-500 group-hover:-translate-x-2"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0691 2L17.9004 10.1014L10.0691 17.6626"
            className="stroke-current"
            strokeWidth="4"
          />
          <path
            d="M0 9.83154H16.7814"
            className="stroke-current"
            strokeWidth="4"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Button;
