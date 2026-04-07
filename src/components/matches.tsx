import Image from 'next/image';

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
      <div>
        <div className="flex items-center justify-center gap-2 pt-7 text-[16px] font-semibold">
          <Image
            src="/assets/images/leo-logo.png"
            alt="logo"
            width={92}
            height={64}
            className="w-12"
          />
          <span>レオブラックス</span>
        </div>
        <div className="mt-5 border border-black bg-[url(/assets/images/bg-logo1.png)] bg-bottom-left bg-no-repeat p-3">
          <p className="bg-[#636769] p-2 text-[14px] text-white md:text-[16px]">
            {matches.leo_blacks?.title || '\u00A0'}
          </p>
          <p className="mt-0.5 text-[16px] font-semibold">
            {matches.leo_blacks?.place || '\u00A0'}
          </p>
          <div>
            <div className="flex items-center justify-center gap-5">
              <div>
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
              </div>
              <span className="text-[20px] font-medium md:text-[24px]">VS</span>
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
            </div>
            <div className="mt-2 flex justify-center pb-1">
              <a
                href={matches.leo_blacks?.url ?? '#'}
                className="flex h-10 w-[226px] items-center justify-center border border-[#FF0000] text-[18px] font-medium md:text-[22px]"
              >
                試合情報
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Leo Niners */}
      <div>
        <div className="flex items-center justify-center gap-2 pt-7 text-[16px] font-semibold">
          <Image
            src="/assets/images/logo2.png"
            alt="logo"
            width={92}
            height={64}
            className="w-8"
          />
          <span>レオナイナーズ</span>
        </div>
        <div className="mt-5 border border-black bg-[url(/assets/images/bg-logo2.png)] bg-bottom-left bg-no-repeat p-3">
          <p className="bg-[#636769] p-2 text-[14px] text-white md:text-[16px]">
            {matches.leo_niners?.title || '\u00A0'}
          </p>
          <p className="mt-0.5 text-[16px] font-semibold">
            {matches.leo_niners?.place || '\u00A0'}
          </p>
          <div>
            <div className="flex items-center justify-center gap-5">
              <div>
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
              </div>
              <span className="text-[20px] font-medium md:text-[24px]">VS</span>
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
            </div>
            <div className="mt-2 flex justify-center pb-1">
              <a
                href={matches.leo_niners?.url ?? '#'}
                className="flex h-10 w-[226px] items-center justify-center border border-[#FF0000] text-[18px] font-medium md:text-[22px]"
              >
                試合情報
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
