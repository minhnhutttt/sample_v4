'use client';

import { useCallback, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import Image from 'next/image';
import Link from 'next/link';

const KIVO_ID = 'bunko_agency_01';
const PARTNER_INFO_ID = 'partner-info';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const copyKivoId = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(KIVO_ID);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-[#242424] px-5 max-md:px-4 md:h-20 md:px-15">
      <Link href="/" className="flex">
        <Image
          src="/assets/images/logo.png"
          width={246}
          height={48}
          alt="KIVO TALK"
          className="max-md:h-8 max-md:w-auto"
        />
      </Link>
      <div className="font-inter flex tracking-wider max-lg:flex-col max-md:hidden lg:items-center lg:gap-10">
        <p className="leading-loose font-medium text-white md:text-[18px]">
          <span className="text-[#AEAEAE]">KIVO TALK公認パートナー :</span>{' '}
          文庫社
        </p>
        <button
          type="button"
          onClick={copyKivoId}
          aria-label={`KIVO ID ${KIVO_ID} をコピー`}
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          <div className="flex gap-1.5 leading-loose font-medium whitespace-nowrap text-white md:text-[18px]">
            <p className="text-[#AEAEAE]">KIVO ID : </p>
            <p>{KIVO_ID}</p>
          </div>
          <span className="relative">
            <Image
              src="/assets/icons/ic-copy.svg"
              width={24}
              height={24}
              alt="copy"
            />
            {copied && (
              <span
                role="status"
                className="absolute top-full right-0 mt-2 rounded bg-white/90 px-2 py-1 text-[13px] font-medium whitespace-nowrap text-[#242424]"
              >
                コピーしました
              </span>
            )}
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={PARTNER_INFO_ID}
        className="flex flex-col items-center gap-0.5 md:hidden"
      >
        <Image
          src="/assets/icons/ic-account-circle.svg"
          width={28}
          height={28}
          alt=""
          className="size-7 shrink-0"
        />
        <span className="text-[10px] leading-none tracking-[0.4px] text-white">
          パートナー情報
        </span>
      </button>

      {isOpen && (
        <>
          {createPortal(
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-45 bg-black/40 backdrop-blur-[4.5px] md:hidden"
            />,
            document.body,
          )}

          <div
            id={PARTNER_INFO_ID}
            className="absolute top-[calc(100%+4px)] right-4 flex flex-col gap-2 rounded-xl bg-[#767676] p-5 drop-shadow-[0_4px_10px_rgba(59,59,59,0.5)] md:hidden"
          >
            <Image
              src="/assets/icons/ic-popup-arrow.svg"
              width={27}
              height={23}
              alt=""
              className="absolute top-[-9px] right-[23px] h-[23px] w-[26.25px]"
            />
            <p className="text-[16px] leading-[2] font-medium tracking-[0.64px] text-white">
              <span className="text-[#AEAEAE]">KIVO TALK公認パートナー :</span>{' '}
              文庫社
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[16px] leading-[2] font-medium tracking-[0.64px] whitespace-nowrap text-white">
                <span className="text-[#C7C7C7]">KIVO ID : </span>
                {KIVO_ID}
              </p>
              <button
                type="button"
                onClick={copyKivoId}
                aria-label={`KIVO ID ${KIVO_ID} をコピー`}
                className="-m-2 p-2"
              >
                <Image
                  src="/assets/icons/ic-copy.svg"
                  width={24}
                  height={24}
                  alt=""
                  className="size-6 shrink-0"
                />
              </button>
            </div>
            {copied && (
              <span
                role="status"
                className="absolute top-full right-0 mt-2 rounded bg-white/90 px-2 py-1 text-[13px] font-medium whitespace-nowrap text-[#242424]"
              >
                コピーしました
              </span>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
