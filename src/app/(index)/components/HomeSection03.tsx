'use client';

import Image from 'next/image';
import Link from 'next/link';

import StickySection from '@/components/StickySection';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Person {
  name: string;
  role: 'Artist' | 'Curator';
  image: string; // e.g. "person-1.jpg"
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PEOPLE: Person[] = [
  { name: 'Teona Toderel', role: 'Artist', image: '/images/person-1.jpg' },
  { name: 'Erin J Coholan', role: 'Artist', image: '/images/person-2.jpg' },
  { name: 'Baimba Kamara', role: 'Curator', image: '/images/person-3.jpg' },
  { name: 'Alberto Balocca', role: 'Artist', image: '/images/person-4.jpg' },
  { name: 'Thomas Oosterhof', role: 'Curator', image: '/images/person-5.jpg' },
  { name: 'Isabela Galeano', role: 'Curator', image: '/images/person-6.jpg' },
  { name: 'Danny Van der Elst', role: 'Artist', image: '/images/person-7.jpg' },
  { name: 'Sophie Wratzfeld', role: 'Curator', image: '/images/person-8.jpg' },
  { name: 'Farouk Alao', role: 'Artist', image: '/images/person-9.jpg' },
  { name: 'Keita Melle', role: 'Artist', image: '/images/person-10.jpg' },
];

// ─── Single person card ───────────────────────────────────────────────────────

function PersonCard({ person }: { person: Person }) {
  return (
    <li className="section-3__card">
      <div className="section-3__card-content">
        {/* Name */}
        <div className="section-3__card-content-item section-3__card-content-name text-smaller">
          <p className="section-3__card-content-item-text">{person.name}</p>
        </div>
        {/* Role */}
        <div className="section-3__card-content-item section-3__card-content-role text-smaller">
          <p className="section-3__card-content-item-text">{person.role}</p>
        </div>
      </div>

      {/* Portrait — Next.js Image handles srcset / avif / webp automatically */}
      <div
        className="img-full"
        style={{ position: 'relative', width: 160, height: 160 }}
      >
        <Image
          src={`${person.image}`}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 1536px"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </li>
  );
}

// ─── Infinite loop carousel ───────────────────────────────────────────────────
// The original renders the list twice (two <ul class="section-3__loop-group">)
// so CSS animation can loop seamlessly. We do the same.

function LoopCarousel() {
  return (
    <div className="section-3__loop-carousel mt-1">
      {/* Render twice for seamless CSS infinite scroll */}
      {[0, 1].map((i) => (
        <ul key={i} className="section-3__loop-group" aria-hidden={i === 1}>
          {PEOPLE.map((person) => (
            <PersonCard key={`${i}-${person.name}`} person={person} />
          ))}
        </ul>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomeSection03() {
  return (
    <div
      className="ui-pink"
      data-page-header-theme="pink"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <StickySection>
        <div className="sticky--sticky sticky--full-height pt-promo-header sticky pb-1">
          <div className="section-3">
            <div className="section-3__content row row--column:xs-down row--gx row--stretch px-1">
              {/* ── Left: title ── */}
              <div className="col col--6:md col-12">
                <div className="section-3__title">
                  <h2
                    className="text-h2 text-box-trim"
                    style={{
                      transform: 'scaleY(0.843353)',
                      transformOrigin: 'center top',
                    }}
                  >
                    art world
                  </h2>
                  <Image
                    src="/images/the.svg"
                    alt=""
                    width={80}
                    height={30}
                    className="section-3__title-decoration"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <hr className="col--no-grow is-hidden:md-up mt-4 mb-1" />

              {/* ── Right: description ── */}
              <div className="section-3__texts col-divider__right:md col col--grow col--6:md col-12">
                <p className="section-3__description mb-0:md text-box-trim mb-4 py-1">
                  The Art World
                  <br className="is-hidden:sm-down" />
                  wasn&apos;t made for us&nbsp;—
                  <br className="is-hidden:sm-down" />
                  we&apos;re
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      {' '}
                      building our own.{' '}
                    </span>
                  </span>
                  <span className="is-hidden:md-up"> No </span>
                  <span className="is-hidden:sm-down">No&nbsp;</span>
                  hierarchies. No algorithms. Just curators and artists
                  connecting and growing together.
                </p>
              </div>
            </div>

            <hr className="is-hidden:sm-down mx-1 my-1" />

            {/* ── Loop carousel ── */}
            <LoopCarousel />

            {/* Mobile sign-up stub */}
            <div className="fixed-sign-up-button-stub is-hidden:md-up mt-3">
              <Link href="/signup" className="btn btn--primary btn--block">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </StickySection>
    </div>
  );
}
