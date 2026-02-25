import { ReactNode } from 'react';

import type { Metadata } from 'next';
import Image from 'next/image';

import PageHead from '@/components/pageHead';
import { OG, TWITTER } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Advantage',
  openGraph: {
    ...OG,
    title: 'advantage',
    url: '/advantage',
  },
  twitter: {
    ...TWITTER,
    title: 'advantage',
  },
  alternates: {
    canonical: '/advantage',
  },
};

const AdvantageItem = ({
  number,
  text,
  image,
  children,
  className,
}: {
  number: string;
  text: string;
  image: string;
  children: ReactNode;
  className: string;
}) => (
  <div className="flex justify-between gap-5 leading-[1.75] max-md:flex-col max-md:items-center md:even:flex-row-reverse">
    <div className="fade-up px-5 md:px-10">
      <div className="flex items-center gap-7 md:gap-10">
        <div className="">
          <p className="text-[22px] font-medium text-white/40 md:text-[28px]">
            強み
          </p>
          <p className="text-[14px] text-white/40 md:text-[16px]">advantage</p>
        </div>
        <p className="font-dm text-[50px] leading-none text-white/30 md:text-[90px]">
          {number}
        </p>
      </div>
      <div className="pt-6 md:pt-10.5 lg:pl-[105px]">
        <div className="w-full max-w-[420px]">
          <p className="u-text-gradient text-[22px] font-medium md:text-[28px]">
            {text}
          </p>
          <p className="mt-6 text-[14px] md:mt-11 md:text-[16px]">{children}</p>
        </div>
      </div>
    </div>
    <div className="fade-up relative mt-5 md:mt-[130px]">
      <div
        className={`absolute size-[240px] bg-white/10 md:size-[400px] ${className}`}
      ></div>
      <Image
        src={image}
        alt={text}
        width={613}
        height={600}
        className="relative"
      />
    </div>
  </div>
);

const AdvantagePage = () => {
  return (
    <div>
      <PageHead
        title="強み"
        en="ADVANTAGE"
        image="/assets/images/advantage-img.png"
      />
      <div className="relative md:h-[720px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[#03234E]/65 mix-blend-hard-light"></div>
          <Image
            src="/assets/images/advantage-bg.png"
            alt="logo"
            width={1280}
            height={920}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative inset-0 z-20 px-5 leading-[1.75] max-md:py-20 md:absolute md:pt-25">
          <div className="mx-auto w-full max-w-[1200px]">
            <p className="u-text-gradient text-[22px] font-medium md:text-[28px]">
              地域密着の施工力
            </p>
            <div className="mt-20 ml-auto max-w-[500px] md:mt-50">
              <p className="text-[16px] font-medium md:text-[20px]">
                独立した施工体制と高い技術力
              </p>
              <p className="mt-5 text-[13px] font-medium md:mt-8 md:text-[16px]">
                当社は愛媛県新居浜市を拠点に、長年にわたって地域の建設工事を支えてきました。冷暖房・空調設備、給排水設備、ガス管配管、ダクト工事から土木工事まで、幅広い現場で培った技術と経験をもとに、地域の企業・施設のあらゆるニーズにお応えしています。工場設備の改修工事から公共施設のメンテナンスまで、地域密着型の総合建設会社として信頼をいただき、高い施工力とスピード感を武器に地域に根ざした仕事をしています。「現場第一」の姿勢で、お客様の課題解決に全力で取り組みます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-32 w-full max-w-[1280px] space-y-30 overflow-hidden md:my-[260px] md:space-y-59">
        <AdvantageItem
          number="01"
          text="自社施工体制"
          image="/assets/images/advantage-img-01.png"
          className="left-14 max-md:-top-25 md:bottom-[60px] md:left-[-180px]"
        >
          熟練の職人が在籍し、冷暖房設備工事や配管工事において一貫した工程管理を実現できます。
          <br />
          <br />
          下請けを挟まずに直接施工を行うため、お客様のご要望を現場にダイレクトに反映でき、施工品質の管理も徹底しています。
          <br />
          <br />
          自社完結だからこそ、高品質かつコストパフォーマンスに優れた工事を実現し、工期の短縮や急なスケジュール変更にも柔軟に対応可能です。
          <br />
          <br />
          窓口が一本化されているため、お客様とのコミュニケーションもスムーズで、安心してお任せいただけます。
        </AdvantageItem>
        <AdvantageItem
          number="02"
          text="高い技術力"
          image="/assets/images/advantage-img-02.png"
          className="max-md:-top-20 max-md:left-32 md:right-[-260px] md:bottom-[55px]"
        >
          職人の技術向上に力を入れており、冷凍冷蔵設備、空調設備、給排水設備、ガス管配管、ダクト工事など、多岐にわたる専門工事に対応できる総合力を持っています。
          <br />
          <br />
          常に最新の工法や設備技術を取り入れ、お客様に最良の施工を提供できるよう努めています。
          <br />
          <br />
          複雑な工場設備の改修工事や、特殊な環境下での施工にも対応可能で、長年の経験で培った技術力と応用力で、どんな現場でも確実な施工を実現します。
          <br />
          <br />
          新人からベテランまで、全員が技術研鑽に励み、高品質な施工を追求しています。
        </AdvantageItem>
        <AdvantageItem
          number="03"
          text="ニーズに合わせた技術営業"
          image="/assets/images/advantage-img-03.png"
          className="max-md:-top-32 max-md:right-0 md:bottom-[85px] md:left-[-180px]"
        >
          主に営業を担う代表や技術責任者が、お客様のニーズを丁寧にヒアリングし、最適な施工プランをご提案します。
          <br />
          <br />
          現場を熟知した技術者が営業も兼ねることで、「実現可能性」「コスト」「工期」を踏まえた的確な判断ができ、お客様の「こうしたい」を確実に形にします。
          <br />
          <br />
          設備の選定から施工方法まで、専門的な視点でアドバイスを行い、お客様が本当に必要としている解決策を提案。スムーズな工事進行と、期待を超える仕上がりを実現します。
          <br />
          <br />
          小さな疑問や不安も、その場で即座に解消できるのが私たちの強みです。
        </AdvantageItem>
      </div>
    </div>
  );
};

export default AdvantagePage;
