import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import Image from 'next/image';
import Link from 'next/link';

import { getMatches } from '@/app/libs/getMatches';
import { getNewsList } from '@/app/libs/getNews';
import Title from '@/components/common/Title';

const HomeNews = async () => {
  const news = await getNewsList('', 5, 0);
  const matches = await getMatches();

  return (
    <div className="mt-20 mb-[120px] px-5 md:mt-36 md:mb-[169px]">
      <div className="mx-auto w-full max-w-[1024px]">
        <Title title="GAME" sub="ゲーム" />
        <div className="mx-auto grid w-full max-w-282.5 gap-[24pxpx] lg:grid-cols-2">
          <div className="md:px-4">
            <div className="mt-2 border border-black p-3">
              <p className="bg-[#E8E8E8] p-2 text-center text-[14px] md:text-[16px]">
                {matches.place}
              </p>
              <div className="mt-[14px]">
                <div className="flex items-center justify-center gap-5">
                  <div>
                    <div>
                      <span className="text-[40px] font-semibold md:text-[62px]">
                        {dayjs(matches.match_date).format('MM/DD')}
                      </span>
                      <span className="text-[24px] font-bold md:text-[32px]">
                        （{dayjs(matches.match_date).locale('ja').format('ddd')}
                        ）
                      </span>
                    </div>
                    <p className="text-[28px] text-[#FF0000] md:text-[36px]">
                      {dayjs(matches.match_date).format('HH:mm')}
                    </p>
                  </div>
                  <span className="text-[20px] font-medium md:text-[24px]">
                    VS
                  </span>
                  <div className="">
                    <Image
                      src={matches.opponent_logo.url}
                      alt=""
                      width={75}
                      height={75}
                      className=""
                    />
                    <p className="text-center text-[14px] font-bold md:text-[16px]">
                      {matches.opponent_name}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-center pb-1">
                  <Link
                    href="/"
                    className="flex h-10 w-[226px] items-center justify-center border border-[#FF0000] text-[18px] font-medium md:text-[22px]"
                  >
                    試合情報
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-4">
            <div className="mt-2 border border-black p-3">
              <p className="bg-[#E8E8E8] p-2 text-center text-[14px] md:text-[16px]">
                {matches.place}
              </p>
              <div className="mt-[14px]">
                <div className="flex items-center justify-center gap-5">
                  <div>
                    <div>
                      <span className="text-[40px] font-semibold md:text-[62px]">
                        {dayjs(matches.match_date).format('MM/DD')}
                      </span>
                      <span className="text-[24px] font-bold md:text-[32px]">
                        （{dayjs(matches.match_date).locale('ja').format('ddd')}
                        ）
                      </span>
                    </div>
                    <p className="text-[28px] text-[#FF0000] md:text-[36px]">
                      {dayjs(matches.match_date).format('HH:mm')}
                    </p>
                  </div>
                  <span className="text-[20px] font-medium md:text-[24px]">
                    VS
                  </span>
                  <div className="">
                    <Image
                      src={matches.opponent_logo.url}
                      alt=""
                      width={75}
                      height={75}
                      className=""
                    />
                    <p className="text-center text-[14px] font-bold md:text-[16px]">
                      {matches.opponent_name}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-center pb-1">
                  <Link
                    href="/"
                    className="flex h-10 w-[226px] items-center justify-center border border-[#FF0000] text-[18px] font-medium md:text-[22px]"
                  >
                    試合情報
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[130px]">
          <div className="md:px-4">
            <Title title="NEWS" sub="ニュース" />
            <ul className="mt-2 space-y-[15px]">
              {news.contents.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.id}`}
                    className="flex items-center gap-3 bg-[#F4F4F4] px-3.75 py-4 leading-[1.3] md:gap-5"
                  >
                    <span className="text-[14px] md:text-[18px]">
                      {dayjs(item.date).format('YYYY.MM.DD')}
                    </span>
                    <span className="flex h-5.5 items-center bg-[#CE2A2D] px-2 text-center text-[13px] whitespace-nowrap text-white md:w-[125px] md:px-5 md:text-[15px]">
                      {item.category}
                    </span>
                    <span className="line-clamp-1 flex-1 text-[14px] md:text-[18px]">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
