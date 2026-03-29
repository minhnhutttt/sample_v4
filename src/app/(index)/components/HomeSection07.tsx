'use client';


import Image from 'next/image';

import StickySection from '@/components/StickySection';
import { SVGSquishTitle } from '@/components/common/SVGSquishTitle';
import SignUpButton from '@/components/common/SignUpButton';
import CurvedCardSingle from '@/components/three/CurvedCardSingle';

const PATHS_SECTION_7 = [
  {
    d: 'M62.8378 505C21.934 505 0 479.049 0 431.354V74.3472C0 25.9514 21.934 0 62.8378 0C104.335 0 125.676 25.9514 123.897 74.3472L119.155 207.611H68.7659L73.5084 77.8542C74.1012 64.5278 70.5444 56.8125 62.8378 56.8125C55.1313 56.8125 50.9816 64.5278 50.9816 77.8542V427.146C50.9816 440.472 55.1313 448.187 62.8378 448.187C69.9515 448.187 73.5084 440.472 73.5084 427.146V286.868H123.897V431.354C123.897 479.049 102.556 505 62.8378 505Z',
    cx: 62,
    scaleMin: 0.55,
    scaleMax: 0.9,
    scaleDefault: 0.6,
  },
  {
    d: 'M206 505C165.848 505 144 479.049 144 431.354V74.3472C144 25.9514 165.848 0 206 0C246.152 0 268 25.9514 268 74.3472V431.354C268 479.049 246.152 505 206 505ZM206 448.187C213.676 448.187 217.219 440.472 217.219 427.146V77.8542C217.219 64.5278 213.676 56.8125 206 56.8125C198.324 56.8125 194.19 64.5278 194.19 77.8542V427.146C194.19 440.472 198.324 448.187 206 448.187Z',
    cx: 206,
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.65,
  },
  {
    d: 'M290.086 505V5H366.033L389.767 447.143H398.073L395.7 346.429L389.173 5H440.2V505H364.253L336.366 62.8572H327.466L331.026 163.571L340.52 505H290.086Z',
    cx: 365,
    scaleMin: 0.75,
    scaleMax: 0.9,
    scaleDefault: 0.78,
  },
  {
    d: 'M463 505V5H538.889L562.605 447.143H570.905L568.534 346.429L562.012 5H613V505H537.111L509.245 62.8572H500.352L503.909 163.571L513.395 505H463Z',
    cx: 538,
    scaleMin: 0.75,
    scaleMax: 0.9,
    scaleDefault: 0.78,
  },
  {
    d: 'M635 505V5H736V62.8572H684.913V219.286H730.128V277.143H684.913V447.143H736V505H635Z',
    cx: 685,
    scaleMin: 0.65,
    scaleMax: 0.9,
    scaleDefault: 0.68,
  },
  {
    d: 'M813.331 505C772.757 505 751 479.049 751 431.354V74.3472C751 25.9514 772.757 0 813.331 0C854.493 0 875.662 25.9514 873.898 74.3472L869.194 207.611H819.211L823.916 77.8542C824.504 64.5278 820.975 56.8125 813.331 56.8125C805.687 56.8125 801.57 64.5278 801.57 77.8542V427.146C801.57 440.472 805.687 448.187 813.331 448.187C820.387 448.187 823.916 440.472 823.916 427.146V286.868H873.898V431.354C873.898 479.049 852.729 505 813.331 505Z',
    cx: 813,
    scaleMin: 0.55,
    scaleMax: 0.9,
    scaleDefault: 0.6,
  },
  {
    d: 'M996 5V62.8572H966.054V505H914.545V62.8572H884V5H996Z',
    cx: 940,
    scaleMin: 0.7,
    scaleMax: 0.9,
    scaleDefault: 0.73,
  },
  {
    d: 'M1070 505C1029.85 505 1008 479.049 1008 431.354V74.3472C1008 25.9514 1029.85 0 1070 0C1110.15 0 1132 25.9514 1132 74.3472V431.354C1132 479.049 1110.15 505 1070 505ZM1070 448.187C1077.68 448.187 1081.22 440.472 1081.22 427.146V77.8542C1081.22 64.5278 1077.68 56.8125 1070 56.8125C1062.32 56.8125 1058.19 64.5278 1058.19 77.8542V427.146C1058.19 440.472 1062.32 448.187 1070 448.187Z',
    cx: 1070,
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.65,
  },
  {
    d: 'M1152.23 505V5H1214.16C1254.66 5 1276.7 31.4286 1276.7 79.2857V166.429C1276.7 213.571 1260.02 239.286 1229.05 239.286H1225.48V247.857H1260.62L1282.06 505H1231.43L1214.76 282.857H1203.44V505H1152.23ZM1203.44 229.286H1214.16C1221.91 229.286 1226.07 221.429 1226.07 208.571V83.5714C1226.07 70 1221.91 62.8572 1214.16 62.8572H1203.44V229.286Z',
    cx: 1215,
    scaleMin: 0.78,
    scaleMax: 0.9,
    scaleDefault: 0.8,
  },
  {
    d: 'M1369.91 5H1420L1406.88 263.571C1405.09 297.857 1396.15 320.714 1380.64 328.571V505H1329.95V332.143H1307.29L1290 5H1340.69L1349.04 218.571L1350.83 297.857H1359.17L1360.96 218.571L1369.91 5Z',
    cx: 1355,
    scaleMin: 0.68,
    scaleMax: 0.9,
    scaleDefault: 0.72,
  },
];

