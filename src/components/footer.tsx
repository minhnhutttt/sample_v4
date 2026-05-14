'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';

import DownloadModal from './DownloadModal';

const Footer = () => {
  const pathname = usePathname();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <footer className="bg-[#F98528]">
      <div className="mx-auto flex w-full max-w-[1280px] items-start justify-center gap-[100px] px-[60px] py-[80px] max-md:flex-col max-md:items-center max-md:gap-[24px]">
        <a
          href="https://www.kivo.talk/legal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start pb-[4px] max-md:items-center"
        >
          <p className="text-[16px] leading-[200%] font-medium tracking-[0.64px] text-[#242424] max-md:text-center">
            法的情報
          </p>
          <p className="-mt-[4px] text-[14px] leading-[172%] font-normal tracking-[0.84px] text-[rgba(36,36,36,0.50)] max-md:text-center">
            LEGAL
          </p>
        </a>

        <a
          href="https://www.kivo.talk/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start pb-[4px] max-md:items-center"
        >
          <div className="flex items-center">
            <p className="text-[16px] leading-[200%] font-medium tracking-[0.64px] text-[#242424] max-md:text-center">
              KIVO TALKについて
            </p>
            <img
              src="/assets/images/icon-open.svg"
              alt=""
              className="ml-[8px] h-[24px] w-[24px] brightness-0"
            />
          </div>
          <p className="text-[14px] leading-[172%] font-normal tracking-[0.84px] text-[rgba(36,36,36,0.50)] max-md:text-center">
            KIVO TALK OFFICIAL
          </p>
        </a>

        <button
          onClick={() => setIsDownloadModalOpen(true)}
          className="flex flex-col items-start pb-[4px] max-md:items-center"
        >
          <p className="text-[16px] leading-[200%] font-medium tracking-[0.64px] text-[#242424] max-md:text-center">
            ダウンロード
          </p>
          <p className="text-[14px] leading-[172%] font-normal tracking-[0.84px] text-[rgba(36,36,36,0.50)] max-md:text-center">
            DOWNLOAD
          </p>
        </button>
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
    </footer>
  );
};

export default Footer;
