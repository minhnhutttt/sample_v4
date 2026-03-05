'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';
import SplitTextReveal from '@/components/animations/Splittextreveal';

const HomeClients = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#FAF2E8] pt-[9rem] pb-[9rem] md:pt-[15rem] md:pb-[15rem]"
    >
      <div className="site-max flex flex-col items-center md:items-start">
        <h2 className="h7">Clients</h2>
        <div className="relative mt-[4rem] flex flex-col text-center md:text-left">
          <div className="flex flex-col items-center gap-x-[3rem] md:flex-row">
            <SplitTextReveal
              as="h1"
              splitType="chars"
              triggerStart="top 80%"
              toggleActions="play none none reset"
              className="h1 js-line leading-none font-black text-[#242424] uppercase"
            >
              Our
            </SplitTextReveal>
            <div className="fade-up stack relative my-[5rem] md:my-0">
              <div className="h3 bg-green-electric radius-global relative mt-[2rem] flex h-[4rem] items-center overflow-hidden font-bold md:h-[11.5rem]">
                <div className="js-title px-[1.2rem] text-[#242424] max-md:w-full max-md:text-center md:px-[5rem]">
                  Home
                </div>
              </div>
            </div>
          </div>
          <SplitTextReveal
            as="h1"
            splitType="chars"
            triggerStart="top 80%"
            toggleActions="play none none reset"
            className="h1 js-line leading-none font-black text-[#242424] uppercase"
          >
            Clients shine
          </SplitTextReveal>
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