// ─── Mobile wordmark SVG ──────────────────────────────────────────────────────

function MobileTitle() {
  return (
    <svg
      className="img-full is-hidden:md-up svg-fix"
      width="350"
      height="382"
      viewBox="0 0 350 382"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Row 1: C O N */}
      <path
        fill="black"
        d="M22.2972 154C7.7829 154 -0.00012207 146.086 -0.00012207 131.541V22.672C-0.00012207 7.91364 7.7829 -0.000244141 22.2972 -0.000244141C37.0218 -0.000244141 44.5945 7.91364 43.9634 22.672L42.2806 63.3109H24.4007L26.0835 23.7414C26.2939 19.6775 25.0317 17.3248 22.2972 17.3248C19.5626 17.3248 18.0901 19.6775 18.0901 23.7414V130.258C18.0901 134.322 19.5626 136.675 22.2972 136.675C24.8214 136.675 26.0835 134.322 26.0835 130.258V87.4803H43.9634V131.541C43.9634 146.086 36.3907 154 22.2972 154Z"
      />
      <path
        fill="black"
        d="M71.9999 154C57.7523 154 49.9999 146.086 49.9999 131.541V22.672C49.9999 7.91364 57.7523 -0.000244141 71.9999 -0.000244141C86.2475 -0.000244141 93.9999 7.91364 93.9999 22.672V131.541C93.9999 146.086 86.2475 154 71.9999 154ZM71.9999 136.675C74.7237 136.675 75.9808 134.322 75.9808 130.258V23.7414C75.9808 19.6775 74.7237 17.3248 71.9999 17.3248C69.2761 17.3248 67.8094 19.6775 67.8094 23.7414V130.258C67.8094 134.322 69.2761 136.675 71.9999 136.675Z"
      />
      <path
        fill="black"
        d="M102 152V1.99976H128.308L136.53 134.643H139.407L138.585 104.428L136.324 1.99976H154V152H127.692L118.031 19.3569H114.948L116.182 49.5712L119.47 152H102Z"
      />
      {/* Row 1: N E C */}
      <path
        fill="black"
        d="M162 152V1.99976H188.814L197.194 134.643H200.126L199.288 104.428L196.984 1.99976H215V152H188.186L178.34 19.3569H175.198L176.454 49.5712L179.806 152H162Z"
      />
      <path
        fill="black"
        d="M222 152V1.99976H258V19.3569H239.791V66.2855H255.907V83.6426H239.791V134.643H258V152H222Z"
      />
      <path
        fill="black"
        d="M285.297 154C270.783 154 263 146.086 263 131.541V22.672C263 7.91364 270.783 -0.000244141 285.297 -0.000244141C300.022 -0.000244141 307.594 7.91364 306.963 22.672L305.281 63.3109H287.401L289.083 23.7414C289.294 19.6775 288.032 17.3248 285.297 17.3248C282.563 17.3248 281.09 19.6775 281.09 23.7414V130.258C281.09 134.322 282.563 136.675 285.297 136.675C287.821 136.675 289.083 134.322 289.083 130.258V87.4803H306.963V131.541C306.963 146.086 299.391 154 285.297 154Z"
      />
      {/* Row 1: T */}
      <path
        fill="black"
        d="M350 1.99976V19.3569H339.305V152H320.909V19.3569H310V1.99976H350Z"
      />
      {/* Row 2: O R Y */}
      <path
        fill="black"
        d="M22.4999 324C7.92845 324 -0.00012207 316.086 -0.00012207 301.541V192.672C-0.00012207 177.914 7.92845 170 22.4999 170C37.0713 170 44.9999 177.914 44.9999 192.672V301.541C44.9999 316.086 37.0713 324 22.4999 324ZM22.4999 306.675C25.2856 306.675 26.5713 304.322 26.5713 300.258V193.741C26.5713 189.678 25.2856 187.325 22.4999 187.325C19.7142 187.325 18.2142 189.678 18.2142 193.741V300.258C18.2142 304.322 19.7142 306.675 22.4999 306.675Z"
      />
      <path
        fill="black"
        d="M50.9999 382V172H73.4219C88.0824 172 96.0595 183.1 96.0595 203.2V239.8C96.0595 259.6 90.0228 270.4 78.8118 270.4H77.5182V274H90.2384L97.9999 382H79.6742L73.6375 288.7H69.5412V382H50.9999ZM69.5412 266.2H73.4219C76.2246 266.2 77.7338 262.9 77.7338 257.5V205C77.7338 199.3 76.2246 196.3 73.4219 196.3H69.5412V266.2Z"
      />
      <path
        fill="black"
        d="M129.89 172H148L143.257 265.085C142.61 277.428 139.376 285.657 133.771 288.485V352H115.445V289.771H107.252L101 172H119.326L122.344 248.885L122.991 277.428H126.009L126.656 248.885L129.89 172Z"
      />
    </svg>
  );
}
// ─── Main Component ───────────────────────────────────────────────────────────

