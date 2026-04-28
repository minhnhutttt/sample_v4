'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

type BoardItem = {
  name: string;
  firstName: string;
  role: string;
  image: string;
  bgColor: string;
};

const BOARD_ITEMS: BoardItem[] = [
  {
    name: 'YOSHIKI',
    firstName: 'ARIMA',
    role: 'CEO',
    image: '/assets/images/ARIMA-YOSHIKI-CEO.png',
    bgColor: '#FFC36A',
  },
  {
    name: 'YASUHIRO',
    firstName: 'NARIDOMI',
    role: 'CTO',
    image: '/assets/images/NARIDOMI-YASUHIRO-CTO.png',
    bgColor: '#8ADCFF',
  },
  {
    name: 'YOSHIYA',
    firstName: 'KATO',
    role: 'CFO',
    image: '/assets/images/KATO-YOSHIYA-CFO.png',
    bgColor: '#D9F7BB',
  },
  {
    name: 'TOSHIYUKI',
    firstName: 'ISHIDA',
    role: 'COO',
    image: '/assets/images/ISHIDA-TOSHIYUKI-COO.png',
    bgColor: '#E07787',
  },
];

const BoardMember = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Ref arrays cho từng phần tử con của mỗi item
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const colorBgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  const wrapperTextRef = useRef<HTMLDivElement>(null);
  const textMiddleRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!wrapper || items.length === 0) return;

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        const colorBg = colorBgRefs.current[i];
        const img = imgRefs.current[i];
        const frame = frameRefs.current[i];

        // Trạng thái ban đầu: tránh nhấp nháy trước khi ScrollTrigger kích hoạt
        gsap.set(item, { autoAlpha: 0, x: i % 2 === 0 ? -150 : 150 });
        if (colorBg) {
          gsap.set(colorBg, { scaleX: 0, transformOrigin: 'right center' });
        }
        if (img) {
          gsap.set(img, { yPercent: 20, autoAlpha: 0 });
        }
        if (frame) {
          gsap.set(frame, {
            scale: 0.6,
            autoAlpha: 0,
            rotate: i % 2 === 0 ? -6 : 6,
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
          defaults: { ease: 'power3.out' },
        });

        tl.to(item, {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        })
          .to(
            colorBg,
            {
              scaleX: 1,
              duration: 0.9,
              ease: 'power2.out',
            },
            '-=0.7',
          )
          .to(
            img,
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: 'power2.out',
            },
            '-=0.6',
          )
          .to(
            frame,
            {
              scale: 1,
              rotate: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: 'back.out(1.6)',
            },
            '-=0.5',
          );
      });
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

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
          trigger: wrapperTextRef.current,
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
    <div className="overflow-hidden px-5 pt-32 pb-28 text-[#f6c548] md:pt-32 md:pb-40">
      <div
        ref={wrapperTextRef}
        className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] py-[max(24px,24px+100vw*.0212)]"
      >
        <div className="relative z-10 text-center text-[clamp(40px,calc(14px+9.25vw),132px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#F78629] will-change-transform">
          <span ref={textMiddleRef} className="inline-block">
            Board Member
          </span>
          <span ref={textBottomRef} className="absolute inset-0 inline-block">
            Board Member
          </span>
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="relative mx-auto flex max-w-[1200px] flex-wrap justify-center font-bold text-black"
      >
        {BOARD_ITEMS.map((member, i) => (
          <div
            key={member.role}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative flex h-[350px] w-[350px] flex-col items-center justify-center overflow-hidden border border-[#ccc] md:h-[400px] md:w-[600px]"
          >
            <div
              ref={(el) => {
                colorBgRefs.current[i] = el;
              }}
              className="absolute right-0 h-full w-1/2"
              style={{ backgroundColor: member.bgColor }}
            />
            <div className="absolute inset-0 flex h-full w-full items-end">
              <img
                ref={(el) => {
                  imgRefs.current[i] = el;
                }}
                src={member.image}
                alt={`${member.name} ${member.firstName}`}
              />
            </div>
            <div
              ref={(el) => {
                frameRefs.current[i] = el;
              }}
              className="relative h-[280px] w-[320px] bg-[url(/assets/images/frame.png)] bg-[size:100%_100%] px-4 py-6 md:h-[318px] md:w-[521px] md:px-8"
            >
              <p className="text-[24px] font-bold text-[#F78629] md:text-[32px]">
                {member.name} <br />
                {member.firstName}
              </p>
              <p className="font-rock-salt -rotate-5 text-[40px] font-normal text-white md:text-[72px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMember;
