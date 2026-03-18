'use client';

import { useRef, useState } from 'react';

import gsap from 'gsap';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    question: 'BasicとPremiumの違いは何ですか？',
    answer: [
      'Premiumではパブリックチャンネル（サブスクリプション型）の作成・1:N招待リンクの発行・アフィリエイト報酬の受け取りが可能になります。パブリックドロップの出品はBasicでも利用できます。',
    ],
  },
  {
    question: 'パブリックチャンネルはいつでも有料化できますか？',
    answer:
      'はい。ただし一度設定した月額ポイントは値上げのみ可能で、値下げはできません',
  },
  {
    question: 'アフィリエイト報酬はいつ支払われますか？',
    answer: '招待したユーザーのPremium料金が確定した翌月に支払われます。',
  },
  {
    question: '月額ポイントは変更できますか？',
    answer: '値上げのみ可能です。価値を下げない設計になっています。',
  },
  {
    question: 'キャンセルはいつでもできますか？',
    answer:
      'はい。iPhone、Android端末それぞれデバイスのサブスクリプション設定からいつでもキャンセルできます。',
  },
  {
    question: 'ダウングレードした場合、チャンネルはどうなりますか？',
    answer:
      '既存チャンネルの運営権限はそのまま継続されます。ただし収益の分配率が変更されます。',
  },
  {
    question: '招待リンクの上限はありますか？',
    answer: 'Premiumユーザーの招待リンクは回数・人数ともに制限がありません。',
  },
];

interface AccordionItemProps {
  item: FAQItem;
  index: number;
}

function AccordionItem({ item, index }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggle = () => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    // Kill previous animation
    tl.current?.kill();

    tl.current = gsap.timeline();

    if (!isOpen) {
      // Opening
      gsap.set(content, { display: 'block' });
      tl.current
        .fromTo(
          content,
          { height: 0, opacity: 0 },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
          },
        )
        .to(
          icon,
          {
            rotation: 45,
            duration: 0.3,
            ease: 'power2.out',
          },
          '<',
        );
    } else {
      // Closing
      tl.current
        .to(content, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(content, { display: 'none' });
          },
        })
        .to(
          icon,
          {
            rotation: 0,
            duration: 0.3,
            ease: 'power2.in',
          },
          '<',
        );
    }

    setIsOpen(!isOpen);
  };

  const answers = Array.isArray(item.answer) ? item.answer : [item.answer];

  return (
    <div className="border-t border-gray-200 last:border-b">
      <button
        onClick={toggle}
        className={`group flex w-full items-center justify-between py-5 text-left transition-colors duration-200 ${
          isOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
        }`}
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold tracking-tight transition-colors duration-200 md:text-2xl ${
            isOpen ? 'text-gray-900' : 'text-gray-500'
          }`}
        >
          {item.question}
        </span>

        <span
          ref={iconRef}
          className={`ml-6 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
            isOpen
              ? 'border-gray-900 text-gray-900'
              : 'border-gray-400 text-gray-400 group-hover:border-gray-700 group-hover:text-gray-700'
          }`}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="0"
              x2="6"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="6"
              x2="12"
              y2="6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          display: isOpen ? 'block' : 'none',
          overflow: 'hidden',
        }}
      >
        <div className="space-y-4 pb-6">
          {answers.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-500">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        よくある質問
      </h2>

      <div>
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
