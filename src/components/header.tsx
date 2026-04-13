'use client';

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useSmoothScroll } from '@/app/hooks/Usesmoothscroll';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

import Button from './button';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const burgerTopRef = useRef<HTMLSpanElement>(null);
  const burgerMidRef = useRef<HTMLSpanElement>(null);
  const burgerBotRef = useRef<HTMLSpanElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const dispatch = useAppDispatch();
  const { stop, start } = useSmoothScroll();

  // ── Header hide/show on scroll ──────────────────────────────────────────────
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position tracking
    lastScrollY.current = 0;

    // Đợi DOM mới render xong
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate() {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY.current;

          if (!headerWrapRef.current) return;

          if (delta > 0 && currentScrollY > 80) {
            gsap.to(headerWrapRef.current, {
              y: '-100%',
              duration: 0.4,
              overwrite: 'auto',
            });
          } else if (delta < 0) {
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

      return () => st.kill();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const openMenu = () => {
    if (!overlayRef.current) return;

    setMenuOpen(true);
    document.body.style.overflow = 'hidden';

    // Pause Lenis khi mở menu
    stop();

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
        // Resume Lenis sau khi menu đóng xong
        start();
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
      <div ref={headerWrapRef} className="fixed top-0 right-0 left-0 z-50">
        <header className="relative z-10 pt-[1.2rem] md:pt-[2.2rem]">
          {/* Main nav */}
          <div className="sh__inner site-max relative">
            <div className="relative z-10 flex items-center justify-between py-[0.4rem] md:py-[1rem]">
              <Link href="/" className="">
                <img src="/assets/images/logo.png" className="" />
              </Link>

              {/* Desktop nav */}
              <div className="hidden items-center gap-x-[1.2rem] md:flex">
                <ul className="flex items-center gap-x-[4rem] rounded-[0.5rem] px-[3.5rem] md:rounded-[1rem]">
                  <li>
                    <Link
                      href="/#products"
                      className="uline flex flex-col items-center justify-center text-center"
                    >
                      <p className="text-[1.4rem]">製品一覧</p>
                      <p className="text-[1rem] text-[#000846]/30">PRODUCTS</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#company"
                      className="uline flex flex-col items-center justify-center text-center"
                    >
                      <p className="text-[1.4rem]">会社概要</p>
                      <p className="text-[1rem] text-[#000846]/30">COMPANY</p>
                    </Link>
                  </li>
                </ul>
                <Button
                  text="お問い合わせ"
                  en="CONTACT US"
                  onClick={() => dispatch(openModal({ name: 'contact' }))}
                />
              </div>

              {/* Hamburger placeholder */}
              <div className="h-[2.8rem] w-[2.8rem] md:hidden" />
            </div>
          </div>
        </header>

        {/* Burger button */}
        <button
          onClick={toggleMenu}
          className="radius-global pointer-events-auto absolute top-[1.5rem] right-[1.2rem] z-50 z-150 flex size-[4rem] items-center justify-center bg-[#07F] md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative flex h-[2rem] w-[1.5rem] flex-col items-center justify-center gap-[.4rem]">
            <span
              ref={burgerTopRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-white"
            />
            <span
              ref={burgerMidRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-white"
            />
            <span
              ref={burgerBotRef}
              className="block h-[2.5px] w-[1.5rem] origin-center rounded-full bg-white"
            />
          </div>
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[49] flex flex-col bg-[#000846] md:hidden"
        style={{
          clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Decorative accent */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[60vw] w-[60vw] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #424242 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[40vw] w-[40vw] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #424242 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        {/* Menu content */}
        <div className="flex flex-1 flex-col items-start justify-center px-[2.5rem] pt-[8rem]">
          <ul className="flex w-full flex-col gap-y-[0.5rem] text-white">
            <li>
              <Link
                href="/#products"
                onClick={closeMenu}
                className="group flex w-full items-center justify-between border-b border-white/10 py-[1.2rem]"
              >
                <div className="">
                  <p className="text-[2rem] font-bold">製品一覧</p>
                  <p className="text-[1.4rem]">PRODUCTS</p>
                </div>
                <span className="/20 text-[1.5rem] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#CCE561]">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#company"
                onClick={closeMenu}
                className="group flex w-full items-center justify-between border-b border-white/10 py-[1.2rem]"
              >
                <div className="">
                  <p className="text-[2rem] font-bold">会社概要</p>
                  <p className="text-[1.4rem]">COMPANY</p>
                </div>
                <span className="/20 text-[1.5rem] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#CCE561]">
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
