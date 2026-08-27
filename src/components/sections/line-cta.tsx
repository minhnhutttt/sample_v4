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
      className="bg-brand-line relative block h-[54px] w-[230px] overflow-hidden rounded-[5px] transition-transform hover:scale-[1.02]"
    >
      <Image
        src="/assets/svg/icon-line.svg"
        alt=""
        width={29}
        height={27}
        className="absolute top-[13.37px] left-[14px] h-[27.266px] w-[28.615px]"
      />
      <span className="absolute top-[13px] left-[55.19px] text-[18.862px] leading-[1.5] font-bold whitespace-nowrap text-white">
        LINEで相談する
      </span>
    </a>
  </section>
);

export default LineCta;
