import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Access from '@/components/sections/access';
import Concerns from '@/components/sections/concerns';
import Faq from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import HeroHighlights from '@/components/sections/hero-highlights';
import LineCta from '@/components/sections/line-cta';
import Menu from '@/components/sections/menu';
import Payment from '@/components/sections/payment';
import Pricing from '@/components/sections/pricing';
import TrialFlow from '@/components/sections/trial-flow';
import WhyAlona from '@/components/sections/why-alona';
import StickyCta from '@/components/sticky-cta';
import { OG, SITE_NAME, TWITTER } from '@/config/constants';

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
    <main className="relative z-10 mx-auto w-full max-w-[var(--lp-column-width)] overflow-hidden bg-white pb-[95px] lg:pb-0">
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
