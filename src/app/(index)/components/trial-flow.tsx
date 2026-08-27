import { Fragment } from 'react';

import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';

type FlowStep = {
  step: string;
  title: string;
  body: string;
};

const FLOW_STEPS: FlowStep[] = [
  {
    step: '01',
    title: '予約 (約30秒で完了)',
    body: 'WEBまたは公式LINEから、希望日時を選択してご予約ください。',
  },
  {
    step: '02',
    title: 'ご来店 (手ぶらもOK)',
    body: '動きやすい服装、水分をお持ちください。レンタルウェアのご用意もございます。',
  },
  {
    step: '03',
    title: 'カウンセリング & 体験',
    body: 'プロのトレーナーがあなたのお悩みを聞き、個別のプログラムを約30分体験いただきます。',
  },
  {
    step: '04',
    title: 'フィードバック & 今後のご案内',
    body: '身体の状態に合わせた習慣化のコツをご提案。当日入会で入会金10,000円が無料に！',
  },
];

const FlowArrow = () => (
  <div className="relative h-[27px] w-[54px] rotate-180">
    <Image
      src="/assets/images/flow-arrow.svg"
      alt=""
      width={47}
      height={20}
      className="absolute top-0 right-[6.7%] bottom-1/4 left-[6.7%] h-[20.25px] w-[46.765px]"
    />
  </div>
);

const TrialFlow = () => (
  <section data-section="flow" className="bg-white pt-[76px] pb-[90px]">
    <p className="text-center font-semibold text-[#272727]">
      <span className="text-[12px]">＼　</span>
      <span className="text-[16px] leading-[2] font-medium tracking-[0.64px]">
        当日トータル
      </span>
      <span className="text-[25px] leading-[1.8] font-bold tracking-[1px]">
        60
      </span>
      <span className="text-[20px] leading-[1.8] font-bold tracking-[0.8px]">
        分！
      </span>
      <span className="text-[12px]">　／</span>
    </p>

    <div className="mt-[12px]">
      <SectionTitle
        id="flow"
        en="TRIAL SESSION"
        jp="初回体験トレーニングの流れ"
      />
    </div>

    <div className="mx-auto mt-[48px] flex w-[335px] flex-col items-center gap-[8px]">
      {FLOW_STEPS.map((step, index) => (
        <Fragment key={step.step}>
          {index > 0 && <FlowArrow />}
          <FadeIn className="w-full">
            <div className="border-flow-border bg-flow-surface flex items-center gap-[16px] rounded-[12px] border p-[16px]">
              <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[#494949] text-[14px] font-extrabold text-white">
                {step.step}
              </span>
              <div className="flex flex-1 flex-col gap-[4px]">
                <h3 className="text-ink text-[20px] leading-[1.8] font-bold tracking-[0.8px]">
                  {step.title}
                </h3>
                <p className="text-body text-[16px] leading-[1.7] tracking-[0.32px]">
                  {step.body}
                </p>
              </div>
            </div>
          </FadeIn>
        </Fragment>
      ))}
    </div>
  </section>
);

export default TrialFlow;
