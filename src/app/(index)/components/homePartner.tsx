'use client'

import Link from 'next/link';

import Title from '@/components/common/title';
import { PartnerData } from '@/data/partners';

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

const TickerRow = ({
  partners,
  reverse = false,
}: {
  partners: { logo: string; url: string }[];
  reverse?: boolean;
}) => (
  <div className={`logos-ticker ${reverse ? 'logos-ticker--right' : ''}`}>
    <div className="logos-ticker-fade" aria-hidden="true" />
    {[0, 1].map((i) => (
      <div className="logos-ticker-container" key={i}>
        {partners.map((partner, index) => (
          <a
            href={partner.url}
            key={index}
            className="mx-3 flex w-[110px] justify-center md:mx-5 md:w-[160px]"
          >
            <img src={partner.logo} alt={`Partner ${index + 1}`} className="" />
          </a>
        ))}
      </div>
    ))}
  </div>
);

const HomePartner = () => {
  const allPartners = PartnerData.flatMap((item) => item.partners);
  const chunks = chunkArray(allPartners, Math.ceil(allPartners.length / 4));

  return (
    <div className="px-5 pt-20 pb-[160px] md:pt-27 md:pb-[280px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <Title title="PARTNER" sub="パートナー" />
        <div className="my-10 space-y-12 md:my-25 md:space-y-20">
          {chunks.map((chunk, i) => (
            <TickerRow key={i} partners={chunk} reverse={i % 2 !== 0} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/partners"
            className="flex h-14 w-[260px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:w-[300px] md:text-[20px]"
          >
            パートナー企業一覧
            <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
              <img
                src="/assets/images/btn-arrow.svg"
                className="max-md:w-4"
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
