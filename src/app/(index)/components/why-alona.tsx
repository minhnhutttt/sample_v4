import Image from 'next/image';

import FadeIn from '@/components/ui/fade-in';
import SectionTitle from '@/components/ui/section-title';

type WhyBlock = {
  title: string[];
  /** Highlight chip under the title — Figma "50min-value-accent" (node 205:6153). */
  badge?: string;
  body: string;
  image: { src: string; alt: string };
};

const WHY_BLOCKS: WhyBlock[] = [
  {
    title: ['他社の「30分」では届かない、', '結果に向き合う「50分」'],
    badge: '50分間のマンツーマン',
    body: '競合他社に多い「30分」のセッションでは物足りない方に。ALONAでは一人ひとりの身体と丁寧に向き合う「50分間」を確保。ただ安いだけでなく、しっかり動き、正しく整え、1回ごとに身体の変化を実感できる充実の時間を提供します。',
    image: {
      src: '/assets/images/why-alona-01-core-training.jpg',
      alt: 'トレーナーとコアトレーニングをする様子',
    },
  },
  {
    title: ['「整える」と「鍛える」が、', '1つの店舗で完結'],
    body: 'インナーマッスルを刺激して姿勢・柔軟性・バランスを整える「マシンピラティス」と、筋力・体力を高めて理想のアウトラインを作る「パーソナルトレーニング」。2つを同じ店舗で完結できるため、ブレない理想の身体づくりが目指せます。',
    image: {
      src: '/assets/images/why-alona-02-pilates-training.jpg',
      alt: 'マシンピラティスとパーソナルトレーニングの様子',
    },
  },
  {
    title: ['続けられる料金設計。', 'それがALONAの本気です'],
    body: 'お客様のトレーニングに直接繋がらないコストをできる限り抑えることで、その分を料金設計に還元しています。運動を一時的なイベントで終わらせず、「一生の健康習慣」に変えていくための価格設計です。',
    image: {
      src: '/assets/images/why-alona-03-customer-call.jpg',
      alt: 'スマートフォンを見て笑顔になるお客様',
    },
  },
  {
    title: ['当日キャンセル無料'],
    body: 'ご予約のキャンセルや日時変更は、「前日の午前10時まで」に予約ページよりお手続きをお願いいたします。当日キャンセル・変更はLINE連絡にて可能となります。キャンセル料も発生しません。',
    image: {
      src: '/assets/images/why-alona-04-line-app.jpg',
      alt: '公式LINEアプリの画面',
    },
  },
];

const WhyAlona = () => (
  <section
    data-section="why"
    className="flex flex-col gap-[50px] bg-white px-[32px] pt-[90px]"
  >
    <SectionTitle id="why" en="WHY ALONA" jp="ALONAが選ばれる理由" />

    {WHY_BLOCKS.map((block) => (
      <FadeIn key={block.body} className="flex flex-col gap-[20px]">
        <div className="flex flex-col justify-center gap-[4px]">
          <h3 className="text-ink text-center text-[20px] leading-[1.4] font-bold">
            {block.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <span className="block h-px w-[310px] bg-[#a1a1a1]" />
        </div>

        {block.badge && (
          <p className="w-full rounded-[16px] border border-[#2e8f99] bg-[#f3f8f8] px-[12px] py-[10px] text-[16px] font-bold text-[#1f5d64]">
            {block.badge}
          </p>
        )}

        <p className="text-body text-[16px] leading-[1.7] tracking-[0.32px]">
          {block.body}
        </p>

        <Image
          src={block.image.src}
          alt={block.image.alt}
          width={375}
          height={188}
          className="h-[188px] w-full rounded-tl-[30px] rounded-br-[30px] object-cover"
        />
      </FadeIn>
    ))}
  </section>
);

export default WhyAlona;
