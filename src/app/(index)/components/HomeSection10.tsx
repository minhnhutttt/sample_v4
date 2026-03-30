'use client';

import Image from 'next/image';
import Link from 'next/link';

import StickySection from '@/components/StickySection';
import { SVGSquishTitle } from '@/components/common/SVGSquishTitle';
import SignUpButton from '@/components/common/SignUpButton';

// ─── Footer nav links ─────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  {
    label: 'Brand Kit',
    href: 'https://drive.google.com/file/d/1TRkafTTsg9FOyLTzmTkNSRsd5lD0kx3X/view?usp=sharing',
    external: true,
  },
  { label: 'Buy Gift Card', href: '/gift-card', external: false },
  {
    label: 'Terms & Conditions',
    href: '/terms-and-conditions',
    external: false,
  },
  { label: 'Privacy Policy', href: '/privacy-policy', external: false },
  { label: 'Cookie Policy', href: '/cookies-policy', external: false },
];

const PATHS = [
  {
    // J
    d: 'M81.243 585C26.86 585-1.514 554.775.063 498.408L6.367 250.07H73.36l-7.093 244.254c-.788 15.521 4.729 24.507 14.975 24.507s14.975-8.986 14.975-24.507V74.437H.062V5H164v493.408C164 554.775 135.626 585 81.243 585',
    cx: 82,
    scaleMin: 0.55,
    scaleMax: 0.9,
    scaleDefault: 0.6,
  },
  {
    // O
    d: 'M274.5 585c-53.429 0-82.5-30.062-82.5-85.312V86.125C192 30.063 221.071 0 274.5 0S357 30.063 357 86.125v413.563c0 55.25-29.071 85.312-82.5 85.312m0-65.812c10.214 0 14.929-8.938 14.929-24.376V90.188c0-15.438-4.715-24.376-14.929-24.376s-15.714 8.938-15.714 24.376v404.624c0 15.438 5.5 24.376 15.714 24.376',
    cx: 274,
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.65,
  },
  {
    // I
    d: 'M385 585V5h67v580z',
    cx: 418,
    scaleMin: 0.5,
    scaleMax: 0.9,
    scaleDefault: 0.55,
  },
  {
    // N
    d: 'M481 585V5h100.68l31.462 512.886h11.012l-3.146-116.829L612.356 5H680v580H579.32L542.352 72.114h-11.799l4.72 116.829L547.858 585z',
    cx: 580,
    scaleMin: 0.75,
    scaleMax: 0.9,
    scaleDefault: 0.78,
  },
];

// ─── Mobile wordmark SVG ──────────────────────────────────────────────────────

