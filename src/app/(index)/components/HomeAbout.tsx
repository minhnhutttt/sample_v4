import CardStackCarousel from '@/components/animations/Cardstackcarousel';
import SplitTextReveal from '@/components/animations/Splittextreveal';
import Button from '@/components/button';

const HomeAbout = () => {
  const MY_CARDS = [
    { id: 'c0', image: '/assets/images/thumbnail.jpg', name: 'Altra' },
    { id: 'c1', image: '/assets/images/thumbnail-02.jpg', name: 'arrae' },
    { id: 'c2', image: '/assets/images/thumbnail-03.jpg', name: 'OREO' },
    { id: 'c3', image: '/assets/images/thumbnail-04.jpg', name: 'Coca-Cola' },
  ];
  return (
    <div className="w-full bg-[#FAF2E8] pb-[9rem] md:pb-[15rem]">
      <div className="site-max">
        <h2 className="h7">About</h2>
        <div className="relative mt-[2.5rem] md:mt-[4.5rem]">
          <div className="pt-[24.5%]"></div>
          <div className="h1 pointer-events-none absolute inset-0 z-2 -mt-[.2rem] flex flex-col font-black text-[#242424] uppercase max-md:!text-[3.3rem] md:-mt-[1.3rem]">
            <div className="">
              <SplitTextReveal
                splitType="chars"
                triggerStart="top 80%"
                toggleActions="play none none none"
              >
                MAXIMIZE IT
              </SplitTextReveal>
            </div>
            <div className="ml-auto">
              <SplitTextReveal
                splitType="chars"
                triggerStart="top 80%"
                toggleActions="play none none none"
              >
                MEASURE IT
              </SplitTextReveal>
            </div>
            <div className="">
              <SplitTextReveal
                splitType="chars"
                triggerStart="top 80%"
                toggleActions="play none none none"
              >
                AND REPEAT.
              </SplitTextReveal>
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full">
            {/* <Rive src="/assets/images/max-measure-repeat.riv" /> */}
            <img
              src="/assets/images/max-measure-repeat.png"
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="carousel-cards relative mt-[3rem] overflow-hidden md:mt-[6rem]">
        <div className="site-max relative flex flex-col gap-y-[3rem] pb-[10rem] md:flex-row md:pb-0">
          <div className="relative flex flex-1 flex-col">
            <div className="relative flex w-full flex-col items-start md:max-w-[70rem]">
              <div className="text-[2rem] leading-snug text-[#242424]">
                <p>
                  New Engen is recognized as an industry-leading digital
                  marketing agency renowned for its expertise across the
                  customer journey and in driving business growth. Our clients
                  and partners view us as the best agency to work with,
                  frequently recommending us to their network. We have a growing
                  roster of enterprise Agency of Record (AOR) engagements.
                </p>
              </div>
            </div>
            <div className="mt-[2rem] flex gap-x-[2rem]">
              <Button href="#" text="Company" />
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <CardStackCarousel cards={MY_CARDS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
