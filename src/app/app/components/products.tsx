'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Custom Cursor ──────────────────────────────────────────────
const CustomCursor = ({ visible }: { visible: boolean }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);
  const isVisible = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      if (isVisible.current) {
        current.current.x = lerp(current.current.x, pos.current.x, 0.5);
        current.current.y = lerp(current.current.y, pos.current.y, 0.5);

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Khi visible thay đổi: snap ngay vị trí chuột rồi mới show/hide
  useEffect(() => {
    isVisible.current = visible;

    if (visible) {
      // Snap thẳng đến vị trí chuột hiện tại, không lerp từ chỗ cũ
      current.current.x = pos.current.x;
      current.current.y = pos.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
    }
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className="max-md:hidden!"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: '#e5000a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        // Chỉ transition opacity, KHÔNG transition scale để tránh "chạy đi"
        transition: 'opacity 0.2s ease',
        willChange: 'transform',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          userSelect: 'none',
          fontFamily: 'sans-serif',
        }}
      >
        See Live
      </span>
    </div>
  );
};

// ── ProductItem ────────────────────────────────────────────────
const ProductItem = ({
  href,
  img,
  head,
  text,
  onEnter,
  onLeave,
}: {
  href: string;
  img: string;
  head: string;
  text: string;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
  }, [onEnter, onLeave]);

  return (
    <a
      ref={itemRef}
      href={href}
      className="flex flex-col items-start gap-6 text-white md:even:mt-[160px]"
      style={{ cursor: 'none' }}
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
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleEnter = useCallback(() => setCursorVisible(true), []);
  const handleLeave = useCallback(() => setCursorVisible(false), []);

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
      <CustomCursor visible={cursorVisible} />
      <section className="js-header-color relative bg-[#242424] px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[480px] md:max-w-[1280px]">
          <div className="flex flex-col items-center">
            <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-[96px]">
              {items.map((item) => (
                <ProductItem
                  key={item.text}
                  href="#"
                  {...item}
                  onEnter={handleEnter}
                  onLeave={handleLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#242424] px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[480px] md:max-w-[1280px]">
          <div className="grid gap-10 text-white md:grid-cols-2 lg:gap-[96px]">
            <div className="flex flex-col gap-2 leading-snug">
              <p className="text-[80px] md:text-[130px]">計測中...</p>
              <p className="text-[16px] text-[#8c939d] md:text-[20px]">
                Total Contracted Value
              </p>
            </div>
            <div className="flex flex-col gap-2 leading-snug">
              <p className="text-[80px] md:text-[130px]">計測中...</p>
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
            <h4 className="text-center text-[40px] font-bold md:text-[80px]">
              KIVOはこんな課題を持つ人々のために作られました
            </h4>
            <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-[96px]">
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
          <div className="py-16 text-white md:py-24">
            <p className="text-center text-[22px] md:text-[40px] xl:text-[80px]">
              KIVOの展開に、
              <br />
              あなたも参加できます。
              <br />
              一緒に広げてみませんか？
              <br />
              パートナーシップの
              <br />
              ご相談はこちらから。
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="/support"
                className="flex h-[60px] w-[280px] items-center justify-center rounded-full bg-[#F78629] px-1 py-2 text-[10px] text-[18px] leading-none font-bold text-white transition-all duration-200 group-[.active]:bg-[#242424] md:px-3 md:text-[12px] md:text-[24px]"
              >
                KIVOパートナーになる
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
