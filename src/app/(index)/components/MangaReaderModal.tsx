'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

import { DOWNLOAD_URL } from '@/config/constants';

export type MangaItem = {
  id: string;
  title: string;
  author: string;
  cover: string;
  pages: string[];
};

type MangaReaderModalProps = {
  item: MangaItem;
  onClose: () => void;
};

type SplideInstance = {
  Components: {
    Move: {
      toIndex: (position: number) => number;
      getPosition: () => number;
    };
  };
};

const CONTROL_BUTTON_CLASS =
  'flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/15 shadow-[0_4px_9px_rgba(0,0,0,0.25)] backdrop-blur-[5px] transition-opacity disabled:pointer-events-none disabled:opacity-40 md:size-[46px]';

const MangaReaderModal = ({ item, onClose }: MangaReaderModalProps) => {
  const splideRef = useRef<Splide>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pointerDownInside = useRef(false);
  const [index, setIndex] = useState(0);

  const total = item.pages.length;
  const isFirstPage = index === 0;
  const isLastPage = index === total - 1;

  const goNext = useCallback(() => splideRef.current?.go('>'), []);
  const goPrev = useCallback(() => splideRef.current?.go('<'), []);

  const handleMove = useCallback(
    (_splide: unknown, newIndex: number) => setIndex(newIndex),
    [],
  );

  const handleDragging = useCallback(
    (splide: SplideInstance) => {
      const { Move } = splide.Components;
      const dragIndex = Move.toIndex(Move.getPosition());

      setIndex(Math.min(Math.max(dragIndex, 0), total - 1));
    },
    [total],
  );

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    pointerDownInside.current = Boolean(
      contentRef.current?.contains(event.target as Node),
    );
  }, []);

  const handleBackdropClick = useCallback(() => {
    if (pointerDownInside.current) {
      pointerDownInside.current = false;
      return;
    }

    onClose();
  }, [onClose]);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goNext();
      if (event.key === 'ArrowRight') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onClose]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/65"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onPointerDown={handlePointerDown}
      onClick={handleBackdropClick}
    >
      <button
        type="button"
        aria-label="閉じる"
        onClick={onClose}
        className="fixed top-5 right-5 z-10 flex size-11 items-center justify-center transition-opacity hover:opacity-70"
      >
        <Image
          src="/assets/icons/ic-close.svg"
          alt=""
          width={28}
          height={28}
          className="size-7"
        />
      </button>

      <div className="flex min-h-full items-center justify-center p-5 md:p-8">
        <div
          ref={contentRef}
          className="flex w-full max-w-[397px] flex-col items-center gap-4"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative aspect-[397/560] w-full overflow-hidden rounded-[10px] bg-black/20 drop-shadow-[0_6px_8px_rgba(0,0,0,0.2)]">
            <Splide
              hasTrack={false}
              aria-label={item.title}
              onMove={handleMove}
              onDragging={handleDragging}
              ref={splideRef}
              options={{
                direction: 'rtl',
                type: 'slide',
                perPage: 1,
                arrows: false,
                pagination: false,
                speed: 400,
                height: '100%',
              }}
              className="size-full"
            >
              <div className="splide__track h-full">
                <ul className="splide__list h-full">
                  {item.pages.map((page, pageIndex) => (
                    <SplideSlide key={page} className="h-full">
                      <div className="relative size-full">
                        <Image
                          src={page}
                          alt={`${item.title} ${pageIndex + 1}ページ目`}
                          fill
                          sizes="(max-width: 767px) 90vw, 397px"
                          priority={pageIndex === 0}
                          className="object-cover"
                        />
                        {pageIndex === total - 1 && (
                          <div
                            dir="ltr"
                            className="absolute inset-0 flex items-center justify-center bg-black/50 px-5 backdrop-blur-[5px]"
                          >
                            <div className="flex w-full max-w-[308px] flex-col items-center gap-4">
                              <p className="font-inter text-center text-[16px] leading-[2] font-medium tracking-[0.04em] text-white [text-shadow:0_0_8px_rgba(0,0,0,0.35)] md:text-[18px]">
                                続きはKIVO TALKでチェック！
                              </p>
                              <a
                                href={DOWNLOAD_URL}
                                className="flex w-full items-center justify-center rounded-xl bg-[#F78629] px-4 py-4 drop-shadow-[0_6px_6px_rgba(213,106,18,0.4)] transition-opacity hover:opacity-90 md:px-8 md:py-6"
                              >
                                <span className="text-[16px] leading-[1.8] font-bold tracking-[0.04em] whitespace-nowrap text-white md:text-[20px]">
                                  この作家の招待を受ける
                                </span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </SplideSlide>
                  ))}
                </ul>
              </div>
            </Splide>
          </div>

          <div className="flex w-[104px] flex-col items-center gap-4 md:w-[120px]">
            <div className="flex w-full items-center justify-between">
              <button
                type="button"
                aria-label="次のページ"
                onClick={goNext}
                disabled={isLastPage}
                className={CONTROL_BUTTON_CLASS}
              >
                <Image
                  src="/assets/icons/ic-arrow-back-ios.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              </button>
              <button
                type="button"
                aria-label="前のページ"
                onClick={goPrev}
                disabled={isFirstPage}
                className={CONTROL_BUTTON_CLASS}
              >
                <Image
                  src="/assets/icons/ic-arrow-forward-ios.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              </button>
            </div>
            <p className="font-inter flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/15 px-8 py-1 text-[18px] leading-none font-medium tracking-[0.03em] text-white backdrop-blur-[5px]">
              <span>{index + 1}</span>
              <span>/</span>
              <span>{total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MangaReaderModal;
