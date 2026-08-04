'use client';

import { useState } from 'react';

import Image from 'next/image';

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-5 border-b border-[#cacaca] py-5">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start text-left"
      >
        <div className="flex flex-1 items-start gap-4 pr-3">
          <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-full bg-[#434f8e] py-1">
            <p className="text-[18px] font-bold text-white">Q</p>
          </div>
          <p className="flex-1 text-justify text-[18px] leading-[2] font-medium text-[#1c213b]">
            {question}
          </p>
        </div>
        <div className="flex shrink-0 items-center pt-3 md:pt-1">
          <Image
            src="/assets/images/faq/chevron.svg"
            alt=""
            aria-hidden
            width={20}
            height={12}
            className={isOpen ? 'rotate-180' : ''}
          />
        </div>
      </button>

      {isOpen && (
        <div className="flex items-start gap-4">
          <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-full bg-[#f03d22] py-1">
            <p className="text-[18px] font-bold text-white">A</p>
          </div>
          <p className="flex-1 text-[18px] leading-[2] font-bold text-[#1c213b]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
