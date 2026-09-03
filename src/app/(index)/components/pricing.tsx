import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';

type PlanRowTone = 'full' | 'mint' | 'cyan' | 'cyan-dark';

type PlanRow = {
  label: string;
  price: string;
  note: string;
  tone: PlanRowTone;
};

type PricePlan = {
  name: string;
  stripes: string;
  rows: PlanRow[];
};

const PRICE_PLANS: PricePlan[] = [
  {
    name: 'パーソナルマシンピラティス',
    stripes: '/assets/images/plan-stripes.svg',
    rows: [
      {
        label: '通い放題',
        price: '43,800',
        note: '（1回あたり実質：2,190円 / 20回利用時）',
        tone: 'full',
      },
      {
        label: '月4回',
        price: '28,800',
        note: '（1回あたり：7,200円）',
        tone: 'mint',
      },
      {
        label: '月2回',
        price: '15,000',
        note: '（1回あたり：7,500円）',
        tone: 'cyan',
      },
    ],
  },
  {
    name: 'セミパーソナルトレーニング',
    stripes: '/assets/images/plan-stripes.svg',
    rows: [
      {
        label: '通い放題',
        price: '18,600',
        note: '（1回あたり実質：930円 / 20回利用時）',
        tone: 'full',
      },
      {
        label: '月4回',
        price: '12,800',
        note: '（1回あたり：3,200円）',
        tone: 'mint',
      },
      {
        label: '月2回',
        price: '7,000',
        note: '（1回あたり：3,500円）※据え置き',
        tone: 'cyan-dark',
      },
    ],
  },
  {
    name: 'パーソナルトレーニング',
    stripes: '/assets/images/plan-stripes.svg',
    rows: [
      {
        label: '通い放題',
        price: '33,000',
        note: '（1回あたり実質：1,650円 / 20回利用時）',
        tone: 'full',
      },
      {
        label: '月4回',
        price: '22,200',
        note: '（1回あたり：5,500円）',
        tone: 'mint',
      },
      {
        label: '月2回',
        price: '11,600',
        note: '（1回あたり：5,800円）',
        tone: 'cyan-dark',
      },
    ],
  },
];

const TONE_CLASS: Record<PlanRowTone, string> = {
  full: 'bg-[#36b6cd] text-white',
  mint: 'bg-[#d5fceb] text-ink',
  cyan: 'bg-[#82eef2] text-ink',
  'cyan-dark': 'bg-[#74e7eb] text-ink',
};

