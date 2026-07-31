import Image from 'next/image';

import AchievementCard from './AchievementCard';

const gradientTextStyle = {
  backgroundImage:
    'linear-gradient(100deg, #ffdbd5 0%, #ffffff 50%, #ffdbd5 100%)',
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
};

const achievementCards = [
  {
    title: '鹿児島県庁様との取り組み',
    description:
      '農林水産業の『稼ぐ力』の実現に向けて、県内事業者のこだわりが詰まった6次産業化商品の販路開拓を支援。試食アンケートデータから、商品のブラッシュアップや若い世代（20代以下）の生の声を事業者にフィードバックし、新たなヒット商品へのヒントとしてご活用いただいています。',
  },
  {
    title: '公益財団法人川崎市産業振興財団様との取り組み',
    description:
      '川崎発の優れた商品を首都圏の消費者に広く紹介し、認知度向上と販路拡大をダイレクトに支援するテストマーケティングシステムとして稼働。',
  },
  {
    title: '茨城県筑西市様（地域商社Chikusei-mine株式会社）との取り組み',
    description:
      '筑西市の『食』の魅力を、浅草を訪れる高感度な消費者やインバウンドへ直接お届けし、地方にいながら大都市圏への販路を拓く機会を創出。',
  },
];

const municipalLogos = [
  { src: '/assets/images/achievement/logo-aso.png', alt: '阿蘇市' },
  { src: '/assets/images/achievement/logo-geroshi.png', alt: '下呂市' },
  { src: '/assets/images/achievement/logo-kagoshima.png', alt: '鹿児島県' },
  { src: '/assets/images/achievement/logo-kawasaki.png', alt: '川崎市' },
  { src: '/assets/images/achievement/logo-ogano.png', alt: '小鹿野町' },
];

const mediaOutletsLeft = [
  '日本テレビ『ヒルナンデス！』',
  'TBS『カバン持ちさせてください！』',
  'TBS『Nスタ』',
  'フジテレビ『めざましどようび』',
];

const mediaOutletsRight = [
  '日本テレビ『news every.』',
  'TBS『ひるおび』',
  'フジテレビ『Live News イット！』',
];

