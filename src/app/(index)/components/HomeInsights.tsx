import Link from 'next/link';

import SplitTextReveal from '@/components/animations/Splittextreveal';
import Button from '@/components/button';

interface Insight {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
  backgroundColor: string;
  color: string;
  href: string;
}

const insights: Insight[] = [
  {
    id: 1,
    title:
      'To Ban, or Not to Ban: Our Take on How Marketers Should Be Thinking About TikTok',
    description:
      'To Ban, or Not to Ban: Our Take on How Marketers Should Be Thinking About TikTok',
    tags: ['TikTok', 'Platform'],
    date: '04.03.23',
    backgroundColor: 'rgb(255, 156, 148)',
    color: 'rgb(36, 36, 36)',
    href: '#',
  },
  {
    id: 2,
    title:
      'Reels Ad Creative is the Best Investment Digital Marketers Can Make Right Now',
    description:
      '#ReelTalk: Reels Ad Creative is the Best Investment Digital Marketers Can Make Right Now',
    tags: ['Platform', 'Content & Creative'],
    date: '11.01.23',
    backgroundColor: 'rgb(180, 220, 220)',
    color: 'rgb(36, 36, 36)',
    href: '#',
  },
  {
    id: 3,
    title: 'Welcome Blake Marts, VP of Corporate Strategy',
    description: 'New Engen Welcomes Blake Marts as VP of Corporate Strategy',
    tags: ['Press Release'],
    date: '01.18.24',
    backgroundColor: 'rgb(190, 220, 80)',
    color: 'rgb(36, 36, 36)',
    href: '#',
  },
];

interface InsightCardProps {
  insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <div className="col-span-1">
      <Link href={insight.href} className="h-t relative flex flex-col">
        <div className="radius-media relative w-full bg-black">
          <div className="block pt-[57.5%]"></div>
          <div
            className="absolute inset-0 flex w-full overflow-hidden border border-black/10 px-[calc(100%/12)] pt-[calc(100%/12)] pb-[calc((100%/12)*2)] text-[.7rem] md:text-[1rem]"
            style={{ backgroundColor: insight.backgroundColor }}
          >
            <div className="pattern-grid absolute inset-[-1px] z-1 opacity-10"></div>
            <div
              className="relative z-2 flex flex-col justify-center p-[1rem] md:p-[1.5rem]"
              style={{
                color: insight.color,
                backgroundColor: insight.backgroundColor,
              }}
            >
              <div className="text-[2rem] leading-[1.1] font-bold md:text-[3rem]">
                {insight.title}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] flex w-full items-center gap-x-[1rem] overflow-hidden md:gap-x-[1.5rem]">
          {insight.tags.map((tag: string) => (
            <div
              key={tag}
              className="inline-flex h-[3rem] items-center rounded-full border border-[#242424] px-[.8rem] text-[1.4rem] leading-none whitespace-nowrap text-[#242424] md:h-[3.4rem] md:px-[1.2rem]"
            >
              {tag}
            </div>
          ))}
          <div className="h6 text-[#242424]">{insight.date}</div>
        </div>
        <div className="mt-[1.5rem] md:pr-[5rem]">
          <h2 className="h4 h-main-multi text-[#242424]">
            {insight.description}
          </h2>
        </div>
      </Link>
    </div>
  );
};

const HomeInsights = () => {
  return (
    <div className="relative w-full bg-[#FAF2E8] pt-[9rem] pb-[9rem] md:pt-[15rem] md:pb-[15rem]">
      <div className="site-max flex flex-col items-center">
        <SplitTextReveal
          as="h2"
          splitType="chars"
          triggerStart="top 80%"
          toggleActions="play none none reset"
          className="h1 text-center font-black tracking-tighter text-[#242424]"
        >
          Insights by <br />
          New Engen
        </SplitTextReveal>
        <p className="h4 mt-[1.5rem] text-center md:mt-[2rem]">
          Insights that drive impact—rooted in research, supported by data, and
          made to fuel brand growth.
        </p>
        <div className="grid w-full grid-cols-1 gap-x-[6.5rem] gap-y-[3rem] pt-[5rem] md:grid-cols-3 md:gap-y-[5rem]">
          {insights.map((insight: Insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
        <div className="mt-[5rem] flex justify-center">
          <Button href="#" text="View all" />
        </div>
      </div>
    </div>
  );
};

export default HomeInsights;
