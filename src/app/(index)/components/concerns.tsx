import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';

const CONCERNS: string[] = [
  'パーソナルジムは高すぎて結局3ヶ月も続かなかった…',
  'ピラティスも筋トレもやりたいけど、別々に通うと費用も時間も2倍に…',
  '肩こり・腰痛、体力の衰え…運動初心者だからついていけるか不安',
  '30分のセッションだと、着替えたらすぐ終わる気がする…',
];

const Concerns = () => (
  <section
    data-section="concerns"
    className="relative flex w-full flex-col gap-[38px] bg-white"
  >
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
              className="h-[28px] w-[29px] shrink-0 object-contain"
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
      <div className="relative flex flex-col items-center justify-center gap-[3px] overflow-hidden rounded-[16px] border-[3px] border-[#43b4c6] bg-[#f1feff] px-[20px] py-[20px]">
        <p className="w-[305px] text-center leading-[1.45] font-bold tracking-[-0.24px] text-[#252525]">
          <span className="text-[24px]">その悩み、</span>
          <br />
          <span className="text-[24px]">ALONA</span>
          <span className="text-[20px]">なら</span>
          <span className="text-[24px]">解決</span>
          <span className="text-[23px]">できます！</span>
        </p>

        <span className="block h-px w-[284px] rounded-full bg-[#787878]" />

        <p className="text-ink w-[309px] text-center text-[16px] leading-[1.7] tracking-[0.32px]">
          整える「ピラティス」と
          <br />
          鍛える「トレーニング」を
          <br />
          無理なくずっと続けられる
          <br />
          スマートな価格でご提供します。
        </p>
      </div>
    </FadeIn>
  </section>
);

export default Concerns;
