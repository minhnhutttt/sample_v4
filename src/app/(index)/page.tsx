import type { Metadata } from 'next';

import Footer from '@/components/footer';
import StickyCta from '@/components/sticky-cta';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import Access from './components/access';
import Concerns from './components/concerns';
import Faq from './components/faq';
import Hero from './components/hero';
import HeroHighlights from './components/hero-highlights';
import LineCta from './components/line-cta';
import Menu from './components/menu';
import Payment from './components/payment';
import Pricing from './components/pricing';
import TrialFlow from './components/trial-flow';
import WhyAlona from './components/why-alona';

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

const IndexPage = () => (
  <>
    <main className="relative z-10 mx-auto w-full max-w-[var(--lp-column-width)] overflow-hidden bg-white pb-[var(--lp-sticky-cta-height)] lg:pb-0">
      <Hero />
      <HeroHighlights />
      <Concerns />
      <WhyAlona />
      <Pricing />
      <Payment />
      <Menu />
      <TrialFlow />
      <Faq />
      <Access />
      <LineCta />
      <Footer />
    </main>

    <StickyCta />
  </>
);

export default IndexPage;
