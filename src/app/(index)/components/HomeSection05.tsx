'use client';


import Image from 'next/image';

import StickySection from '@/components/StickySection';
import { SVGSquishTitle } from '@/components/common/SVGSquishTitle';
import SignUpButton from '@/components/common/SignUpButton';
import CurvedCards from '@/components/three/CurvedCards';

// ─── Desktop Title SVG (NEXUS CARD wordmark) ──────────────────────────────────

const PATHS_SECTION_5 = [
  {
    d: 'M0 505V5H79.9367L104.917 447.143H113.66L111.162 346.429L104.292 5H158V505H78.0632L48.7115 62.8572H39.3439L43.0909 163.571L53.083 505H0Z',
    cx: 79,
    scaleMin: 0.5,
    scaleMax: 0.9,
    scaleDefault: 0.6,
  },
  {
    d: 'M181 505V5H288V62.8572H233.878V219.286H281.779V277.143H233.878V447.143H288V505H181Z',
    cx: 234,
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.67,
  },
  {
    d: 'M296.172 505L304.188 345C306.038 296.429 320.22 272.857 344.884 272.857H356.6V264.286H311.587L299.872 5H352.284L360.916 225.714H364.616C372.015 225.714 375.715 219.286 376.332 205L383.731 5H436.143L429.361 161.429C427.511 210 413.329 234.286 388.664 234.286H376.332V242.857H420.111L436.143 505H383.115L372.015 281.429H368.316C360.916 281.429 357.217 288.571 356.6 303.571L348.584 505H296.172Z',
    cx: 367,
    scaleMin: 0.8,
    scaleMax: 0.9,
    scaleDefault: 0.8,
  },
  {
    d: 'M498.662 505C467.565 505 451.395 477.535 452.017 426.831L456.993 5H510.478L504.881 426.831C504.881 440.211 509.235 447.958 517.32 447.958C524.783 447.958 529.136 440.211 529.136 426.831V5H582V497.958H550.282L546.55 412.746H537.843C541.575 472.606 527.892 505 498.662 505Z',
    cx: 517,
    scaleMin: 0.75,
    scaleMax: 0.9,
    scaleDefault: 0.75,
  },
  {
    d: 'M667.59 505C624.704 505 602 479.049 602 431.354V328.25H655.607V427.146C655.607 440.472 660.022 448.187 667.59 448.187C675.789 448.187 679.573 440.472 679.573 427.146V363.319C679.573 277.75 602 260.917 602 154.306V74.3472C602 25.9514 625.335 0 668.851 0C713.629 0 736.333 25.9514 733.81 74.3472L728.765 187.972H675.158L680.834 77.8542C681.465 64.5278 677.05 56.8125 668.851 56.8125C660.652 56.8125 656.238 64.5278 656.238 77.8542V148.694C656.238 232.861 733.81 252.5 733.81 357.708V431.354C733.81 479.049 711.106 505 667.59 505Z',
    cx: 667,
    scaleMin: 0.7,
    scaleMax: 0.9,
    scaleDefault: 0.7,
  },
  {
    d: 'M903.878 505C860.995 505 838 479.049 838 431.354V74.3472C838 25.9514 860.995 0 903.878 0C947.383 0 969.757 25.9514 967.892 74.3472L962.92 207.611H910.093L915.065 77.8542C915.687 64.5278 911.958 56.8125 903.878 56.8125C895.799 56.8125 891.448 64.5278 891.448 77.8542V427.146C891.448 440.472 895.799 448.187 903.878 448.187C911.336 448.187 915.065 440.472 915.065 427.146V286.868H967.892V431.354C967.892 479.049 945.518 505 903.878 505Z',
    cx: 902,
    scaleMin: 0.63,
    scaleMax: 0.9,
    scaleDefault: 0.63,
  },
  {
    d: 'M1072.03 505L1065.15 340.714H1038.85L1031.97 505H980L1000.03 5H1104.59L1124 505H1072.03ZM1040.73 282.143H1063.27L1058.26 163.571L1057.01 61.4286H1046.99L1045.74 163.571L1040.73 282.143Z',
    cx: 1052,
    scaleMin: 0.68,
    scaleMax: 0.9,
    scaleDefault: 0.68,
  },
  {
    d: 'M1140 505V5H1204.88C1247.3 5 1270.39 31.4286 1270.39 79.2857V166.429C1270.39 213.571 1252.92 239.286 1220.48 239.286H1216.73V247.857H1253.54L1276 505H1222.97L1205.5 282.857H1193.65V505H1140ZM1193.65 229.286H1204.88C1212.99 229.286 1217.36 221.429 1217.36 208.571V83.5714C1217.36 70 1212.99 62.8572 1204.88 62.8572H1193.65V229.286Z',
    cx: 1208,
    scaleMin: 0.79,
    scaleMax: 0.9,
    scaleDefault: 0.79,
  },
  {
    d: 'M1290 505V5H1354.69C1396.99 5 1420 31.4286 1420 79.2857V430.714C1420 478.571 1396.99 505 1354.69 505H1290ZM1342.87 447.143H1354.69C1362.78 447.143 1367.13 440 1367.13 427.143V83.5714C1367.13 70 1362.78 62.8572 1354.69 62.8572H1342.87V447.143Z',
    cx: 1355,
    scaleMin: 0.72,
    scaleMax: 0.9,
    scaleDefault: 0.72,
  },
];