const Achievement = () => {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-[#434f8e] md:rounded-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/assets/images/achievement/bg-photo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <section className="px-5 pt-20 pb-20 md:pt-24 md:pb-35">
        <div className="relative mx-auto max-w-[1120px] pt-30">
          <div className="relative mx-auto flex max-w-[770px] flex-col items-center pb-22 text-center md:pb-40">
            <div className="absolute -top-18 -left-3 -rotate-10 md:-top-24 md:-left-36">
              <div className="relative flex animate-bounce items-center justify-center rounded-full bg-white px-5 py-3 md:px-10 md:py-5">
                <p className="text-[18px] leading-[1.58] font-bold whitespace-nowrap text-[#434f8e] md:text-[28px]">
                  高リピート率！
                </p>
                <div
                  aria-hidden
                  className="absolute bottom-[-9px] left-1/2 h-[10px] w-[14px] -translate-x-1/2 bg-[#f0f8ff]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                />
              </div>
            </div>

            <div className="skew-x-[-10deg]">
              <p className="text-[36px] leading-[1.2] font-black whitespace-nowrap text-white md:text-[96px]">
                <span style={gradientTextStyle}>全国の自治体</span>
                <span className="md:text-[64px]">から</span>
              </p>
              <p className="text-[36px] leading-[1.2] font-black whitespace-nowrap text-white md:text-[96px]">
                <span style={gradientTextStyle}>お喜びの声</span>
                <span className="md:text-[64px]">が多数！</span>
              </p>
            </div>

            <Image
              src="/assets/images/achievement/sparkle-gov.svg"
              alt=""
              aria-hidden
              width={154}
              height={154}
              className="absolute right-0 bottom-0 max-md:w-[100px] md:right-[-90px] md:bottom-[30px]"
            />
          </div>

          <div className="flex max-md:mb-14">
            <div className="md:w-110 md:shrink-0">
              <p className="text-[24px] leading-[1.56] font-black text-white max-md:text-center md:text-[36px]">
                自治体・官民連携との
                <br />
                取り組み実績（一部抜粋）
              </p>
              <p className="mt-7 text-[16px] leading-[1.8] font-medium text-white md:mt-10 md:text-[20px]">
                単なる民間のサービスにとどまらず、地方創生や販路開拓の有効な手段として、多くの公的機関・自治体様と連携し、テストマーケティングや即売会を実施しています。
              </p>
            </div>
          </div>
          <div>
            <div className="ml-auto flex flex-1 flex-col gap-8 md:w-[560px] md:gap-10">
              {achievementCards.map((card) => (
                <AchievementCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-4 md:mt-36">
            {municipalLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={208}
                height={113}
                className="rounded-2xl max-md:w-[150px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden rounded-[40px] px-5 pt-28 pb-20 md:rounded-[80px] md:pt-40 md:pb-36"
        style={{
          background: 'linear-gradient(135deg, #1cabe1 0%, #1e94cd 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden mix-blend-overlay"
        >
          <div className="animate-marquee-vertical flex h-max flex-col [writing-mode:sideways-lr]">
            <span className="text-[100px] leading-none font-black whitespace-nowrap text-white opacity-10 md:text-[220px]">
              Media Featured. Media Featured. Media Featured. Media Featured.
            </span>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 overflow-hidden mix-blend-overlay"
        >
          <div className="animate-marquee-vertical flex h-max flex-col items-center [writing-mode:vertical-rl]">
            <span className="text-[100px] leading-none font-black whitespace-nowrap text-white opacity-10 md:text-[220px]">
              Media Featured. Media Featured. Media Featured. Media Featured.
            </span>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1120px]">
          <div className="relative flex flex-col items-center text-center">
            <div className="relative px-40">
              <Image
                src="/assets/images/achievement/sparkle-media-left.svg"
                alt=""
                aria-hidden
                width={68}
                height={149}
                className="absolute top-1/2 left-0 w-[149px] -translate-y-1/2 -rotate-90"
              />

              <p className="skew-x-[-8deg] text-[44px] leading-[1.2] font-black whitespace-nowrap text-white md:text-[72px]">
                <span style={gradientTextStyle}>圧倒的</span>
                <span className="text-[32px] md:text-[56px]">な</span>
                <br className="lg:hidden" />
                <span style={gradientTextStyle}>メディア掲載実績</span>
              </p>

              <Image
                src="/assets/images/achievement/sparkle-media-right.svg"
                alt=""
                aria-hidden
                width={68}
                height={149}
                className="absolute top-1/2 right-0 w-[149px] -translate-y-1/2 rotate-90"
              />
            </div>

            <div className="mt-16 text-[16px] leading-loose font-medium text-white md:mt-24 md:text-[23px] md:leading-[1.67]">
              <p>浅草という最高の立地と、</p>
              <p>
                「全品無料で試食できる」という
                <br className="md:hidden" />
                ユニークなコンセプトから、
              </p>
              <p>
                テレビやラジオなどの主要メディアで
                <br className="md:hidden" />
                何度も大特集されています。
              </p>
              <p className="mt-6 md:mt-10">
                御社の商品がメディアの目に留まり、
              </p>
              <p>
                全国放送でピックアップされる
                <br className="md:hidden" />
                チャンスも広がります。
              </p>
            </div>
          </div>

          <div className="mt-15 flex items-end justify-center gap-8 md:mt-18">
            <div className="mb-6 h-0.5 flex-1 bg-white/60" />
            <Image
              src="/assets/images/achievement/tv-bubble.svg"
              alt=""
              aria-hidden
              width={84}
              height={92}
              className="w-28 md:w-[160px]"
            />
            <div className="mb-6 h-0.5 flex-1 bg-white/60" />
          </div>

          <div className="mt-10 flex justify-between gap-7 max-md:flex-col md:gap-30">
            <div className="flex flex-col gap-8 md:gap-6">
              {mediaOutletsLeft.map((outlet) => (
                <p
                  key={outlet}
                  className="text-[18px] leading-[1.58] font-bold text-white md:text-[29px]"
                >
                  {outlet}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-8 md:gap-6">
              {mediaOutletsRight.map((outlet) => (
                <p
                  key={outlet}
                  className="text-[18px] leading-[1.58] font-bold text-white md:text-[29px]"
                >
                  {outlet}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-10 text-[16px] leading-[1.8] font-bold text-white md:mt-16 md:text-[20px]">
            その他、Webメディアや
            <br className="md:hidden" />
            新聞・ラジオなど紹介実績多数！
          </p>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
