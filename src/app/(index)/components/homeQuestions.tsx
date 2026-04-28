import { ReactNode } from 'react';

const QuestionBtn = ({ href, title }: { href: string; title: ReactNode }) => {
  return (
    <a
      href={href}
      className="group relative flex min-h-[185px] w-[360px] flex-col justify-between overflow-hidden rounded-xl border border-white p-6 text-white duration-200 hover:text-black md:p-10"
    >
      <span className="absolute top-0 left-0 h-full w-full -translate-x-full bg-white duration-200 group-hover:translate-x-0"></span>
      <span className="relative text-[22px] leading-[1.6] font-bold md:text-[28px]">
        {title}
      </span>
      <span className="relative mt-10 flex justify-end gap-1 md:mt-16">
        <span className="text-[15px] md:text-[18px]">詳しく見る</span>
        <img src="/assets/images/arrow-alt.svg" alt="" />
      </span>
    </a>
  );
};

const HomeQuestions = () => {
  return (
    <div className="bg-[#242424] px-5 py-25 md:py-[184px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-wrap justify-center gap-7 md:gap-10">
        <QuestionBtn href="/" title="KIVOにユーザー登録するには？" />
        <QuestionBtn href="/" title="KIVOで高収益の仕組みを知る" />
        <QuestionBtn href="/" title="なぜKIVOが選ばれるのか？" />
      </div>
    </div>
  );
};

export default HomeQuestions;
