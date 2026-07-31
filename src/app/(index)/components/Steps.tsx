import Image from 'next/image';

import SectionTitle from '@/components/common/section-title';

const steps = [
  { number: '01', label: 'お問い合わせ・お打ち合わせ' },
  { number: '02', label: 'お申し込み・ご契約' },
  { number: '03', label: '商品を「浅草の倉庫」へ送る' },
  {
    number: '04',
    label: (
      <>
        出展（試食・データ回収）
        <br className="max-md:hidden" />
        スタート！
      </>
    ),
  },
];

const Steps = () => {
  return (
    <section className="px-5 pt-20 md:pt-34">
      <div className="mx-auto max-w-[1120px]">
        <SectionTitle>
          <p className="text-[32px] font-black text-[#f03d22] md:text-[68px]">
            かんたん４ステップ！
          </p>
          <p className="mt-2 text-[24px] font-black text-[#434f8e] md:text-[48px]">
            来週からスタートも可能
          </p>
        </SectionTitle>

        <div className="mx-auto mt-16 max-w-[790px]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={
                index < steps.length - 1
                  ? 'flex items-center gap-8 border-b border-[#434f8e] pt-11 pb-6 max-md:flex-col max-md:pt-16 md:gap-12 md:px-10'
                  : 'flex items-center gap-8 pt-12 pb-6 max-md:flex-col max-md:pt-16 md:gap-12 md:px-10'
              }
            >
              <div className="relative flex size-26 shrink-0 items-center justify-center rounded-full bg-[#eeeff7]">
                <Image
                  src="/assets/images/steps/mail.svg"
                  alt=""
                  aria-hidden
                  width={52}
                  height={52}
                />
                <div className="absolute top-[-30px] left-[-40px] -rotate-10">
                  <div className="rounded-full bg-[#434f8e] px-8 py-1">
                    <p className="font-[family-name:var(--font-allura)] text-[32px] leading-none whitespace-nowrap text-white">
                      Step{step.number}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[26px] font-bold text-[#1c213b] max-md:text-center md:text-[36px]">
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[790px] text-[20px] leading-[1.8] font-medium text-black md:px-10">
          ※賞味期限の管理や、面倒な試食提供（小分け・加熱など）はすべて当店舗スタッフが代行します。
        </p>
      </div>
    </section>
  );
};

export default Steps;
