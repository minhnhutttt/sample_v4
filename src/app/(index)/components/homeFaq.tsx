'use client';

import { useState } from 'react';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const FAQS = [
  {
    q: '既存のポータルサイトや一括見積もりサイトとの違いは何ですか？',
    a: '最大の違いは、「現役の建設会社が運営・審査している点」と「AIによる高精度なマッチング」の2点です。安さだけで選ばれる不毛な相見積もりを排除し、職人様の技術が『適正価格』で評価される仕組みを実現しています。',
  },
  {
    q: '本当に自社の得意な工事の案件が来ますか？',
    a: 'はい。くらしポートでは、会社名だけでなく、貴社の得意な工事を「サービス単位」で細かく複数登録できます。そのサービス内容と、お客様の希望をAIがピンポイントで照合するため、ミスマッチのない質の高い問い合わせだけが届きます。',
  },
  {
    q: '掲載料金や成約手数料以外に、費用はかかりますか？',
    a: 'いいえ、かかりません。月額利用料（3,000円）と成約時の手数料1%のみのシンプルな料金体系です。初期費用や、一般的な一括見積もりサイトにあるような「案件を紹介されただけで費用が発生する（リード課金）」といった隠れコストは一切ございません。',
  },
  {
    q: '契約期間の縛りやペナルティはありますか？',
    a: '最低利用期間などの縛りはございません。退会をご希望の場合は、所定の手続きでいつでも解約が可能です。',
  },
  {
    q: 'どんな業者でも登録できますか？',
    a: 'いいえ。お客様に「本物の安心」をご提供するため、建設業許可の保有と損害保険への加入を必須としております。事前エントリー後、プロの目で施工実績等を確認する厳格な審査を通過した優良業者様のみがご登録いただけます。',
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="fade-up overflow-hidden rounded bg-white pb-5 transition-shadow duration-200">
      {/* Question row */}
      <button
        onClick={onToggle}
        className="group flex w-full items-start gap-4 px-5 pt-5 text-left md:px-10"
        aria-expanded={isOpen}
      >
        <span className="flex-shrink-0 text-[22px] font-bold text-[#0067D3] md:text-[32px]">
          Q
        </span>
        <span className="flex-1 text-[14px] leading-loose font-medium text-[#1A4673] md:mt-2 md:text-[18px]">
          {q}
        </span>
        <span
          className="mt-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded font-bold text-blue-600 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)' }}
        >
          {isOpen ? (
            <svg className="w-[18px]" viewBox="0 0 14 3" fill="none">
              <rect width="14" height="2.5" rx="1.25" fill="#2563eb" />
            </svg>
          ) : (
            <svg className="w-[18px]" viewBox="0 0 14 14" fill="none">
              <rect
                x="6"
                y="0"
                width="2.5"
                height="14"
                rx="1.25"
                fill="#2563eb"
              />
              <rect y="6" width="14" height="2.5" rx="1.25" fill="#2563eb" />
            </svg>
          )}
        </span>
      </button>

      {/* Answer row */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '600px' : '0px' }}
      >
        <div className="flex gap-4 px-5 md:px-10">
          <span className="flex-shrink-0 text-[22px] font-bold text-[#F7483B] md:text-[32px]">
            A
          </span>
          <p className="mt-2 text-[14px] leading-loose font-medium text-[#1A4673] md:text-[18px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeFaq() {
  const ref = useScrollAnimations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      ref={ref}
      className="w-full scroll-mt-20 bg-[#F2F2F2] px-5 py-20"
    >
      <div className="mx-auto w-full max-w-[920px]">
        {/* Heading */}
        <h4 className="fade-up px-5 text-center text-[26px] leading-snug font-black tracking-tight text-[#0067D3] md:text-[48px]">
          よくある質問
        </h4>

        {/* FAQ list */}
        <div className="mt-10 flex flex-col gap-7 md:mt-[64px]">
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
