import Image from 'next/image';

import Button from './common/Button';

const Information = () => {
  return (
    <div className="my-20 px-2 md:my-[170px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center max-md:flex-col">
        <div className="md:-mr-30">
          <Image
            src="/assets/images/phone2.png"
            alt=""
            width={775}
            height={806}
            className="max-lg:-ml-10 max-md:w-[330px]"
          />
        </div>
        <div className="space-y-10 md:space-y-[86px]">
          <h4 className="text-[24px] font-bold md:text-[50px]">
            あなたが届けてきた情報には、
            <br />
            かけがえのない価値があります。
          </h4>
          <p className="text-[18px] font-medium md:text-[30px]">
            それを、大切に扱える場所で、
            <br />
            ちゃんと届けてみませんか？
          </p>
        </div>
      </div>
      <div className="my-[65px] md:my-[170px]">
        <p className="text-center text-[18px] font-semibold md:text-[30px]">
          これからの時代に必要なのは、情報の量ではなく、届け方を大切にすること。
          <br />
          それが、KIVOです。
        </p>
        <div className="mt-[35px] md:mt-[90px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Information;
