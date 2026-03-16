const CompanyProfile = () => {
  return (
    <section className="bg-stone-900 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[980px] rounded-2xl border border-[#F78629] bg-[#F78629] p-6 text-black md:p-10">
        <h2 className="text-[clamp(28px,22px+1.2vw,44px)] font-bold tracking-tight">
          Company Profile
        </h2>

        <div className="mt-6 border-t border-black/70">
          <dl className="text-[clamp(14px,13px+0.25vw,20px)]">
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">会社名</dt>
              <dd>株式会社KIVO</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">代表者</dt>
              <dd>Arima Yoshiki</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">設立</dt>
              <dd>2026年3月</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">資本金</dt>
              <dd>10,000,000円</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">所在地</dt>
              <dd>〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:gap-4 border-b border-black/70 py-4 md:grid-cols-[180px_1fr]">
              <dt className="font-bold">事業内容</dt>
              <dd>
                1.アプリケーション開発
                <br />
                2.KIVOアプリ運用・保守
                <br />
                3.広告事業
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile
