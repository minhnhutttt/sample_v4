import Image from 'next/image';

import StoryRoutes from './StoryRoutes';
import StorySalesResult from './StorySalesResult';
import StoryStep from './StoryStep';

const steps = [
  {
    number: '01',
    title: '出展・掲載',
    description:
      '試食BARアサクサ、フードバイヤーズハブに出展して試食をスタート！',
    image: '/assets/images/story/circle-photo-1.png',
    imageAlt: '店舗の陳列棚に並んだ商品の試食の様子',
    ringClassName: '-left-[10px] top-[10px] md:left-[-20px] md:-top-[20px]',
  },
  {
    number: '02',
    title: '試食・アンケート',
    description:
      '都内一等地の浅草にある店舗には多数の様々な属性のお客様が訪れ、ご試食いただいています。',
    image: '/assets/images/story/circle-photo-2.png',
    imageAlt: 'スマートフォンでアンケートに回答する様子',
    photoShadow: true,
    ringClassName:
      'right-[10px] bottom-[10px] md:right-[20px] md:bottom-[20px]',
  },
  {
    number: '03',
    title: '口コミ・露出',
    description:
      '食べた方からの口コミや、その多数の口コミ内容を発信することで多くの販売機会を創出できます！',
    image: '/assets/images/story/circle-photo-3.png',
    imageAlt: '商品ページに掲載された口コミの様子',
    photoShadow: true,
    ringClassName:
      'right-[10px] bottom-[10px] md:right-[20px] md:bottom-[20px]',
  },
] as const;

const gradientText =
  'bg-gradient-to-r from-[#ffdad4] via-white to-[#ffdad4] bg-clip-text text-transparent drop-shadow-[0px_0px_20px_rgba(0,104,149,0.3)]';

const Story = () => {
  return (
    <section className="relative mt-[100px] overflow-x-clip rounded-[40px] bg-[url('/assets/images/story/bg-street.png')] bg-cover px-[20px] md:rounded-[80px]">
      <div className="relative mx-auto flex max-w-[1120px] flex-col items-center gap-[44px] py-[64px] md:gap-[128px] md:pt-[124px] md:pb-[150px]">
        <h2 className="flex flex-col items-center text-center">
          <span className="flex items-center gap-[16px] md:gap-[12px]">
            <Image
              src="/assets/images/story/sparkle.svg"
              alt=""
              aria-hidden
              width={158}
              height={72}
              className="h-auto w-[64px] -rotate-90 md:w-24 lg:w-[158px]"
            />
            <span className="leading-[1.4] italic">
              <span
                className={`flex items-baseline tracking-[0.4px] whitespace-nowrap md:tracking-[0.96px] ${gradientText}`}
              >
                <span className="text-[32px] font-bold md:text-[88px]">食</span>
                <span className="text-[24px] font-black md:text-[64px] md:tracking-[0.64px]">
                  べて
                </span>
                <span className="text-[32px] font-bold md:text-[88px]">売</span>
                <span className="text-[24px] font-black md:text-[64px] md:tracking-[0.64px]">
                  れる
                </span>
              </span>
              <span
                className={`block text-[20px] font-black tracking-[0.4px] md:text-[48px] md:tracking-[0.96px] ${gradientText}`}
              >
                までのストーリー
              </span>
            </span>
            <Image
              src="/assets/images/story/sparkle.svg"
              alt=""
              aria-hidden
              width={158}
              height={72}
              className="h-auto w-[64px] -scale-y-100 -rotate-90 md:w-24 lg:w-[158px]"
            />
          </span>
        </h2>

        <div className="flex w-full flex-col items-center gap-[68px] md:gap-[76px]">
          {steps.map((step) => (
            <StoryStep key={step.number} {...step} />
          ))}
        </div>

        <StoryRoutes />

        <StorySalesResult />
      </div>
    </section>
  );
};

export default Story;
