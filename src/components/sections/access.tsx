import { SHOP } from '@/config/constants';

import PlainTitle from '../ui/plain-title';

const Access = () => (
  <section
    id="access"
    data-section="access"
    className="flex scroll-mt-[24px] flex-col items-center gap-[35px] bg-white pt-[78px] pb-[40px]"
  >
    <div className="w-[335px]">
      <PlainTitle en="ACCESS" jp="アクセス" />
    </div>

    <div className="flex w-full flex-col gap-[20px]">
      <div className="h-[327px] w-full overflow-hidden bg-[#d9d9d9]">
        <iframe
          src={SHOP.mapEmbedSrc}
          title="ALONA 店舗所在地の地図"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <div className="px-5">
        <p className="text-ink text-[15px] leading-[2] tracking-[0.64px]">
          {SHOP.postalCode}
        </p>
        <p className="text-ink text-[15px] leading-[1.87] tracking-[0.45px]">
          {SHOP.address}
        </p>
      </div>
    </div>

    <div className="flex w-[335px] flex-col items-center pt-[20px]">
      <PlainTitle en="ACCESS" jp="お問い合わせ" />
      <span className="mt-[0px] block h-px w-[310px] bg-[#a1a1a1]" />
    </div>
  </section>
);

export default Access;
