import Image from 'next/image';

import Parallax from '@/components/parallax';

const About = () => {
  return (
    <div className="relative overflow-hidden px-5 py-20 md:px-15 md:pt-28 md:pb-30">
      <Parallax
        speed={0.5}
        respectReducedMotion={false}
        className="absolute inset-0 opacity-70 mix-blend-overlay"
      >
        <Image
          src="/assets/images/about-bg.webp"
          fill
          alt=""
          className="w-full object-cover object-center"
        />
      </Parallax>
      <div className="relative w-full max-w-[1160px]">
        <h2 className="u-text-gadient text-[55px] leading-[1.15] font-bold md:text-[100px] lg:text-[130px]">
          私達について
        </h2>
        <div className="mt-14 ml-auto w-full max-w-[580px] md:mt-26">
          <p className="text-[24px] font-bold tracking-wide text-[#F78629] md:text-[36px]">
            私たち文庫社は、数え切れないほどの物語を読者の皆さんに届けてきました。
          </p>
          <p className="mt-9 text-[16px] leading-[1.8] font-medium md:mt-13 md:text-[20px]">
            でも、ページ数でカットしたエピソードや、日の目を見なかったネームも、実はたくさんあります。
            <br />
            <br />
            KIVO
            TALKは、その「創作のすべて」を直接届けられる場所。作家とファンがもっと近くで繋がれる未来のために、参加を決めました。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
