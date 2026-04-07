'use client';

export default function HomeTrust() {
  return (
    <section className="w-full bg-[url(/assets/images/trust-bg.png)] bg-cover bg-bottom-right px-6 py-20 md:bg-center md:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-end gap-16 lg:flex-row">
        {/* ── LEFT: Text content ───────────────────────────────────── */}
        <div className="flex flex-1 flex-col pb-5">
          {/* Heading */}
          <h2 className="text-[26px] leading-snug font-black tracking-tight whitespace-nowrap text-[#0067D3] md:text-[48px]">
            圧倒的な信頼<span className="text-[#1A4673]">を生む</span>
            <br />
            「運営体制」<span className="text-[#1A4673]">と</span>「信頼基準」
          </h2>

          {/* Intro text */}
          <p className="my-10 text-[18px] leading-relaxed font-bold text-[#1A4673] md:mt-21 md:mb-20 md:text-[28px]">
            「誰でも登録できるサイト」ではありません。
            <br className="max-md:hidden" />
            圧倒的な信頼を生む、プロによる厳格な審査。
            <br className="max-md:hidden" />
            現場を知るプロが作ったプラットフォーム。
          </p>

          {/* Badge */}
          <div>
            <span className="inline-block rounded bg-[#1A4673] px-6 py-2.5 text-[18px] font-bold text-white md:text-[22px]">
              運営元：くらしポート運営事務局
            </span>
          </div>

          {/* Body text */}
          <p className="mt-5 text-[14px] leading-loose tracking-wider text-[#1A4673] md:mt-6 md:text-[18px]">
            私たちは、建設業界で20年以上の実績を持つ実務者が立ち上げたチームです。「現場のリアルな課題」や「手抜き業者に仕事を奪われる悔しさ」を痛いほど知っているからこそ、IT企業には作れない、業界のプロが本当に救われるプラットフォームを作りました。お客様からの絶対的な信頼を担保し、優良業者様を守るため、以下の厳しい基準を設けています。
          </p>
        </div>

        {/* ── RIGHT: Single illustration image ─────────────────────── */}
        <div className="flex w-full items-center justify-end lg:w-[430px] lg:flex-shrink-0 lg:justify-center">
          <div className="relative lg:w-full">
            <img
              src="/assets/images/trust.png"
              alt=""
              className="max-md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
