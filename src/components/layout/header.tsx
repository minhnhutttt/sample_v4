'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

// ─── Types ─────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  sub?: string;
  href: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const kivoAppItems: NavItem[] = [
  { label: 'KIVO TALKの世界観', sub: 'KIVO TALK App Worldview', href: '/app' },
  {
    label: 'KIVO TALKの機能',
    sub: 'KIVO TALK App Features',
    href: '/features',
  },
  {
    label: 'KIVO TALKをダウンロード',
    sub: 'Download KIVO TALK App',
    href: '/download',
  },
  { label: 'KIVOポイント特典', sub: 'KIVO Point Benefits', href: '/kivo-rank' },
  {
    label: 'サブスクリプションプラン特典',
    sub: 'Subscription Benefits',
    href: '/subscription',
  },
  { label: 'サポート', sub: 'Support', href: '/support' },
  { label: 'KIVO TALKの強み', sub: 'KIVO TALK vs Other', href: '/compare' },
];

const aboutItems: NavItem[] = [
  {
    label: 'お知らせ・公開情報',
    sub: 'Update By KIVO',
    href: '/announcements',
  },
  {
    label: 'アップデート',
    sub: 'Update',
    href: '/announcements?category=update',
  },
  {
    label: '使い方',
    sub: 'How to Use',
    href: '/announcements?category=how-to-use',
  },
  {
    label: 'プレスリリース',
    sub: 'Press Release',
    href: '/announcements?category=press-release',
  },
  {
    label: '事例',
    sub: 'Case Study',
    href: '/announcements?category=case-study',
  },
  { label: '運営ブログ', sub: 'Blog', href: '/announcements?category=blog' },
];

const corporateItems: NavItem[] = [
  { label: '運営会社情報', sub: 'We are KIVO', href: '/company' },
  {
    label: 'ブランドアセット',
    sub: 'Brand asset Guideline',
    href: '/privacy-policy',
  },
];
const legalItems: NavItem[] = [
  { label: '法的情報', sub: 'LEGAL', href: '/legal' },
];
const termsItems: NavItem[] = [
  { label: '利用規約', sub: 'Terms of Use', href: '/legal' },
  {
    label: 'クリエイター利用規約',
    sub: 'Terms of Use for Creator',
    href: '/legal/terms-creater',
  },
  {
    label: 'プライバシーポリシー',
    sub: 'privacy policy',
    href: '/legal/privacy-policy',
  },
  {
    label: '特定商取引法に基づく表記',
    sub: 'Tokushoho',
    href: '/legal/tokushoho',
  },
];
const creatorItems: NavItem[] = [
  {
    label: 'SNSユーザー',
    sub: 'SNS User',
    href: 'https://creaters.kivo.talk/sns-user',
  },
  {
    label: '漫画家',
    sub: 'Manga artist',
    href: 'https://creaters.kivo.talk/manga',
  },
  { label: 'すべて表示', sub: '', href: 'https://creaters.kivo.talk' },
];

// ─── Single menu row ────────────────────────────────────────────────────────
function MenuItem({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onClick}
        className="group/item flex min-h-[56px] flex-col justify-center py-2.5 transition-colors duration-150 last:border-b-0 hover:border-[#F78629]/50"
      >
        <span className="block text-[16px] font-medium text-white transition-colors duration-150 group-hover/item:text-[#F78629]">
          {item.label}
        </span>
        {item.sub && (
          <span className="mt-0.5 block text-[12px] text-white/50">
            {item.sub}
          </span>
        )}
      </Link>
    </li>
  );
}

