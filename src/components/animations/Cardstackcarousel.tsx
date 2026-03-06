'use client';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface CarouselCard {
  id: string;
  image: string;
  name?: string;
}

interface SlotDef {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

export interface CardStackCarouselProps {
  /** Array of cards to display in the stack */
  cards: CarouselCard[];
  /** Interval between auto-rotations in ms (default: 2400) */
  rotateInterval?: number;
  /** Custom slot definitions for the stack offset/scale/opacity */
  slots?: SlotDef[];
  /** Extra className on the root wrapper */
  className?: string;
}

// ─── Default Slots ─────────────────────────────────────────────────────────────

const DEFAULT_SLOTS: SlotDef[] = [
  { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 4 },
  { x: 40, y: 0, rotation: 0, scale: 0.97, opacity: 0.75, zIndex: 3 },
  { x: 80, y: 0, rotation: 0, scale: 0.94, opacity: 0.52, zIndex: 2 },
  { x: 120, y: 0, rotation: 0, scale: 0.91, opacity: 0.32, zIndex: 1 },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CardStackCarousel({
  cards,
  rotateInterval = 2400,
  slots = DEFAULT_SLOTS,
  className = '',
}: CardStackCarouselProps) {
  const stackRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setStackRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) stackRefs.current.set(id, el);
    else stackRefs.current.delete(id);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const N = cards.length;
    // Maintain mutable order reference
    let cardOrder: HTMLDivElement[] = cards.map(
      (c) => stackRefs.current.get(c.id)!,
    );

    // ── Place cards into their slots ────────────────────────────────────────────
    function applySlots(order: HTMLDivElement[], animate = false) {
      order.forEach((el, slotIdx) => {
        const s = slots[slotIdx] ?? slots[slots.length - 1];
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

    // ── Auto-rotate carousel ────────────────────────────────────────────────────
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

          const backSlot = slots[N - 1] ?? slots[slots.length - 1];
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
            const s = slots[slotIdx] ?? slots[slots.length - 1];
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

    const intervalId = setInterval(rotateCarousel, rotateInterval);

    return () => {
      autoRotate = false;
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, rotateInterval]);

  return (
    <div
      data-carousel-root
      className={`relative flex justify-center ${className}`}
    >
      {/* Outer wrapper keeps the bounding box to the front card size */}
      <div className="relative aspect-482/858 w-[24rem] md:w-[40.5rem]">
        {/* Render in reverse so z-index stacking is correct in the DOM */}
        {[...cards].reverse().map((card) => (
          <div
            key={card.id}
            ref={setStackRef(card.id)}
            className="carousel-card-inner absolute top-0 right-0 cursor-pointer overflow-hidden rounded-2xl"
          >
            <img
              src={card.image}
              alt={card.name ?? ''}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
