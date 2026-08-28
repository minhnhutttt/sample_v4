import Image from 'next/image';

import {
  CHANNEL_URL,
  DOWNLOAD_SECTION_ID,
} from '@/config/constants';

const Cta = () => {
  return (
    <div
      id={DOWNLOAD_SECTION_ID}
      className="relative overflow-hidden bg-[#242424]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] overflow-hidden md:h-[1034px]">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/assets/images/cta-bg.webp)' }}
        />
        <div
          className="absolute inset-0 opacity-65 mix-blend-hard-light"
          style={{
            backgroundImage:
              'linear-gradient(117deg, rgba(247,134,41,0.4) 0%, rgba(247,82,41,0.8) 100%)',
          }}
        />
      </div>

      <div className="relative px-5 py-20 md:px-15 md:py-35">
        <div className="mx-auto w-full max-w-[1160px]">
          <h2 className="text-[40px] leading-[1.15] font-bold text-white md:text-[80px] xl:text-[130px]">
            <span className="block space-y-3 md:space-y-6">
              <span className="block">大好きな作家と、</span>
              <span className="block">もっと近くに。</span>
            </span>
            <span className="mt-14 block space-y-3 md:mt-30 md:space-y-6">
              <span className="block">あなたの新しい</span>
              <span className="block">「応援の形」を、</span>
              <span className="block">今すぐ始めよう。</span>
            </span>
          </h2>

          <div className="mt-20 flex justify-center md:mt-35">
            <div className="flex w-full max-w-[480px] flex-col items-center gap-8 rounded-xl bg-[#FFF8ED] p-6 shadow-[0_10px_15px_rgba(190,144,72,0.5)] md:gap-15 md:p-15 lg:flex-row">
              <div className="flex w-full flex-col items-center gap-6 md:w-[361px]">
                <div className="relative size-50 shrink-0">
                  <Image
                    src="/assets/images/cta-qr-download.png"
                    alt=""
                    width={186}
                    height={186}
                    className="size-50 rounded-xl"
                  />
                  <Image
                    src="/assets/images/cta-qr-channel.png"
                    alt="文庫社チャンネル用QRコード"
                    width={163}
                    height={163}
                    className="absolute top-1/2 left-1/2 size-[163px] -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <a
                  href={CHANNEL_URL}
                  className="flex w-full items-center justify-center gap-5 rounded-xl bg-[#F78629] px-4 py-6 shadow-[0_6px_6px_rgba(213,106,18,0.4)] transition-opacity hover:opacity-90 md:px-8"
                >
                  <span className="text-[16px] leading-[1.8] font-bold text-white md:text-[20px]">
                    文庫社のチャンネルを見る
                  </span>
                  <Image
                    src="/assets/icons/ic-arrow-right.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 shrink-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
