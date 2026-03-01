'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header group h016 fixed top-0 left-0 z-60 flex w-full items-center px-5 md:h-20 ${isScrolled && 'active'}`}
      >
        <div className="pointer-events-none fixed top-0 left-0">
          <Image
            src="/assets/images/bg-header.svg"
            alt="logo"
            width={430}
            height={345}
            className=""
          />
        </div>
        <Link href="/" className="relative top-6 left-4">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={137}
            height={96}
            className=""
          />
        </Link>
        <button
          onClick={toggle}
          className="fixed top-6 right-5 z-40 flex flex-col items-center justify-center gap-1.5 duration-300 hover:scale-110 md:top-13 md:right-13 md:gap-1.5"
        >
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && 'translate-y-1 rotate-45'
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && 'opacity-0'
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded-full bg-white duration-200 group-[.active]:bg-black md:h-[3px] md:w-[55px] ${
              isOpen && '-translate-y-1 -rotate-45'
            }`}
          />
          <span className="font-bebas-neue -mt-1 text-[14px] tracking-[0.12em] text-white group-[.active]:text-black md:text-[27px]">
            MENU
          </span>
        </button>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black duration-200 ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-[25px] text-[16px] text-white">
            <ul className="flex flex-col flex-wrap gap-[25px]">
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
        <span className="absolute top-[calc(100%+16px)] right-4 hidden">
          <Image
            src="/assets/images/united.png"
            alt=""
            width={66}
            height={33}
            className=""
          />
        </span>
      </header>
      {/* <div className={`fixed top-0 inset-x-0 pointer-events-none duration-300 z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <img src="/assets/images/header-gradient.png" className="w-full" alt="" />
      </div> */}
    </>
  );
};

export default Header;
