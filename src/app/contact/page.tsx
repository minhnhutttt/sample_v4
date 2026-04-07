import type { Metadata } from 'next';

import Title from '@/components/common/title';
import { OG, TWITTER } from '@/config/constants';

import ContactForm from './contactForm';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    ...OG,
    title: 'Contact',
    url: '/contact',
  },
  twitter: {
    ...TWITTER,
    title: 'Contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <div className="px-5 pt-32 pb-32 md:pt-[240px] md:pb-40">
      <div id="section05" className="mx-auto w-full max-w-[1320px]">
        <Title title="CONTACT" sub="お問い合わせ" />
        <div className="mt-16 rounded-xl bg-[#EBEBEB] px-5 py-20 md:mt-25 md:py-25">
          <div className="mx-auto w-full max-w-[992px]">
            <h2 className="border-l-[4px] border-[#F0162B] pl-4 text-[24px] font-bold md:border-l-[8px] md:text-[32px]">
              お問い合わせ
            </h2>
            <p className="pt-2 text-[14px] md:pt-3 md:text-[16px]">
              LEO BLACKS
              SAGAについて、お問い合わせは下記フォームからお願いします。
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