type HeaderProps = {
  ticker?: React.ReactNode;
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export default function Header({ ticker }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState(false); // ← thêm state này
  const ref = useRef<HTMLDivElement>(null);

  // ── IntersectionObserver cho js-header-color ──────────────────
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.js-header-color');
    if (!targets.length) return;

    const HEADER_HEIGHT = 48; // h-12 = 48px (top bar của mày)

    const observer = new IntersectionObserver(
      (entries) => {
        // Nếu bất kỳ target nào đang intersect với vùng header → active
        const anyActive = entries.some((entry) => entry.isIntersecting);
        setHeaderColor(anyActive);
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px -${window.innerHeight - HEADER_HEIGHT - 1}px 0px`,
        threshold: 0,
      },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        ref={ref}
        className={`group fixed inset-x-0 top-0 bottom-auto z-50 flex w-full translate-y-0 justify-center p-2.5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headerColor ? 'active' : ''
        }`}
      >
        <div
          // ── KEY CHANGE ────────────────────────────────────────────────────
          // Opening:  width expands first (500ms), then height reveals (500ms delay)
          // Closing:  height collapses first (500ms), then width shrinks (500ms, with 500ms delay)
          style={
            open
              ? {
                  transition: 'max-width 500ms cubic-bezier(0.22,1,0.36,1)',
                  maxWidth: '100%',
                }
              : {
                  transition:
                    'max-width 500ms cubic-bezier(0.22,1,0.36,1) 500ms',
                  maxWidth: undefined,
                }
          }
          className={`origin-center overflow-hidden rounded-md ${open ? '' : 'max-w-[350px] md:max-w-[520px]'}`}
        >
          {/* ── Top bar ─────────────────────────────────────────────────── */}
          <header className="relative z-99 flex h-14 items-center justify-between border-b border-white/10 bg-[#242424] px-5 transition-shadow duration-200 group-[.active]:bg-[#F78629]">
            {/* Left — hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="flex cursor-pointer items-center gap-2.5 text-white"
            >
              <span className="flex h-[8px] w-[18px] flex-col justify-between">
                <span
                  className={`block h-[2px] origin-center rounded bg-white transition-all duration-200 duration-250 group-[.active]:bg-[#242424] ${
                    open ? 'translate-y-[3px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] origin-center rounded bg-white transition-all duration-200 duration-250 group-[.active]:bg-[#242424] ${
                    open ? '-translate-y-[3px] -rotate-45' : ''
                  }`}
                />
              </span>
              <span className="text-[16px] duration-200 group-[.active]:text-[#242424] md:text-[20px]">
                Menu
              </span>
            </button>

            {/* Center — logo */}
            <Link
              href="/"
              onClick={close}
              aria-label="KIVO home"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src="/assets/images/kivo-logo.png" alt="" />
            </Link>

            {/* Right — CTA buttons */}
            <nav className="flex items-center gap-1">
              <Link
                onClick={close}
                href="/download"
                className="rounded border border-[#F78629] px-1 py-2 text-[10px] leading-none font-bold text-white transition-all duration-200 group-[.active]:border-[#242424] group-[.active]:text-[#242424] md:px-3 md:text-[12px]"
              >
                ダウンロード
              </Link>
            </nav>
          </header>

          {/* ── Dropdown panel ────────────────────────────────────────── */}
          <div
            style={
              open
                ? {
                    // Opening: height expands AFTER width (300ms delay)
                    transition:
                      'max-height 700ms cubic-bezier(0.22,1,0.36,1) 500ms, opacity 500ms ease 500ms',
                    maxHeight: '80vh',
                  }
                : {
                    // Closing: height collapses FIRST, no delay
                    transition:
                      'max-height 700ms cubic-bezier(0.22,1,0.36,1) 0ms, opacity 500ms ease 0ms',
                    maxHeight: '0px',
                  }
            }
            className="relative z-99 flex w-full flex-col-reverse overflow-auto"
          >
            <div className="overflow-auto bg-[#242424] text-white">
              <div className="grid grid-cols-1 p-5 md:grid-cols-3">
                {/* ── Col 1: KIVO App ─────────────────────────── */}
                <div className="rounded-[4px] bg-[#3C3C3C] p-5">
                  <p className="mb-4 text-[14px] text-[#F3821E]">
                    KIVO TALK App
                  </p>
                  <ul className="divide-y divide-[#626262]">
                    {kivoAppItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={close} />
                    ))}
                  </ul>
                </div>

                {/* ── Col 2: About Us ─────────────────────────── */}
                <div className="p-5">
                  <p className="mb-4 text-[11px] font-semibold tracking-widest text-[#F3821E] uppercase">
                    About Us
                  </p>
                  <ul className="divide-y divide-[#626262]">
                    {aboutItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={close} />
                    ))}
                  </ul>
                </div>

                {/* ── Col 3: App Status ───────────────────────── */}
                <div className="rounded-[4px] bg-[#3C3C3C] p-5">
                  <p className="mb-4 text-[14px] text-[#F3821E]">CORPORATE</p>
                  <ul className="divide-y divide-[#626262]">
                    {corporateItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={close} />
                    ))}
                  </ul>

                  {/* Legal row */}
                  <div className="mt-5 flex gap-8 border-t border-white pt-6 pb-2">
                    {legalItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="group/item py-2"
                      >
                        <span className="block text-[11px] font-medium text-white/60 transition-colors duration-150 group-hover/item:text-[#F78629]">
                          {item.label}
                        </span>
                        {item.sub && (
                          <span className="block text-[9px] text-white/30">
                            {item.sub}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Terms row */}
                  <div className="grid grid-cols-2 gap-2 px-3">
                    {termsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="group/item py-2"
                      >
                        <span className="block text-[11px] font-medium text-white/60 transition-colors duration-150 group-hover/item:text-[#F78629]">
                          {item.label}
                        </span>
                        {item.sub && (
                          <span className="block text-[9px] text-white/30">
                            {item.sub}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-5 pb-5">
                <p className="mb-4 px-5 text-[14px] text-[#F3821E]">
                  FOR CREATORS
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  {creatorItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item relative flex h-15 flex-col justify-center rounded border border-[#F3821E] px-5 md:h-[72px]"
                    >
                      <span className="block text-[18px] font-medium text-white/60 transition-colors duration-150 group-hover/item:text-[#F78629]">
                        {item.label}
                      </span>
                      {item.sub && (
                        <span className="block text-[12px] text-white/50">
                          {item.sub}
                        </span>
                      )}
                      <span className="absolute right-5">
                        <img src="/assets/images/open_in_new.png" alt="" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#242424] p-1.5 duration-200 group-[.active]:bg-[#F78629]">
            {ticker}
          </div>
        </div>

        {/* ── Backdrop ──────────────────────────────────────────────── */}
        <div
          className={[
            'fixed top-0 left-0 z-50 h-screen w-full transition-opacity duration-200',
            open
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0',
          ].join(' ')}
          onClick={close}
          aria-hidden="true"
        />
      </div>
    </>
  );
}
