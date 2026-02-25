import type { Metadata } from 'next';

import PageHead from '@/components/pageHead';
import { OG, TWITTER } from '@/config/constants';

import ContactForm from './component/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    ...OG,
    title: 'contact',
    url: '/contact',
  },
  twitter: {
    ...TWITTER,
    title: 'contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <div>
      <PageHead
        title="お問い合わせ"
        en="CONTACT"
        image="/assets/images/contact-img.png"
      />
      <div className="my-[120px] px-5 md:my-[260px]">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[880px]">
          <h2 className="u-text-gradient text-[24px] leading-[1.6] font-medium md:text-[40px]">
            お問いわせフォーム
          </h2>
          <div className="mt-7 leading-[1.75] md:mt-10.5">
            <p className="text-[14px] md:text-[16px]">フォーム記入の案内</p>
            <p className="mt-3 text-[12px] md:mt-4 md:text-[14px]">
              <span className="text-[#F7CD4A]">※</span>は必須項目です
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
