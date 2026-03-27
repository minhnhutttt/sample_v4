'use client';

import dynamic from 'next/dynamic';

// Three.js relies on browser APIs — disable SSR
const CurvedCarousel = dynamic(() => import('@/components/CurvedCarousel'), {
  ssr: false,
});

export default function HomeFv() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <CurvedCarousel />
      </div>
      <div className="absolute inset-0">
        <CurvedCarousel isBack />
      </div>
    </section>
  );
}
