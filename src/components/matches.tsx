import Image from 'next/image';
import Link from 'next/link';

import { getMatches } from '@/services/microcms';

const Matches = async () => {
  const matches = await getMatches();

  const leoblacksOpponentLogoUrl =
    typeof matches.leo_blacks?.opponent_logo === 'string'
      ? matches.leo_blacks.opponent_logo
      : matches.leo_blacks?.opponent_logo?.url || '/assets/images/logo2.png';

  const leoninersOpponentLogoUrl =
    typeof matches.leo_niners?.opponent_logo === 'string'
      ? matches.leo_niners.opponent_logo
      : matches.leo_niners?.opponent_logo?.url || '/assets/images/logo2.png';

  return (
    <div className="mx-auto grid w-full max-w-282.5 gap-[24px] lg:grid-cols-2">
      {/* Leo Blacks */}
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-2 pt-7 text-[16px] font-semibold">
          <Image
            src="/assets/images/leo-logo.png"
            alt="logo"
            width={92}
            height={64}
            className="h-11 w-auto"
          />
          <span>レオブラックス</span>
        </div>
        <div className="mt-5 flex-1 border border-black bg-[url(/assets/images/bg-logo1.png)] bg-bottom-left bg-no-repeat p-2.5">
          <p className="bg-[#636769]/50 p-2 text-[14px] text-white md:text-[16px]">
            {matches.leo_blacks?.title || '\u00A0'}
          </p>
          <p className="mt-0.5 text-[16px] font-semibold">
            {(matches.leo_blacks?.show_place && matches.leo_blacks?.place) ||
              '\u00A0'}
          </p>
          <div>
            <div className="flex justify-center gap-5">
              <div className="flex w-1/2 flex-col items-center">
                <div>
                  <span className="text-[40px] font-semibold md:text-[55px]">
                    {matches.leo_blacks?.match_date || '\u00A0'}
                  </span>
                  {matches.leo_blacks?.match_day && (
                    <span className="text-[24px] font-bold md:text-[32px]">
                      （{matches.leo_blacks.match_day}）
                    </span>
                  )}
                </div>
                <p className="text-[28px] text-[#FF0000] md:text-[36px]">
                  {matches.leo_blacks?.match_time
                    ? `（${matches.leo_blacks.match_time}）`
                    : '\u00A0'}
                </p>
                <div className="flex flex-col items-center justify-center gap-2.5 py-4">
                  <Link
                    href={matches.leo_blacks?.match_url ?? '#'}
                    className="flex h-[38px] w-[148px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[38px] md:w-[148px] md:text-[16px]"
                  >
                    試合情報
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-white">
                      <img
                        src="/assets/images/btn-arrow.svg"
                        className="w-[12px]"
                        alt=""
                      />
                    </span>
                  </Link>
                  <Link
                    href={matches.leo_blacks?.result_url ?? '#'}
                    className="flex h-[38px] w-[148px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[38px] md:w-[148px] md:text-[16px]"
                  >
                    試合結果
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-white">
                      <img
                        src="/assets/images/btn-arrow.svg"
                        className="w-[12px]"
                        alt=""
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex w-1/2 flex-col">
                <div className="flex-1">
                  <div className="line-clamp-4 text-[14px] font-semibold md:text-[16px]">
                    {matches.leo_blacks?.area || '--'}
                  </div>
                  <div className="flex items-center gap-5 py-4">
                    {matches.leo_blacks?.show_opponent && (
                      <>
                        <span className="text-[20px] font-medium md:text-[24px]">
                          VS
                        </span>
                        <div>
                          <Image
                            src={leoblacksOpponentLogoUrl}
                            alt={matches.leo_blacks?.opponent_name || ''}
                            width={75}
                            height={75}
                          />
                          <p className="text-center text-[14px] font-bold md:text-[16px]">
                            {matches.leo_blacks?.opponent_name || '\u00A0'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="flex h-11 w-[214px] overflow-hidden rounded-full border border-black">
                    <p className="flex w-[52px] items-center justify-center bg-black">
                      <img src="/assets/images/ic-basketball.svg" alt="" />
                    </p>
                    <p className="flex flex-1 items-center justify-center truncate text-[14px] font-semibold md:text-[18px]">
                      {matches.leo_blacks?.notification || '--'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leo Niners */}
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-2 pt-7 text-[16px] font-semibold">
          <Image
            src="/assets/images/logo2.png"
            alt="logo"
            width={92}
            height={64}
            className="h-11 w-auto"
          />
          <span>レオナイナーズ</span>
        </div>
        <div className="mt-5 flex-1 border border-black bg-[url(/assets/images/bg-logo2.png)] bg-bottom-left bg-no-repeat p-2.5">
          <p className="bg-[#636769]/50 p-2 text-[14px] text-white md:text-[16px]">
            {matches.leo_niners?.title || '\u00A0'}
          </p>

          <p className="mt-0.5 text-[16px] font-semibold">
            {(matches.leo_niners?.show_place && matches.leo_niners?.place) ||
              '\u00A0'}
          </p>

          <div>
            <div className="flex justify-center gap-5">
              <div className="w-1/2">
                <div>
                  <span className="text-[40px] font-semibold md:text-[55px]">
                    {matches.leo_niners?.match_date || '\u00A0'}
                  </span>
                  {matches.leo_niners?.match_day && (
                    <span className="text-[24px] font-bold md:text-[32px]">
                      （{matches.leo_niners.match_day}）
                    </span>
                  )}
                </div>
                <p className="text-[28px] text-[#FF0000] md:text-[36px]">
                  {matches.leo_niners?.match_time
                    ? `（${matches.leo_niners.match_time}）`
                    : '\u00A0'}
                </p>
                <div className="flex flex-col items-center justify-center gap-2.5 py-4">
                  <Link
                    href={matches.leo_niners?.match_url ?? '#'}
                    className="flex h-[38px] w-[148px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[38px] md:w-[148px] md:text-[16px]"
                  >
                    試合情報
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-white">
                      <img
                        src="/assets/images/btn-arrow.svg"
                        className="w-[12px]"
                        alt=""
                      />
                    </span>
                  </Link>
                  <Link
                    href={matches.leo_niners?.result_url ?? '#'}
                    className="flex h-[38px] w-[148px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[38px] md:w-[148px] md:text-[16px]"
                  >
                    試合結果
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-white">
                      <img
                        src="/assets/images/btn-arrow.svg"
                        className="w-[12px]"
                        alt=""
                      />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex w-1/2 flex-col">
                <div className="flex-1">
                  <div className="line-clamp-4 text-[14px] font-semibold md:text-[16px]">
                    {matches.leo_niners?.area || '--'}
                  </div>
                  <div className="flex items-center gap-5 py-4">
                    {matches.leo_niners?.show_opponent && (
                      <>
                        <span className="text-[20px] font-medium md:text-[24px]">
                          VS
                        </span>
                        <div>
                          <Image
                            src={leoninersOpponentLogoUrl}
                            alt={matches.leo_niners?.opponent_name || ''}
                            width={75}
                            height={75}
                          />
                          <p className="text-center text-[14px] font-bold md:text-[16px]">
                            {matches.leo_niners?.opponent_name || '\u00A0'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="flex h-11 w-[214px] overflow-hidden rounded-full border border-black">
                    <p className="flex w-[52px] items-center justify-center bg-black">
                      <img src="/assets/images/ic-basketball.svg" alt="" />
                    </p>
                    <p className="flex flex-1 items-center justify-center truncate text-[14px] font-semibold md:text-[18px]">
                      {matches.leo_niners?.notification || '--'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
