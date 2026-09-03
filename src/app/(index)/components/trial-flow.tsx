import { Fragment } from 'react';

import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';
import TrialFlowCta from '@/components/ui/trial-flow-cta';

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
      className="absolute top-0 right-[7%] bottom-1/4 left-[7%] h-[20px] w-[47px]"
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
      <span className="text-[32px] leading-[1.8] font-bold tracking-[0.64px] text-[#1e93a8]">
        60
      </span>
      <span className="text-[18px] leading-[1.8] font-bold tracking-[0.72px]">
        分
      </span>
      <span className="text-[20px] leading-[1.8] font-bold tracking-[0.8px]">
        ！
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

    <div className="relative mx-auto mt-[32px] h-[161px] w-[335px]">
      <Image
        src="/assets/images/trial-flow-cta-photo.png"
        alt="トレーナーと顧客の笑顔"
        width={438}
        height={323}
        className="absolute top-0 left-0 z-10 w-[219px]"
      />
      <div className="absolute top-[-26px] left-[140px] h-[121px] w-[195px] rotate-[9.81deg]">
        <Image
          src="/assets/images/trial-flow-speech-bubble.svg"
          alt=""
          width={195}
          height={121}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <p className="text-ink absolute top-[-4px] left-[178px] w-[139px] text-left text-[15px] leading-[1.3] font-bold tracking-[0.6px]">
        一緒に楽しく
        <br />
        トレーニング習慣をつけましょう！
      </p>
    </div>

    <TrialFlowCta className="mx-auto mt-[24px]" />
  </section>
);

export default TrialFlow;