const Pricing = () => (
  <section data-section="pricing" className="bg-white pt-[68px]">
    <SectionTitle id="pricing" en="PRICE PLAN" jp="料金プラン" />

    <div className="mx-auto mt-[50px] w-[340px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-ink text-[16px] leading-[2] font-medium tracking-[0.64px]">
          入会金10,000円 (税別)
        </p>
        <p className="text-ink text-center font-bold tracking-[0.72px]">
          <span className="text-[20px] leading-[1.73] tracking-[0.8px]">
            体験当日入会で{' '}
          </span>
          <span className="text-[60px] leading-[1.4] tracking-[1.2px] text-[#1e93a8]">
            0
          </span>
          <span className="text-[32px] leading-[1.56] tracking-[1.6px] text-[#1e93a8]">
            円
          </span>
        </p>
      </div>

      <div className="mx-auto mt-[24px] flex w-[330px] flex-col gap-[20px]">
        {PRICE_PLANS.map((plan) => (
          <FadeIn key={plan.name}>
            <div className="border-plan-border bg-plan-surface flex flex-col gap-[20px] overflow-hidden rounded-[16px] border p-[16px]">
              <div className="flex items-center justify-center border-b border-[#2c2c2c] pb-[4px]">
                <h3 className="text-ink text-[18px] leading-[2] font-bold tracking-[0.72px]">
                  {plan.name}
                </h3>
              </div>

              <div className="relative flex flex-col gap-[12px]">
                <Image
                  src={plan.stripes}
                  alt=""
                  width={992}
                  height={682}
                  className="absolute top-[-110px] left-[-26px] h-[682px] w-[992px] max-w-none"
                />

                {plan.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className="relative flex flex-col gap-[4px]"
                  >
                    <div
                      className={`flex items-center justify-between ${
                        rowIndex === plan.rows.length - 1
                          ? 'overflow-hidden'
                          : 'border-b border-[#c0c0c0] pb-[12px]'
                      }`}
                    >
                      <span
                        className={`border-ink flex items-center justify-center rounded-[8px] border py-[2px] text-center text-[16px] leading-[2] font-bold tracking-[0.64px] ${
                          rowIndex === 0 ? 'px-[20px]' : 'w-[106px]'
                        } ${TONE_CLASS[row.tone]}`}
                      >
                        {row.label}
                      </span>
                      <p className="text-ink flex items-end gap-[8px] font-bold">
                        <span className="tracking-[0.8px]">
                          <span className="text-[22px] leading-none">
                            {row.price}
                          </span>
                          <span className="text-[22px] leading-none">円</span>
                        </span>
                        <span className="text-[14px]">/月</span>
                      </p>
                    </div>
                    <p className="text-ink text-right text-[12px] leading-[normal] font-medium">
                      {row.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="lp-hybrid-card flex min-h-[620px] w-[330px] flex-col gap-[16px] overflow-hidden rounded-[16px] p-[20px]">
            <div className="relative flex justify-center gap-[10px] border-b border-[#eee] pb-[12px]">
              <div className="flex flex-col text-center text-white">
                <p className="text-[16px] leading-[2] font-medium tracking-[0.64px]">
                  トレーニング会員様向け
                </p>
                <p className="text-[24px] leading-[1.45] font-extrabold tracking-[-0.24px]">
                  ピラティス特別優待
                </p>
              </div>
              <Image
                src="/assets/images/pricing-hybrid-bg.png"
                alt=""
                width={347}
                height={554}
                className="absolute top-[69px] left-[-15px] h-[554px] w-[347px] max-w-none object-cover opacity-50"
              />
            </div>

            <div className="relative flex flex-col gap-[25px]">
              <p className="min-h-[196px] w-[290px] tracking-[0.64px] text-white">
                <span className="text-[16px] leading-[2]">
                  トレーニング会員様なら、パーソナルマシンピラティスを特別価格で追加できます。
                </span>
                <br />
                <span className="text-[16px] leading-[2]">
                  月4回追加：優待月額 24,800円
                </span>
                <span className="text-[12px] leading-[2] tracking-[0.48px]">
                  （税込）
                </span>
                <br />
                <span className="text-[14px] leading-[2] tracking-[0.56px]">
                  （1回あたり：6,200円）
                </span>
                <br />
                <span className="text-[16px] leading-[2]">
                  月2回追加：優待月額 13,000円
                </span>
                <span className="text-[12px] leading-[2] tracking-[0.48px]">
                  （税込）
                </span>
                <br />
                <span className="text-[14px] leading-[2] tracking-[0.56px]">
                  （1回あたり：6,500円）
                </span>
              </p>

              <div className="lp-hybrid-card-combo relative flex w-[291px] flex-col items-center gap-[16px] overflow-hidden rounded-[12px] border-2 border-white py-[16px]">
                <div className="flex items-center justify-center pb-[12px]">
                  <p className="w-[267px] text-center text-[16px] leading-[1.8] font-bold tracking-[0.64px] text-black">
                    <span className="block">ダブル通い放題</span>
                    <span className="block">パーソナルトレーニング＋</span>
                    <span className="block">パーソナルマシンピラティス</span>
                  </p>
                </div>

                <span className="block h-px w-[260px] bg-white" />

                <p className="flex flex-col items-center gap-[4px] text-center text-black">
                  <span className="flex items-baseline gap-[4px]">
                    <span className="font-black">
                      <span className="text-[24px]">月額 45,800</span>
                      <span className="text-[16px]">円</span>
                    </span>
                    <span className="text-[11px] font-semibold">(税込)</span>
                  </span>
                  <span className="w-[243px] text-[12px] font-medium">
                    （1回あたり実質：2,290円 / 20回利用時）
                  </span>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Pricing;
