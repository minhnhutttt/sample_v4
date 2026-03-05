'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';
import SplitTextReveal from '@/components/animations/Splittextreveal';
import Button from '@/components/button';
import type { AbsRect } from '@/types/card-animation';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARD_DEFS = [
  {
    id: 'sc0',
    destId: 'ph0',
    name: 'Altra',
    image: '/assets/images/thumbnail.jpg',
    tags: ['Fashion & Apparel', 'Outdoor & Active Lifestyle'],
  },
  {
    id: 'sc1',
    destId: 'ph1',
    name: 'arrae',
    image: '/assets/images/thumbnail-02.jpg',
    tags: ['Health & Wellness'],
  },
  {
    id: 'sc2',
    destId: 'ph2',
    name: 'OREO',
    image: '/assets/images/thumbnail-03.jpg',
    tags: ['Food & Beverage', 'CPG'],
  },
  {
    id: 'sc3',
    destId: 'ph3',
    name: 'Coca-Cola',
    image: '/assets/images/thumbnail-04.jpg',
    tags: ['Food & Beverage', 'CPG'],
  },
] as const;

const BRANDS = ['NORDSTROM', "HARRY'S", 'OREO', 'COCA-COLA', 'ALTRA'];

// ─── Slot definitions ──────────────────────────────────────────────────────────
const SLOTS = [
  { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 4 },
  { x: 40, y: 0, rotation: 0, scale: 0.97, opacity: 0.75, zIndex: 3 },
  { x: 80, y: 0, rotation: 0, scale: 0.94, opacity: 0.52, zIndex: 2 },
  { x: 120, y: 0, rotation: 0, scale: 0.91, opacity: 0.32, zIndex: 1 },
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function absRect(el: HTMLElement): AbsRect {
  const r = el.getBoundingClientRect();
  const smoother = ScrollSmoother.get();
  const scrollY = smoother ? smoother.scrollTop() : window.scrollY;
  return {
    top: r.top + scrollY,
    left: r.left + window.scrollX,
    width: r.width,
    height: r.height,
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeKv() {
  const ref = useScrollAnimations();
  const scrollSectionRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const stackRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const placeholderRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const N = CARD_DEFS.length;

    let cardOrder: HTMLDivElement[] = CARD_DEFS.map(
      (c) => stackRefs.current.get(c.id)!,
    );

    // ── Place cards in their slots ─────────────────────────────────────────────
    function applySlots(order: HTMLDivElement[], animate = false) {
      order.forEach((el, slotIdx) => {
        const s = SLOTS[slotIdx];
        const props = {
          x: s.x,
          y: s.y,
          rotation: s.rotation,
          scale: s.scale,
          opacity: s.opacity,
          zIndex: s.zIndex,
        };
        if (animate) {
          gsap.to(el, { ...props, duration: 0.6, ease: 'power3.out' });
        } else {
          gsap.set(el, props);
        }
      });
    }

    applySlots(cardOrder);

    // ── Carousel rotation ──────────────────────────────────────────────────────
    let autoRotate = true;
    let isAnimating = false;

    function rotateCarousel() {
      if (!autoRotate || isAnimating) return;
      isAnimating = true;

      const exitEl = cardOrder[0];

      gsap.to(exitEl, {
        x: -70,
        y: 130,
        rotation: -14,
        scale: 0.65,
        opacity: 0,
        duration: 0.48,
        ease: 'power2.in',
        onComplete() {
          cardOrder = [...cardOrder.slice(1), exitEl];

          const backSlot = SLOTS[N - 1];
          gsap.set(exitEl, {
            x: backSlot.x,
            y: backSlot.y,
            rotation: backSlot.rotation,
            scale: backSlot.scale,
            opacity: 0,
            zIndex: backSlot.zIndex,
          });

          let completedCount = 0;
          cardOrder.forEach((el, slotIdx) => {
            const s = SLOTS[slotIdx];
            gsap.to(el, {
              x: s.x,
              y: s.y,
              rotation: s.rotation,
              scale: s.scale,
              opacity: s.opacity,
              zIndex: s.zIndex,
              duration: 0.55,
              ease: 'power3.out',
              onComplete() {
                completedCount++;
                if (completedCount === N) isAnimating = false;
              },
            });
          });
        },
      });
    }

    let rotIntervalId = setInterval(rotateCarousel, 2400);

    function stopCarousel() {
      autoRotate = false;
      clearInterval(rotIntervalId);
    }

    function startCarousel() {
      autoRotate = true;
      isAnimating = false;
      clearInterval(rotIntervalId);
      rotIntervalId = setInterval(rotateCarousel, 2400);
    }

    // ── Brand pill ─────────────────────────────────────────────────────────────
    let bIdx = 0;
    const brandInterval = setInterval(() => {
      bIdx = (bIdx + 1) % BRANDS.length;
      const pill = pillRef.current;
      if (!pill) return;
      gsap.to(pill, {
        opacity: 0,
        y: -8,
        duration: 0.22,
        onComplete() {
          pill.textContent = BRANDS[bIdx];
          gsap.fromTo(
            pill,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.22 },
          );
        },
      });
    }, 1900);

    // ── Flying card clones ─────────────────────────────────────────────────────
    // FIX: Append vào #smooth-content thay vì document.body
    // Khi fly cards nằm trong #smooth-content, tọa độ absolute của chúng
    // sẽ đồng bộ với transform của smoother — không bị lệch.
    const smoothContent =
      document.querySelector<HTMLElement>('#smooth-content') ?? document.body;

    const flyEls: HTMLDivElement[] = CARD_DEFS.map((card) => {
      const el = document.createElement('div');
      el.style.cssText = `
        position: absolute;
        border-radius: 14px;
        overflow: hidden;
        pointer-events: none;
        z-index: 10;
      `;
      el.innerHTML = `
        <div style="width:100%;height:100%;display:flex;align-items:flex-end;">
          <img src=${card.image} alt="" />
        </div>`;
      smoothContent.appendChild(el);
      gsap.set(el, { opacity: 0, top: 0, left: 0, width: 0, height: 0 });
      return el;
    });

    // ── Snapshot absolute page coords ──────────────────────────────────────────
    type SnapEntry = { src: AbsRect; dest: AbsRect };
    let snaps: SnapEntry[] = [];

    function snapshot() {
      // FIX: absRect() giờ dùng smoother.scrollTop() bên trong
      // nên snaps luôn phản ánh đúng vị trí trong document
      snaps = CARD_DEFS.map(({ id, destId }) => ({
        src: absRect(stackRefs.current.get(id)!),
        dest: absRect(placeholderRefs.current.get(destId)!),
      }));
    }

    // ── ScrollTrigger ──────────────────────────────────────────────────────────
    function buildTrigger() {
      // FIX: Gọi smoother.effects() để đảm bảo smoother đã tính xong
      // positions trước khi ta snapshot — tránh lấy coords ở trạng thái chưa settle
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.effects();
      }

      snapshot();

      let wasInZone = false;

      ScrollTrigger.create({
        trigger: scrollSectionRef.current,
        start: 'top 85%',
        end: 'top 15%',
        scrub: true,
        // FIX: refreshPriority âm để ScrollTrigger này refresh SAU khi
        // ScrollSmoother đã refresh xong (smoother có priority mặc định cao hơn).
        // Tránh tình trạng snapshot sai vị trí khi resize/refresh.
        refreshPriority: -1,

        onUpdate(self) {
          const p = self.progress;
          const inZone = p > 0;

          if (inZone && !wasInZone) {
            wasInZone = true;
            stopCarousel();

            // Re-snapshot tại thời điểm enter để đảm bảo coords mới nhất
            snapshot();

            snaps.forEach(({ src }, i) => {
              gsap.set(flyEls[i], {
                top: src.top,
                left: src.left,
                width: src.width,
                height: src.height,
                opacity: 1,
              });
            });
            cardOrder.forEach((el) => gsap.set(el, { opacity: 0 }));
          }

          if (!inZone && wasInZone) {
            wasInZone = false;
            flyEls.forEach((el) => gsap.set(el, { opacity: 0 }));
            applySlots(cardOrder);
            startCarousel();
            return;
          }

          if (!inZone) return;

          snaps.forEach(({ src, dest }, i) => {
            const delay = i * 0.14;
            const t = Math.max(0, Math.min(1, (p - delay) / (1 - delay)));
            gsap.set(flyEls[i], {
              top: lerp(src.top, dest.top, t),
              left: lerp(src.left, dest.left, t),
              width: lerp(src.width, dest.width, t),
              height: lerp(src.height, dest.height, t),
              opacity: 1,
            });
          });
        },
      });
    }

    if (document.readyState === 'complete') {
      buildTrigger();
    } else {
      window.addEventListener('load', buildTrigger);
    }

    function handleResize() {
      snapshot();
      ScrollTrigger.refresh();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      stopCarousel();
      clearInterval(brandInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', buildTrigger);
      flyEls.forEach((el) => el.remove());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setStackRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) stackRefs.current.set(id, el);
  };
  const setPlaceholderRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) placeholderRefs.current.set(id, el);
  };

  return (
    <div ref={ref} className="bg-green relative z-10">
      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="carousel-cards bg-green relative z-5 overflow-hidden">
        <div className="site-max relative flex min-h-screen flex-col items-center gap-y-[3rem] pt-[10rem] pb-[3rem] pb-[10rem] md:flex-row md:pt-[17rem] md:pb-0 md:pb-[10rem]">
          {/* Text */}
          <div className="relative flex flex-1 flex-col md:justify-between">
            <SplitTextReveal
              as="h1"
              splitType="chars"
              triggerStart="top 80%"
              toggleActions="play none none reset"
              className="h1 br-allowed js-t-title upp font-black"
            >
              Genuine. <br />
              Impact.
            </SplitTextReveal>

            <div className="fade-up mt-[2rem] flex flex-col items-start md:mt-[20rem]">
              <p className="h4 js-t-fade-up md:max-w-[60rem]">
                We are an industry-leading digital marketing agency partnering
                with bold brands to drive impact across every stage of the
                customer journey - maximizing it, measuring it, and repeating
                it.
              </p>
            </div>
          </div>

          {/* ── Card Stack ── */}
          <div className="fade-up relative flex flex-1 justify-center">
            <div className="relative aspect-482/858 w-[24rem] md:w-[40.5rem]">
              {[...CARD_DEFS].reverse().map((card) => (
                <div
                  key={card.id}
                  ref={setStackRef(card.id)}
                  className="absolute top-0 right-0 aspect-482/858 w-[24rem] cursor-pointer overflow-hidden rounded-2xl md:w-[40.5rem]"
                >
                  <img src={card.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="scroll-icon absolute bottom-[4rem] left-[2rem] md:left-1/2 md:-translate-x-1/2"
          aria-label="Scroll"
        >
          <svg
            className="h-[6.5rem] w-auto"
            viewBox="0 0 20 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="scroll-icon__part"
              d="M17.6626 53L9.56124 60.8313L1.99997 53"
              stroke="#CCE561"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 36L9.56124 43.8313L1.99997 36"
              stroke="#CCE561"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 19.1687L9.56124 27L1.99997 19.1687"
              stroke="#CCE561"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 1.99999L9.56124 9.8313L1.99997 1.99998"
              stroke="#CCE561"
              strokeWidth="4"
            ></path>
          </svg>
        </button>
      </section>

      {/* ════════════════════════ SCROLL SECTION ════════════════════════ */}
      <section
        ref={scrollSectionRef}
        className="select-work w-full bg-[#FAF2E8] pt-[9rem] pb-[9rem] text-black md:pt-[15rem] md:pb-[15rem]"
      >
        <div className="site-max mx-auto! flex flex-col items-start max-md:max-w-[400px]!">
          <div className="js-flip-targets flex w-full flex-col items-center gap-y-[3.5rem]">
            <p className="h7 text-center">Selected Work</p>

            <div className="h2 relative flex w-full flex-col items-center gap-[2rem] md:mx-auto md:max-w-[124rem] md:flex-row md:whitespace-nowrap">
              Creating impact for &nbsp;
              <div className="bg-green-electric radius-global relative flex-1 max-md:w-full max-md:max-w-[28rem]">
                <div className="stack relative overflow-hidden">
                  <span
                    ref={pillRef}
                    className="h4 relative flex h-[6.5rem] items-center justify-center md:h-[7.5rem]"
                  >
                    NORDSTROM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Destination grid */}
          <div className="relative mt-[6rem] grid w-full grid-cols-1 gap-y-[4rem] md:mt-[10rem] md:grid-cols-4 md:gap-x-[8rem]">
            {CARD_DEFS.map((card) => (
              <div key={card.destId} className="work-card relative col-span-1">
                <div
                  ref={setPlaceholderRef(card.destId)}
                  className="w-full rounded-[14px]"
                  style={{
                    aspectRatio: '482/858',
                  }}
                />
                <div className="work-card-content relative z-2 -mt-[1rem] overflow-hidden">
                  <div className="work-card-content__inner relative flex flex-col gap-y-[1.5rem] pt-[2.5rem] pb-[1.5rem]">
                    <h3 className="work-card__title h4 relative z-2 !leading-none font-bold">
                      {card.name}
                    </h3>
                    <div className="work-card__pills relative z-2 flex gap-x-[0.5rem] md:gap-x-[1rem]">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="s:h-[3.4rem] s:px-[1.2rem] inline-flex h-[3rem] items-center rounded-full border border-current px-[0.8rem] text-[1.4rem] leading-none whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[4rem] text-center md:mt-[7.5rem]">
            <Button href="/" text="View all work" />
          </div>
        </div>
      </section>
    </div>
  );
}
