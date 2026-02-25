import type { Metadata } from 'next';

import PageHead from '@/components/pageHead';
import { OG, TWITTER } from '@/config/constants';

import SerciveItems from './components/SerciveItems';

export const metadata: Metadata = {
  title: 'Service',
  openGraph: {
    ...OG,
    title: 'service',
    url: '/service',
  },
  twitter: {
    ...TWITTER,
    title: 'service',
  },
  alternates: {
    canonical: '/service',
  },
};

const ServicePage = () => {
  return (
    <div>
      <PageHead
        title="サービス"
        en="SERVICE"
        image="/assets/images/service-img.png"
      />
      <div className="mt-20 px-5 max-lg:pl-[252px] max-md:pl-0 md:mt-35">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="w-[360px]">
            <h2 className="u-text-gradient text-center text-[24px] leading-[1.6] font-medium md:text-[40px]">
              大矢工業のサービス
            </h2>
            <p className="my-7 text-center text-[16px] leading-[1.75] font-medium md:my-10 md:text-[20px]">
              対応工事の概要
            </p>
            <div className="mx-auto h-50 w-px bg-white"></div>
          </div>
        </div>
      </div>
      <SerciveItems />
    </div>
  );
};

export default ServicePage;
