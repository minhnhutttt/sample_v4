import { DAILY_PRICE_CARDS } from '@/data/lp';

import LowestPriceBadge from '../ui/lowest-price-badge';

const HeroHighlights = () => (
  <div className="relative -mt-[40px] pb-[66px] lg:hidden">
    <LowestPriceBadge className="ml-[89px]" />

    <ul className="mt-[18px] flex gap-[6px] px-[16px]">
      {DAILY_PRICE_CARDS.map((card) => (
        <li
          key={card.name}
          className="lp-rail-card-sp relative h-[93px] w-[110px] shrink-0"
        >
          <p className="text-ink absolute top-[6px] left-[6px] w-[103px] text-[9px] leading-[1.2] font-bold tracking-[-0.81px]">
            {card.nameLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="absolute top-[27px] left-[8px] w-[101px] font-bold">
            <span className="text-[20.798px] leading-[1.45] tracking-[-0.208px] text-black">
              {card.amount}
            </span>
            <span className="text-ink-soft text-[8px] leading-[1.8] tracking-[0.555px]">
              {' '}
              円
            </span>
          </p>

          <span className="absolute top-[53px] left-[6px] block h-[2.8px] w-[98px] rounded-full bg-[#72cf2f]" />

          <p className="text-ink-soft absolute top-[56px] left-[6px] w-[96px] text-right text-[8px] leading-[1.8] font-bold">
            （1日あたり）
          </p>

          <p className="absolute top-[67px] left-[64.5px] w-[119px] -translate-x-1/2 text-center text-[9.013px] leading-[1.8] tracking-[0.721px] text-[#606060]">
            ※20回通った場合
          </p>
        </li>
      ))}
    </ul>

    <p className="mt-[31px] pr-[13px] pl-[24px] text-[18px] leading-[1.52] font-semibold tracking-[1.08px] text-[#013c48]">
      1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。
    </p>
  </div>
);

export default HeroHighlights;
