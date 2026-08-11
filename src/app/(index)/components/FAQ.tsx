'use client';

import { useState } from 'react';

import Image from 'next/image';

import SectionHeading from '@/components/section-heading';

const FAQS = [
  {
    question: '登録や利用にお金はかかりますか？',
    answer:
      'アカウントの作成、およびアプリの利用は完全に無料です。有料コンテンツを閲覧するためのポイントも、アプリ内の「ポイ活（オファーウォール）」を使って無料で貯められるため、自己負担0円で楽しむことができます。',
  },
  {
    question: 'スクリーンショットができないのはなぜですか？',
    answer:
      '作家の著作権（無断転載や海賊版の防止）を守ると同時に、作品を購入してくださった読者の皆様に「自分だけが持つ特別なデジタル所有価値」を感じていただくための、KIVO TALK独自の保護システム（魔法の鍵）です。ご理解とご協力をお願いいたします。',
  },
  {
    question: '文庫社の専用リンクから登録した方がいい理由は？',
    answer:
      '本ページに記載されている文庫社専用の招待リンク（またはQRコード）から登録することで、文庫社所属の人気作家陣の個別チャンネルや先行DROPへ迷うことなくダイレクトに繋がることができます。',
  },
  {
    question: '後から他の登録方法に切り替えられますか？',
    answer:
      'KIVO TALKのアカウント（KIVO ID）は「1つのID」で完結する仕組みになっており、最初の登録時にどのリンクを経由したかが非常に重要になります。ぜひ、この公式の文庫社招待リンクからご登録ください。',
  },
];

const Badge = ({ label, className }: { label: string; className: string }) => (
  <span
    className={`font-inter flex size-9 shrink-0 items-center justify-center rounded-full text-[18px] leading-[2] font-bold tracking-[0.04em] text-white ${className}`}
  >
    {label}
  </span>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState(() => FAQS.map(() => false));

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  };

  return (
    <div className="relative overflow-hidden px-5 py-10 md:px-15 md:py-13">
      <div className="relative mx-auto w-full max-w-[900px]">
        <SectionHeading className="text-center">
          <p>FAQ</p>
        </SectionHeading>
        <div className="mt-14 w-full md:mt-25">
          {FAQS.map((faq, index) => {
            const isOpen = openItems[index];

            return (
              <div
                key={faq.question}
                className="flex w-full flex-col gap-3 border-b border-[#CACACA] py-5 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-start text-left"
                >
                  <span className="flex min-w-0 flex-1 items-start gap-2 pr-3">
                    <Badge label="Q" className="bg-[#242424]" />
                    <span className="min-w-0 flex-1 text-[16px] leading-[2] font-normal tracking-[0.04em] text-[#492304] md:text-[18px]">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center pt-1">
                    <span className="flex size-6 items-center justify-center">
                      <Image
                        src="/assets/icons/ic-chevron-down.svg"
                        alt=""
                        width={11}
                        height={6}
                        className={`h-[6.02px] w-[10.68px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="flex w-full items-start gap-2"
                  >
                    <Badge label="A" className="bg-[#F98528]" />
                    <p className="font-inter min-w-0 flex-1 text-[16px] leading-[2] font-bold tracking-[0.04em] text-[#492304] md:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
