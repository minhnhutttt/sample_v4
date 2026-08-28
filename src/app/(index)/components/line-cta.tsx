import Image from 'next/image';

import { EXTERNAL_LINKS } from '@/config/constants';

const LineCta = () => (
  <section className="flex flex-col items-center gap-[5px] bg-white pt-[19px] pb-[81px]">
    <p className="text-body w-[244px] text-[15px] leading-[1.4] font-semibold tracking-[0.6px]">
      公式LINEにて24時間
      <br />
      予約前のご相談ができます
    </p>

    <a
      href={EXTERNAL_LINKS.line}
      className="bg-brand-line flex min-h-[54px] w-[230px] items-center gap-[13px] rounded-[5px] pr-[14px] pl-[14px] transition-transform hover:scale-[1.02]"
    >
      <Image
        src="/assets/images/icon-line.svg"
        alt=""
        width={29}
        height={27}
        className="h-[27px] w-[29px] shrink-0"
      />
      <span className="text-[19px] leading-[1.5] font-bold text-white">
        LINEで相談する
      </span>
    </a>
  </section>
);

export default LineCta;
