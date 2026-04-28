'use client';

import { useState } from 'react';

const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: '一度上がったランクが下がることはありますか？',
    answer:
      'いいえ、ありません。KIVOランクは「累積獲得ポイント」で判定されるため、活動を休止してもランクが下がることはありません。あなたの積み上げた実績は、永久に保証されます。',
  },
  {
    question:
      'ポイントを将来の機能で「利用」した場合、ランクも下がってしまいますか？',
    answer:
      'いいえ、下がりません。ランク判定には「これまでに獲得した全ポイント」の数値を使用します。ポイントを使っても、あなたのステータスが損なわれることはありません。',
  },
  {
    question: '自分のランクを非表示に設定することはできますか？',
    answer:
      'いいえ、現在の仕様ではできません。KIVOにおいてランクは「信頼の証」であり、他のユーザーが安心して取引や交流を行うための重要な指標となっているため、常に表示される仕組みとなっています。',
  },
  {
    question: '複数のアカウントを持っている場合、ポイントを合算できますか？',
    answer:
      'いいえ、できません。ポイントおよびランクは各アカウント（KIVO ID）に紐づいて管理されます。複数のアカウント間でポイントを移行・統合することはできません。',
  },
  {
    question:
      '将来的に出金機能が実装された際、それまでに貯めたポイントも対象になりますか？',
    answer:
      'はい、その予定です。KIVOではサービス開始時より、将来の拡張を見据えて全てのポイントを厳格に記録・保持しています。今からポイントを貯めておくことで、将来のメリットを最大化できます。',
  },
  {
    question:
      'ポイントが正しく反映されていないと感じる場合はどうすればいいですか？',
    answer:
      'ポイントの加算には、データの整合性を確認するため若干のタイムラグが生じる場合があります。数日経過しても反映されない場合は、お手数ですがサポートにお問い合わせください。',
  },
];

const KivoPointFaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-[#FFF8F2] py-[100px] max-md:py-[72px]">
      <div className="mx-auto flex w-[900px] flex-col items-center gap-[85px] max-md:w-full max-md:gap-[48px] max-md:px-[16px]">
        <h2
          className="w-[900px] text-center text-[40px] leading-[150%] font-bold tracking-[0.8px] text-[#242424] max-md:w-full max-md:text-[32px]"
          style={mainFont}
        >
          よくある質問
        </h2>

        <div className="w-[900px] max-md:w-full">
          <div className="border-t border-[#CACACA]" />
          <div className="flex flex-col">
            {faqItems.map((item, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <article
                  key={item.question}
                  className="border-b border-[#CACACA] py-[20px]"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
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
                        {item.question}
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
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KivoPointFaqSection;
