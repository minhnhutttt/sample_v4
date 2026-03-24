'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

type Props = {
  text: string;
  en: string;
  lg?: boolean;
  isBack?: boolean;
  onClick?: () => void;
};

const Button = ({ text, en, isBack = false, onClick, lg }: Props) => {
  const linkRef = useRef<HTMLButtonElement>(null);
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

    gsap.set(bg, { yPercent: 100 });
    gsap.set(textTop, { yPercent: 0 });
    gsap.set(textBottom, { yPercent: 100 });

    const handleEnter = () => {
      tlRef.current?.kill();

      gsap.set(bg, { yPercent: 100 });
      gsap.set(textTop, { yPercent: 0 });
      gsap.set(textBottom, { yPercent: 100 });

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(bg, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0);
      tl.to(
        textTop,
        { yPercent: -100, duration: 0.45, ease: 'power2.inOut' },
        0,
      );
      tl.to(
        textBottom,
        { yPercent: 0, duration: 0.45, ease: 'power2.inOut' },
        0.05,
      );
    };

    const handleLeave = () => {
      tlRef.current?.kill();

      gsap.set(textTop, { yPercent: 100 });

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(bg, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' }, 0);
      tl.to(
        textBottom,
        { yPercent: -100, duration: 0.45, ease: 'power2.inOut' },
        0,
      );
      tl.to(
        textTop,
        { yPercent: 0, duration: 0.45, ease: 'power2.inOut' },
        0.05,
      );

      tl.set(bg, { yPercent: 100 });
      tl.set(textBottom, { yPercent: 100 });
    };

    link.addEventListener('mouseenter', handleEnter);
    link.addEventListener('mouseleave', handleLeave);

    return () => {
      link.removeEventListener('mouseenter', handleEnter);
      link.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      ref={linkRef}
      className={`group btn relative z-1 inline-flex h-[5.2rem] w-[14.2rem] overflow-hidden rounded-[0.6rem] text-left text-black ${lg ? 'h-[5.2rem] w-[20rem]' : 'h-[5.2rem] w-[14.2rem]'} ${isBack ? 'border border-[#85F4E2]' : lg ? 'bg-[#424242]' : 'bg-[#85F4E2]'}`}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-1 rounded-[0.6rem] bg-[#9579C8]"
      />

      <div className="relative z-2 flex h-full w-full items-center justify-between gap-x-[1rem] px-[1rem]">
        {isBack && (
          <svg
            className="relative size-[2rem] flex-shrink-0 duration-500 group-hover:-translate-x-2"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_17069_696"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <rect
                x="18"
                y="18"
                width="18"
                height="18"
                transform="rotate(-180 18 18)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_17069_696)">
              <path
                d="M6.90068 7.82969L15.6382 7.82969L15.6382 10.1922L6.90068 10.1922L10.6882 13.9797L9.00068 15.6484L2.36318 9.01094L9.00068 2.37344L10.6882 4.04219L6.90068 7.82969Z"
                fill="#85F4E2"
              />
            </g>
          </svg>
        )}
        {/* Text container — clips animation */}
        <div className="relative overflow-hidden">
          {/* Top layer */}
          <div ref={textTopRef} className="flex flex-col">
            <p
              className={`text-[1.4rem] font-bold ${isBack ? 'text-[#85F4E2]' : lg ? 'text-white' : 'text-[#424242]'}`}
            >
              {text}
            </p>
            <p
              className={`text-[1rem] ${isBack ? 'text-[#85F4E2]/50' : lg ? 'text-[#FFF6F6]/50' : 'text-[#424242]/80'}`}
            >
              {en}
            </p>
          </div>

          {/* Bottom layer */}
          <div ref={textBottomRef} className="absolute inset-0 flex flex-col">
            <p
              className={`text-[1.4rem] font-bold ${isBack ? 'text-[#85F4E2]' : ''}`}
            >
              {text}
            </p>
            <p
              className={`text-[1rem] ${isBack ? 'text-[#85F4E2]/50' : 'text-[#424242]/80'}`}
            >
              {en}
            </p>
          </div>
        </div>
        {!isBack && (
          <svg
            className="relative size-[2rem] flex-shrink-0 duration-500 group-hover:-translate-x-2"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_19008_45"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <rect width="18" height="18" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_19008_45)">
              <path
                className={`${lg ? 'fill-white' : 'fill-[#424242]'}`}
                d="M11.0993 10.1703H2.36182V7.80781H11.0993L7.31182 4.02031L8.99932 2.35156L15.6368 8.98906L8.99932 15.6266L7.31182 13.9578L11.0993 10.1703Z"
              />
            </g>
          </svg>
        )}
      </div>
    </button>
  );
};

export default Button;
