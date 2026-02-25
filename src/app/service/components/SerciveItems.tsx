'use client';

import { ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

const ServiceItem = ({
  id,
  number,
  text,
  image,
  children,
}: {
  id: string;
  number: string;
  text: string;
  image: string;
  children: ReactNode;
}) => (
  <div
    id={id}
    className="service-section group relative flex justify-between gap-5 pr-[68px] pl-16 leading-[1.75] max-lg:flex-col max-md:items-center md:pl-[252px] lg:even:flex-row-reverse"
  >
    <div className="absolute h-[440px] bg-white/10 group-odd:top-13 group-odd:-left-7 group-odd:w-[740px] group-even:top-15 group-even:right-6 group-even:w-[500px]"></div>
    <div className="fade-up relative">
      <Image
        src={image}
        alt={text}
        width={400}
        height={400}
        className="relative"
      />
    </div>
    <div className="fade-up lg:pt-44">
      <div className="flex items-center gap-5 md:gap-8">
        <div>
          <p className="text-[22px] font-medium text-white/40 md:text-[28px]">
            サービス
          </p>
          <p className="text-[14px] text-white/40 md:text-[16px]">service</p>
        </div>
        <p className="font-dm text-[44px] leading-none text-white/30 md:text-[76px]">
          {number}
        </p>
      </div>
      <div className="pt-6 md:pt-12.5">
        <div className="w-full max-w-[440px]">
          <p className="u-text-gradient text-[22px] font-medium md:text-[28px]">
            {text}
          </p>
          <p className="mt-6 text-[14px] md:mt-11 md:text-[16px]">{children}</p>
        </div>
      </div>
    </div>
  </div>
);

const SerciveItems = () => {
  const [active, setActive] = useState('service-01');

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActive(id);
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll('.service-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="sticky top-1/2 left-0 z-40 w-9 -translate-y-1/2 divide-y divide-white/50 pl-3 text-[13px] leading-[1.75] md:w-[132px] md:text-[14px]">
        {[
          { id: 'service-01', number: '01', label: '冷暖房設備工事' },
          { id: 'service-02', number: '02', label: '冷凍冷蔵設備工事' },
          { id: 'service-03', number: '03', label: '空調設備工事' },
          { id: 'service-04', number: '04', label: '給水給湯設備工事' },
          { id: 'service-05', number: '05', label: 'ガス配管工事' },
          { id: 'service-06', number: '06', label: 'ダクト工事' },
          { id: 'service-07', number: '07', label: '浄化槽工事' },
        ].map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer py-4 transition-all ${
              active === item.id ? 'font-bold text-white' : 'text-white/50'
            }`}
          >
            <p>{item.number}</p>
            <p className="max-md:hidden">{item.label}</p>
          </li>
        ))}
      </div>

      <div className="mx-auto -mt-[420px] mb-32 w-full max-w-[1280px] space-y-30 overflow-hidden md:mb-[155px] md:space-y-47">
        <ServiceItem
          id="service-01"
          number="01"
          text="冷暖房設備工事"
          image="/assets/images/service-img-01.png"
        >
          冷暖房設備工事とはエアコンを取り付ける施工事のことです。
          <br />
          <br />
          室内機と室外機を設置し、配管工事、配線工事を行うことがお仕事になります。
          <br />
          <br />
          昨今力、低価格競合他店のエアコンも増えてきている中、新しい機能に取り替える工事も少なくありません。
        </ServiceItem>
        <ServiceItem
          id="service-02"
          number="02"
          text="冷凍冷蔵設備工事"
          image="/assets/images/service-img-02.png"
        >
          冷凍冷蔵設備工事とは冷蔵庫やショーケースなどを設置する施工事のことです。
          <br />
          <br />
          飲食店をはじめとして、ケーキショップなど主もの販売する小売店でも必ずないものと言っていいしよう。
          <br />
          <br />
          冷凍冷蔵設備工事の工事や注意点などについてまとめました。
        </ServiceItem>
        <ServiceItem
          id="service-03"
          number="03"
          text="空調設備工事"
          image="/assets/images/service-img-03.png"
        >
          空調設備とは住してくは空気調和設備と言い、温度、湿度、空気清浄などの室内環境を調整するための設備です。
          <br />
          <br />
          そのような空調設備を取り付ける施工事を空調設備工事と言います。
          <br />
          <br />
          近年、マンションの高層化、気密化が進んでいるため、空調設備工事の需要も高まっています。
        </ServiceItem>
        <ServiceItem
          id="service-04"
          number="04"
          text="給水給湯設備工事"
          image="/assets/images/service-img-04.png"
        >
          給水設備とは生活や事業に必要な水量を供給する設備のことです。
          <br />
          <br />
          一戸、給湯設備は給湯、洗面台、キッチンなどにお湯を供給する設備です。これらを取り付ける施工事のことを給水給湯設備工事と言います。
          <br />
          <br />
          一般家庭でも店舗でもなくてはならない仕事です。
        </ServiceItem>
        <ServiceItem
          id="service-05"
          number="05"
          text="ガス配管工事"
          image="/assets/images/service-img-05.png"
        >
          ガス管配管工事とは、ガス管を配置する施工事のことです。
          <br />
          <br />
          新築の場合はもちろん、増改築に伴ってガス栓を増やす際にも行われます。
          <br />
          <br />
          ガスにはプロパンガス、都市ガスがありますが、それぞれの工事内容など異なるのでご注意が必要です。
        </ServiceItem>
        <ServiceItem
          id="service-06"
          number="06"
          text="ダクト工事"
          image="/assets/images/service-img-06.png"
        >
          ダクトとは送風を通過管のことです。
          <br />
          <br />
          おもに空調、換気、排煙などを目的として天井裏などに設置されます。このダクトを取り付ける施工事のことをダクト工事と言います。
          <br />
          <br />
          ダクトにはさまざまな種類があり、目的に応じて的確に選択されなければなりません。
        </ServiceItem>
        <ServiceItem
          id="service-07"
          number="07"
          text="浄化槽工事"
          image="/assets/images/service-img-07.png"
        >
          浄化槽とは生活の中で発生する汚れた水を、きれいにして川などに放す水質管のことです。
          <br />
          <br />
          そのような浄化槽を設置する施工事のことを浄化槽工事と言います。
          <br />
          <br />
          現在でも下水道が通っていないエリアでは浄化槽を取り付けることが法律で定められています。
        </ServiceItem>
      </div>
    </>
  );
};

export default SerciveItems;
