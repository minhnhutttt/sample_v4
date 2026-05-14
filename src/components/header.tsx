'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DownloadModal from '@/components/DownloadModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/sns-user', ja: 'SNSユーザー', en: 'SNS User' },
    { href: '/manga', ja: '漫画家', en: 'Manga artist' },
    { href: '/video', ja: '動画作家', en: 'Video Grapher' },
    { href: '/', ja: 'すべて表示', en: '' },
  ];

  return (
    <header className="fixed top-[20px] left-0 z-50 w-full">
      <div className="mx-auto flex w-full max-w-[1280px] items-start justify-between px-[60px] max-md:px-[30px]">
        <div
          className={`flex w-[370px] flex-col items-start gap-[6px] rounded-[4px] bg-[#242424] px-[20px] pt-[12px] text-left ${
            isMenuOpen ? 'pb-[18px]' : 'pb-[6px]'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex w-full items-center"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <img
              src="/assets/images/logo-bkack-w.svg"
              alt="Kivo logo"
              className="h-auto w-auto shrink-0"
            />
            <span className="font-anton ml-[20px] text-[32px] leading-[100%] font-normal tracking-[-0.352px] text-white">
              CREATORS
            </span>
            <div className="ml-auto flex flex-col items-center">
              <img
                src="/assets/images/icon-menu.svg"
                alt="Menu"
                className="h-[26px] w-[36px]"
              />
              <span className="mt-[2px] text-[10px] leading-[100%] font-normal tracking-[-0.11px] text-white">
                Menu
              </span>
            </div>
          </button>
          <div
            className={`w-full overflow-hidden rounded-[3px] bg-[#3C3C3C] transition-all duration-500 ease-out ${
              isMenuOpen
                ? 'max-h-[560px] translate-y-0 opacity-100'
                : 'max-h-0 -translate-y-1 opacity-0'
            }`}
          >
            <div className="flex w-full flex-col gap-[16px] px-[20px] py-[16px]">
              {menuItems.map((item, idx) => (
                <Link
                  key={item.ja}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex h-[72px] items-center justify-between rounded-[4px] border p-[20px] ${
                    idx === 3 ? 'border-white' : 'border-[#F3821E]'
                  }`}
                >
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[16px] leading-[100%] tracking-[-0.176px] text-white">
                      {item.ja}
                    </span>
                    {item.en ? (
                      <span className="text-[12px] leading-[100%] tracking-[-0.132px] text-white/50">
                        {item.en}
                      </span>
                    ) : null}
                  </div>
                  <img
                    src="/assets/images/icon-open.svg"
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </Link>
              ))}

              <div className="hidden flex-col gap-[12px] max-md:flex">
                <a
                  href="https://www.kivo.talk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-[8px] rounded-[6px] bg-[#242424] px-[24px] py-[8px]"
                >
                  <span className="text-[18px] leading-[200%] font-bold tracking-[0.72px] text-white">
                    KIVO TALKを知る
                  </span>
                  <img
                    src="/assets/images/icon-open.svg"
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDownloadModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-[8px] rounded-[6px] bg-[#F98528] px-[24px] py-[8px]"
                >
                  <span className="text-[18px] leading-[200%] font-bold tracking-[0.72px] text-white">
                    ダウンロード
                  </span>
                  <img
                    src="/assets/images/icon-download.svg"
                    alt=""
                    className="h-[24px] w-[24px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[12px] max-lg:flex-col max-lg:items-end max-md:hidden">
          <a
            href="https://www.kivo.talk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] rounded-[6px] bg-[#242424] px-[24px] py-[8px]"
          >
            <span className="text-[18px] leading-[200%] font-bold tracking-[0.72px] text-white">
              KIVO TALKを知る
            </span>
            <img
              src="/assets/images/icon-open.svg"
              alt=""
              className="aspect-square h-[24px] w-[24px]"
            />
          </a>

          <button
            type="button"
            onClick={() => setIsDownloadModalOpen(true)}
            className="flex w-[239px] items-center justify-center gap-[8px] rounded-[6px] bg-[#F98528] px-[24px] py-[8px]"
          >
            <span className="text-[18px] leading-[200%] font-bold tracking-[0.72px] text-white">
              ダウンロード
            </span>
            <img
              src="/assets/images/icon-download.svg"
              alt=""
              className="aspect-square h-[24px] w-[24px]"
            />
          </button>
        </div>
      </div>
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        title={
          pathname === '/manga'
            ? 'KIVOで投稿者として登録しよう！'
            : 'KIVOでクリエイター登録しよう！'
        }
      />
    </header>
  );
};

export default Header;
