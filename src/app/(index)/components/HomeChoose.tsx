'use client';

import ScrollSlider, { SlideData } from '@/components/scrollSlider';
import useScrollAnimations from '@/hooks/useScrollAnimations';

interface SliderSectionProps {
  heading: string;
  subHeading: string;
  slides: SlideData[];
}

const SliderSection = ({ heading, subHeading, slides }: SliderSectionProps) => {
  return (
    <section className="text-center">
      <h3 className="fade-up text-[35px] font-black md:text-[70px]">
        {heading}
      </h3>

      <p className="fade-up mb-8 text-[16px] font-bold md:mb-[150px] md:text-[25px]">
        {subHeading}
      </p>

      <ScrollSlider slides={slides} duration={300} />
    </section>
  );
};

const HomeChoose = () => {
  const ref = useScrollAnimations();

  const section1: SlideData[] = [
    {
      title: '必要な人に、きちんと届く',
      text: '反応の数に振り回される発信から、「必要としている人」に届く発信へ。',
    },
    {
      title: 'チャンネルという形で、すぐ始められる',
      text: '思いついた瞬間に、価値として形にできます。',
    },
    {
      title: '守られたまま、続けられる',
      text: '発信を続けるほど、価値が積み上がります。',
    },
  ];

  const section2: SlideData[] = [
    {
      title: '勝手に広がらない',
      text: 'KIVOでは、情報は「流れる前提」で設計されていません。必要な人が、必要な場所で受け取ります。',
    },
    {
      title: '切り取られない',
      text: 'スクリーンショットや転載で、意味が変わってしまうことを前提にしていません。',
    },
    {
      title: '価値を、丁寧に届けられる',
      text: '受け取る人が、「これは大切だ」と向き合う設計です。情報が、軽く消費されることはありません。',
    },
  ];

  return (
    <div ref={ref}>
      <SliderSection
        heading="KIVOを選ぶ理由"
        subHeading="あなたの発信はこう変わります。"
        slides={section1}
      />

      <div className="mt-[65px] md:mt-[170px]" />

      <SliderSection
        heading="情報が守られる設計"
        subHeading="スクリーンショットも、共有も前提としていません。"
        slides={section2}
      />
      <div className="fade-up mt-10 text-center text-[16px] font-bold md:mt-25 md:text-[30px]">
        価値を守ることこそ、発信を続けるための前提です。
      </div>
    </div>
  );
};

export default HomeChoose;
