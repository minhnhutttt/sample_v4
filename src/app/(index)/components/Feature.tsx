import Image from 'next/image';

import SectionTitle from '@/components/common/section-title';

import FeatureCard from './FeatureCard';
import FeatureSmallCard from './FeatureSmallCard';

const cards = [
  {
    image: '/assets/images/feature/card-real-encounter.png',
    imageAlt: '試食BARアサクサの店舗外観',
    label: 'リアルな出会い',
    title: 'プロからの業務用オファー',
    description:
      '浅草の一等地には、新たな食材を探すシェフや飲食事業者様も多数来店。プロが直接舌で味わうことで、予期せぬ指名買いが舞い込みます。',
  },
  {
    image: '/assets/images/feature/card-onsite-survey.png',
    imageAlt: 'スマートフォンでアンケートに回答する様子',
    label: 'その場でアンケート',
    title: '熱量の高いコメントを取得',
    description:
      '試食をした流れでアンケートを取得。一番熱量の高い状態で本音を聞き出せます。フードバイヤーズハブには良質な口コミが集まり、アピール素材にできます。',
  },
  {
    image: '/assets/images/feature/card-data-persuasion.png',
    imageAlt: '総合点・味・価格のスコアダッシュボード',
    label: 'データで説得',
    title: '最強の営業資料に',
    description:
      '「8割が美味しいと回答」というリアルなデータが、門前払いだったバイヤーも納得させます。数値はフードバイヤーズハブのダッシュボードですぐチェックできます。',
  },
  {
    image: '/assets/images/feature/card-web-nationwide.png',
    imageAlt: 'フードバイヤーズハブのWEBサイト画面',
    label: 'WEBで全国へ',
    title: '全国のバイヤーから商談依頼',
    description:
      '店舗での評価データをWEBプラットフォーム「フードバイヤーズハブ」に掲載。AIが全国のバイヤーへ直接提案し、質の高い問い合わせを継続的に獲得できます。',
  },
] as const;

const smallCards = [
  {
    image: '/assets/images/feature/small-media.png',
    imageAlt: '試食BARアサクサの店舗前に並ぶ行列',
    title: 'メディア露出のチャンス',
    description:
      'TV取材が多数入る店舗だからこその、全国放送を通じた圧倒的なPR効果。',
  },
  {
    image: '/assets/images/feature/small-inbound.png',
    imageAlt: '外国人観光客が試食を楽しむ様子',
    title: 'インバウンドの生の声',
    description:
      '来店客の約3割を占める外国人客からの、海外進出に向けた貴重な評価。',
  },
  {
    image: '/assets/images/feature/small-survey-data.png',
    imageAlt: 'アンケート用紙に記入する様子',
    title: '大量のアンケートデータ',
    description: '身内ではない、リアルな消費者の声が商品改良のヒントに。',
  },
] as const;

const Feature = () => {
  return (
    <section className="relative bg-[#eef1fb] px-5">
      <div className="relative mx-auto flex max-w-[1120px] flex-col items-center gap-[48px] pt-[80px] pb-[64px] md:gap-[85px] md:pt-[110px] md:pb-[100px]">
        <div className="w-full">
          <div className="flex w-full flex-col items-center">
            <div className="relative z-10 mb-[-20px] flex items-center justify-center gap-[10px] rounded-full bg-[#434f8e] px-[24px] py-[10px] md:mb-[-32px] md:px-[40px] md:py-[20px]">
              <p className="text-[16px] font-bold tracking-[0.48px] text-white md:text-[28px] md:tracking-[0.84px]">
                最短ルート！
              </p>
              <div
                aria-hidden
                className="absolute bottom-[-8px] left-1/2 h-[12px] w-[12px] -translate-x-1/2"
              >
                <Image
                  src="/assets/images/feature/badge-tail.svg"
                  alt=""
                  fill
                  className="rotate-180"
                />
              </div>
            </div>
            <div className="w-full pt-[48px] md:pt-[64px]">
              <SectionTitle>
                <p className="text-[24px] font-black text-[#434f8e] md:text-[48px]">
                  食べてもらう体験を通して
                </p>
                <p className="mt-[8px]">
                  <span className="text-[32px] font-black text-[#F03D22] md:text-[68px]">
                    多数のアンケート
                  </span>
                  <br className="md:hidden" />
                  <span className="text-[24px] font-black text-[#434f8e] md:text-[48px]">
                    を取ることで…
                  </span>
                </p>
              </SectionTitle>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-x-[100px] gap-y-[48px] md:gap-y-[94px]">
          {cards.map((card) => (
            <FeatureCard key={card.label} {...card} />
          ))}
        </div>

        <div className="mt-[16px] flex w-full flex-col justify-center gap-[64px] max-xl:flex-wrap max-md:items-center md:mt-[44px] md:flex-row md:gap-x-[28px] md:gap-y-10 xl:justify-between">
          {smallCards.map((card) => (
            <FeatureSmallCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
