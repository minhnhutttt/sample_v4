import Image from 'next/image';

import { NAV_ITEMS } from '@/components/header-nav';
import MobileNav from '@/components/mobile-nav';

import HeroSlider from './hero-slider';

const HERO_SOURCES = [
  '/assets/images/hero-wall.webp',
  '/assets/images/hero-wall-02.webp',
  '/assets/images/hero-wall-03.webp',
];

/**
 * White wedge that closes the hero: tallest on the right, tapering to nothing
 * on the left, so the photograph hands off to the white section below on a
 * slant. Flip to 'polygon(0 0, 100% 100%, 0 100%)' to slope the other way.
 */
const WEDGE_CLIP = 'polygon(100% 0, 100% 100%, 0 100%)';

const Hero = () => (
  <section
    id="top"
    className="relative min-h-[547px] overflow-hidden bg-white pt-[64px] pl-[15px]"
  >
    <HeroSlider
      className="absolute inset-0"
      label="ピラティスマシンでレッスンを受ける女性"
      sources={HERO_SOURCES}
    />
    <div className="absolute inset-x-0 bottom-0 h-[80px]">
      <div
        aria-hidden
        style={{ clipPath: WEDGE_CLIP }}
        className="h-[48px] bg-white"
      />
      <div className="h-8 bg-white"></div>
    </div>

    <Image
      src="/assets/images/logo-alona.png"
      alt="ALONA"
      width={116}
      height={36}
      className="absolute top-[12px] left-[15px] h-[36px] w-[116px] object-contain"
    />

    <MobileNav items={NAV_ITEMS} />

    <div className="relative flex w-[367px] flex-col gap-[12px]">
      <h1 className="font-black tracking-[0.84px] text-[#353535]">
        <span className="text-[32px] leading-[1.3]">続けられる価格</span>
        <span className="text-[25px] leading-[1.3]">だから、</span>
        <br />
        <span className="text-[32px] leading-[1.3]">変わり続けられる。</span>
      </h1>
    </div>
  </section>
);

export default Hero;