// ─── Mobile Title SVG ─────────────────────────────────────────────────────────

function MobileTitle() {
  return (
    <svg
      className="img-full is-hidden:md-up svg-fix"
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="420"
      fill="none"
      viewBox="0 0 350 420"
      aria-hidden="true"
    >
      <path
        fill="#000"
        d="M176.086 361V190.9h25.272c16.524 0 25.515 8.991 25.515 25.272v119.556c0 16.281-8.991 25.272-25.515 25.272h-25.272Zm20.655-19.683h4.617c3.159 0 4.86-2.43 4.86-6.804V217.63c0-4.617-1.701-7.047-4.86-7.047h-4.617v130.734Z"
      />
      <path
        fill="#000"
        d="M117.869 390V191h25.285c16.532 0 25.527 10.519 25.527 29.566v34.683c0 18.762-6.807 28.997-19.449 28.997h-1.459v3.411h14.344L170.869 390h-20.665l-6.807-88.413h-4.62V390h-20.908Zm20.908-109.734h4.377c3.16 0 4.862-3.127 4.862-8.245v-49.75c0-5.401-1.702-8.244-4.862-8.244h-4.377v66.239Z"
      />
      <path
        fill="#000"
        d="m91.66 420-2.678-75.243H78.756L76.078 420H55.869l7.791-229h40.661l7.548 229H91.66ZM79.487 317.931h8.765l-1.948-54.305-.487-46.782h-3.896l-.487 46.782-1.947 54.305Z"
      />
      <path
        style={{ transform: 'translateY(-2px)' }}
        fill="#000"
        d="M25.758 365.96C8.991 365.96 0 356.969 0 340.445V216.758C0 199.991 8.991 191 25.758 191c17.01 0 25.758 8.991 25.029 25.758l-1.944 46.17H28.188l1.944-44.955c.243-4.617-1.215-7.29-4.374-7.29s-4.86 2.673-4.86 7.29v121.014c0 4.617 1.701 7.29 4.86 7.29 2.916 0 4.374-2.673 4.374-7.29v-48.6h20.655v50.058c0 16.524-8.748 25.515-25.029 25.515Z"
      />
      <path
        style={{ transform: 'translateY(-2px)' }}
        fill="#000"
        d="M260.555 175.86c-16.524 0-25.272-8.991-25.272-25.515v-35.721h20.655v34.263c0 4.617 1.701 7.29 4.617 7.29 3.159 0 4.617-2.673 4.617-7.29v-22.113c0-29.646-29.889-35.478-29.889-72.414V26.658C235.283 9.89 244.274.9 261.041.9c17.253 0 26.001 8.99 25.029 25.758l-1.944 39.366h-20.655l2.187-38.151c.243-4.617-1.458-7.29-4.617-7.29s-4.86 2.673-4.86 7.29v24.543c0 29.16 29.889 35.964 29.889 72.414v25.515c0 16.524-8.748 25.515-25.515 25.515Z"
      />
      <path
        fill="#000"
        d="M194.9 173.43c-12.15 0-18.468-9.477-18.225-26.973L178.619.9h20.898l-2.187 145.557c0 4.617 1.701 7.29 4.86 7.29 2.916 0 4.617-2.673 4.617-7.29V.9h20.655V171h-12.393l-1.458-29.403h-3.402c1.458 20.655-3.888 31.833-15.309 31.833Z"
      />
      <path
        fill="#000"
        d="m115.404 171 3.159-54.432c.729-16.524 6.318-24.543 16.038-24.543h4.617V89.11h-17.739L116.862.9h20.655l3.402 75.087h1.458c2.916 0 4.374-2.187 4.617-7.047L149.91.9h20.655l-2.673 53.217c-.729 16.524-6.318 24.786-16.038 24.786h-4.86v2.916h17.253L170.565 171h-20.898l-4.374-76.059h-1.458c-2.916 0-4.374 2.43-4.617 7.533L136.059 171h-20.655Z"
      />
      <path
        fill="#000"
        d="M70.615 171V.9h41.796v19.683h-21.14V73.8h18.71v19.683h-18.71v57.834h21.14V171H70.615Z"
      />
      <path
        fill="#000"
        d="M.373 171V.9h31.104l9.72 150.417h3.402l-.972-34.263L40.954.9h20.898V171H30.748L19.327 20.583h-3.645l1.458 34.263L21.028 171H.373Z"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomeSection05() {
  return (
    <div id="nexus-card" className="ui-pink" data-page-header-theme="pink">
      <div className="section section--under-next">
        <StickySection>
          <div className="section-5 pt-promo-header px-1 pb-1">
            {/* ── Header: wordmark + WebGL canvas ── */}
            <div className="section-5__header col col-12">
              <div className="title">
                <h2 className="sr-only">Nexus card</h2>
                <div className="title-children-wrapper">
                  <SVGSquishTitle
                    paths={PATHS_SECTION_5}
                    className="section-5__title--desktop"
                  />
                  <MobileTitle />
                  <Image
                    src="/images/the.svg"
                    alt="Nexus Card for artists — share your portfolio, bio, exhibitions, and awards with one professional tool."
                    width={120}
                    height={40}
                    className="section-5__title-decoration"
                  />
                </div>
              </div>
            </div>

            {/* WebGL canvas — Three.js mounts here */}
            <div className="landing-5-nexus-webgl section-5__header-webgl pointer-events-none">
              <div className="landing-5-nexus-webgl__content">
                <CurvedCards
                  leftImage="https://picsum.photos/seed/1/400/600"
                  rightImage="https://picsum.photos/seed/2/400/600"
                />
              </div>
            </div>

            <hr className="col col-12 my-1" />

            {/* ── Content row ── */}
            <div className="section-5__content row row--gx col col-12 min-[568px]:items-stretch!">
              {/* Left column */}
              <div className="section-5__content-side col col--6:md col-12">
                <p className="section-5__description-1 mb-0:md text-box-trim mb-1.75 p-1">
                  Your{' '}
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      {' '}
                      Digital Portfolio{' '}
                    </span>
                  </span>{' '}
                  Evolved. A new standard for professional art presentation and
                  discoverability.
                </p>

                {/* Mobile-only second paragraph */}
                <p className="text-box-trim is-hidden:md-up p-1">
                  Comprehensive, shareable snapshot of your{' '}
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      {' '}
                      creative{' '}
                    </span>
                  </span>
                  &nbsp;
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      {' '}
                      Identity.{' '}
                    </span>
                  </span>{' '}
                  No more &ldquo;find me on Insta&rdquo;. Add it to your Wallet
                  app and share with one click. Let&nbsp;your Nexus Card do the
                  talking while you focus on creating.
                </p>

                {/* Mobile CTA */}
                <div className="section-5__btn-wrapper is-hidden:md-up mt-7">
                  <SignUpButton />
                </div>
              </div>

              {/* Right column — desktop only */}
              <div className="section-5__content-side col col--6:md col-divider__right is-hidden:sm-down col-12">
                <p className="section-5__description-2 text-box-trim p-1">
                  Comprehensive, shareable snapshot of your{' '}
                  <span className="underline-text-piece">
                    <span className="underline-text-piece__content">
                      {' '}
                      creative Identity.{' '}
                    </span>
                  </span>{' '}
                  No more &ldquo;find me on Insta&rdquo;. Add it to your Wallet
                  app and share with one click. Let&nbsp;your Nexus Card do the
                  talking while you focus on creating.
                </p>

                {/* Desktop CTA */}
                <div className="section-5__btn-grid">
                  <SignUpButton />
                </div>
              </div>
            </div>
          </div>
        </StickySection>
      </div>
    </div>
  );
}
