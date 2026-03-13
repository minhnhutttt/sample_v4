'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';
import SplitTextReveal from '@/components/animations/Splittextreveal';
import Button from '@/components/button';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import type { AbsRect } from '@/types/card-animation';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARD_DEFS = [
  {
    id: 'sc0',
    destId: 'ph0',
    name: 'Steproof',
    image: '/assets/images/thumbnail.jpg',
    tags: ['移動距離照明・自動化'],
    href: '/steproof',
  },
  {
    id: 'sc1',
    destId: 'ph1',
    name: 'VisionFlow',
    image: '/assets/images/thumbnail-02.jpg',
    tags: ['データ分析'],
    href: '/steproof#assess',
  },
  {
    id: 'sc2',
    destId: 'ph2',
    name: 'CoreNexus',
    image: '/assets/images/thumbnail-03.jpg',
    tags: ['CRM/顧客管理'],
    href: '/steproof#envision',
  },
  {
    id: 'sc3',
    destId: 'ph3',
    name: 'AquaGrid',
    image: '/assets/images/thumbnail-04.jpg',
    tags: ['在庫最適化'],
    href: '/steproof#execute',
  },
] as const;

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
  return {
    top: r.top + window.scrollY,
    left: r.left + window.scrollX,
    width: r.width,
    height: r.height,
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeKv() {
  const dispatch = useAppDispatch();
  const ref = useScrollAnimations();
  const scrollSectionRef = useRef<HTMLElement>(null);
  const stackRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const placeholderRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const N = CARD_DEFS.length;

    let cardOrder: HTMLAnchorElement[] = CARD_DEFS.map(
      (c) => stackRefs.current.get(c.id)!,
    );

    // ── Place cards in their slots ─────────────────────────────────────────────
    function applySlots(order: HTMLAnchorElement[], animate = false) {
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

    // ── Flying card clones ─────────────────────────────────────────────────────
    // Lenis không dùng wrapper transform → append vào document.body là OK
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
          <img  style="width:100%;height:100%;display:flex;align-items:flex-end;" src=${card.image} alt="" />
        </div>`;
      document.body.appendChild(el);
      gsap.set(el, { opacity: 0, top: 0, left: 0, width: 0, height: 0 });
      return el;
    });

    // ── Snapshot absolute page coords ──────────────────────────────────────────
    type SnapEntry = { src: AbsRect; dest: AbsRect };
    let snaps: SnapEntry[] = [];

    function snapshot() {
      snaps = CARD_DEFS.map(({ id, destId }) => ({
        src: absRect(stackRefs.current.get(id)!),
        dest: absRect(placeholderRefs.current.get(destId)!),
      }));
    }

    // ── ScrollTrigger ──────────────────────────────────────────────────────────
    function buildTrigger() {
      snapshot();

      let wasInZone = false;

      ScrollTrigger.create({
        trigger: scrollSectionRef.current,
        start: 'top 85%',
        end: 'top 15%',
        scrub: true,

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
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', buildTrigger);
      flyEls.forEach((el) => el.remove());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setStackRef = (id: string) => (el: HTMLAnchorElement | null) => {
    if (el) stackRefs.current.set(id, el);
  };
  const setPlaceholderRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) placeholderRefs.current.set(id, el);
  };

  return (
    <div ref={ref} className="relative z-10">
      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="carousel-cards relative z-5 overflow-hidden">
        <div className="site-max relative flex min-h-screen flex-col items-center gap-y-[3rem] pt-[12rem] pb-[7.2rem] md:flex-row">
          {/* Text */}
          <div className="relative flex flex-col md:justify-between">
            <SplitTextReveal
              as="h1"
              splitType="chars"
              triggerStart="top 80%"
              toggleActions="play none none none"
              className="js-t-title text-[4.2rem] font-black md:text-[7.6rem]"
            >
              事業の可能性を、 <br />
              確かな利益へ。
            </SplitTextReveal>

            <div className="fade-up mt-[2rem] flex flex-col items-start gap-[4.8rem] md:mt-[20rem]">
              <p className="js-t-fade-up text-[1.4rem] md:max-w-[60rem]">
                私たちは、企業の持続的な成長を支える厳選されたプロダクトを提供し、収益性の向上と業務の最適化を支援します。
              </p>
              <Button
                text="お問い合わせ"
                en="CONTACT US"
                onClick={() => dispatch(openModal({ name: 'contact' }))}
              />
            </div>
          </div>

          {/* ── Card Stack ── */}
          <div className="fade-up relative flex flex-1 justify-center">
            <div className="relative aspect-324/551 w-[24rem] md:w-[32.4rem]">
              {[...CARD_DEFS].reverse().map((card) => (
                <Link
                  href={card.href}
                  key={card.id}
                  ref={setStackRef(card.id)}
                  className="absolute top-0 right-0 aspect-324/551 w-[24rem] cursor-pointer overflow-hidden rounded-2xl md:w-[32.4rem]"
                >
                  <img src={card.image} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Dùng <a> anchor link — Lenis với anchors: true sẽ smooth scroll tự động */}
        <Link
          href="/#products"
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
              stroke="#9579C8"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 36L9.56124 43.8313L1.99997 36"
              stroke="#9579C8"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 19.1687L9.56124 27L1.99997 19.1687"
              stroke="#9579C8"
              strokeWidth="4"
            ></path>
            <path
              className="scroll-icon__part"
              d="M17.6626 1.99999L9.56124 9.8313L1.99997 1.99998"
              stroke="#9579C8"
              strokeWidth="4"
            ></path>
          </svg>
        </Link>
      </section>

      {/* ════════════════════════ SCROLL SECTION ════════════════════════ */}
      <section
        ref={scrollSectionRef}
        className="select-work w-full py-[9rem] text-black md:py-[10rem]"
      >
        <div
          id="products"
          className="site-max mx-auto! flex flex-col items-start max-md:max-w-[400px]!"
        >
          <div className="js-flip-targets flex w-full flex-col items-center justify-center gap-y-[3.5rem]">
            <div className="relative text-center text-[3.6rem] font-bold md:text-[7rem]">
              Recommended Products
            </div>
          </div>

          {/* Destination grid */}
          <div className="relative mt-[6rem] grid w-full grid-cols-1 gap-y-[4rem] md:mt-[8rem] md:grid-cols-4 md:gap-x-[5.7rem]">
            {CARD_DEFS.map((card) => (
              <Link
                href={card.href}
                key={card.destId}
                className="work-card relative col-span-1"
              >
                <div
                  ref={setPlaceholderRef(card.destId)}
                  className="w-full rounded-[14px]"
                  style={{
                    aspectRatio: '324/551',
                  }}
                />
                <div className="work-card-content relative z-2 -mt-[0.5rem] overflow-hidden md:-mt-[1.5rem]">
                  <div className="work-card-content__inner relative flex flex-col gap-y-[1rem] pt-[2.5rem] pb-[1.5rem]">
                    <h3 className="work-card__title relative z-2 text-[1.8rem] !leading-none font-bold">
                      {card.name}
                    </h3>
                    <div className="work-card__pills relative z-2 flex flex-wrap gap-[0.5rem] md:gap-[1rem]">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex h-[3rem] items-center rounded-full border border-current px-[0.8rem] text-[1.4rem] leading-none whitespace-nowrap md:h-[3.4rem] md:px-[1.2rem]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
