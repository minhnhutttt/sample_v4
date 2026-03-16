"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Types ─────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  sub?: string;
  href: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const kivoAppItems: NavItem[] = [
  { label: "アプリ紹介",        sub: "App Introduction",  href: "/app" },
  { label: "KIVOをダウンロード", sub: "Download KIVO",     href: "/download" },
  { label: "プレミアム特典",     sub: "Premium Benefits",  href: "/premium" },
  { label: "サポート",          sub: "Support",           href: "/support" },
  { label: "KIVO vs Other",                               href: "/compare" },
];

const aboutItems: NavItem[] = [
  { label: "お知らせ・公開情報", sub: "Announcements", href: "/news" },
  { label: "We are KIVO",                               href: "/about" },
  { label: "ブランドアセット",   sub: "Brand asset",   href: "/brand" },
];

const legalItems: NavItem[] = [
  { label: "利用規約",           sub: "Terms of Use",   href: "/terms" },
  { label: "プライバシーポリシー", sub: "Privacy Policy", href: "/privacy" },
];

const MARQUEE_TEXT = "NEW: KIVO公式サイト公開のお知らせ";

// ─── Marquee ───────────────────────────────────────────────────────────────
function MarqueeTicker() {
  return (
    <div className="overflow-hidden bg-[#F78629] h-8 flex items-center">
      <style>{`
        @keyframes kivo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kivo-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: kivo-marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="kivo-marquee-track">
        {[0, 1].map((outerIdx) => (
          <div key={outerIdx} className="flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                className="flex items-center gap-4 text-black text-xs font-semibold tracking-wide px-4"
                key={i}
              >
                <img src="/assets/images/kivo.svg" alt="" />
                {MARQUEE_TEXT}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Single menu row ────────────────────────────────────────────────────────
function MenuItem({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onClick}
        className="group flex flex-col justify-center py-2.5 min-h-[56px] last:border-b-0 hover:border-[#F78629]/50 transition-colors duration-150"
      >
        <span className="block text-[16px] font-medium text-white group-hover:text-[#F78629] transition-colors duration-150">
          {item.label}
        </span>
        {item.sub && (
          <span className="block text-[12px] text-white/50 mt-0.5">{item.sub}</span>
        )}
      </Link>
    </li>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
export default function Header() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setPinned(window.scrollY >= window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <div
      ref={ref}
      className={[
        "fixed inset-x-0 z-50 flex justify-center w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        pinned
          ? "top-0 bottom-auto translate-y-0"
          : "bottom-0 top-auto translate-y-0",
      ].join(" ")}
    >
      <div
        // ── KEY CHANGE ────────────────────────────────────────────────────
        // Opening:  width expands first (500ms), then height reveals (500ms delay)
        // Closing:  height collapses first (500ms), then width shrinks (500ms, with 500ms delay)
        style={
          open
            ? {
                transition: "max-width 500ms cubic-bezier(0.22,1,0.36,1)",
                maxWidth: "100%",
              }
            : {
                transition: "max-width 500ms cubic-bezier(0.22,1,0.36,1) 500ms",
                maxWidth: undefined, // let Tailwind class take over
              }
        }
        className={`origin-center ${open ? "" : "max-w-[350px] md:max-w-[520px]"}`}
      >
        {/* ── Top bar ─────────────────────────────────────────────────── */}
        <header className="relative flex items-center justify-between px-5 h-12 bg-[#242424] border-b border-white/10 transition-shadow duration-300">
          {/* Left — hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex items-center gap-2.5 text-white cursor-pointer"
          >
            <span className="flex flex-col justify-between w-[18px] h-[8px]">
              <span
                className={`block h-[2px] bg-white rounded transition-all duration-250 origin-center ${
                  open ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-white rounded transition-all duration-250 origin-center ${
                  open ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </span>
            <span className="md:text-[20px] text-[16px]">Menu</span>
          </button>

          {/* Center — logo */}
          <Link
            href="/"
            aria-label="KIVO home"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[53px]"
          >
            <img src="/assets/images/logo.svg" alt="" />
          </Link>

          {/* Right — CTA buttons */}
          <nav className="flex items-center gap-1">
            <Link
              href="/premium"
              className="px-1 md:px-3 py-2 transition-all duration-200 text-[10px] md:text-[12px] font-bold text-[#F78629] border border-[#F78629] rounded-full leading-none"
            >
              Premium
            </Link>
            <Link
              href="/download"
              className="px-1 md:px-3 py-2 transition-all duration-200 text-[10px] md:text-[12px] font-bold text-white bg-[#F78629] rounded-full leading-none"
            >
              Download
            </Link>
          </nav>
        </header>

        {/* ── Dropdown panel ────────────────────────────────────────── */}
        <div
          style={
            open
              ? {
                  // Opening: height expands AFTER width (300ms delay)
                  transition: "max-height 700ms cubic-bezier(0.22,1,0.36,1) 500ms, opacity 500ms ease 500ms",
                  maxHeight: "520px",
                }
              : {
                  // Closing: height collapses FIRST, no delay
                  transition: "max-height 700ms cubic-bezier(0.22,1,0.36,1) 0ms, opacity 500ms ease 0ms",
                  maxHeight: "0px",
                }
          }
          className={[
            "overflow-auto relative z-20",
            !pinned ? "flex flex-col-reverse" : "",
          ].join(" ")}
        >
          <div className="bg-[#242424] border-b text-white overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 p-5">

              {/* ── Col 1: KIVO App ─────────────────────────── */}
              <div className="p-5 bg-[#3C3C3C] rounded-[4px]">
                <p className="text-[14px] mb-4">KIVO App</p>
                <ul className="divide-y divide-[#626262]">
                  {kivoAppItems.map((item) => (
                    <MenuItem key={item.href} item={item} onClick={close} />
                  ))}
                </ul>
              </div>

              {/* ── Col 2: About Us ─────────────────────────── */}
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-4">
                  About Us
                </p>
                <ul className="divide-y divide-[#626262]">
                  {aboutItems.map((item) => (
                    <MenuItem key={item.href} item={item} onClick={close} />
                  ))}
                </ul>

                {/* Legal row */}
                <div className="flex gap-8 py-3 border-t border-[#626262]">
                  {legalItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="group">
                      <span className="block text-[12px] font-medium text-white/60 group-hover:text-[#F78629] transition-colors duration-150">
                        {item.label}
                      </span>
                      {item.sub && (
                        <span className="block text-[10px] text-white/30">{item.sub}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Col 3: App Status ───────────────────────── */}
              <div className="p-5 bg-[#3C3C3C] rounded-[4px] flex flex-col items-center gap-4">
                {/* Status pill */}
                <div className="self-stretch flex justify-center">
                  <div className="flex flex-col items-center bg-[#F78629] rounded-full px-6 py-2">
                    <span className="text-[12px]">アプリステータス</span>
                    <span className="text-[10px]">App Status</span>
                  </div>
                </div>

                {/* Status label */}
                <div className="text-center md:mt-[55px]">
                  <p className="text-white text-2xl font-bold">開発中 - MVP</p>
                  <p className="text-white/40 text-xs mt-1">Under Development - MVP</p>
                </div>

                {/* Logo display */}
                <img src="/assets/images/logo.svg" alt="" className="w-[60px]" />

                {/* CTA */}
                <Link
                  href="/status"
                  onClick={close}
                  className="bg-white w-25 h-8 flex items-center justify-center rounded-[4px] text-black mt-5"
                >
                  More info
                </Link>
              </div>
            </div>

            <MarqueeTicker />
          </div>
        </div>
      </div>
    </div>
    {/* ── Backdrop ──────────────────────────────────────────────── */}
        <div
          className={[
            "fixed top-0 w-full left-0 transition-opacity duration-500 h-screen z-10",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          onClick={close}
          aria-hidden="true"
        />
    </>
  );
}