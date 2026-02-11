'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

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

  const NavLinks = [
    {
      text: 'ブランドについて',
      href: '/',
    },
    {
      text: 'サービス利用規約',
      href: '/',
    },
    {
      text: 'プライバシーポリシー',
      href: '/',
    },
    {
      text: '特定商取引法表記・法的情報',
      href: '/',
    },
    {
      text: 'アプリのダウンロード',
      href: '/',
    },
    {
      text: '他サービスとの比較',
      href: '/',
    },
    {
      text: 'プレミアムチャンネルについて',
      href: '/',
    },
    {
      text: 'お知らせ・記事一覧',
      href: '/',
    },
    {
      text: 'サポート・お問い合わせ',
      href: '/',
    },
  ];

  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-30 flex h-20 items-center justify-between border border-white/20 bg-[rgba(255,255,255,0.02)] pr-7 pl-11.5 opacity-0 [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.5px] backdrop-filter duration-300 md:h-25"
    >
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt=""
          width={98}
          height={66}
          className="max-md:w-10.5"
        />
      </Link>
      <button
        onClick={toggle}
        className="fixed top-6 right-7 z-40 flex flex-col items-center justify-center gap-2 md:top-7.5 md:right-9 md:gap-3"
      >
        <span
          className={`h-1 w-10 rounded-full bg-white duration-200 md:w-13.5 ${isOpen && 'translate-y-3 rotate-45 md:translate-y-4'}`}
        ></span>
        <span
          className={`h-1 w-10 rounded-full bg-white duration-200 md:w-13.5 ${isOpen && 'opacity-0'}`}
        ></span>
        <span
          className={`h-1 w-10 rounded-full bg-white duration-200 md:w-13.5 ${isOpen && '-translate-y-3 -rotate-45 md:-translate-y-4'}`}
        ></span>
      </button>
      <div
        className={`fixed inset-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-5 py-10 duration-200 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none top-1/2 opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-16 overflow-auto md:gap-25">
          <Link href="/">
            <Image
              src="/assets/images/kivo.svg"
              alt=""
              width={331}
              height={225}
              className="max-md:w-45"
            />
          </Link>
          <ul className="flex w-full max-w-230 flex-wrap gap-6 text-[17px] font-medium text-white md:gap-12.5 md:text-[24px]">
            {NavLinks.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="duration-200 hover:underline">
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
