'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CONTACT_URL } from '@/config/constants';

const StickyOfferButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('story');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-10 opacity-0'
      }`}
    >
      <Link
        href={CONTACT_URL}
        className="flex h-[56px] w-[343px] items-center justify-between gap-[14px] rounded-full bg-[#f03d22] px-5 shadow-[0px_0px_26px_0px_rgba(240,61,34,0.5),6px_6px_0px_0px_rgba(176,2,27,0.3)] transition-opacity hover:opacity-90 md:h-auto md:w-120 md:gap-5 md:py-4"
      >
        <span className="flex h-[32px] w-[65px] shrink-0 items-center justify-center rounded-full bg-[#ffc2cb] text-center text-[16px] leading-[1.67] font-bold whitespace-nowrap text-[#801201] md:h-auto md:w-auto md:px-6 md:py-1 md:text-[24px]">
          無料
        </span>
        <span className="text-[16px] leading-[1.67] font-bold whitespace-nowrap text-white md:text-[24px]">
          出展お問い合わせ
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ffc2cb] md:size-auto md:p-3">
          <Image
            src="/assets/icons/arrow-forward-ios.svg"
            alt=""
            aria-hidden
            width={24}
            height={24}
          />
        </span>
      </Link>
    </div>
  );
};

export default StickyOfferButton;
