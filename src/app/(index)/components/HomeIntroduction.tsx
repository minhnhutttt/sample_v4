import Image from 'next/image';

const HomeIntroduction = () => {
  return (
    <div className="mt-4 mb-10 md:my-[170px]">
      <div className="mx-auto w-full max-w-[1015px] bg-black/80 px-5 py-12 md:py-25">
        <h2 className="flex items-center justify-center">
          <Image
            src="/assets/images/kivo-text.svg"
            alt=""
            width={198}
            height={61}
            className="max-md:w-[98px]"
          />
          <span className="text-[24px] font-bold text-white md:text-[48px]">
            とは？
          </span>
        </h2>
        <p className="mx-auto mt-[30px] w-full max-w-[872px] text-center text-[18px] font-medium text-[#888] md:mt-[50px] md:text-[30px]">
          KIVOは、あなたの情報の価値をしっかりと守りながら、その情報を「価値として、必要な人に届けられる」コミュニケーションの場所です。
        </p>
      </div>
    </div>
  );
};

export default HomeIntroduction;
