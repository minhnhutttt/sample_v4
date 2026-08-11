import SectionHeading from '@/components/section-heading';

const BENEFITS = [
  {
    no: '01',
    title: 'まずは文庫社の「公式ファミリーツリー」に接続',
    body: 'このページの招待リンクから登録するだけで、あなたは「文庫社公式サポートメンバー」としてツリーに登録されます。これにより、所属作家の最新リリース情報や限定ドロップの優先通知が届くようになります。',
  },
  {
    no: '02',
    title: 'スキマ時間に「ポイ活」をしてポイントを貯める',
    body: 'アプリを開いたら、まずは「無料ポイント獲得」コーナー（オファーウォール）をチェック。普段通りにスマホで遊ぶだけで、気になる先生の作品をアンロックするためのポイントがざくざく貯まります。',
  },
  {
    no: '03',
    title: '好きな先生をフォローして、限定ネームをアンロック',
    body: '貯まったポイントを使って、気になる先生のチャンネルを購読したり、ここでしか見られない幻のネームをDROPで手に入れましょう！「自分だけが持っている、スクショできない特別な宝物」としての新しいマンガ体験がスタートします。',
  },
];

const Participate = () => {
  return (
    <div className="relative overflow-hidden px-5 py-10 md:px-15 md:py-15">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <SectionHeading>
          <p>参加後に</p>
          <p>できること</p>
        </SectionHeading>
        <div className="mt-14 flex w-full flex-col md:mt-25 md:flex-row md:items-stretch">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.no}
              className="flex flex-col gap-6 border-b border-[#9C9C9C] last:border-b-0 max-md:pb-10 max-md:not-first:pt-10 max-md:last:pb-0 md:min-w-0 md:flex-1 md:border-r md:border-b-0 md:p-10 md:last:border-r-0"
            >
              <div className="flex w-fit items-center gap-5 rounded-[4px] bg-[#242424] px-5 py-1">
                <p className="font-anton text-[18px] leading-[1.67] tracking-[0.03em] text-[#F78629] md:text-[20px]">
                  BENEFITS
                </p>
                <p className="font-anton text-[18px] leading-[1.67] tracking-[0.03em] text-[#F78629] md:text-[20px]">
                  {benefit.no}
                </p>
              </div>
              <p className="text-[20px] leading-[1.67] font-bold tracking-[-0.01em] text-[#F78629] md:text-[24px]">
                {benefit.title}
              </p>
              <p className="font-inter text-[16px] leading-[2] font-medium tracking-[0.04em] text-[#242424] md:text-[18px]">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participate;
