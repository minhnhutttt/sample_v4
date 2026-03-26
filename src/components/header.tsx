'use client';

import { useCallback, useEffect, useState } from 'react';

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

  return (
    <header className="header fixed top-0 right-0 left-0 z-90 flex h-16 w-full items-center justify-center bg-[linear-gradient(180deg,_rgba(3,_35,_78,_0.90)_0%,_rgba(3,_35,_78,_0.65)_49.52%,_rgba(3,_35,_78,_0.00)_100%)] pr-8 pl-8 transition-all duration-300 md:h-20.5 md:justify-between md:pl-10">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={167}
          height={40}
          className="max-md:w-[120px]"
        />
      </Link>
      <button
        onClick={toggle}
        className="absolute top-4 right-2 z-99 flex flex-col items-center justify-center gap-1.5 duration-300 hover:scale-110 md:top-7.5 md:right-9 md:hidden"
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
        <span className="font-bebas-neue mt-1 text-[10px] tracking-[0.12em] text-white">
          MENU
        </span>
      </button>
      <div
        className={`z-90 flex items-center justify-center duration-200 max-md:fixed max-md:inset-0 max-md:bg-black ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'max-md:pointer-events-none max-md:opacity-0'
        }`}
      >
        <div className="flex items-center text-[14px] text-white max-md:flex-col">
          <ul className="flex flex-wrap gap-5 max-md:flex-col lg:gap-[32px]">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
