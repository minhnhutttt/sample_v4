'use client';

import { ReactNode, useState } from 'react';


const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

interface AccordionItemProps {
  question: string;
  children: ReactNode;
}

export function Faq({ question, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-b border-[#CACACA] py-[20px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 flex-1 items-start gap-[8px] pr-[12px]">
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#242424] text-[18px] leading-none font-bold tracking-[0.72px] text-white">
            Q
          </div>
          <p
            className="min-w-0 flex-1 text-[18px] leading-[200%] font-medium tracking-[0.72px] text-[#492304] max-md:text-[16px]"
            style={mainFont}
          >
            {question}
          </p>
        </div>
        <div className="pt-[4px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={isOpen ? '' : 'rotate-180'}
          >
            <path
              d="M8 14L12 10L16 14"
              fill="none"
              stroke="#F98528"
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </button>

      {isOpen ? (
        <div className="mt-[12px] flex items-start gap-[8px]">
          <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#F98528] text-[18px] leading-none font-bold tracking-[0.72px] text-white">
            A
          </div>
          <p
            className="min-w-0 flex-1 text-[18px] leading-[200%] font-bold tracking-[0.72px] text-[#492304] max-md:text-[16px]"
            style={mainFont}
          >
            {children}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default Faq;
