const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

type CaseItem = {
  id: string;
  title: string;
  subtitle: string;
  offsetClassName: string;
  imageSrc: string;
};

const caseItems: CaseItem[] = [
  {
    id: '01',
    title: '毎日写真を撮る人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-0',
    imageSrc: '/assets/images/app/image-cose-01.png',
  },
  {
    id: '02',
    title: '料理をSNSに上げる人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-[60px] max-xl:pt-0',
    imageSrc: '/assets/images/app/image-cose-02.png',
  },
  {
    id: '03',
    title: '音楽を作って流す人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-[120px] max-xl:pt-0',
    imageSrc: '/assets/images/app/image-cose-03.png',
  },
  {
    id: '04',
    title: '旅を記録している人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-0',
    imageSrc: '/assets/images/app/image-cose-04.png',
  },
  {
    id: '05',
    title: '専門知識をXに書いている人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-[60px] max-xl:pt-0',
    imageSrc: '/assets/images/app/image-cose-05.png',
  },
  {
    id: '06',
    title: '読んだ本の感想をまとめる人',
    subtitle: 'あなたのそれを、\n欲しいと思う誰かがいます',
    offsetClassName: 'pt-[120px] max-xl:pt-0',
    imageSrc: '/assets/images/app/image-cose-06.png',
  },
];

const CaseCaption = ({ text }: { text: string }) => {
  const [line1, line2] = text.split('\n');

  return (
    <div className="relative w-[320px] py-[12px] text-center">
      <p
        className="text-[18px] leading-[2] font-medium tracking-[0.72px] text-white"
        style={mainFont}
      >
        {line1}
        <br />
        {line2}
      </p>
      <span className="absolute top-0 left-0 h-[20px] w-[23px] border-t-2 border-l-2 border-[#F98528]" />
      <span className="absolute top-0 right-0 h-[20px] w-[23px] border-t-2 border-r-2 border-[#F98528]" />
      <span className="absolute bottom-0 left-0 h-[20px] w-[23px] border-b-2 border-l-2 border-[#F98528]" />
      <span className="absolute right-0 bottom-0 h-[20px] w-[23px] border-r-2 border-b-2 border-[#F98528]" />
    </div>
  );
};

const WorldviewAudienceSection = () => {
  return (
    <section className="relative z-30 overflow-x-hidden bg-[#242424] pt-[300px] pb-[300px] max-xl:pt-[140px] max-xl:pb-[140px]">
      <div className="mx-auto w-full max-w-[1280px] px-[60px] max-xl:px-[24px] max-md:px-[16px]">
        <h2
          className="w-[1160px] text-[72px] leading-[1.23] font-black tracking-[0.72px] text-[#F98528] max-xl:w-full max-xl:text-[48px] max-md:text-[36px]"
          style={mainFont}
        >
          <span className="max-md:inline md:block">
            KIVOに居場所があるのは、
          </span>
          <span className="max-md:inline md:block">
            クリエイターだけじゃない。
          </span>
        </h2>

        <div className="mt-[180px] flex w-[1160px] items-start justify-between max-xl:mt-[96px] max-xl:w-full max-xl:flex-col max-xl:gap-[72px]">
          <div className="w-[579px] border-r border-white pr-[60px] max-xl:w-full max-xl:border-r-0 max-xl:border-b max-xl:pr-0 max-xl:pb-[56px]">
            <h3
              className="min-h-[112px] text-[40px] leading-[1.4] font-bold text-white max-xl:min-h-0 max-md:text-[30px]"
              style={mainFont}
            >
              <span className="max-md:inline md:block">
                インフルエンサーになりたい
              </span>
              <span className="max-md:inline md:block">
                わけじゃないあなたへ
              </span>
            </h3>
            <img
              src="/assets/images/app/image-01.png"
              alt="インフルエンサーになりたいわけじゃないあなたへ"
              className="mt-[40px] h-[391px] w-[519px] rounded-[16px] object-cover max-xl:h-auto max-xl:w-full max-xl:max-w-[620px]"
            />
            <p
              className="mt-[40px] text-[22px] leading-[1.67] font-medium tracking-[0.66px] text-white max-md:text-[18px]"
              style={mainFont}
            >
              ただ好きなことを投稿していた。それだけで、KIVOでは価値がつきます。
            </p>
          </div>

          <div className="w-[581px] pl-[60px] max-xl:w-full max-xl:pl-0">
            <h3
              className="min-h-[112px] text-[40px] leading-[1.4] font-bold text-white max-xl:min-h-0 max-md:text-[30px]"
              style={mainFont}
            >
              すでにファンがいるあなたへ
            </h3>
            <img
              src="/assets/images/app/image-02.png"
              alt="すでにファンがいるあなたへ"
              className="mt-[40px] h-[391px] w-[521px] rounded-[16px] object-cover max-xl:h-auto max-xl:w-full max-xl:max-w-[620px]"
            />
            <p
              className="mt-[40px] text-[22px] leading-[1.67] font-medium tracking-[0.66px] text-white max-md:text-[18px]"
              style={mainFont}
            >
              フォロワーとの関係を、資本に変える場所です。
            </p>
          </div>
        </div>

        <div className="mt-[180px] grid w-[1160px] grid-cols-3 gap-x-[40px] gap-y-[60px] max-xl:mt-[96px] max-xl:w-full max-xl:grid-cols-1 max-xl:gap-y-[44px]">
          {caseItems.map((item) => (
            <article
              key={item.id}
              className={`mx-auto w-[360px] max-w-full ${item.offsetClassName}`}
            >
              <div className="relative h-[270px] w-[360px] max-w-full">
                <img
                  src={item.imageSrc}
                  alt={`CASE ${item.id}`}
                  className="h-[270px] w-[360px] max-w-full rounded-[16px] object-cover"
                />
                <p className="font-anton absolute inset-0 z-10 flex items-start justify-center pt-[18px] text-[82px] leading-[1.05] tracking-[2.46px] text-[#F98528]">
                  CASE {item.id}
                </p>
              </div>
              <p
                className="mt-[16px] w-[360px] max-w-full text-center text-[24px] leading-[1.67] font-bold tracking-[0.72px] text-white max-md:text-[20px]"
                style={mainFont}
              >
                {item.title}
              </p>
              <div className="mt-[20px] flex justify-center">
                <CaseCaption text={item.subtitle} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldviewAudienceSection;
