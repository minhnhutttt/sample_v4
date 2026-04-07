'use client';

import Cta from '@/components/cta';

const REASONS = [
  {
    id: '01',
    tag: '高精度マッチング',
    headline:
      'AIがお客様の希望を文脈から分析。あなたの「得意なサービス」と高精度でマッチングします。',
    body: (
      <>
        一括見積もりのような、条件に合わない無駄な案件は紹介しません。
        <br />
        お客様が入力した「本当に欲しい工事の条件」をAIが事前分析し、あなたが登録した「得意な専門工事（サービス）」とピンポイントで照合します。
        <br />
        だからこそ、ミスマッチや不毛な相見積もりが激減し、成約率の高い質の良い問い合わせだけが届きます。
      </>
    ),
    image: '/assets/images/reasons-01.jpg',
    imageAlt: '高精度マッチング',
    imageRight: false,
  },
  {
    id: '02',
    tag: '低コスト',
    headline: (
      <>
        経営を圧迫しない低コスト。
        <br />
        だから「お客様への施工」に集中できます。
      </>
    ),
    body: `マッチングサイトの高額な手数料を払うために、 無理な工期やコスト削減を強いられていませんか？ くらしポートは業者の利益を搾取しません。 低い月額料金のみで掲載を維持できるため、経営を圧迫せず、その分をお客様への「質の高い施工やサービス」に全力で還元してほしい。 それが『くらしポート』の目指す、本来あるべき適正な好循環です。`,
    image: '/assets/images/reasons-02.jpg',
    imageAlt: '低コスト',
    imageRight: true,
  },
  {
    id: '03',
    tag: '「建設会社」が運営系',
    headline:
      '現場を知る「建設会社」が運営。プロの厳格審査で悪質業者を排除します。',
    body: (
      <>
        これが他サイトとの決定的な違いです。
        <br />
        運営元はIT企業ではなく、業界の苦労を骨の髄まで知る「現役の建設会社」です。建設業許可の有無や保険加入などをプロの目で厳しく審査し、価格だけで勝負するような手抜き業者を徹底的に排除。
        <br />
        同じ土俵に立つのは優良業者のみだからこそ、「安心してお任せしたい」という優良顧客が集まるのです。
      </>
    ),
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
    <div className="flex flex-1 flex-col justify-center bg-white shadow-xl md:rounded-md md:rounded-tr-[60px]">
      {/* Tag + number row */}
      <div className="mt-4 flex items-center justify-between max-md:px-5 md:-mt-20">
        <span className="inline-flex min-h-[50px] items-center justify-center rounded rounded-lg rounded-tr-[24px] bg-[#0067D3] px-3 py-1.5 text-[18px] font-bold text-white md:min-h-[76px] md:px-[60px] md:text-[28px]">
          {tag}
        </span>
        <span className="u-text-stroke text-[60px] leading-none font-extrabold text-transparent md:text-[128px]">
          {id}
        </span>
      </div>
      <div className="p-6 md:p-[60px] md:pt-10">
        {/* Headline */}
        <h3 className="mb-7 text-[18px] leading-relaxed font-bold text-[#1A4673] md:mb-10 md:text-[24px]">
          {headline}
        </h3>

        {/* Body */}
        <p className="text-[15px] leading-loose text-[#1A4673] md:text-[18px]">
          {body}
        </p>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative overflow-hidden rounded-md rounded-tr-[60px] md:w-[480px]">
      <img src={image} alt={imageAlt} />
    </div>
  );

  return (
    <div
      className={`group flex flex-col items-center ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {imageBlock}
      <div
        className={`relative flex-1 ${imageRight ? 'lg:-mr-[60px]' : 'lg:-ml-[60px]'}`}
      >
        {textBlock}
      </div>
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
        <div className="flex flex-col gap-16 md:gap-35">
          {REASONS.map((r) => (
            <ReasonCard key={r.id} {...r} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center py-16 md:py-30">
          <Cta />
        </div>
      </div>
    </section>
  );
}