function MobileTitle() {
  return (
    <svg
      className="img-full is-hidden:md-up svg-fix"
      style={{ transform: 'scaleY(1)', transformOrigin: 'center top' }}
      xmlns="http://www.w3.org/2000/svg"
      width="351"
      height="313"
      fill="none"
      viewBox="0 0 351 313"
      aria-hidden="true"
    >
      {/* J */}
      <path
        fill="#000"
        d="M42.13 241.606c-28.135 0-42.815-12.456-42-35.684l3.263-102.341h34.66l-3.67 100.657c-.408 6.397 2.446 10.1 7.747 10.1s7.748-3.703 7.748-10.1V31.203H.13V2.588h84.814v203.334c0 23.228-14.68 35.684-42.815 35.684Z"
      />
      {/* O */}
      <path
        fill="#000"
        d="M142.112 279.372c-27.641 0-42.681-14.357-42.681-40.742V41.13C99.43 14.357 114.47 0 142.112 0c27.642 0 42.682 14.357 42.682 41.13v197.5c0 26.385-15.04 40.742-42.682 40.742Zm0-31.429c5.285 0 7.724-4.269 7.724-11.641V43.07c0-7.373-2.439-11.64-7.724-11.64-5.284 0-8.129 4.267-8.129 11.64v193.232c0 7.372 2.845 11.641 8.129 11.641Z"
      />
      {/* I */}
      <path fill="#000" d="M199.281 235.396V2.586h34.663v232.81h-34.663Z" />
      {/* N */}
      <path
        fill="#000"
        d="M247.946 312.999V2.586h52.088l16.277 274.494h5.697l-1.628-62.526-4.476-211.968H350.9v310.413h-52.087L279.687 38.505h-6.104l2.442 62.526 6.51 211.968h-34.589Z"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomeSection10() {
  return (
    <div
      className="ui-orange wrapper-section-10"
      data-page-header-theme="orange"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="section">
        <StickySection>
          <div className="sticky--sticky sticky--full-height pt-promo-header sticky px-1 pb-1">
            <div className="section-10">
              <div className="section-10__content row row--gx row--stretch">
                {/* ── Left: wordmark + image trail ── */}
                <div className="col col--6:md pr-1:md section-10__content-col col-12">
                  <div className="title">
                    <h2 className="sr-only">Join Us</h2>
                    <div className="title-children-wrapper">
                      <SVGSquishTitle
                        paths={PATHS}
                        width={680}
                        height={580}
                        viewBox="0 0 680 580"
                        className="section-10__title--desktop img-full is-hidden:sm-down svg-fix"
                      />
                      <MobileTitle />
                      <Image
                        src="/images/us-word.svg"
                        alt=""
                        width={120}
                        height={60}
                        className="section-10__title-decoration"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Right: description + CTA ── */}
                <div className="section-10__content-side col col--6:md col-divider__right:md mt-0:md col-12 mt-6.5">
                  <p className="section-10__description text-box-trim">
                    Ready to take control of your creative journey?
                    <span className="underline-text-piece underline-text-piece--shown">
                      <span className="underline-text-piece__content">
                        {' '}
                        Join now{' '}
                      </span>
                    </span>
                    and let&apos;s shape the future of the art world together!
                  </p>

                  <div className="section-10__btn-grid">
                    <SignUpButton />
                  </div>
                </div>
              </div>

              <hr className="my-1" />

              {/* ── Footer ── */}
              <div className="section-10__footer text-smaller row row--gx row--stretch p-1">
                {/* Left footer col */}
                <div className="section-10__footer-side col col--12 col--6:md col--last:md mb-0:md mb-1">
                  <nav>
                    <ul className="section-10__footer-nav">
                      {FOOTER_LINKS.map(({ label, href, external }) => (
                        <li key={href} className="text-box-trim">
                          {external ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn--link btn--block btn--text-smaller btn--accent section-10__footer-link"
                            >
                              <span className="btn__content">
                                <span className="btn__text">
                                  <span className="btn__text-text">
                                    {label}
                                  </span>
                                </span>
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={href}
                              className="btn btn--link btn--block btn--text-smaller btn--accent section-10__footer-link"
                            >
                              <span className="btn__content">
                                <span className="btn__text">
                                  <span className="btn__text-text">
                                    {label}
                                  </span>
                                </span>
                              </span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Desktop: made by */}
                  <div className="group group--smaller group--v-center is-hidden:sm-down">
                    <a
                      href="https://videinfra.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--link btn--block btn--accent btn--text-smaller section-10__made-by"
                      title="Award-winning digital product design agency"
                    >
                      <span className="btn__content">
                        <span className="btn__text">
                          <span className="btn__text-text">
                            Digital product development by Vide Infra
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>

                  {/* Mobile: copyright */}
                  <p className="text-box-trim is-hidden:md-up">
                    2026 © FOLLOW.ART
                  </p>
                </div>

                {/* Right footer col — desktop copyright */}
                <div className="section-10__footer-side col col--12 col--6:md mt-0:md is-hidden:sm-down mt-2">
                  <p className="text-box-trim">2026 © FOLLOW.ART</p>
                </div>

                {/* Mobile: made by */}
                <div className="group group--smaller group--v-center is-hidden:md-up mt-1">
                  <a
                    href="https://videinfra.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--link btn--block btn--accent btn--text-smaller section-10__made-by"
                    title="Award-winning digital product design agency"
                  >
                    <span className="btn__content">
                      <span className="btn__text">
                        <span className="btn__text-text">
                          Digital product development by Vide Infra
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </StickySection>
      </div>

      <div className="fixed-sign-up-button fixed-sign-up-button--transition-header">
        <a
          className="not-nuxt-link btn btn--space-between btn--primary btn--full btn--accent btn--large fixed-sign-up-button__btn"
          href="/signup"
          title=""
        >
          <span className="btn__content">
            <span className="btn__text">
              <span className="btn__text-text">Join</span>
            </span>
            <svg
              className="btn__icon icon icon-step-next w-4"
              role="presentation"
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
            ></svg>
          </span>
        </a>
      </div>
    </div>
  );
}
