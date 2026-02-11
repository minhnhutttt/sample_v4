'use client';

import { useEffect, useRef } from 'react';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(val, max));

const images = [
  {
    src: 'https://images.unsplash.com/photo-1595265677860-9a3168007dc0?auto=format&fit=crop&w=800&q=60',
    title: 'South',
  },
  {
    src: 'https://images.unsplash.com/photo-1594786118579-95ba90c801ec?auto=format&fit=crop&w=800&q=60',
    title: 'Troker',
  },
  {
    src: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&w=800&q=60',
    title: 'Slant',
  },
  {
    src: 'https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?auto=format&fit=crop&w=800&q=60',
    title: 'Gravy',
  },
  {
    src: 'https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?auto=format&fit=crop&w=800&q=60',
    title: 'Amuse',
  },
  {
    src: 'https://images.unsplash.com/photo-1592989819277-a3aafa40c66a?auto=format&fit=crop&w=800&q=60',
    title: 'Truffle',
  },
  {
    src: 'https://images.unsplash.com/photo-1548374797-d13fd5d2b2a8?auto=format&fit=crop&w=800&q=60',
    title: 'Locker',
  },
];

export default function DragCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current!;
    const wrap = wrapRef.current!;
    const bar = barRef.current!;

    let progress = 0;
    let x = 0;
    let oldX = 0;
    let maxScroll = 0;
    let speed = 0;
    let dragging = false;
    let startX = 0;

    /* =========================
       Calculate Width
    ========================== */
    const calculate = () => {
      const itemWidth = itemRefs.current[0]?.clientWidth || 0;
      const totalWidth = itemWidth * images.length;
      wrap.style.width = `${totalWidth}px`;
      maxScroll = totalWidth - container.clientWidth;
    };

    /* =========================
       Wheel Scroll
    ========================== */
    const handleWheel = (e: WheelEvent) => {
      progress += e.deltaY;
      progress = clamp(progress, 0, maxScroll);
    };

    /* =========================
       Pointer Events (Fix bug drag)
    ========================== */
    const handlePointerDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      container.setPointerCapture(e.pointerId);
      container.classList.add('cursor-grabbing');
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragging) return;

      progress += (startX - e.clientX) * 2.5;
      progress = clamp(progress, 0, maxScroll);
      startX = e.clientX;
    };

    const handlePointerUp = (e: PointerEvent) => {
      dragging = false;
      container.releasePointerCapture(e.pointerId);
      container.classList.remove('cursor-grabbing');
    };

    /* =========================
       RAF Loop
    ========================== */
    const raf = () => {
      x = lerp(x, progress, 0.1);
      const playrate = maxScroll ? x / maxScroll : 0;

      wrap.style.transform = `translateX(${-x}px)`;
      bar.style.transform = `scaleX(${0.18 + playrate * 0.82})`;

      speed = Math.min(100, oldX - x);
      oldX = x;

      itemRefs.current.forEach((item) => {
        if (!item) return;
        item.style.transform = `scale(${1 - Math.abs(speed) * 0.002})`;
        const img = item.querySelector('img') as HTMLImageElement;
        if (img) {
          img.style.transform = `scaleX(${1 + Math.abs(speed) * 0.004})`;
        }
      });

      requestAnimationFrame(raf);
    };

    /* =========================
       Init
    ========================== */
    calculate();
    raf();

    window.addEventListener('resize', calculate);
    window.addEventListener('wheel', handleWheel);

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointerleave', handlePointerUp);

    return () => {
      window.removeEventListener('resize', calculate);
      window.removeEventListener('wheel', handleWheel);

      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointerleave', handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full cursor-grab items-center overflow-hidden"
    >
      <div ref={wrapRef} className="whitespace-nowrap will-change-transform">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="relative inline-block w-[30vw] p-[3vw] select-none"
          >
            <div className="relative overflow-hidden pb-[56.25%]">
              <img
                src={item.src}
                alt=""
                draggable={false}
                className="pointer-events-none absolute h-full w-full object-cover"
              />
            </div>

            <h2 className="absolute bottom-[1vw] text-[6vw] text-white">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-[2vw] left-[3vw] h-[1px] w-[20vw] bg-white/20">
        <div
          ref={barRef}
          className="h-full origin-left scale-x-0 bg-white/80 will-change-transform"
        />
      </div>
    </div>
  );
}
