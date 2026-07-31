import Image from 'next/image';

import FadeIn from '@/components/common/fade-in';

import ExperienceWorkItem from './ExperienceWorkItem';

const workItems = [
  {
    number: '01',
    badge: '新規顧客の獲得',
    title: 'ECの弱点を克服。「食べて納得」の体験を',
    description:
      '店頭の棚は不要です。お客様のスマホ検索やAIコンシェルジュ「アスカ」の提案により、完全新規のお客様へもピンポイントで商品をレコメンド。パッケージだけでは伝わらない「こだわり」を、実物の試食体験と共に届けます。',
    image: '/assets/images/experience/experience-item-01.png',
    imageAlt: 'カフェのテーブルでスマートフォンを操作する来店客の手元',
  },
  {
    number: '02',
    badge: '即売上',
    title: '「美味しい！」の偶然の出会いが即売上に（購入率17.8%）',
    description:
      '試食して納得した熱量の高いお客様を、そのまま店頭販売や御社のECサイトへ誘導。「美味しかったからまた欲しい！」というファンを獲得できます。販売手数料は完全0円です。',
    image: '/assets/images/experience/experience-item-02.png',
    imageAlt: '店頭の棚から商品を手に取る来店客',
  },
  {
    number: '03',
    badge: '営業ツールの獲得',
    title: '様々な地域の声を集めた「最強の営業資料」',
    description:
      '都心の一等地・浅草だからこそ集まる、全国・全世界の消費者のリアルな評価（味・価格など）をグラフ化。ワンクリックでCSVダウンロードでき、そのまま問屋への決定的な営業資料になります。',
    image: '/assets/images/experience/experience-item-03.png',
    imageAlt: '総合点・味・価格のスコアダッシュボード',
  },
  {
    number: '04',
    badge: 'バイヤー獲得',
    title: 'リアル店舗とWEBから商談チャンスを創出',
    description:
      '浅草の店舗には、バイヤーやメディアが来店します。試食データを基にWEBプラットフォーム「フードバイヤーズハブ」に情報を掲載し、WEBサイトを通じて世界のバイヤーにアピールできます。',
    image: '/assets/images/experience/experience-item-04.png',
    imageAlt:
      '試食BARアサクサの店舗外観とAIコンシェルジュ、掲載商品の写真コラージュ',
  },
] as const;

const Experience = () => {
  return (
    <section className="rounded-b-[40px] px-5 md:rounded-b-[80px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-16 pt-16 pb-10 md:gap-24 md:pt-24">
        <div className="flex flex-col gap-8 md:gap-10">
          <FadeIn className="flex flex-col gap-1 text-center italic md:text-left">
            <p className="text-[28px] leading-tight font-black md:text-[64px]">
              <span className="text-[#f03d22]">“食べてもらえる体験”</span>
              <span className="text-[22px] text-[#434f8e] md:text-[40px]">
                なら
              </span>
            </p>
            <p className="text-[24px] font-black text-[#434f8e] md:text-[44px]">
              私たちにお任せください！！
            </p>

            <span className="mt-2 mb-1.5 block h-px w-full bg-[#434F8E] md:mt-5 md:mb-2"></span>
            <span className="block h-0.5 w-full bg-[#434F8E]"></span>
          </FadeIn>

          <FadeIn className="flex flex-col gap-10 max-md:items-center md:-mt-16 md:flex-row md:justify-between lg:-mt-24">
            <div className="flex flex-col gap-5 md:items-start md:gap-7 md:pt-20 lg:pt-32">
              <div className="flex items-center gap-9 max-md:w-full">
                <Image
                  src="/assets/images/fv/logo-mark.svg"
                  alt="試食BAR アサクサ"
                  width={151}
                  height={48}
                  className="h-9 w-auto lg:h-12"
                />
                <Image
                  src="/assets/images/fv/logo-foodbuyers.svg"
                  alt="food buyers HUB"
                  width={204}
                  height={48}
                  className="h-9 w-auto lg:h-12"
                />
              </div>
              <p className="text-[16px] font-medium tracking-wider text-[#1c213b] md:text-[20px]">
                商品を発送いただければ、あとは私たちが
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <span className="rounded-md bg-[#434f8e] px-4 py-2 text-[20px] font-bold text-white md:text-[28px]">
                  試食
                </span>
                <span className="rounded-md bg-[#434f8e] px-4 py-2 text-[20px] font-bold text-white md:text-[28px]">
                  販売
                </span>
                <span className="rounded-md bg-[#434f8e] px-4 py-2 text-[20px] font-bold text-white md:text-[28px]">
                  レポート作成
                </span>
              </div>
              <p className="max-w-[450px] text-[16px] font-medium tracking-wider text-[#1c213b] max-md:leading-loose md:text-[20px]">
                までこなす
                <span className="relative">
                  <span
                    aria-hidden
                    className="absolute right-[-4px] bottom-0 left-[-4px] h-[8px] rounded-full bg-[#ffc2c1] md:right-[-6px] md:left-[-6px] md:h-[10px]"
                  />
                  <span className="relative">スーパー営業マン</span>
                </span>
                を雇ったかのように、御社に代わって働きます。
              </p>
            </div>
            <div className="max-md:-mt-5">
              <Image
                src="/assets/images/experience/experience-intro-photo.png"
                alt="吹き出しに入った試食スタッフの写真"
                width={1142}
                height={1244}
                className="w-full max-w-[571px] max-md:hidden"
              />
              <Image
                src="/assets/images/experience/experience-intro-photo-sp.png"
                alt="吹き出しに入った試食スタッフの写真"
                width={707}
                height={759}
                className="w-full min-w-[353px] md:hidden"
              />
              <p className="mt-5 text-center text-[16px] leading-loose font-medium tracking-wider text-[#1c213b] md:mt-10 md:text-[20px] md:leading-relaxed">
                試食Barアサクサのスタッフ一同で <br />
                御社を支えるスーパー営業マンとして
                <br className="md:hidden" />
                稼働します！
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="relative -mx-5 overflow-hidden rounded-b-[80px] px-5 pt-40 md:pt-55 md:pb-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 50% 5.7%, 100% 0, 100% 100%, 0 100%)',
            backgroundColor: 'rgba(8, 39, 86, 0.05)',
          }}
        />
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center">
          <FadeIn className="flex flex-col items-center">
            <div className="flex items-center gap-6">
              <Image
                src="/assets/images/fv/logo-mark.svg"
                alt="試食BAR アサクサ"
                width={114}
                height={36}
                className="h-7 w-auto md:h-9"
              />
              <Image
                src="/assets/images/fv/logo-foodbuyers.svg"
                alt="food buyers HUB"
                width={153}
                height={36}
                className="h-7 w-auto md:h-9"
              />
            </div>
            <p className="mt-4 text-[20px] font-black text-[#434f8e] max-md:mb-2 md:mt-7 md:text-[40px]">
              私たちがおこなう仕事
            </p>
            <Image
              src="/assets/images/experience/experience-heading-deco.svg"
              alt=""
              aria-hidden
              width={286}
              height={46}
              className="w-[200px] md:w-[570px]"
            />
          </FadeIn>

          <div className="mt-28 flex w-full flex-col gap-32 md:mt-18">
            {workItems.map((item) => (
              <ExperienceWorkItem key={item.number} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
