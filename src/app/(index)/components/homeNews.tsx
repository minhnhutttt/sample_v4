import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import Title from '@/components/common/title';
import Matches from '@/components/matches';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { getNewsList } from '@/services/microcms';

const HomeNews = async () => {
  const news = await getNewsList('', 5, 0);

  return (
    <div className="bg-[url(/assets/images/bg-grid.png)] px-5 pt-20 pb-[120px] md:pt-44 md:pb-[169px]">
      <div className="mx-auto w-full max-w-[1024px]">
        <Title title="GAME" sub="試合情報" />
        <Matches />

        <div className="mt-20 md:mt-[130px]">
          <div>
            <Title title="NEWS" sub="ニュース" />
            <ul className="mt-2 space-y-[15px]">
              {news.contents.map((item) => (
                <li key={item.id}>
                  <TransitionLink
                    href={`/news/${item.id}`}
                    className="flex items-center gap-3 bg-[#F4F4F4] px-3.75 py-4 leading-[1.3] md:gap-5"
                  >
                    <span className="text-[14px] md:text-[18px]">
                      {dayjs(item.date).format('YYYY.MM.DD')}
                    </span>
                    <span className="flex h-5.5 items-center justify-center bg-[#CE2A2D] px-2 text-center text-[13px] whitespace-nowrap text-white md:w-[125px] md:px-5 md:text-[15px]">
                      {item.category}
                    </span>
                    <span className="line-clamp-1 flex-1 text-[14px] md:text-[18px]">
                      {item.title}
                    </span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex justify-center md:mt-[54px]">
            <TransitionLink
              href="/news"
              className="flex h-14 w-[260px] items-center justify-center gap-5 bg-[#FF4E4E] text-[16px] font-bold text-white duration-300 hover:opacity-70 md:h-[70px] md:w-[300px] md:text-[20px]"
            >
              ニュース一覧
              <span className="flex size-7 items-center justify-center rounded-full bg-white md:size-10">
                <img
                  src="/assets/images/btn-arrow.svg"
                  className="max-md:w-4"
                  alt=""
                />
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
