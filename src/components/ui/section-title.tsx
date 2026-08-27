import Image from 'next/image';

import type { SectionId } from '@/types/lp';

type SectionTitleProps = {
  id?: SectionId;
  en: string;
  jp: string;
};

const SectionTitle = ({ id, en, jp }: SectionTitleProps) => (
  <div
    id={id}
    className="lp-title-band relative left-1/2 h-[75px] w-[380.774px] -translate-x-1/2 scroll-mt-[24px] overflow-hidden"
  >
    <Image
      src="/assets/images/title-monokuro.png"
      alt=""
      width={117}
      height={75}
      className="absolute top-0 left-0 h-[75px] w-[117px]"
    />
    <p className="font-en absolute inset-x-0 top-[8px] text-center text-[15px] leading-[1.87] tracking-[0.6px] text-white">
      {en}
    </p>
    <h2 className="absolute inset-x-0 top-[33px] text-center text-[24px] leading-[1.45] font-bold tracking-[-0.24px] text-white">
      {jp}
    </h2>
  </div>
);

export default SectionTitle;
