'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { EXTERNAL_LINKS } from '@/config/constants';

const PromoModal = () => {
  const [open, setOpen] = useState(true);

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

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="池尻大橋・中目黒で価格最安のご案内"
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(26,26,26,0.8)] px-[15px]"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-[330px] rounded-[16px] border-2 border-white bg-[rgba(184,175,77,0.8)] px-[20px] pt-[20px] pb-[20px]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="閉じる"
          className="absolute -top-[9px] right-[-6px] transition-transform hover:scale-110"
        >
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            aria-hidden
          >
            <circle cx="12.5" cy="12.5" r="12" fill="#000" stroke="#fff" />
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

        <div className="flex flex-col items-center gap-[16px]">
          <div className="relative">
            <span className="pointer-events-none absolute top-[-24px] left-[-6px] block h-[106px] w-[74px] overflow-hidden">
              <Image
                src="/assets/images/modal-promo-trainer.png"
                alt=""
                width={222}
                height={166}
                className="absolute top-[-36px] left-[-122px] z-10 max-w-none"
              />
            </span>
            <div className="relative ml-5">
              <Image
                src="/assets/images/badge-tag-wide.svg"
                alt=""
                width={234}
                height={65}
                className="block h-[65px] w-[234px]"
              />
              <p className="absolute inset-0 flex flex-col items-center justify-center text-center leading-[1.22] font-bold tracking-[0.8px] text-black">
                <span>
                  <span className="text-[20px]">池尻大橋・中目黒</span>
                  <span className="text-[16px]">で</span>
                </span>
                <span className="text-[20px]">価格最安</span>
              </p>
            </div>
          </div>

          <div className="relative z-20 flex h-[109px] w-[244px] flex-col items-center rounded-[10px] bg-[#ffe853] pt-[12px]">
            <p className="text-ink text-[14px] leading-[1.4] font-bold tracking-[-0.09em] whitespace-nowrap">
              セミパーソナルトレーニング
            </p>
            <p className="mt-[2px] font-bold text-[#333]">
              <span className="text-[30px] leading-[1.45]">930</span>
              <span className="text-[14px] leading-[1.8] tracking-[0.12em]">
                円/1日あたり
              </span>
            </p>
            <span className="mt-[2px] block h-px w-[214px] bg-[#666]" />
            <p className="mt-[2px] w-[214px] text-right text-[13px] leading-[1.8] font-normal tracking-[0.08em] text-[#333]">
              ※20回通った場合
            </p>
          </div>

          {/* caption — Figma 162:1136 */}
          <p className="text-center text-[18px] leading-[21px] font-semibold text-white">
            当日入会で入会金無料！
            <br />
            トータル60分の初回体験が0円
          </p>

          {/* CTA — Figma 162:1134 */}
          <a
            href={EXTERNAL_LINKS.reservation}
            className="flex w-[278px] items-center justify-center rounded-[12px] border-2 border-white bg-[#ff4613] px-[20px] py-[10px] text-center font-extrabold whitespace-nowrap text-white drop-shadow-[0_4px_6px_rgba(238,154,16,0.2)] transition-transform hover:scale-[1.02]"
          >
            <span className="leading-none">
              <span className="text-[25px]">無料</span>
              <span className="text-[14px] tracking-[0.02em]">で</span>
              <span className="text-[18px] tracking-[0.02em]">
                初回体験を予約する
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
