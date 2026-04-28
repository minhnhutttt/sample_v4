'use client';

import Faq from '@/components/common/Faq';

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
export default function FAQAccordion() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        よくある質問
      </h2>

      <div>
        {faqData.map((item, index) => (
          <Faq key={index} question={item.question}>
            {item.answer}
          </Faq>
        ))}
      </div>
    </section>
  );
}
