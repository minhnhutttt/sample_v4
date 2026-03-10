'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';
import Ani from '@/components/ani';

const Mission = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="px-5 py-[300px]">
      <div className="mx-auto flex w-full max-w-[1850px]">
        <div className="flex w-[12.5%] items-start justify-end px-[30px] pt-4">
          <img src="/assets/images/ico.png" alt="" className="w-2.5" />
        </div>
        <div className="w-[78%] pb-[90px]">
          <Ani>
            <p className="text-[96px] leading-none">Mission</p>
          </Ani>
          <Ani>
            <p className="text-[26px]">OPExPARKのミッション</p>
          </Ani>
          <h3 className="py-20 text-[55px]">
            手術室をデジタル化し、
            <br />
            どこでも最善の手術を
            <br />
            享受できる世界を創る
          </h3>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1850px]">
        <div className="h-[500px] bg-[linear-gradient(0deg,_#fbfcfc_0%,_#f0f3f4_100%)]">
          <div className="p-earthFigure">
            <div className="p-earthFigure__earth">
              <div
                className="p-earth is-x2 is-inview"
                data-scroll=""
                data-scroll-speed="-12"
              >
                <div className="p-earth__center"></div>
                <div className="p-earth__center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
