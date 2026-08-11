import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import About from './components/About';
import Cta from './components/Cta';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Fv from './components/Fv';
import Participate from './components/Participate';
import Reason from './components/Reason';
import Registration from './components/Registration';

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
      <Fv />
      <About />
      <div className="[box-shadow:0_-10px_34px_0_rgba(129,48,0,0.10)]">
        <Reason />
        <Feature />
        <Participate />
        <Registration />
        <FAQ />
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;
