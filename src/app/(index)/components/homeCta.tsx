'use client';

import Cta from '@/components/cta';
import useScrollAnimations from '@/hooks/useScrollAnimations';

export default function HomeCta() {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="w-full bg-[url(/assets/images/cta-bg.png)] bg-cover bg-center px-5 py-20"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex justify-between gap-6 max-lg:flex-col lg:items-end">
          <div>
            <h5 className="fade-up text-[24px] font-black text-white md:text-[48px]">
              圧倒的な低リスクで、
              <br />
              質の高い出会いを
            </h5>
            <p className="fade-up mt-6 text-[15px] leading-loose font-medium text-white md:mt-10 md:text-[18px]">
              ※高額な初期費用や、理不尽な紹介課金（リード課金）は一切ありません。
            </p>
          </div>
          <div className="fade-up">
            <Cta />
          </div>
        </div>
      </div>
    </section>
  );
}
