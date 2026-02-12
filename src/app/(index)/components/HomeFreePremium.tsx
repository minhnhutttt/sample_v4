'use client';

import Article from '@/components/common/Article';
import useScrollAnimations from '@/hooks/useScrollAnimations';

const HomeFreePremium = () => {
  const ref = useScrollAnimations();

  return (
    <div ref={ref} className="my-16 px-2 text-center md:my-[170px]">
      <h3 className="fade-up text-[35px] font-black md:text-[70px]">
        FreeとPremium <br />
        2つのチャンネル
      </h3>
      <p className="fade-up mb-8 text-[16px] font-bold md:mb-[150px] md:text-[25px]">
        発信のしかたに合わせて選べる、2つのチャンネル
      </p>
      <div className="mx-auto grid w-full max-w-[1440px] gap-2 md:grid-cols-2">
        <Article
          image="/assets/images/dummy.png"
          title="Free Channel"
          text={
            <>
              多くの人に向けて、気軽に届けたい情報のためのチャンネル。
              <br />
              無料で読める内容も、必要に応じて価値を込めた有料コンテンツも、同じ場所で届けられます。
            </>
          }
        />
        <Article
          image="/assets/images/dummy.png"
          title="Premium Channel"
          text={
            <>
              月額登録した人だけが参加できる、クローズドなチャンネル。
              <br />
              価値に納得した人と、静かに、継続的につながれます。
            </>
          }
        />
      </div>
    </div>
  );
};

export default HomeFreePremium;
