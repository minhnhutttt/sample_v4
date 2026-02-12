'use client';

import Article from '@/components/common/Article';
import useScrollAnimations from '@/hooks/useScrollAnimations';

const SurprisinglySimple = () => {
  const ref = useScrollAnimations();

  return (
    <div ref={ref} className="my-16 px-2 text-center md:my-[170px]">
      <h3 className="fade-up text-[35px] font-black md:text-[70px]">
        始めるのは、
        <br className="md:hidden" />
        驚くほどシンプルです。
      </h3>
      <p className="fade-up mb-8 text-[16px] font-bold md:mb-[150px] md:text-[25px]">
        必要なのは、たった3つだけ。
      </p>
      <div className="mx-auto grid w-full max-w-[1440px] gap-2 md:grid-cols-3">
        <Article
          sm
          image="/assets/images/dummy.png"
          title="1.アプリをダウンロード"
          text={
            <>
              まずは、触ってみてください。
              <br />
              無料のまま、KIVOの感覚を確かめられます。
            </>
          }
        />
        <Article
          sm
          image="/assets/images/dummy.png"
          title="2.Channelを作成する"
          text={
            <>
              名前をつけて、形にするだけ。
              <br />
              まずは、Free Channelから始められます。
            </>
          }
        />
        <Article
          sm
          image="/assets/images/dummy.png"
          title="3.コンテンツを投稿する"
          text={
            <>
              特別なことは、何もいりません。
              <br />
              いつも通りの発信が、価値として届きます。
            </>
          }
        />
      </div>
    </div>
  );
};

export default SurprisinglySimple;
