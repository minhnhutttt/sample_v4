'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import StickySection from '@/components/StickySection';

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Card {
  number: string;
  front: React.ReactNode;
  back: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARDS: Card[] = [
  {
    number: '1',
    front: (
      <>
        Professional <br /> presentation
      </>
    ),
    back: 'Share your creative identity via the Nexus Card',
  },
  {
    number: '2',
    front: <>Visibility</>,
    back: 'Get discovered easily and without algorithms',
  },
  {
    number: '3',
    front: <>Connection</>,
    back: 'Build a network for collaborations with fellow creatives in the Connectory',
  },
  {
    number: '4',
    front: (
      <>
        Knowledge <br /> exchange
      </>
    ),
    back: 'Give and get – support, skills, guidance, and good vibes',
  },
];

// ─── Flip Card ────────────────────────────────────────────────────────────────

function FlipCard({ card }: { card: Card }) {
  return (
    <li className="section-4__card">
      <div className="section-4__card-inner">
        <div className="section-4__card-front">
          <span className="text-smaller text-box-trim">{card.number}</span>
          <p className="text-small text-box-trim">{card.front}</p>
        </div>
        <div className="section-4__card-back">
          <span className="text-smaller text-box-trim">{card.number}</span>
          <p className="text-small text-box-trim">{card.back}</p>
        </div>
      </div>
    </li>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomeSection04() {
  const cardsRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const section = cardsRef.current?.closest<HTMLElement>('.ui-blue');
    if (!section || !cardsRef.current) return;

    const scroller = document.querySelector('.scrollable__area');
    if (!scroller) return;

    const cardInners = gsap.utils.toArray<HTMLElement>(
      cardsRef.current.querySelectorAll('.section-4__card'),
    );

    const tween = gsap.fromTo(
      cardInners,
      { rotateY: 90, y: 20 },
      {
        rotateY: 0,
        y: 0,
        ease: 'none',
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          scroller,
          start: 'top bottom',
          end: 'top 0',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="ui-blue" data-page-header-theme="blue">
      <StickySection>
        <div className="sticky--sticky sticky--full-height pt-promo-header sticky px-1 pb-1">
          <div className="section-4 row row--gx row--stretch">
            {/* ── Content column ── */}
            <div className="section-4__content col col--6:md pr-1:md col-12">
              {/* Title */}
              <h2 className="section-4__title text-h2 text-box-trim py-1">
                <span
                  className="section-4__title-word--inline-block"
                  style={{
                    transform: 'scaleY(0.95)',
                    transformOrigin: 'center top',
                  }}
                >
                  FOLLOW.
                </span>
                <span className="section-4__title-word">
                  <span className="section-4__title-word--inline-block">
                    ART
                  </span>
                  <Image
                    src="/images/star.svg"
                    alt=""
                    width={52}
                    height={55}
                    className="section-4__title-word-decoration icon-shake"
                    aria-hidden="true"
                  />
                </span>
              </h2>

              <hr className="my-1:md is-hidden:md-up mt-4 mb-1" />

              {/* Description */}
              <div className="section-4__content-texts mb-0:md mt-9.5:md mb-4 py-1">
                <p className="section-4__description text-box-trim">
                  FOLLOW.ART is the
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">first</span>
                  </span>
                  and only
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      network
                    </span>
                  </span>
                  made for curators and artists, combining tools for
                  professional presentation, visibility, connection and
                  knowledge sharing.
                </p>
              </div>
            </div>

            {/* ── Cards column ── */}
            <div className="section-4__cards-wrapper col col--6:md col-divider__right:md col-12">
              {/* Background decoration */}
              <div className="section-4__cards-wrapper-decoration">
                <Image
                  src="/images/cross.svg"
                  alt=""
                  width={398}
                  height={440}
                  aria-hidden="true"
                />
              </div>

              {/* Flip cards list */}
              <ol className="section-4__cards ui-dark" ref={cardsRef}>
                {CARDS.map((card) => (
                  <FlipCard key={card.number} card={card} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </StickySection>
    </div>
  );
}
