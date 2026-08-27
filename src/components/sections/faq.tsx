'use client';

import { useState } from 'react';

import Image from 'next/image';

import { FAQ_ITEMS } from '@/data/lp';

import PlainTitle from '../ui/plain-title';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-section="faq"
      className="bg-faq-surface relative flex scroll-mt-[24px] flex-col gap-[24px] overflow-hidden px-[20px] pt-[10px] pb-[48px]"
    >
      <Image
        src="/assets/images/texture-bokeh-faq.png"
        alt=""
        width={375}
        height={1307}
        className="pointer-events-none absolute top-[-4px] left-0 h-[1307px] w-[375px] max-w-none"
      />

      <div className="relative">
        <PlainTitle en="FAQ" jp="よくある質問" />
      </div>

      <ul className="relative flex flex-col gap-[12px]">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={item.question}
              className="rounded-[12px] border border-[#bbb] bg-white"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start gap-[8px] p-[16px] text-left tracking-[0.64px]"
              >
                <span className="text-[16px] leading-[2] font-bold text-[#5e5e5e]">
                  Q.
                </span>
                <span className="text-ink flex-1 text-[16px] leading-[2] font-bold">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`mt-[10px] size-[10px] shrink-0 border-r-2 border-b-2 border-[#5e5e5e] transition-transform duration-300 ${
                    isOpen ? 'rotate-[225deg]' : 'rotate-45'
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mx-[16px] border-t border-[#e5ecef]" />
                  <div className="flex items-start gap-[8px] p-[16px] pt-[10px] text-[16px] leading-[2] tracking-[0.64px]">
                    <span className="font-bold text-[#5e5e5e]">A.</span>
                    <p className="text-ink flex-1">{item.answer}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
