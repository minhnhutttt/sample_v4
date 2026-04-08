'use client';

import useScrollAnimations from '@/hooks/useScrollAnimations';

const BUSINESSES = [
  {
    image: '/assets/images/businesses-01.png',
    text: (
      <>
        建設業許可の保有
        <br />
        （許可番号の確認必須）
      </>
    ),
  },
  {
    image: '/assets/images/businesses-02.png',
    text: (
      <>
        損害保険への加入
        <br />
        （保険証券の確認必須）
      </>
    ),
  },
  {
    image: '/assets/images/businesses-03.png',
    text: (
      <>
        確かな施工実績・資格
        <br />
        （実績写真や資格証明書の確認）
      </>
    ),
  },
];

const VALUES = [
  {
    image: '/assets/images/value-01.png',
    title: '適正価格での受注',
    text: <>疲弊するだけの価格競争から完全に解放されます。</>,
  },
  {
    image: '/assets/images/value-02.png',
    title: '質の高い顧客との出会い',
    text: <>あなたの技術の「価値」を理解してくれるお客様とマッチングします。</>,
  },
  {
    image: '/assets/images/value-03.png',
    title: '強力な信頼ブランド',
    text: (
      <>
        厳しい審査をクリアした「くらしポート掲載業者」であること自体が、お客様への最大の営業武器（ブランド）になります。
      </>
    ),
  },
];

export default function HomeBusinesses() {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="w-full bg-[#F2F8FF] bg-[url(/assets/images/businesses-bg-02.png)] bg-cover bg-bottom py-20"
    >
      <div className="px-5">
        <div className="mx-auto w-full max-w-[1100px]">
          <h2 className="fade-up text-center text-[26px] leading-snug font-black tracking-tight whitespace-nowrap text-[#0067D3] md:text-[48px]">
            掲載業社<span className="text-[#1A4673]">の</span>基準
          </h2>
          <div className="mt-12 grid max-md:mx-auto max-md:max-w-[360px] max-md:gap-y-10 md:mt-[60px] md:grid-cols-3 md:gap-x-5 lg:gap-x-10">
            {BUSINESSES.map((item, i) => (
              <div
                className="fade-up overflow-hidden rounded-t-[48px] rounded-b-[6px] bg-white px-5 py-10 shadow-xl lg:px-10 lg:py-[60px]"
                key={i}
              >
                <figure className="max-md:w-full">
                  <img
                    src={item.image}
                    className="rounded-t-[30px] rounded-b-[4px] max-md:w-full"
                    alt=""
                  />
                </figure>
                <p className="mt-5 text-center text-[15px] leading-loose font-medium tracking-tight text-[#1A4673] md:text-[18px] lg:mt-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="-mt-[60px] rounded-t-[80px] bg-[url(/assets/images/businesses-bg.png)] bg-cover px-5 pt-30 pb-15 md:pt-36 md:pb-20">
        <div className="fade-up mx-auto w-full max-w-[1100px]">
          <h3 className="text-center text-[20px] leading-[1.8] font-black text-white md:text-[24px]">
            なぜ厳しくするのか？
          </h3>
          <p className="mt-4 text-[16px] font-medium text-white md:mt-7 md:text-[22px]">
            この厳しいハードルがあるからこそ、価格破壊を起こすだけの悪質業者は同じ土俵に立てません。結果として、当サイトには「本当に安心できる業者に頼みたい」という質の高いお客様だけが集まります。
          </p>
        </div>
      </div>
      <div className="px-5 pt-22">
        <h5 className="fade-up text-center text-[22px] font-bold text-[#0067D3] md:text-[32px]">
          くらしポートが貴社にもたらす価値
        </h5>
        <div className="mx-auto mt-12 grid max-w-[360px] max-md:gap-y-10 md:mt-[60px] md:max-w-[1100px] md:grid-cols-3 md:gap-x-5 lg:gap-x-10">
          {VALUES.map((item, i) => (
            <div
              className="fade-up relative flex flex-col items-center overflow-hidden rounded-t-[48px] rounded-b-[6px] bg-white px-5 py-10 shadow-xl lg:px-10 lg:py-[60px]"
              key={i}
            >
              <div className="absolute top-30 aspect-square size-[500px] rounded-full bg-[#0067D3] lg:top-43"></div>
              <div className="relative text-white">
                <figure className="max-md:w-full">
                  <img
                    src={item.image}
                    className="rounded-t-[30px] rounded-b-[4px] max-md:w-full"
                    alt=""
                  />
                </figure>
                <h4 className="mt-10 text-center text-[20px] font-bold md:text-[24px] lg:-mx-5">
                  {item.title}
                </h4>
                <p className="mt-4 text-[15px] leading-loose tracking-tight md:text-[18px] lg:mt-7">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
