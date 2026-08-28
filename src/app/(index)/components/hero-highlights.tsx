import Image from 'next/image';

import { DAILY_PRICE_CARDS } from '@/components/header';
import LowestPriceBadge from '@/components/ui/lowest-price-badge';

/**
 * SP counterpart of the PC chrome — Figma nodes 65:639 / 65:605 / 65:598.
 * The opening announcement now leads this block instead of <Concerns />.
 */
const HeroHighlights = () => (
  <div className="relative -mt-[15px] flex flex-col items-center pb-[25px]">
    <div className="flex w-[349px] flex-col items-center">
      <Image
        src="/assets/images/logo-alona.png"
        alt="ALONA"
        width={187}
        height={58}
        className="h-[58px] w-[187px] object-contain"
      />
      <p className="mt-[17px] w-full text-center leading-[1.67] font-extrabold tracking-[0.46px] text-black">
        <span className="text-[23px]">2026</span>
        <span className="text-[18px]">年</span>
        <span className="text-[23px]">10</span>
        <span className="text-[18px]">月</span>
        <span className="text-[23px]">10</span>
        <span className="text-[18px]">日（土）</span>
        <br />
        <span className="text-[23px]">池尻大橋・中目黒</span>
        <span className="text-[18px]">に</span>
        <span className="text-[23px]">OPEN！</span>
      </p>
    </div>

    {/* The PC chrome already carries the price rail, so SP owns it alone. */}
    <div className="mt-[24px] flex flex-col items-center pb-[54px] lg:hidden">
      <LowestPriceBadge variant="sp" />

      <ul className="mt-[12px] flex w-[338px] flex-col gap-[16px]">
        {DAILY_PRICE_CARDS.map((card) => (
          <li
            key={card.name}
            className="bg-rail-surface rounded-[12px] px-[20px] py-[11px]"
          >
            <p className="text-ink text-center text-[20px] leading-[1.4] font-bold tracking-[-2.2px]">
              {card.name}
            </p>

            <p className="mt-[2px] text-center font-bold tracking-[0.8px]">
              <span className="text-[42px] leading-[1.45] tracking-[-0.42px] text-black">
                {card.amount}
              </span>
              <span className="text-ink-soft text-[19px] leading-[1.8] tracking-[2.28px]">
                円/1日あたり
              </span>
            </p>

            <span className="mt-[2px] block h-px w-full bg-[#547982]" />

            <p className="mt-[2px] text-right text-[18px] leading-[1.8] tracking-[1.44px] text-[#606060]">
              ※20回通った場合
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-[20px] w-[338px] text-[18px] leading-[1.52] font-semibold tracking-[1.08px] text-[#013c48]">
        1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。
      </p>
    </div>
  </div>
);

export default HeroHighlights;
