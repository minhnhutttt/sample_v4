'use client';

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function HomeFv() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden pt-20 lg:pt-[92px]">
      <div className="absolute inset-0 bg-[url('/assets/images/fv-bg.png')] bg-cover bg-center mix-blend-multiply"></div>

      {/* Content wrapper */}
      <div className="@container relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center gap-12 px-5 py-7 max-lg:flex-col lg:flex-row">
        {/* ── Left: Text content ─────────────────────────────────────────── */}
        <div className="flex max-w-xl flex-1 flex-col gap-6">
          {/* Badge */}
          <div>
            <span className="relative flex h-12 w-[200px] items-center justify-center rounded-full bg-white px-5 py-2 text-[18px] font-bold tracking-wide text-[#0067D3] shadow-lg after:absolute after:bottom-[-10px] after:left-[cacl(50%-14px)] after:aspect-28/20 after:w-[28px] after:bg-[url('/assets/images/tri01.png')] after:bg-cover md:h-[56px] md:w-[240px] md:text-[20px]">
              高額手数料ナシ！
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="mt-1 text-[26px] leading-snug font-bold text-white md:text-[42px]">
              安さではなく、
              <br />
              安心と信頼で選ばれるなら
            </h1>
          </div>

          {/* Brand name */}
          <div>
            <h1 className="leading-none font-black tracking-tight text-white">
              <img
                src="/assets/images/fv-text.svg"
                alt=""
                className="max-md:w-[380px]"
              />
            </h1>
          </div>

          {/* Description */}
          <div className="mt-3 md:mt-10">
            <p className="text-[16px] leading-relaxed font-bold text-white md:text-[20px]">
              確かな施工技術を「適正価格」で求めている優良顧客と
              <br className="max-md:hidden" />
              出会える、建設業専門の審査制AIマッチングサービスです。
            </p>
          </div>
        </div>

        {/* ── Right: Worker circles ──────────────────────────────────────── */}
        <div className="@container relative top-0 right-0 aspect-570/737 w-[370px] flex-1 pt-20 sm:w-[570px] lg:absolute lg:w-[51.818cqw] lg:pt-[92px]">
          <div className="animate-float-slow absolute top-[4cqw] left-[13cqw] z-10 w-[42.807cqw]">
            <img src="/assets/images/fv-01.png" alt="" />
          </div>

          <div className="animate-float-mid absolute top-[22cqw] right-[-4cqw] w-[91.053cqw]">
            <img src="/assets/images/fv-02.png" alt="" />
          </div>

          <div className="animate-float-fast absolute bottom-[-4cqw] left-[3cqw] w-[50.877cqw]">
            <img src="/assets/images/fv-03.png" alt="" />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative mt-8 w-full px-5 py-10 md:py-15">
        <div className="absolute inset-0 bg-[#2F81D6] mix-blend-multiply"></div>
        <div className="mx-auto w-full max-w-[1100px] max-md:flex max-md:justify-center">
          <button className="group relative flex h-20 w-[300px] items-center justify-center gap-4 rounded-md bg-[linear-gradient(90deg,_#FF493E_0%,_#FFA826_100%)] px-10 py-5 text-center text-[18px] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 md:h-[99px] md:w-[354px] md:text-[22px]">
            <span>掲載を申し込む</span>
            <span className="absolute right-5 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* ── Tailwind animation keyframes via style tag ────────────────────── */}
      <style jsx>{``}</style>
    </section>
  );
}
