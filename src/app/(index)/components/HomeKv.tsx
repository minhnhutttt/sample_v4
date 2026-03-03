import Link from 'next/link';

const HomeKv = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-end justify-center px-5">
      <div className="absolute inset-0 z-10 bg-[#03234E]/65 mix-blend-hard-light"></div>
      <video
        src="/assets/videos/kv.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute h-full w-full object-cover"
      ></video>
      <div className="relative z-20 flex w-full max-w-[1200px] justify-between gap-10 pb-[25%] max-md:flex-col md:items-center md:gap-5 md:pb-[7%]">
        <div>
          <h1 className="mb-5 text-[24px] leading-[1.6] font-medium md:mb-7 md:text-[40px]">
            地域と共に歩む。
            <br />
            現場で培った確かな技術力。
          </h1>
          <p className="text-[14px] leading-[1.75] md:text-[18px]">
            現場を知り尽くした職人が、お客様の課題に真摯に向き合う。
          </p>
        </div>
        <div className="">
          <Link
            href="#"
            className="flex h-[60px] w-[188px] items-center justify-center border border-white text-[14px] duration-300 hover:opacity-75 max-md:mx-auto md:text-[18px]"
          >
            お問い合わせ
          </Link>
          <Link
            href="#"
            className="mt-5 flex items-center justify-center gap-4 text-[14px] md:mt-7 md:justify-end md:text-[18px]"
          >
            <span>tel 000-1111-2222</span>
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.83333 4.42313L0 0.589792L0.589792 0L5.01292 4.42313L0.589792 8.84625L0 8.25646L3.83333 4.42313Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeKv;
