import type { Metadata } from 'next';

import { OG, SITE_NAME, TWITTER } from '@/config/constants';

import Achievement from './components/Achievement';
import Comparison from './components/Comparison';
import Experience from './components/Experience';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Fv from './components/Fv';
import Plan from './components/Plan';
import Positive from './components/Positive';
import Reaching from './components/Reaching';
import Steps from './components/Steps';
import StickyOfferButton from './components/StickyOfferButton';
import Story from './components/Story';
import Voice from './components/Voice';

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
    <>
      <Fv />
      <Story />
      <Positive />
      <div className="-mt-14 overflow-hidden rounded-t-[40px] bg-[url(/assets/images/lightblue/lightblue.jpg)] bg-cover bg-fixed bg-top md:rounded-t-[80px]">
        <Feature />
        <Experience />
        <Comparison />
        <Plan />
      </div>
      <Achievement />
      <div className="bg-white bg-[url(/assets/images/steps/steps-bg.png)] bg-cover bg-fixed">
        <Steps />
        <Voice />
        <Faq />
        <Reaching />
      </div>
      <StickyOfferButton />
    </>
  );
};

export default IndexPage;
