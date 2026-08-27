import Image from 'next/image';

import { CONCERNS } from '@/data/lp';

import FadeIn from '../ui/fade-in';
import SectionTitle from '../ui/section-title';

const Concerns = () => (
  <section
    data-section="concerns"
    className="-mt-5 flex flex-col items-center gap-[25px] bg-white"
  >
    <div className="relative h-[154px] w-[349px]">
      <Image
        src="/assets/images/logo-alona.png"
        alt="ALONA"
        width={187}
        height={58}
        className="absolute top-0 left-[79.12px] h-[58.332px] w-[186.76px] object-contain"
      />
      <p className="absolute inset-x-0 top-[75px] text-center leading-[1.67] font-extrabold tracking-[0.46px] text-black">
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

    <div className="flex w-full flex-col gap-[38px]">
      <SectionTitle
        id="concerns"
        en="YOUR CONCERNS"
        jp="こんなお悩みありませんか？"
      />

      <ul>
        {CONCERNS.map((concern, index) => (
          <li key={concern}>
            <FadeIn
              delay={index * 80}
              className={`flex items-center gap-[12px] p-[16px] ${
                index === CONCERNS.length - 1 ? '' : 'border-b border-[#d6d6d6]'
              }`}
            >
              <Image
                src="/assets/images/icon-check.png"
                alt=""
                width={29}
                height={28}
                className="h-[28px] w-[29.424px] shrink-0 object-contain"
              />
              <p
                className={`flex-1 text-[16px] text-black ${
                  index === CONCERNS.length - 1
                    ? 'leading-[2] font-medium tracking-[0.64px]'
                    : 'leading-[1.7] tracking-[0.32px]'
                }`}
              >
                {concern}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>

      <FadeIn className="mx-auto w-[345px]">
        <div className="relative flex flex-col items-center justify-center gap-[3px] overflow-hidden rounded-[16px] border-[3px] border-[#43c6b1] bg-[#fefff1] px-[20px] py-[20px]">
          <p className="w-[305px] text-center leading-[1.45] font-bold tracking-[-0.24px] text-[#252525]">
            <span className="text-[24px]">その悩み、</span>
            <br />
            <span className="text-[24px]">ALONA</span>
            <span className="text-[20px]">なら</span>
            <span className="text-[24px]">解決</span>
            <span className="text-[23px]">できます！</span>
          </p>

          <span className="block h-[2px] w-[284px] rounded-full bg-[#72cf2f]" />

          <p className="text-ink w-[309px] text-center text-[16px] leading-[1.7] tracking-[0.32px]">
            整える「ピラティス」と
            <br />
            鍛える「トレーニング」を
            <br />
            無理なくずっと続けられる
            <br />
            スマートな価格でご提供します。
          </p>

          <Image
            src="/assets/svg/concerns-deco-left.svg"
            alt=""
            width={63}
            height={131}
            className="absolute top-[55px] left-[5px] w-[63px]"
          />
          <Image
            src="/assets/svg/concerns-deco-right.svg"
            alt=""
            width={58}
            height={118}
            className="absolute top-[93px] right-[0px] w-[58px]"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Concerns;
