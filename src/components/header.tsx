import Image from 'next/image';

import HeaderNav, { type NavItem } from './header-nav';
import LowestPriceBadge from './ui/lowest-price-badge';
import ReservationCta from './ui/reservation-cta';

const NAV_ITEMS: NavItem[] = [
  { id: 'concerns', label: 'こんなお悩みありませんか？' },
  { id: 'why', label: 'ALONAが選ばれる理由' },
  { id: 'pricing', label: '料金プラン' },
  { id: 'payment', label: 'お支払い方法' },
  { id: 'menu', label: 'メニュー紹介' },
  { id: 'flow', label: '初回体験トレーニングの流れ' },
  { id: 'faq', label: 'よくある質問' },
  { id: 'access', label: 'アクセス' },
];

export type DailyPriceCard = {
  name: string;
  amount: string;
};

/** Rendered as the PC rail below, and as the SP rail in <HeroHighlights />. */
export const DAILY_PRICE_CARDS: DailyPriceCard[] = [
  { name: 'パーソナル ピラティス', amount: '2,189' },
  { name: 'セミパーソナルトレーニング', amount: '935' },
  { name: 'パーソナルトレーニング', amount: '1,650' },
];

/** The chrome sits on the dark teal wall, so the logo runs in its white cut. */
const Logo = () => (
  <span className="relative block h-[32px] w-[136px] overflow-hidden">
    <Image
      src="/assets/images/logo-alona-mark-white.svg"
      alt="ALONA"
      width={136}
      height={18}
      className="absolute top-0 left-0 h-[18px] w-[136px]"
    />
    <Image
      src="/assets/images/logo-alona-sub-white.svg"
      alt=""
      width={114}
      height={6}
      className="absolute top-[84%] right-[8%] bottom-0 left-[8%] w-auto"
    />
  </span>
);

const Header = () => (
  <>
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Image
        src="/assets/images/bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>

    <header className="pointer-events-none fixed inset-0 z-30 hidden lg:block">
      <a
        href="#top"
        className="pointer-events-auto absolute top-[22px] left-[21px]"
      >
        <Logo />
      </a>

      <HeaderNav items={NAV_ITEMS} />

      <div className="pointer-events-auto absolute top-[21px] right-[22px] flex w-[244px] flex-col items-center gap-[12px]">
        <LowestPriceBadge />

        <ul className="flex w-full flex-col gap-[7px]">
          {DAILY_PRICE_CARDS.map((card) => (
            <li
              key={card.name}
              className="bg-rail-surface relative h-[109px] w-full rounded-[10px]"
            >
              <p className="text-ink absolute inset-x-0 top-[11px] text-center text-[14px] leading-[1.4] font-bold tracking-[-1.26px]">
                {card.name}
              </p>
              <p className="absolute inset-x-0 top-[30px] text-center font-bold tracking-[0.8px]">
                <span className="text-[30px] leading-[1.45] text-black">
                  {card.amount}
                </span>
                <span className="text-ink-soft text-[14px] leading-[1.8] tracking-[1.68px]">
                  円/1日あたり
                </span>
              </p>
              {/* Rule sits under the amount's line box, ahead of the note. */}
              <span className="absolute top-[74px] left-[16px] block h-px w-[214px] bg-[#547982]" />
              <p className="absolute top-[74px] right-[21px] text-[13px] leading-[1.8] tracking-[1.04px] text-[#606060]">
                ※20回通った場合
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="pointer-events-auto absolute right-[37px] bottom-[141px] w-[301px] text-[16px] leading-[1.42] font-semibold tracking-[0.96px] text-white">
        1回50分のマンツーマン。ピラティス、マシーンを使ったパーソナルトレーニングが定額で通い放題。
      </p>

      <ReservationCta
        className="pointer-events-auto absolute right-[18px] bottom-[29px]"
        captionClassName="text-white"
      />
    </header>
  </>
);

export default Header;
