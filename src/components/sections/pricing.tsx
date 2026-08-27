import Image from 'next/image';

import { PRICE_PLANS } from '@/data/lp';
import type { PlanRowTone } from '@/types/lp';

import FadeIn from '../ui/fade-in';
import SectionTitle from '../ui/section-title';

const TONE_CLASS: Record<PlanRowTone, string> = {
  lime: 'bg-[#e0ec73]',
  green: 'bg-[#bcf67e]',
  cyan: 'bg-[#82eef2]',
  'cyan-dark': 'bg-[#74e7eb]',
};

const Pricing = () => (
  <section data-section="pricing" className="bg-white pt-[76px]">
    <SectionTitle id="pricing" en="PRICE PLAN" jp="料金プラン" />

    <div className="mx-auto mt-[50px] w-[340px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-ink text-[16px] leading-[2] font-medium tracking-[0.64px]">
          入会金10,000円 (税別)
        </p>
        <Image
          src="/assets/svg/arrow-right-alt.svg"
          alt=""
          width={24}
          height={24}
          className="mb-[-14px] size-[24px] rotate-90"
        />
        <p className="text-ink text-center font-bold tracking-[0.72px]">
          <span className="text-[20px] leading-[1.73] tracking-[0.8px]">
            体験当日入会で{' '}
          </span>
          <span className="text-[60px] leading-[1.4] tracking-[1.2px]">0</span>
          <span className="text-[32px] leading-[1.56] tracking-[1.6px]">
            円
          </span>
        </p>
      </div>

      <div className="mx-auto mt-[24px] flex w-[330px] flex-col gap-[20px]">
        {PRICE_PLANS.map((plan, planIndex) => (
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
                  className="absolute top-[-110px] left-[-25.58px] h-[682px] w-[992.466px] max-w-none"
                />

                {plan.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={`relative flex items-center justify-between ${
                      rowIndex === plan.rows.length - 1
                        ? 'overflow-hidden'
                        : 'border-b border-[#c0c0c0] pb-[8px]'
                    }`}
                  >
                    <span
                      className={`border-ink text-ink flex w-[106px] items-center justify-center rounded-[8px] border py-[4px] text-[16px] leading-[2] font-medium tracking-[0.64px] whitespace-nowrap ${TONE_CLASS[row.tone]}`}
                    >
                      {row.label}
                    </span>
                    <p className="text-ink flex items-end gap-[8px] font-bold">
                      <span className="tracking-[0.8px]">
                        <span className="text-[22px] leading-none">
                          {row.price}
                        </span>
                        <span className="text-[14px] leading-none">円</span>
                      </span>
                      <span className="text-[14px]">/月</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {planIndex === 1 && (
              <p className="mt-[20px] flex pb-1 text-[14px] leading-[1.45] font-semibold tracking-[0.56px] whitespace-pre-line text-[#070707]">
                <span>※</span>
                <span>
                  トレーナー1名で最大4名と同時にトレーニングするプランです。
                </span>
              </p>
            )}
          </FadeIn>
        ))}

        <FadeIn>
          <div className="lp-hybrid-card flex h-[620px] w-[330px] flex-col gap-[16px] overflow-hidden rounded-[16px] border-2 border-[#2a8791] p-[20px]">
            <div className="relative flex justify-center gap-[10px] border-b border-[#eee] pb-[12px]">
              <div className="flex flex-col text-center text-white">
                <p className="text-[16px] leading-[2] font-medium tracking-[0.64px]">
                  トレーニング会員様向け
                </p>
                <p className="text-[24px] leading-[1.45] font-extrabold tracking-[-0.24px] whitespace-nowrap">
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
              <p className="h-[196px] w-[290px] tracking-[0.64px] text-white">
                <span className="text-[16px] leading-[2]">
                  トレーニング会員様なら、ピラティスを1回あたり
                </span>
                <span className="text-[20px] leading-[1.8] font-bold tracking-[0.8px]">
                  1,000円引き
                </span>
                <span className="text-[16px] leading-[2]">
                  で追加できます。{' '}
                </span>
                <br />
                <span className="text-[16px] leading-[1.6] font-medium">
                  （例：ピラティス月4回追加＝
                </span>
                <br />
                <span className="text-[16px] leading-[1.6] font-medium">
                  通常29,920円 → 特別価格25,920円）
                </span>
              </p>

              <div className="relative flex w-[291px] flex-col items-center gap-[16px] overflow-hidden rounded-[12px] border border-white py-[16px]">
                <span className="absolute inset-0 h-full w-full bg-[#37bfa6] opacity-65" />
                <div className="relative flex items-center justify-center gap-[10px] pb-[12px]">
                  <p className="relative w-[267px] text-center font-bold tracking-[0.72px] text-white">
                    <span className="text-[20px] leading-[1.8] tracking-[0.8px]">
                      ピラティス + パーソナル
                    </span>
                    <br />
                    <span className="text-[20px] leading-[1.8] tracking-[0.8px]">
                      トレーニング両方通い放題
                    </span>
                    <br />
                    <span className="text-[16px] leading-[2] tracking-[0.64px]">
                      （最強ハイブリッドプラン）
                    </span>
                  </p>
                </div>

                <span className="relative z-10 block h-px w-[260px] bg-white" />

                <p className="relative z-10 flex items-baseline gap-[4px]">
                  <span className="font-black text-white">
                    <span className="text-[16px]">月額</span>
                    <span className="text-[26px]"> 45,780</span>
                    <span className="text-[16px]">円</span>
                  </span>
                  <span className="text-[11px] text-[#c9c9c9]">(税込)</span>
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
