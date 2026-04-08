'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { NAV_LINKS } from '@/config/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 bg-[#022AAE] px-6 transition-shadow duration-300 lg:px-10 ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1100px] items-center justify-between lg:h-[92px]">
          {/* Logo */}
          <Link href="/" className="">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-white underline-offset-4 transition-opacity duration-150 hover:underline hover:opacity-80"
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://www.kurashi-port.com/maker-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex h-[52px] w-[176px] items-center justify-center rounded-lg bg-[linear-gradient(90deg,_#FF493E_0%,_#FFA826_100%)] px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              掲載を申し込む
            </a>
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md focus:outline-none lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300"
              style={{
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-6 rounded-full bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'translateY(-8px) rotate(-45deg)'
                  : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300 lg:hidden"
        style={{
          background: 'rgba(0,0,0,0.45)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className="fixed top-20 right-0 left-0 z-40 overflow-hidden bg-[#1a4fd6] transition-all duration-300 lg:top-[92px] lg:hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
        }}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border-b border-white/10 px-3 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-white/10"
              style={{
                transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <Link
            href="#apply"
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-2 rounded-xl bg-[linear-gradient(90deg,_#FF493E_0%,_#FFA826_100%)] px-6 py-4 text-center text-base font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            掲載を申し込む
          </Link>
        </nav>
      </div>
    </>
  );
}
