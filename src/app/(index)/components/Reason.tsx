import SectionHeading from '@/components/section-heading';

const REASONS = [
  {
    title: '無断転載から作家を守る「魔法の鍵」',
    lead: 'アプリ内はスクリーンショット・ダウンロード完全不可！',
    body: '作家が精魂込めて描いたネームや初期プロットが、ネット上に無断で転載される心配はもうありません。KIVO TALKアプリ内では高度な技術保護（魔法の鍵）が施されており、作品を手に入れた熱狂的なファンだけが、安心・安全に所有し、手元でじっくり閲覧できるクローズドな空間が保たれます。',
  },
  {
    title: 'あなたの「ポイ活」が、100%作家の直接の収入（売上）に',
    lead: '自己負担0円！ゲームやアンケートで貯めて応援！',
    body: 'アプリ内の「オファーウォール（ポイ活機能）」で、おすすめのゲームを遊んだりアンケートに回答するだけで、無料で簡単にポイントが貯まります。貯めたポイントで作品を購入すると、中抜きなしでそのまま100%「Gem（売上）」として作家に還元。あなたがお財布を痛めることなく、作家を金銭的に直接支えることができます。',
  },
  {
    title: '連載や単行本を待つ必要のない「プロセスの共有」',
    lead: 'ボツネーム、裏設定、アイデア会議。制作のすべてがコンテンツに！',
    body: 'これまでは編集部と作家の間だけで閉じられていた「ネーム（下書き）」や「ボツプロット」、キャラクターの「初期設定資料」などが、すべて特別な「DROP（デジタル資産）」として配信されます。さらに、公式「CHANNEL」では、作家とメッセージを交わしながら「次の展開のアイデア出し会議」にファン自身が参加する、といった新しいエンタメ体験を楽しめます。',
  },
];

const Reason = () => {
  return (
    <div className="relative overflow-hidden px-5 pt-20 pb-20 md:px-15 md:pt-30 md:pb-15">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <SectionHeading>
          <p>KIVO TALKを</p>
          <p>選んだ理由</p>
        </SectionHeading>
        <div className="mt-14 w-full text-justify md:mt-30">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between gap-8 border-b border-[#9C9C9C] py-10 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:gap-10 md:py-20"
            >
              <p className="w-full text-[24px] leading-[1.5] font-bold tracking-[0.02em] text-[#F78629] md:max-w-[380px] md:text-[40px]">
                {reason.title}
              </p>
              <div className="flex w-full flex-col gap-6 md:max-w-[580px] md:gap-10">
                <p className="text-[18px] leading-[1.67] font-bold tracking-[0.03em] text-black md:text-[24px]">
                  {reason.lead}
                </p>
                <p className="text-[16px] leading-[1.8] font-medium tracking-[0.04em] text-[#242424] md:text-[20px]">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reason;
