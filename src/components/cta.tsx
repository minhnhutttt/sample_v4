'use client';

const Cta = () => {
  return (
    <a
      href="#"
      className="group relative flex h-20 w-[300px] items-center justify-center gap-4 rounded-md bg-[linear-gradient(90deg,_#FF493E_0%,_#FFA826_100%)] px-10 py-5 text-center text-[18px] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 md:h-[99px] md:w-[354px] md:text-[22px]"
    >
      <span>掲載を申し込む</span>
      <span className="absolute right-5 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
};

export default Cta;
