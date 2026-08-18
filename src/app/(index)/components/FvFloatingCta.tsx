'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import {
  CHANNEL_URL,
  DOWNLOAD_SECTION_ID,
  DOWNLOAD_URL,
} from '@/config/constants';

const FvFloatingCta = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(DOWNLOAD_SECTION_ID);

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-4 bottom-3 z-40 flex items-center justify-center gap-4 transition-opacity duration-300 md:hidden ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <a
        href={DOWNLOAD_URL}
        className="flex flex-col items-center justify-center gap-1 rounded-md bg-[#242424] px-[18px] py-2 drop-shadow-[0_6px_6px_rgba(0,0,0,0.25)]"
      >
        <span className="text-[11px] leading-[1.72] font-bold text-white">
          アプリをダウンロード
        </span>
        <Image
          src="/assets/icons/ic-download.svg"
          alt=""
          width={20}
          height={20}
          className="size-5 shrink-0"
        />
      </a>

      <a
        href={CHANNEL_URL}
        className="flex flex-col items-center justify-center gap-1 rounded-md bg-[#F78629] px-[18px] py-2 drop-shadow-[0_6px_6px_rgba(213,106,18,0.4)]"
      >
        <span className="text-[11px] leading-[1.72] font-bold text-white">
          文庫社のチャンネルを見る
        </span>
        <Image
          src="/assets/icons/ic-arrow-right.svg"
          alt=""
          width={20}
          height={20}
          className="size-5 shrink-0"
        />
      </a>
    </div>
  );
};

export default FvFloatingCta;
