'use client';

import dynamic from 'next/dynamic';

import HomeText from './HomeText';

const CurvedCarousel = dynamic(() => import('@/components/CurvedCarousel'), {
  ssr: false,
});

export default function HomeFv() {
  return (
    <section className="section section--under-next">
      <div className="section__layer section__layer--sticky section__layer--full-height ui-orange ui-background intro intro--show">
        <HomeText />
        <div className="flex p-[20px] md:items-end">
          <div className="">
            {/* Tagline column */}
            <div className="text-[30px] tracking-widest">
              <p className="">
                Nexus of <br />
                Curators and Artists
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10">
          <CurvedCarousel />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-1">
          <CurvedCarousel isBack />
        </div>
      </div>
    </section>
  );
}
