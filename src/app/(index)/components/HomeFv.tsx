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
        <div className="intro__footer mt-3:md pointer-events-none mt-1 px-1 py-1">
          <div className="row row--gx row--bottom">
            {/* Tagline column */}
            <div className="col col--12 col--6:md">
              <p className="text-box-trim text-left:md text-right">
                Nexus of <br />
                Curators and
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
