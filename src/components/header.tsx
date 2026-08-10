'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const KIVO_ID = 'bunko_agency_01';

const Header = () => {
  const [copied, setCopied] = useState(false);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-[#242424] px-5 md:h-20 md:px-15">
      <Link href="/" className="flex">
        <Image
          src="/assets/images/logo.png"
          width={246}
          height={48}
          alt="KIVO TALK"
          className="max-md:w-50"
        />
      </Link>
      <div className="font-inter flex tracking-wider max-lg:flex-col max-md:hidden lg:items-center lg:gap-10">
        <p className="leading-loose font-medium text-white md:text-[18px]">
          文庫社 公認パートナー
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
    </header>
  );
};

export default Header;
