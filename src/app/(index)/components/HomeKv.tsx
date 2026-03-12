import ButtonCta from '@/components/buttonCta';

const HomeKv = () => {
  return (
    <div className="relative overflow-hidden bg-[url(/assets/images/fv.png)] bg-cover bg-center px-5 md:h-[785px]">
      <div className="@container relative mx-auto w-full max-w-[1020px] max-md:py-25 md:pt-[187px]">
        <div className="relative">
          <div className="relative z-10 w-full max-w-[586px] text-center max-md:mx-auto">
            <p className="font-inter text-[20px] font-medium md:text-[24px]">
              広告は、AIが出す時代。
            </p>
            <h1 className="font-inter mt-2 text-[50px] font-bold md:mt-4 md:text-[70px]">
              <span className="relative inline-flex justify-center before:absolute before:top-1 before:size-2 before:rounded-full before:bg-[#FF4747] md:before:top-2 md:before:size-2.5">
                A
              </span>
              <span className="relative inline-flex justify-center before:absolute before:top-1 before:size-2 before:rounded-full before:bg-[#FF4747] md:before:top-2 md:before:size-2.5">
                I
              </span>
              広告出稿<span className="text-[32px] md:text-[48px]">なら</span>
            </h1>
            <p className="text-[15px] leading-none font-bold md:text-[18px]">
              パ　　ル
            </p>
            <p className="text-[90px] leading-none font-black md:text-[128px]">
              PAL
            </p>
            <div className="mt-12 md:mt-15">
              <ButtonCta />
            </div>
          </div>

          <div className="-top-11 -right-10 max-md:mt-6 max-md:flex max-md:items-center max-md:justify-center md:absolute">
            <img src="/assets/images/fv-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKv;
