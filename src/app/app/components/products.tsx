'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

// ── ProductItem ────────────────────────────────────────────────
const ProductItem = ({
  href,
  img,
  head,
  text,
}: {
  href: string;
  img: string;
  head: string;
  text: string;
}) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    const headEl = headRef.current;
    const textEl = textRef.current;
    if (!el || !headEl || !textEl) return;

    gsap.set([headEl, textEl], { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 30%',
        scrub: false,
        once: true,
      },
    });

    tl.to(
      headEl,
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.5',
    ).to(
      textEl,
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.5',
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <a
      ref={itemRef}
      href={href}
      className="flex flex-col items-start gap-6 text-white md:even:mt-[160px]"
    >
      <div className="w-full overflow-hidden">
        <img src={img} alt="" />
      </div>
      <h3 ref={headRef} className="text-[20px] md:text-[28px]">
        {head}
      </h3>
      <p ref={textRef} className="text-[14px] md:text-[16px]">
        {text}
      </p>
    </a>
  );
};

// ── ProductItem ────────────────────────────────────────────────
const DesignItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="text-white">
    <figure>
      <img src={icon} alt="" className="h-10" />
    </figure>
    <p className="mt-4 text-[15px] md:text-[18px]">{text}</p>
  </div>
);

// ── Products ───────────────────────────────────────────────────
export default function Products() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const textRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const path = pathRef.current;
    const text = textRef.current;
    const circle = circleRef.current;
    if (!wrapper || !path || !text || !circle) return;

    const ctx = gsap.context(() => {
      gsap.set(path, { drawSVG: '0% 0%' });

      const swayTween = gsap.to(path, {
        x: 4,
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 2.6,
        paused: true,
        transformOrigin: 'center center',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom center',
          invalidateOnRefresh: true,
        },
      });

      tl.to(path, {
        drawSVG: '0% -100%',
        ease: 'none',
        duration: 2,
        onComplete: () => {
          swayTween.play();
        },
      })
        .from(
          text,
          {
            scaleY: 0,
            ease: 'power1.inOut',
            duration: 0.3,
          },
          '<',
        )
        .from(
          circle,
          {
            rotate: 45,
            ease: 'bounce.out',
            duration: 1.6,
          },
          '<',
        );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      img: '/assets/images/toolkit-01.png',
      head: 'チャンネルとドロップが並ぶ発見の入口。あなたにあったコンテンツを見つけよう！',
      text: 'Discover',
    },
    {
      img: '/assets/images/toolkit-02.png',
      head: 'ドロップは、写真や動画、音声や音楽、PDFなどのファイルを単品で販売する機能。あなたもドロップを販売して収益を得よう！',
      text: 'Drop',
    },
    {
      img: '/assets/images/toolkit-03.png',
      head: 'チャンネルは、プレミアムユーザーだけの特典。使い慣れたサブスクリプションモデルで多くのファンへコンテンツを届けよう！',
      text: 'Channel',
    },
    {
      img: '/assets/images/toolkit-04.png',
      head: 'KIVOならではの流出しないDM・グループチャットだから安心して会話ができる！限られた相手にだけドロップも販売可能。',
      text: 'Chat',
    },
    {
      img: '/assets/images/toolkit-05.png',
      head: 'プロフィール編集や、ポイント残高・プラン・ポリシーの確認ができる。大切な情報もあるから、一度は確認しておこう！',
      text: 'Account',
    },
    {
      img: '/assets/images/toolkit-06.png',
      head: 'メールも電話番号も不要。招待リンクを受け取ったらパスキー登録ですぐに利用できる！',
      text: 'Welcome Onboarding',
    },
  ];

  return (
    <>
      <section className="js-header-color relative bg-[#242424] px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[480px] md:max-w-[1280px]">
          <div className="flex flex-col items-center">
            <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-[96px]">
              {items.map((item) => (
                <ProductItem key={item.text} href="#" {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#242424] px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[480px] md:max-w-[1280px]">
          <div className="grid gap-10 text-white md:grid-cols-2 lg:gap-[96px]">
            <div className="flex flex-col gap-2 leading-snug">
              <p className="text-[40px] md:text-[80px] xl:text-[130px]">
                計測中...
              </p>
              <p className="text-[16px] text-[#8c939d] md:text-[20px]">
                Total Contracted Value
              </p>
            </div>
            <div className="flex flex-col gap-2 leading-snug">
              <p className="text-[40px] md:text-[80px] xl:text-[130px]">
                計測中...
              </p>
              <p className="text-[16px] text-[#8c939d] md:text-[20px]">
                Repurchase Rate for Paid Content
              </p>
            </div>
          </div>
          {/* <div className="py-16 md:py-24">
            <p className="text-[28px] leading-snug text-white md:text-[60px]">
              &quot;Outloud exhibits excellent communication that ensures a
              smooth collaboration. They exceed expectations by considering all
              aspects of the UX, demonstrating their commitment and
              proactivity.&quot;
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    src="/assets/images/coin-img-01.png"
                    className="size-10 rounded-full"
                    alt=""
                  />
                </figure>
                <p className="text-[18px] text-white md:text-[24px]">
                  Justin Valley
                </p>
                <p className="text-[18px] text-[#8c939d] md:text-[24px]">
                  CEO, StudyShep
                </p>
              </div>
              <div className="relative flex items-center max-md:ml-auto">
                <figure className="absolute">
                  <img
                    src="/assets/images/icon.png"
                    className="size-14 rounded-full"
                    alt=""
                  />
                </figure>
                <svg
                  className="w-25"
                  viewBox="0 0 123 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M95.005 18.308C90.759 18.308 88.955 14.766 88.955 10.41C88.955 6.05399 90.759 2.48999 95.005 2.48999C99.251 2.48999 101.033 6.05399 101.033 10.41C101.033 14.766 99.251 18.308 95.005 18.308ZM95.005 16.262C97.733 16.262 98.547 13.534 98.547 10.41C98.547 7.28599 97.733 4.53599 95.005 4.53599C92.255 4.53599 91.441 7.28599 91.441 10.41C91.441 13.534 92.255 16.262 95.005 16.262Z"
                    fill="#ff1100"
                  ></path>
                  <path
                    d="M87.4172 18H85.0192V15.602H87.4172V18Z"
                    fill="#ff1100"
                  ></path>
                  <path
                    d="M77.472 18.308C73.842 18.308 71.862 16.108 71.774 13.556H74.194C74.348 14.942 75.14 16.262 77.34 16.262C79.276 16.262 80.552 15.074 80.552 12.808C80.552 10.674 79.386 9.70599 77.494 9.70599C76.262 9.70599 75.14 10.124 74.414 11.07H71.972L73.6 2.79799H82.246V4.84399H75.426L74.59 9.04599V9.08999C75.382 8.27599 76.504 7.76999 78.132 7.76999C81.014 7.76999 83.016 9.90399 83.016 12.808C83.016 16.174 80.596 18.308 77.472 18.308Z"
                    fill="#ff1100"
                  ></path>
                  <path
                    d="M115 13.9525L119.635 16.75L118.405 11.4775L122.5 7.92999L117.107 7.47249L115 2.49999L112.892 7.47249L107.5 7.92999L111.595 11.4775L110.365 16.75L115 13.9525Z"
                    fill="#ff1100"
                  ></path>
                </svg>
              </div>
            </div>
          </div> */}
          <div className="py-16 text-white md:py-24">
            <h4 className="text-center text-[40px] font-bold md:text-[60px] lg:text-[80px]">
              KIVOはこんな課題を持つ人々のために作られました
            </h4>
            <div className="mt-20 grid grid-cols-2 gap-5 gap-y-10 md:grid-cols-3 md:gap-10 lg:gap-[96px]">
              <DesignItem
                icon="/assets/images/logo.svg"
                text="有料で配布した資料が、無断で転載されたことがある。コンテンツに値段をつけても、価値がコントロールできない。"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="フォロワーは増えている。でも収益が伴わない。流出対策をしないプラットフォームの仕様で取りこぼしている収益がある気がする。"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="クローズドなグループで話した内容が、外に漏れたことがある。安心して話せる場所が、どこにもない。"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="信頼できる相手とだけつながりたい。誰でも入れるコミュニティに疲れてきた。"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="クリエイターエコノミーは拡大しているのに、収益の大半はプラットフォームに吸収されている。個人が直接稼げる構造が社会的にまだ十分ではない。"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="広告依存モデルの限界が見えている。次の収益構造はユーザー間の直接契約だ。ただそのインフラが不完全だ。"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={wrapperRef}
        className="relative bg-[#FFF8F2] px-5 py-16 text-white md:px-20 md:py-[140px]"
      >
        <div className="js-svg-pin absolute inset-0">
          <div className="flex h-full w-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 288"
              fill="none"
            >
              <path
                ref={pathRef}
                className="[transform-origin:center] [transform-box:fill-box]"
                d="M1475 142.515C1412.33 187.848 1395.5 218.022 1229.5 273.522C1031.75 339.638 975.5 115.601 868 68.5152C777.67 28.9498 495.734 242.993 379 203.515C275.5 168.513 314.5 54.0198 207.5 13.5198C100.5 -26.9802 -28.5 50.0227 -91 79.5227"
                stroke="#F78629"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-wrap justify-center gap-5">
          <p
            ref={textRef}
            className="text-left text-[22px] font-black text-[#242424] md:text-[32px]"
          >
            KIVOの展開に
            <br />
            あなたも参加できます。
            <br />
            一緒に広げてみませんか？
          </p>
          <div className="relative flex justify-center">
            <a
              ref={circleRef}
              href="/support"
              className="flex size-[340px] flex-col items-center justify-center rounded-full bg-[#F78629] bg-[url(/assets/images/cir-01.png)] bg-cover md:size-[700px]"
            >
              <div className="flex w-[260px] flex-col items-center justify-center text-center md:w-[515px]">
                <div className="text-[13px] font-medium text-white md:text-[18px]">
                  <p className="">パートナーシップのご相談はこちらから</p>
                  <p className="text-[22px] font-bold md:text-[44px]">
                    KIVOのパートナーになる
                  </p>
                </div>
                <div className="my-4 h-px w-full bg-white md:my-8"></div>
                <div className="">
                  <img src="/assets/images/arrow_right_alt.svg" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
