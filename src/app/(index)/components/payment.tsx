import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';

const Payment = () => (
  <section data-section="payment" className="bg-white pt-[140px]">
    <SectionTitle id="payment" en="PAYMENT METHOD" jp="お支払い方法" />

    <FadeIn className="mx-auto mt-[24px] w-[279px]">
      <div className="flex flex-col gap-[6px]">
        <p className="text-[16px] font-bold text-[#111827]">● カード決済</p>

        <div className="flex flex-col items-center gap-[17px]">
          <p className="w-full text-[14px] text-[#374151]">
            以下の主要クレジットカードブランドがご利用いただけます。
          </p>
          <Image
            src="/assets/images/card-brands.png"
            alt="VISA / Mastercard / JCB / American Express / Diners Club / Discover"
            width={236}
            height={107}
            className="h-[107px] w-[236px] object-contain"
          />
        </div>

        <div className="flex w-[257px] flex-col gap-[12px]">
          <p className="text-[16px] font-bold text-[#111827]">● 口座振替</p>
          <p className="text-[14px] text-[#374151]">毎月自動で引き落とし</p>
        </div>
      </div>

      <div className="mt-[20px] ml-[20px] flex w-[237px] flex-col gap-[8px] rounded-[8px] border border-[#d4d4d4] bg-[#f0f0f0] px-[16px] py-[12px] text-[#414141]">
        <p className="text-[9.6px] font-semibold">ご注意事項</p>
        <p className="text-[14px]">
          ※ 現金・QR決済・電子マネーは対応しておりません。
        </p>
      </div>
    </FadeIn>
  </section>
);

export default Payment;
