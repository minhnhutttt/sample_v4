import type { Metadata } from 'next';

import Header from '@/components/header';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import HomeFollow from './components/HomeFollow';
import HomeFv from './components/HomeFv';
import HomeNexus from './components/HomeNexus';
import HomeSection05 from './components/HomeSection05';

export const metadata: Metadata = {
  title: SITE_NAME,
  openGraph: {
    ...OG,
    url: '/',
  },
  twitter: {
    ...TWITTER,
  },
  alternates: {
    canonical: '/',
  },
};

const IndexPage = () => {
  return (
    <div>
      <Header />
      <HomeFv />
      <HomeNexus />
      <HomeFollow />
      <HomeSection05 />
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
};

export default IndexPage;
