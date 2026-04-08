'use client';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const STEPS = [
  {
    id: '01',
    image: '/assets/images/step-01.png',
    title: '事前エントリー（無料）',
    text: 'まずは専用フォームより、貴社の基本的な情報をご入力ください。',
  },
  {
    id: '02',
    image: '/assets/images/step-02.png',
    title: 'プロによる厳格審査・書類提出',
    text: (
      <>
        「建設業許可証」「損害保険証券」などの必要書類をご提出いただきます。運営事務局の現役プロが、基準を満たしているか厳格に審査いたします。
        <br />
        (※品質担保のため、審査には数営業日お時間をいただく場合がございます)
      </>
    ),
  },
  {
    id: '03',
    image: '/assets/images/step-03.png',
    title: '提供サービス・プロフィールの登録',
    text: '審査通過後、専用画面より貴社の「得意な専門工事（サービス単位）」や「施工事例の写真」をご登録いただきます。',
  },
  {
    id: '04',
    image: '/assets/images/step-04.png',
    title: '掲載・AIマッチング開始',
    text: '登録完了後、くらしポートへの掲載がスタートします。お客様が求める条件と、貴社のサービス内容をAIが自動分析し、最適なマッチングを実現します。',
  },
];

export default function HomeSteps() {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative w-full py-20">
      <h2 className="fade-up px-5 text-center text-[26px] leading-snug font-black tracking-tight text-[#0067D3] md:text-[48px]">
        4ステップ<span className="text-[#1A4673]">で完了！</span>
        <br />
        質の高い出会い<span className="text-[#1A4673]">まで</span>
        事務局がサポート！
      </h2>
      <div className="relative mt-8 py-6 md:mt-[60px] md:py-10">
        <div className="absolute top-0 right-0 bottom-0 w-[76%] rounded-tl-[60px] bg-[linear-gradient(143deg,_#FAFCFF_0%,_#D7E9FC_100%)] opacity-50"></div>
        <div className="relative mx-auto w-full max-w-[440px] divide-y divide-[#0067D3] px-5 md:max-w-[1140px]">
          {STEPS.map((step, i) => (
            <div
              className="fade-up flex gap-8 py-6 max-md:flex-col md:gap-10 md:py-10 lg:gap-20"
              key={i}
            >
              <figure className="md:max-lg:w-1/3">
                <img
                  className="rounded-[6px] rounded-tr-[60px] shadow-xl"
                  src={step.image}
                  alt={step.title}
                />
              </figure>
              <div className="flex-1">
                <div className="flex items-center gap-3 md:gap-5">
                  <p className="flex h-10 w-[100px] items-center justify-center rounded bg-[#0067D3] text-[20px] font-bold text-white md:h-[52px] md:w-[170px] md:text-[28px]">
                    Step {step.id}
                  </p>
                  <p className="flex-1 text-[20px] font-bold text-[#0067D3] md:text-[28px]">
                    {step.title}
                  </p>
                </div>
                <p className="mt-3 text-[15px] leading-loose font-medium text-[#1A4673] md:mt-5 md:text-[18px]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
