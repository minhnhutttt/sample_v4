import Image from 'next/image';

const StorySalesResult = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center md:mt-26">
      <div className="relative flex flex-col items-center">
        <div className="absolute top-[-60px] left-0 z-10 flex -rotate-12 animate-bounce items-center justify-center gap-[10px] rounded-full bg-[#f0f8ff] px-[24px] py-[10px] md:-top-24 md:left-0 md:px-[40px] md:py-[20px] lg:-left-26">
          <p className="text-[18px] leading-[1.58] font-bold tracking-[0.54px] text-[#434f8e] md:text-[28px] md:tracking-[0.84px]">
            試食出展による
          </p>
          <div
            aria-hidden
            className="absolute bottom-[-9px] left-1/2 h-[10px] w-[14px] -translate-x-1/2 bg-[#f0f8ff]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          />
        </div>
        <Image
          src="/assets/images/story/ribbon-title.png"
          alt="販売実績の例"
          width={743}
          height={154}
          className="w-full max-w-[440px] md:max-w-[743px]"
        />
      </div>

      {/* testimonial card */}
      <div className="relative mt-[32px] w-full md:@container-[size] md:mt-[80px] md:aspect-1120/350 md:max-w-[1120px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px] md:rounded-[2.5cqw]">
          <Image
            src="/assets/images/story/bg-testimonial.png"
            alt=""
            aria-hidden
            fill
            className="object-cover"
          />
        </div>

        <Image
          src="/assets/images/story/arrow-left.svg"
          alt=""
          aria-hidden
          width={79}
          height={269}
          className="absolute top-8 left-[calc(50%-160px)] w-[50px] md:top-[11.714cqh] md:left-[4.643cqw] md:w-[7.054cqw]"
        />
        <Image
          src="/assets/images/story/arrow-right.svg"
          alt=""
          aria-hidden
          width={79}
          height={269}
          className="absolute top-8 right-[calc(50%-160px)] w-[50px] md:top-[11.714cqh] md:right-[4.643cqw] md:w-[7.054cqw]"
        />

        <div className="relative z-10 flex flex-col items-center gap-[24px] px-[24px] py-[32px] md:block md:px-0 md:py-0">
          <div className="relative">
            <div className="relative z-20 aspect-33/31 w-[200px] shrink-0 overflow-hidden rounded-full bg-[#c9c9c9] shadow-[5px_5px_0px_0px_rgba(16,45,67,0.25)] md:absolute md:top-0 md:left-[12.411cqw] md:w-[29.464cqw]">
              <Image
                src="/assets/images/story/product-bottle.png"
                alt="ほぼ玉ねぎなドレッシング 商品写真"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-[16px] left-1/2 z-50 flex w-[220px] w-fit -translate-x-1/2 animate-bounce items-center justify-center gap-[10px] rounded-[10px] bg-[#dcf0ff] px-[14px] py-[4px] drop-shadow-[3px_3px_0px_rgba(55,129,184,0.21)] md:top-[-5.714cqh] md:left-[15cqw] md:translate-x-0 md:rounded-[1.429cqw] md:px-[2.143cqw] md:py-[1.714cqh]">
              <p className="text-[15px] leading-[2] font-bold tracking-[0.48px] text-[#434f8e] md:text-[1.607cqw] md:tracking-[0.064cqw]">
                ほぼ玉ねぎなドレッシング
              </p>
              <div
                aria-hidden
                className="absolute bottom-[-9px] left-1/2 h-[10px] w-[14px] -translate-x-1/2 bg-[#dcf0ff]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              />
            </div>

            <div className="absolute right-[-55px] bottom-[-16px] z-40 h-[110px] w-[110px] md:top-[34.286cqh] md:left-[35.714cqw] md:h-[58.286cqh] md:w-[18.214cqw]">
              <Image
                src="/assets/images/story/badge-recognition.png"
                alt="認知度UP"
                fill
              />
            </div>
          </div>

          <div className="flex items-end gap-[8px] md:absolute md:top-[51.429cqh] md:left-[49.107cqw] md:gap-[1.429cqw]">
            <Image
              src="/assets/images/story/number-670.png"
              alt="670本以上売上"
              width={836}
              height={326}
              className="md:w-[37.321cqw]"
            />
          </div>

          <div className="relative w-full max-w-[420px] rounded-[16px] bg-gradient-to-r from-[#43508f] to-[#3cb8ea] px-[20px] py-[12px] text-center md:absolute md:top-[11.714cqh] md:left-[28.661cqw] md:w-[57.143cqw] md:max-w-none md:rounded-none md:bg-none md:px-0 md:text-right">
            <Image
              src="/assets/images/story/obi-flag.svg"
              alt=""
              aria-hidden
              width={540}
              height={122}
              className="absolute inset-y-0 right-0 hidden h-full w-[48.214cqw] md:block"
            />
            <p className="relative text-[20px] font-bold tracking-[0.54px] text-white [text-shadow:0px_0px_10px_rgba(0,98,148,0.4)] md:pr-[5cqw] md:pl-[3.571cqw] md:text-[3.571cqw] md:tracking-[0.071cqw]">
              『ヒルナンデス！』
              <span className="text-[14px] md:text-[2.321cqw] md:tracking-[0.070cqw]">
                で
              </span>
            </p>
            <p className="relative text-[15px] leading-[1.58] font-medium tracking-[0.42px] text-white [text-shadow:0px_0px_10px_rgba(0,98,148,0.4)] md:pr-[5cqw] md:pl-[3.571cqw] md:text-[2.321cqw] md:tracking-[0.070cqw]">
              出展商品が取り上げられた結果…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySalesResult;
