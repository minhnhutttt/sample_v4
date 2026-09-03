'use client';

import { useState } from 'react';

import Image from 'next/image';

import PlainTitle from '@/components/ui/plain-title';

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: '体験当日に必要なものはなんですか？',
    answer:
      'トレーニングで汗をかいてもOKな動きやすいウェア、水分補給の飲料、汗拭き用のタオル、室内用のトレーニングシューズ（無料レンタルあり）をお持ちください。',
  },
  {
    question: '運動初心者でも大丈夫ですか？',
    answer:
      'もちろん大歓迎です！ALONAのお客さまの約8割が初心者からのスタートです。お客さまのレベルや当日の体調に合わせた負荷でパーソナル指導を行います。',
  },
  {
    question: 'ピラティスとトレーニングを同じ日に両方受けることはできますか？',
    answer:
      '申し訳ございません。質の高いレッスン効果を実感いただくため、原則として同日に両方のセッションを連続で受講いただくことは承っておりません。',
  },
  {
    question: 'キャンセルや日時変更の規定はどうなっていますか？',
    answer:
      '前日の午前10時までのご連絡は無料です。当日の急なキャンセルも、公式LINEよりご連絡いただければキャンセル料なしで調整可能です。',
  },
  {
    question: '男性も通うことができますか？年齢制限はありますか？',
    answer:
      '男性のお客様も大歓迎です！20代から60代以上まで、男女問わずそれぞれの目標に向けて幅広く通っていただいております。',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-section="faq"
      className="bg-faq-surface relative flex scroll-mt-[24px] flex-col gap-[24px] overflow-hidden px-[20px] pt-[20px] pb-[48px]"
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
