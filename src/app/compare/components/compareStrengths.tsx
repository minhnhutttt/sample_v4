import { ReactNode } from 'react';

type SocialType = 'line' | 'instagram' | 'note' | 'discord' | 'fanbox';

const SOCIALS: Record<SocialType, { src: string; url: string; alt: string }> = {
  line: {
    src: '/assets/images/btn-line.png',
    url: 'https://line.me/',
    alt: 'LINE',
  },
  instagram: {
    src: '/assets/images/btn-instagram.png',
    url: 'https://instagram.com/',
    alt: 'Instagram',
  },
  note: {
    src: '/assets/images/btn-note.png',
    url: 'https://note.com/',
    alt: 'note',
  },
  discord: {
    src: '/assets/images/btn-discord.png',
    url: 'https://discord.gg/',
    alt: 'Discord',
  },
  fanbox: {
    src: '/assets/images/btn-fanbox.png',
    url: 'https://fanbox.cc/',
    alt: 'Fanbox',
  },
};

type SocialGroupProps = {
  items: SocialType[];
};

export const SocialGroup = ({ items }: SocialGroupProps) => (
  <div className="flex flex-wrap gap-2">
    {items.map((type) => {
      const { src, url, alt } = SOCIALS[type];
      return (
        <a key={type} href={url} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={alt} />
        </a>
      );
    })}
  </div>
);

type StrengthsProps = {
  number: string;
  title: string;
  head: string;
  content: ReactNode;
  compare: string;
  items: SocialType[];
};

const Strengths = ({
  number,
  title,
  head,
  content,
  compare,
  items,
}: StrengthsProps) => {
  return (
    <div className="py-20 md:py-[112px]">
      <p className="font-anton flex gap-5 text-[50px] leading-none text-[#F98528] md:gap-16 md:text-[150px] lg:text-[180px]">
        <span>{number}</span>
        <span>{title}</span>
      </p>
      <div className="flex items-end justify-between gap-10 pt-14 max-md:flex-col md:pt-22">
        <div className="">
          <p className="mb-5 border-b border-white/50 pb-5 text-[20px] font-bold text-white md:mb-8 md:text-[28px]">
            {head}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-white md:text-[16px]">
            <SocialGroup items={items} />
            <p className="whitespace-nowrap">{compare}</p>
          </div>
        </div>
        <div className="text-[14px] text-white md:w-[455px] md:text-[18px]">
          {content}
        </div>
      </div>
    </div>
  );
};

const CompareStrengths = () => {
  return (
    <div className="bg-[#242424]">
      <div className="font-anton bg-[#F98528] p-8 text-center text-[50px] leading-none md:text-[180px]">
        5 STRENGTHS
      </div>
      <div className="px-5">
        <div className="mx-auto w-full max-w-[1180px] pt-25 md:pt-[140px]">
          <div className="relative mx-auto flex min-h-[140px] w-full max-w-[1180px] items-center justify-center px-6 md:px-10">
            <span className="absolute top-0 left-0">
              <img
                className="max-md:w-8"
                src="/assets/images/compare-title.png"
                alt=""
              />
            </span>
            <span className="absolute bottom-0 left-0 rotate-270">
              <img
                className="max-md:w-8"
                src="/assets/images/compare-title.png"
                alt=""
              />
            </span>
            <h2 className="text-center text-[24px] font-bold text-white md:text-[40px]">
              比較から見えてきた、KIVOの5つの強み
            </h2>
            <span className="absolute top-0 right-0 rotate-90">
              <img
                className="max-md:w-8"
                src="/assets/images/compare-title.png"
                alt=""
              />
            </span>
            <span className="absolute right-0 bottom-0 rotate-180">
              <img
                className="max-md:w-8"
                src="/assets/images/compare-title.png"
                alt=""
              />
            </span>
          </div>
          <div>
            <Strengths
              number="01"
              title="FREEDOM"
              head="エンゲージメント至上主義からの解放"
              content={
                <>
                  フォロワー数やいいねの数は富の指標ではありません。KIVOはフォロワーとの関係を資本に変換できる、唯一のクリエイター基盤です。
                </>
              }
              compare="との比較より"
              items={['line', 'instagram']}
            />
            <Strengths
              number="02"
              title="UNIQUENESS"
              head="既存プラットフォームが真似できない構造"
              content={
                <>
                  広告収益で成立しているプラットフォームは、コンテンツ保護と収益化を同時に設計できません。KIVOのモデルは、構造的に唯一です。
                </>
              }
              compare="すべての比較より"
              items={['line', 'instagram', 'note', 'discord', 'fanbox']}
            />
            <Strengths
              number="03"
              title="SEAMLESS"
              head="届ける・話す・売るが、一つの場所で完結する"
              content={
                <>
                  コンテンツの閲覧、ファンとの会話、購入——この三つが同じ文脈でつながっているのは、KIVOだけです。
                </>
              }
              compare="との比較より"
              items={['line', 'discord']}
            />
            <Strengths
              number="04"
              title="OWNERSHIP"
              head="ファンとの関係が、クリエイターの資産になる"
              content={
                <>
                  これまでSNSで積み上げてきたフォロワーは、直接的な収益を生み出せませんでした。KIVOでは、すでに繋がっているファンが今日から資産に変わります。
                </>
              }
              compare="との比較より"
              items={['instagram']}
            />
            <Strengths
              number="05"
              title="PURITY"
              head="誠実なファンと築く、純度の高いエコノミー"
              content={
                <>
                  転載・流出による対価なき消費はもうなくなります。KIVOなら、対価を前提にファンと誠実な関係が築けます。その純度が、クリエイターの活動を支え続けます。
                </>
              }
              compare="との比較より"
              items={['note', 'fanbox']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareStrengths;