const CARDS = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/1/400/600',
    title: 'Irene Sánchez Gómez',
    subtitle: 'Independent Curator · Germany',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/1/400/600',
    title: 'Farouk Alao',
    subtitle: 'Multidisciplinary Artist · UK',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/1/400/600',
    title: 'Matina Charalambi',
    subtitle: 'Independent Curator · Greece',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/1/400/600',
    title: 'Alberto Blanco',
    subtitle: 'Artist · Italy',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/1/400/600',
  },
];

export default function HomeSection07() {
  return (
    <div className="ui-green" data-page-header-theme="green">
      <StickySection>
        <div className="section-7 pt-promo-header px-1 pb-1">
          {/* ── Header ── */}
          <div className="section-7__header col col-12">
            <p className="section-7__subtitle mb-4:md text-box-trim mb-3.5 pb-3">
              Nexus Card Users Are <br />
              Creating the Connectory
            </p>

            <div className="title">
              <h2 className="sr-only">Connectory</h2>
              <div className="title-children-wrapper">
                <SVGSquishTitle
                  paths={PATHS_SECTION_7}
                  className="section-7__title--desktop img-full is-hidden:sm-down svg-fix"
                />
                <MobileTitle />

                <Image
                  src="/images/the.svg"
                  alt=""
                  width={120}
                  height={40}
                  className="section-7__title-decoration"
                  aria-hidden="true"
                />

                {/* WebGL canvas — Three.js mounts here */}
                <div className="landing-7-connectory-webgl">
                  <CurvedCardSingle image="https://picsum.photos/seed/1/400/600" />
                  {/* <CurvedSlider cards={CARDS} autoPlay={false} /> */}
                </div>
              </div>
            </div>
          </div>

          <hr className="col mt-1:md col-12 mt-1.75 mb-1" />

          {/* ── Content row ── */}
          <div className="section-7__content row row--gx col col-12">
            {/* Left column */}
            <div className="section-7__content-side col col--6:md pr-1:md col-12">
              <p className="section-7__description-1 mb-0:md text-box-trim mb-1.75 p-1">
                A{' '}
                <span className="underline-text-piece">
                  <span className="underline-text-piece__content">
                    {' '}
                    dynamic directory{' '}
                  </span>
                </span>{' '}
                to find who you need and get found by those who matter.
              </p>

              {/* Mobile-only paragraph */}
              <p className="text-box-trim is-hidden:md-up p-1">
                Think of it as the Yellow Pages for&nbsp;curators and artists.
                No algorithms, no paywalls, no limits. It&apos;s an{' '}
                <span className="underline-text-piece">
                  <span className="underline-text-piece__content">
                    {' '}
                    open space{' '}
                  </span>
                </span>{' '}
                for organic, community-driven networking.
              </p>

              {/* Mobile CTA */}
              <div className="is-hidden:md-up">
                <SignUpButton className="mt-7" />
              </div>
            </div>

            {/* Right column — desktop only */}
            <div className="section-7__content-side col col--6:md col-divider__right is-hidden:sm-down col-12">
              <p className="section-7__description-2 text-box-trim p-1">
                Think of it as the Yellow Pages for curators and artists. No
                algorithms, no paywalls, no limits. It&apos;s an{' '}
                <span className="underline-text-piece">
                  <span className="underline-text-piece__content">
                    {' '}
                    open space{' '}
                  </span>
                </span>{' '}
                for organic, community-driven networking.
              </p>

              {/* Desktop CTA */}
              <div className="section-7__btn-grid">
                <SignUpButton className="mt-12" />
              </div>
            </div>
          </div>
        </div>
      </StickySection>
    </div>
  );
}
