'use client';

import { useCallback, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import type { NavItem } from './header-nav';

type MobileNavProps = {
  items: NavItem[];
};

/**
 * SP-only stand-in for <HeaderNav /> (that one is `hidden lg:block`).
 * No Figma spec exists for this hamburger/drawer — sizing and styling below
 * are estimated, not pixel-perfect; share a Figma frame for it if one exists.
 */
const MobileNav = ({ items }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const isClient = typeof window !== 'undefined';

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="メニューを開く"
        aria-expanded={open}
        className="absolute top-[12px] right-[15px] z-20 flex h-[36px] w-[36px] flex-col items-center justify-center gap-[5px]"
      >
        <span className="block h-[2px] w-[24px] bg-[#353535]" />
        <span className="block h-[2px] w-[24px] bg-[#353535]" />
        <span className="block h-[2px] w-[24px] bg-[#353535]" />
      </button>

      {isClient &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="メニュー"
            aria-hidden={!open}
            onClick={close}
            className={`fixed inset-0 z-[100] bg-[rgba(26,26,26,0.8)] transition-opacity duration-300 ease-in-out ${
              open ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <nav
              onClick={(event) => event.stopPropagation()}
              className={`ml-auto flex h-full w-[260px] flex-col bg-white px-[24px] pt-[16px] transition-transform duration-300 ease-in-out ${
                open ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <button
                type="button"
                onClick={close}
                aria-label="閉じる"
                className="self-end transition-transform hover:scale-110"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12.5" cy="12.5" r="12" fill="#1f3a40" />
                  <line
                    x1="6.9"
                    y1="6.9"
                    x2="18.1"
                    y2="18.1"
                    stroke="#fff"
                    strokeWidth="1.23"
                  />
                  <line
                    x1="18.1"
                    y1="6.9"
                    x2="6.9"
                    y2="18.1"
                    stroke="#fff"
                    strokeWidth="1.23"
                  />
                </svg>
              </button>

              <ul className="mt-[8px] flex flex-col">
                {items.map((item) => (
                  <li key={item.id} className="border-b border-[#e5e5e5]">
                    <a
                      href={`#${item.id}`}
                      onClick={close}
                      className="text-ink block py-[14px] text-[15px] font-semibold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default MobileNav;
