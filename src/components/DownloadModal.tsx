'use client';

import { createPortal } from 'react-dom';

type DownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

const DownloadModal = ({
  isOpen,
  onClose,
  title = 'KIVOでクリエイター登録しよう！',
}: DownloadModalProps) => {
  if (!isOpen || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[15px]"
      onClick={onClose}
    >
      <div
        className="relative inline-flex flex-col items-center gap-[32px] rounded-[20px] border border-white/80 bg-white/30 px-[96px] py-[56px] backdrop-blur-[40px] max-md:mx-[16px] max-md:w-[calc(100%-32px)] max-md:px-[30px] max-md:py-[36px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download modal"
          className="absolute top-[12px] right-[12px] hidden h-[32px] w-[32px] items-center justify-center rounded-full border border-white/60 text-[20px] leading-none text-white max-md:flex"
        >
          ×
        </button>

        <p className="text-center text-[36px] leading-[156%] font-bold tracking-[0.72px] text-white max-md:text-[28px]">
          {title}
        </p>

        <div className="flex items-center gap-[10px] rounded-[12px] bg-[#F2F2F9] p-[32px] max-md:hidden">
          <img
            src="/assets/images/qr.png"
            alt="QR code"
            className="aspect-square h-[220px] w-[220px] object-cover"
          />
        </div>

        <div className="mt-[8px] flex items-center gap-[20px] max-md:flex-col">
          <img
            src="/assets/images/store-apple.svg"
            alt="Download on the App Store"
            className="h-[68px] w-[227px]"
          />
          <img
            src="/assets/images/store-googleplay.svg"
            alt="Get it on Google Play"
            className="h-[68px] w-[227px]"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default DownloadModal;
