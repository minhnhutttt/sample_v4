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
    className="lp-title-band relative left-1/2 flex min-h-[75px] w-[381px] -translate-x-1/2 scroll-mt-[24px] flex-col items-center justify-center py-[6px]"
  >
    <Image
      src="/assets/images/title-monokuro.png"
      alt=""
      width={117}
      height={75}
      className="absolute top-0 left-0 h-[75px] w-[117px]"
    />
    <p className="font-en relative w-full text-center text-[15px] leading-[1.87] tracking-[0.6px] text-white">
      {en}
    </p>
    <h2 className="relative w-full text-center text-[24px] leading-[1.45] font-bold tracking-[-0.24px] text-white">
      {jp}
    </h2>
  </div>
);

export default SectionTitle;
