'use client';

import Image from 'next/image';
import Link from 'next/link';

const REASONS = [
  {
    id: '01',
    tag: '高精度マッチング',
    headline:
      'AIがお客様の希望を文脈から分析。あなたの「得意なサービス」と高精度でマッチングします。',
    body: `一括見積もりのような、条件に合わない無駄な案件は紹介しません。お客様が入力した「本当に欲しい工事の条件」をAIが事前分析し、あなたが登録した「得意な専門工事（サービス）」とピンポイントで照合します。\nだからこそ、ミスマッチや不毛な相見積もりが激減し、成約率の高い質の良い問い合わせだけが届きます。`,
    image: '/assets/images/reasons-01.jpg',
    imageAlt: 'タブレットで書類を確認している様子',
    imageRight: false,
  },
  {
    id: '02',
    tag: '低コスト',
    headline:
      '経営を圧迫しない低コスト。\nだから「お客様への施工」に集中できます。',
    body: `マッチングサイトの高額な手数料を払うために、無理な工期やコスト削減を強いられていませんか？くらしポートは業者の利益を搾取しません。低い月額料金のみで掲載を維持できるため、経営を圧迫せず、その分をお客様への「質の高い施工やサービス」に全力で還元してほしい。それが『くらしポート』の目指す、本来あるべき適正な好循環です。`,
    image: '/assets/images/reasons-02.jpg',
    imageAlt: 'コインと計算機の様子',
    imageRight: true,
  },
  {
    id: '03',
    tag: '「建設会社」が運営系',
    headline:
      '現場を知る「建設会社」が運営。プロの厳格審査で悪質業者を排除します。',
    body: `これが他サイトとの決定的な違いです。\n運営元はIT企業ではなく、業界の苦労を骨の髄まで知る「現役の建設会社」です。建設業許可の有無や保険加入などをプロの目で厳しく審査し、価格だけで勝負するような手抜き業者を徹底的に排除。\n同じ土俵に立つのは優良業者のみだからこそ、「安心してお任せしたい」という優良顧客が集まるのです。`,
    image: '/assets/images/reasons-03.jpg',
    imageAlt: '建設現場での作業の様子',
    imageRight: false,
  },
];

function ReasonCard({
  id,
  tag,
  headline,
  body,
  image,
  imageAlt,
  imageRight,
}: (typeof REASONS)[0]) {
  const textBlock = (
    <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
      {/* Tag + number row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-block rounded bg-blue-600 px-4 py-1.5 text-sm font-bold text-white">
          {tag}
        </span>
        <span className="font-black text-blue-200 select-none">{id}</span>
      </div>

      {/* Headline */}
      <h3 className="mb-4 text-base leading-snug font-bold text-gray-800 md:text-lg">
        {headline.split('\n').map((l, i) => (
          <span key={i}>
            {l}
            {i < headline.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed text-gray-500">
        {body.split('\n').map((l, i) => (
          <span key={i}>
            {l}
            {i < body.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );

  const imageBlock = (
    <div className="relative w-[480px] overflow-hidden rounded-md rounded-tr-[60px]">
      <Image src={image} alt={imageAlt} fill className="object-cover" />
    </div>
  );

  return (
    <div className="flex flex-col overflow-hidden md:flex-row">
      {imageRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

export default function HomeReasons() {
  return (
    <section className="w-full bg-[url(/assets/images/r-bg.png)] bg-cover px-6 pt-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <h2 className="mb-10 text-center text-[22px] font-black text-[#1A4673] md:mb-30 md:text-[48px]">
          <span className="text-[#0067D3]">くらしポート</span>
          が選ばれる3つの理由
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {REASONS.map((r) => (
            <ReasonCard key={r.id} {...r} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#apply"
            className="flex items-center gap-5 rounded-xl px-12 py-5 text-base font-bold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              boxShadow: '0 6px 24px rgba(234,88,12,0.45)',
              fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif",
            }}
          >
            掲載を申し込む <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
