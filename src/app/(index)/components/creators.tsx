const Creators = () => {
  const cards = [
    {
      image: '/assets/images/creator-01.png',
      en: 'SOCIAL MEDIA USER',
      ja: 'SNSユーザー',
      href: '/sns-user',
      body: 'SNSにコンテンツをのせて終わりなら、\nついでにKIVO TALKにものせませんか？ \nただの「日常」だったものが、誰かにとって価値ある\n「楽しみ」に変わります。',
      hasComingSoon: false,
    },
    {
      image: '/assets/images/creator-02.png',
      en: 'MANGA ARTIST',
      ja: '漫画・同人作家',
      href: '/manga',
      body: '連載の締め切りや単行本の枠に縛られず、あなたの「1話」や「ネーム」を、KIVO TALKで最も輝く形 に実現しましょう。',
      hasComingSoon: false,
    },
    {
      image: '/assets/images/creator-03.png',
      en: 'VIDEO GRAPHER',
      ja: '動画作家',
      href: '/video',
      body: 'アルゴリズムのための動画作りから、自分のための表現へ。 100万回の再生より、あなたの映像を一生持っていたい100人の「視聴者」とKIVO TALKで叶えられます。',
      hasComingSoon: false,
    },
    {
      image: '/assets/images/creator-04.png',
      en: 'MEMBERSHIP OWNER',
      ja: 'コミュニティ運用者',
      href: '/',
      body: '会員制コミュニティの形式や更新頻度に縛られる必要はありません。 あなたの伝えたい知恵を一番純粋な形でKIVO TALKで叶えましょう。',
      hasComingSoon: true,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1280px] bg-[#FFF8F2] px-[60px] py-[140px] max-md:px-[30px] max-md:py-[70px]">
      <div className="relative flex w-full items-center justify-center gap-[10px] self-stretch p-5 md:p-[40px]">
        <img
          src="/assets/images/brackets-left-top.svg"
          alt=""
          className="absolute top-0 left-0 h-[40px] w-[45px]"
        />
        <img
          src="/assets/images/brackets-right-top.svg"
          alt=""
          className="absolute top-0 right-0 h-[40px] w-[45px]"
        />
        <img
          src="/assets/images/brackets-left-bottom.svg"
          alt=""
          className="absolute bottom-0 left-0 h-[40px] w-[45px]"
        />
        <img
          src="/assets/images/brackets-right-bottom.svg"
          alt=""
          className="absolute right-0 bottom-0 h-[40px] w-[45px]"
        />

        <h2 className="w-[1097px] text-center text-[24px] leading-[150%] font-bold tracking-[0.8px] text-[#242424] md:text-[40px]">
          <span className="">あなたは、どの KIVO TALK から始めますか？</span>
        </h2>
      </div>

      <p className="my-[60px] text-center text-[18px] leading-[180%] font-medium tracking-[0.8px] whitespace-pre-line text-[rgba(0,0,0,0.80)] max-md:text-left md:my-[100px] md:text-[20px]">
        あなたがSNSユーザーでも、KIVO TALK を使えばクリエイター。
        <br />
        あなたが漫画・同人作家なら、KIVO TALK の世界では連載作家。
        <br />
        あなたがコミュニティ運用者だとしたら、KIVO TALK に立てば講師。
        <br />
        KIVOはどんな人であっても、あなたを輝かせるステージを提供します。
      </p>

      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {cards.map((card, index) => {
          const isLeft = index % 2 === 0;
          const isTop = index < 2;

          return (
            <article
              key={card.en}
              className={`relative flex flex-col items-end gap-[40px] p-[40px] ${
                isLeft ? 'border-r border-[#9C9C9C] max-md:border-r-0' : ''
              } ${isTop ? 'border-b border-[#9C9C9C]' : ''} max-md:border-b max-md:border-[#9C9C9C]`}
            >
              <div className="flex w-full flex-col items-start gap-[32px]">
                <div className="flex items-start gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
                  <div className="shrink-0 rounded-[6px] bg-[#D9D9D9] max-lg:order-2">
                    <img src={card.image} alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-[24px] text-[#242424] max-lg:order-1">
                    <p className="font-anton text-[28px] leading-[114%] tracking-[0.84px] text-[#F5CAA5]">
                      {card.en}
                    </p>
                    <p className="text-[28px] leading-[158%] font-bold tracking-[0.84px]">
                      {card.ja}
                    </p>
                  </div>
                </div>
                <p className="text-[20px] leading-[180%] tracking-[0.8px] whitespace-pre-line text-[#242424]">
                  {card.body}
                </p>
              </div>

              <a
                href={card.href}
                className="relative mt-auto flex w-full items-center justify-end gap-[8px]"
              >
                <p className="text-[24px] leading-[167%] font-bold tracking-[0.72px] text-[#F98528]">
                  詳しく見る
                </p>
                <img
                  src="/assets/images/icon-arrow.svg"
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                {card.hasComingSoon ? (
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[rgba(36,36,36,0.55)] px-[19px] py-[4px]">
                    <span className="text-[16px] leading-[200%] font-bold tracking-[0.64px] text-white">
                      COMING SOON
                    </span>
                  </div>
                ) : null}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Creators;
