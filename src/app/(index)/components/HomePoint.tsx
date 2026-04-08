'use client';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const PAIN_POINTS = [
  {
    id: 1,
    image: '/assets/images/point-01.png',
    text: '成約しても高額な手数料を取られ、利益が圧迫される',
  },
  {
    id: 2,
    image: '/assets/images/point-02.png',
    text: '「とにかく安く」という価格重視のお客様ばかりで、相見積もりで買い叩かれる',
  },
  {
    id: 3,
    image: '/assets/images/point-03.png',
    text: '一括見積もりで、条件に合わない案件の紹介に無駄な費用と手間がかかっている',
  },
  {
    id: 4,
    image: '/assets/images/point-04.png',
    text: 'マッチングサイトの審査が甘く、粗悪な業者と同列に比較されてしまう',
  },
  {
    id: 5,
    image: '/assets/images/point-05.png',
    text: '会社としての登録だけで、自社の「本当に得意な専門工事」がアピールできない',
  },
];

function PainCard({ image, text }: { image: string; text: string }) {
  return (
    <div className="fade-up flex max-w-[220px] flex-col items-center text-center">
      <div className="mb-3">
        <img src={image} alt="" />
      </div>
      <p className="text-[15px] leading-loose md:text-[18px]">{text}</p>
    </div>
  );
}

export default function HomePoint() {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative w-full bg-[#F0F0F1] px-6 pt-14 pb-8 [box-shadow:0_2px_0_0_rgba(19,_76,_142,_0.15)] after:absolute after:bottom-[-38px] after:left-[calc(50%-43.5px)] after:aspect-87/38 after:w-[87px] after:bg-[url('/assets/images/bb.png')] after:bg-cover after:[filter:drop-shadow(0_2px_0_rgba(19,_76,_142,_0.15))] md:pt-20"
    >
      <h2 className="fade-up mb-10 text-center text-[22px] font-black text-[#1A4673] md:mb-16 md:text-[48px]">
        こんな
        <span className="text-[#0067D3]">お悩み</span>
        はありませんか？
      </h2>

      <div className="mx-auto mb-14 flex w-full max-w-[760px] flex-wrap justify-center gap-x-12 gap-y-10 md:gap-y-16">
        {PAIN_POINTS.map((item) => (
          <PainCard key={item.id} image={item.image} text={item.text} />
        ))}
      </div>
    </section>
  );
}
