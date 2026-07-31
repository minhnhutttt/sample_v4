import type { ReactNode } from 'react';

import Image from 'next/image';

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <div>
    <div className="relative w-full pb-[24px] text-center leading-[1.35] italic md:pb-[16px]">
      {children}
      <div className="absolute bottom-0">
        <Image
          src="/assets/images/feature/deco-left.png"
          alt=""
          width={192}
          height={192}
          className="w-[96px]"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/assets/images/feature/deco-right.png"
          alt=""
          width={192}
          height={192}
          className="w-[96px]"
        />
      </div>
    </div>
    <span className="mb-2.5 block h-px w-full bg-[#434F8E]"></span>
    <span className="block h-0.5 w-full bg-[#434F8E]"></span>
  </div>
);

export default SectionTitle;
