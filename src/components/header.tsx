'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const images = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const number = String(i + 1).padStart(2, '0');
      return `/assets/images/top-partner-${number}.webp`;
    });
  }, []);

  const clonedImages = [...images, ...images, ...images];

  return (
    <header>
      <div className="bg-white">
        <div className="relative w-full overflow-hidden py-2.5 md:py-5">
          <div className="animate-marquee flex whitespace-nowrap">
            {clonedImages.map((src, index) => (
              <div key={index} className="shrink-0 px-1">
                <img src={src} alt="partner" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex h-16 items-center justify-center bg-[#1C1C1C] px-5 md:h-20.5 md:justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={92}
            height={64}
            className="max-md:w-[65px]"
          />
        </Link>
        <Link href="/" className="md:hidden">
          <Image
            src="/assets/images/logo2.svg"
            alt="logo"
            width={63}
            height={63}
            className="size-[45px]"
          />
        </Link>
        <button
          onClick={toggle}
          className="absolute top-4 right-2 z-40 flex flex-col items-center justify-center gap-1.5 duration-300 hover:scale-110 md:top-7.5 md:right-9 md:hidden"
        >
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 ${
              isOpen && 'translate-y-1 rotate-45'
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 ${
              isOpen && '-translate-y-1 -rotate-45'
            }`}
          />
          <span className="font-bebas-neue mt-1 text-[14px] tracking-[0.12em] text-white">
            MENU
          </span>
        </button>
        <div
          className={`flex items-center justify-center duration-200 max-md:fixed max-md:inset-0 max-md:bg-black ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'max-md:pointer-events-none max-md:opacity-0'
          }`}
        >
          <div className="flex items-center gap-[25px] text-[16px] text-white max-md:flex-col">
            <ul className="flex flex-wrap gap-[25px] max-md:flex-col">
              {NavLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="px-2 duration-200 hover:underline"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="flex items-center justify-center gap-3">
              <Image
                src="/assets/images/logo2.svg"
                alt="logo"
                width={63}
                height={63}
                className="size-10"
              />
              <span>女子チーム</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
