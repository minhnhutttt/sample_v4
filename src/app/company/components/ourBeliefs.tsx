'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const OurBeliefs = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textMiddleRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const middleEl = textMiddleRef.current;
    const bottomEl = textBottomRef.current;

    if (!wrapper || !middleEl || !bottomEl) return;

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' });
      const splitBottom = new SplitText(bottomEl, { type: 'chars' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      });

      gsap.set([splitMiddle.chars], {
        scaleY: 0,
      });

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position,
      ) => tl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos);

      scaleChars(splitBottom.chars, 0, '50% 100%');
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<');
    }, wrapper);

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <div
        ref={wrapperRef}
        className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] py-[max(24px,24px+100vw*.0212)]"
      >
        <div className="relative z-10 text-center text-[clamp(40px,calc(20px+10.25vw),240px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#F78629] will-change-transform md:text-[clamp(60px,calc(30px+10.25vw),240px)]">
          <span ref={textMiddleRef} className="inline-block">
            OUR BELIEFS
          </span>
          <span ref={textBottomRef} className="absolute inset-0 inline-block">
            OUR BELIEFS
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-0 border-t border-black/50 bg-[#F78629] px-5 py-10 md:px-10 md:py-20">
          <p className="text-[24px] font-bold md:w-[46%] md:text-[32px]">
            情報には、価値がある。
            <br />
            しかし今、その価値は確定していない。
          </p>
          <div className="mt-5 ml-auto w-full text-[15px] md:w-[46%] md:text-[20px]">
            インターネットが普及して以来、情報は自由に流通するようになった。それは確かに、世界を豊かにした。
            <br />
            しかし同時に、一つの構造的な問題が生まれた。
            <br />
            情報を生み出した人間が、その価値に見合った対価を受け取れない。
            <br />
            数時間かけて作ったコンテンツが、数秒で転送される。有料で配布した資料が、無断で拡散される。フォロワーは増えているのに、収益が伴わない。これは特定のプラットフォームの問題ではなく、現在のインターネットが「拡散」を前提に設計されていることから生まれる、構造的な矛盾だ。
            AIの進化はこの問題をさらに加速させる。情報の生成コストはほぼゼロになった。しかし、情報の価値が確定する仕組みは、何も進化していない。
          </div>
        </div>
        <div className="sticky top-0 border-t border-black/50 bg-[#F78629] px-10 py-10 md:py-20">
          <p className="text-[24px] font-bold md:w-[46%] md:text-[32px]">
            私たちが問うのは、
            <br />
            「価値はいつ確定するのか」という問いだ。
          </p>
          <div className="mt-5 ml-auto w-full text-[15px] md:w-[46%] md:text-[20px]">
            現在のデジタル市場は、企業主導型モデルか広告最適化モデルのどちらかに依存している。両者に共通するのは、個人と個人が直接契約する構造が存在しないことだ。
            <br />
            私たちはその空白に、一つの答えを置く。
            <br />
            情報の価値は、合意と支払いによって確定する。
            <br />
            送り手と受け手が直接向き合い、価値に対して対価が支払われる。その事実が、情報の価値を証明する。拡散によって価値を広めるのではなく、契約によって価値を確定させる。それが、私たちの出発点だ。
          </div>
        </div>
        <div className="sticky top-0 border-t border-black/50 bg-[#F78629] px-10 py-10 md:py-20">
          <p className="text-[24px] font-bold md:w-[46%] md:text-[32px]">
            KIVOは、契約を単位とする経済基盤である。
          </p>
          <div className="mt-5 ml-auto w-full text-[15px] md:w-[46%] md:text-[20px]">
            SNSではない。メディアでもない。決済ツールでもない。
            <br />
            私たちが実装しようとしているのは、個人と個人が直接契約できるインフラだ。
            <br />
            広がらないから、希少である。希少だから、価値がある。価値があるから、対価が生まれる。この循環を社会に実装することが、KIVOの存在理由だ。
            <br />
            情報価値が確定する世界を、インフラとして構築する。それだけを、私たちは考えている。
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBeliefs;
