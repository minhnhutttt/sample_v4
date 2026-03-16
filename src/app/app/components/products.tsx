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
  video,
  href,
  img,
  head,
  text,
  onEnter,
  onLeave,
}: {
  video: string;
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
    const videoEl = videoRef.current;
    const headEl = headRef.current;
    const textEl = textRef.current;
    if (!el || !videoEl || !headEl || !textEl) return;

    gsap.set(videoEl, { scale: 1.2 });
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

    tl.to(videoEl, { scale: 1, duration: 1.1, ease: 'power3.out' })
      .to(
        headEl,
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5',
      )
      .to(
        textEl,
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.5',
      );

    const handleMouseEnter = () => {
      videoEl.play();
      onEnter();
    };
    const handleMouseLeave = () => {
      videoEl.pause();
      videoEl.currentTime = 0;
      onLeave();
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onEnter, onLeave]);

  return (
    <a
      ref={itemRef}
      href={href}
      className="flex flex-col items-start gap-6 text-white md:even:mt-[160px]"
      style={{ cursor: 'none' }}
    >
      <div className="aspect-[1/1.17845] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          className="h-full w-full object-cover"
          style={{ backgroundImage: `url(${img})` }}
          muted
          loop
          playsInline
          preload="metadata"
          poster={img}
        />
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
      video: '/assets/video/app-01.mp4',
      img: '/assets/images/app-img-01.jpg',
      head: 'A prize-winning mobile experience. Designed and developed from zero to launch.',
      text: 'Discovery',
    },
    {
      video: '/assets/video/app-02.mp4',
      img: '/assets/images/app-img-02.jpg',
      head: 'Making public transport intuitive, fast, and actually enjoyable',
      text: 'Drop',
    },
    {
      video: '/assets/video/app-03.mp4',
      img: '/assets/images/app-img-03.jpg',
      head: 'Mobile app for 30.000 participants of the biggest Slovak music festival',
      text: 'Channel',
    },
    {
      video: '/assets/video/app-04.mp4',
      img: '/assets/images/app-img-04.jpg',
      head: 'Deep learning app that makes learning more efficient and fun',
      text: 'Chat',
    },
    {
      video: '/assets/video/app-05.mp4',
      img: '/assets/images/app-img-05.jpg',
      head: 'Mobile & Web app redesign for a calling software used by call centers all around the world',
      text: 'Account',
    },
    {
      video: '/assets/video/app-06.mp4',
      img: '/assets/images/app-img-06.jpg',
      head: "Streamlining OVB's operations with smart, unified business data",
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
              <p className="text-[80px] md:text-[130px]">$500M+</p>
              <p className="text-[16px] text-[#8c939d] md:text-[20px]">
                Total Contracted Value
              </p>
            </div>
            <div className="flex flex-col gap-2 leading-snug">
              <p className="text-[80px] md:text-[130px]">Over 70%</p>
              <p className="text-[16px] text-[#8c939d] md:text-[20px]">
                Repurchase Rate for Paid Content
              </p>
            </div>
          </div>
          <div className="py-16 md:py-24">
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
          </div>
          <div className="py-16 text-white md:py-24">
            <h4 className="text-center text-[40px] font-bold md:text-[80px]">
              クリエイターの新たな成長エンジンとして支持を受けています。
            </h4>
            <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-[96px]">
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
              <DesignItem
                icon="/assets/images/logo.svg"
                text="Internal tool development for a software company with funding of over $50M that globally handles IT device security"
              />
            </div>
          </div>
          <div className="py-16 text-white md:py-24">
            <p className="text-center text-[22px] md:text-[80px]">
              招待リンクはないけど始めたい？
              <br />
              あなたがクリエイターなら
              <br />
              運営が直接迎えにいきます。
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[60px] w-[280px] items-center justify-center rounded-full bg-[#21B94E] text-[18px] md:text-[24px]"
              >
                公式LINEで申請する
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
