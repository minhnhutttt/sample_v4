'use client';

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

import { NavLinks } from '@/config/constants';

import Button from './button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const burgerTopRef = useRef<HTMLSpanElement>(null);
  const burgerMidRef = useRef<HTMLSpanElement>(null);
  const burgerBotRef = useRef<HTMLSpanElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ── Helper: lấy scroll position đúng dù có hay không có smoother ──────────
    const getScrollY = () => {
      const smoother = ScrollSmoother.get();
      return smoother ? smoother.scrollTop() : window.scrollY;
    };

    // ── Cách đúng khi dùng ScrollSmoother: lắng nghe qua ScrollTrigger ────────
    // window "scroll" event vẫn fire với native scroll (ScrollSmoother không
    // chặn nó), nhưng scrollY của smoother lag phía sau native scroll.
    // Dùng ScrollTrigger.create với onUpdate để đọc đúng progress từ smoother.
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      // onUpdate chạy mỗi frame khi scroll, sau khi smoother đã cập nhật
      onUpdate(self) {
        const currentScrollY = getScrollY();
        const delta = currentScrollY - lastScrollY.current;

        if (!headerWrapRef.current) return;

        if (delta > 0 && currentScrollY > 80) {
          // Scroll xuống & đã qua 80px → ẩn header
          gsap.to(headerWrapRef.current, {
            y: '-100%',
            duration: 0.4,
            overwrite: 'auto',
          });
        } else if (delta < 0) {
          // Scroll lên → hiện header
          gsap.to(headerWrapRef.current, {
            y: '0%',
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }

        lastScrollY.current = currentScrollY;
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const openMenu = () => {
    if (!overlayRef.current) return;

    setMenuOpen(true);
    document.body.style.overflow = 'hidden';

    // Pause smoother khi mở menu để tránh scroll xảy ra phía sau overlay
    ScrollSmoother.get()?.paused(true);

    gsap.fromTo(
      overlayRef.current,
      { clipPath: 'circle(0% at calc(100% - 3rem) 3rem)', opacity: 1 },
      {
        clipPath: 'circle(150% at calc(100% - 3rem) 3rem)',
        duration: 0.7,
        ease: 'power3.inOut',
      },
    );

    gsap.fromTo(
      navItemsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3,
      },
    );

    gsap.to(burgerTopRef.current, {
      rotate: 45,
      y: 6,
      duration: 0.3,
      ease: 'power2.inOut',
    });
    gsap.to(burgerMidRef.current, { opacity: 0, scaleX: 0, duration: 0.2 });
    gsap.to(burgerBotRef.current, {
      rotate: -45,
      y: -7,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  const closeMenu = () => {
    if (!overlayRef.current) return;

    gsap.to(navItemsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in',
    });

    gsap.to(overlayRef.current, {
      clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
      duration: 0.6,
      ease: 'power3.inOut',
      delay: 0.15,
      onComplete: () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
        // Resume smoother sau khi menu đóng xong
        ScrollSmoother.get()?.paused(false);
      },
    });

    gsap.to(burgerTopRef.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    });
    gsap.to(burgerMidRef.current, {
      opacity: 1,
      scaleX: 1,
      duration: 0.25,
      delay: 0.1,
    });
    gsap.to(burgerBotRef.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <div
        ref={headerWrapRef}
        className="fixed top-0 right-0 left-0 z-100 will-change-transform"
      >
        <header className="relative z-50">
          <div className="h6 pointer-events-auto relative z-10 flex h-[3.5rem] w-full items-center overflow-hidden bg-[#CCE561] text-center font-bold whitespace-nowrap text-black duration-300 md:justify-center">
            <div className="marq relative flex" data-v-6f2835a6="">
              <div className="marq-item relative pr-[7.5rem] md:pr-0">
                <div className="site-max flex items-center justify-center">
                  <a
                    href="/insights/new-engen-acquires-grapevine-to-expand-creator-led-paid-social-capabilities/"
                    className="flex justify-center"
                  >
                    <span
                      className="site-max flex items-center justify-center"
                      data-v-6f2835a6=""
                    >
                      New Engen Announces Acquisition of Grapevine — Click to
                      Learn More
                    </span>
                  </a>
                </div>
              </div>
              <div className="marq-item relative pr-[7.5rem] md:hidden md:pr-0">
                <div className="site-max flex items-center justify-center">
                  <a
                    href="/insights/new-engen-acquires-grapevine-to-expand-creator-led-paid-social-capabilities/"
                    className="flex justify-center"
                  >
                    <span
                      className="site-max flex items-center justify-center"
                      data-v-6f2835a6=""
                    >
                      New Engen Announces Acquisition of Grapevine — Click to
                      Learn More
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main nav */}
          <div className="sh__inner site-max relative">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="py-[.6rem] pr-[.5rem] md:py-[0.8rem] md:pr-[1rem]"
              >
                <img
                  src="/assets/images/logo.png"
                  className="h-[4rem] md:h-[7rem]"
                />
              </Link>

              {/* Desktop nav */}
              <div className="hidden items-center gap-x-[1.2rem] md:flex">
                <ul className="bg-green flex h-[5.5rem] items-center gap-x-[4rem] rounded-[0.5rem] px-[3.5rem] md:rounded-[1rem]">
                  {NavLinks.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="h5-alt uline text-white"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button href="/" text="Let's talk" />
              </div>

              {/* Hamburger placeholder */}
              <div className="h-[2.8rem] w-[2.8rem] md:hidden" />
            </div>
          </div>
        </header>

        {/* Burger button */}
        <button
          onClick={toggleMenu}
          className="bg-pink radius-global s:hidden pointer-events-auto absolute top-[4.2rem] right-[1.2rem] z-150 flex size-[4rem] items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative flex h-[2rem] w-[1.5rem] flex-col items-center justify-center gap-[.4rem]">
            <span
              ref={burgerTopRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-[#242424]"
            />
            <span
              ref={burgerMidRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-[#242424]"
            />
            <span
              ref={burgerBotRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-[#242424]"
            />
          </div>
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="bg-green fixed inset-0 z-[99] flex flex-col md:hidden"
        style={{
          clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Decorative accent */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[60vw] w-[60vw] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #CCE561 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[40vw] w-[40vw] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #CCE561 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        {/* Menu content */}
        <div className="flex flex-1 flex-col items-start justify-center px-[2.5rem] pt-[8rem]">
          <ul className="flex w-full flex-col gap-y-[0.5rem]">
            {NavLinks.map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  if (el) navItemsRef.current[i] = el;
                }}
                style={{ opacity: 0, transform: 'translateY(60px)' }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex w-full items-center justify-between border-b border-white/10 py-[1.2rem] text-white"
                  style={{
                    fontSize: 'clamp(2rem, 7vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  <span className="transition-colors duration-200 group-hover:text-[#CCE561]">
                    {item.text}
                  </span>
                  <span className="text-[1.5rem] text-white/20 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#CCE561]">
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li
              ref={(el) => {
                if (el) navItemsRef.current[NavLinks.length] = el;
              }}
              style={{ opacity: 0, transform: 'translateY(60px)' }}
            >
              <Link
                href="/"
                onClick={closeMenu}
                className="group flex w-full items-center justify-between border-b border-white/10 py-[1.2rem] text-white"
                style={{
                  fontSize: 'clamp(2rem, 7vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                <span className="transition-colors duration-200 group-hover:text-[#CCE561]">
                  Let&apos;s talk
                </span>
                <span className="text-[1.5rem] text-white/20 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#CCE561]">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
