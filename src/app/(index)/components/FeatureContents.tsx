'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DOWNLOAD_URL } from '@/config/constants';

import MangaReaderModal, { type MangaItem } from './MangaReaderModal';

type FeatureContentsProps = {
  items: MangaItem[];
};

const FeatureContents = ({ items }: FeatureContentsProps) => {
  const [openedItem, setOpenedItem] = useState<MangaItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-15 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="flex h-full flex-col gap-4">
            <button
              type="button"
              onClick={() => setOpenedItem(item)}
              className="flex flex-col gap-4 text-left transition-opacity hover:opacity-80"
            >
              <span className="relative block aspect-square w-full overflow-hidden rounded-xl bg-[#E0E0E0]">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 45vw, 260px"
                  className="object-cover object-top"
                />
              </span>
              <span className="flex flex-col gap-2 md:gap-3">
                <span className="flex items-center gap-1">
                  <Image
                    src="/assets/icons/ic-import-contacts.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="size-5 shrink-0 md:size-7"
                  />
                  <span className="text-[14px] leading-[1.7] font-medium tracking-[0.04em] text-[#242424] md:text-[20px]">
                    {item.title}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <Image
                    src="/assets/icons/ic-person.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="size-5 shrink-0 md:size-7"
                  />
                  <span className="text-[15px] leading-[1.7] font-medium tracking-[0.04em] text-[#242424] md:text-[20px]">
                    {item.author}
                  </span>
                </span>
              </span>
            </button>
            <a
              href={DOWNLOAD_URL}
              className="mt-auto flex w-full items-center justify-center rounded-xl bg-[#F78629] px-2 py-2.5 drop-shadow-[0_6px_6px_rgba(213,106,18,0.4)] transition-opacity hover:opacity-90 md:px-8 md:py-4"
            >
              <span className="font-inter text-center text-[12px] leading-[1.6] font-bold tracking-[0.04em] text-white md:text-[18px] md:leading-[2] md:whitespace-nowrap">
                この作家の招待を受ける
              </span>
            </a>
          </div>
        ))}
      </div>

      {openedItem && (
        <MangaReaderModal
          key={openedItem.id}
          item={openedItem}
          onClose={() => setOpenedItem(null)}
        />
      )}
    </>
  );
};

export default FeatureContents;
