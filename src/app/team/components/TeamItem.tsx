import { TeamProps } from '@/types/team';

const TeamItem = (item: TeamProps) => {
  return (
    <div className="">
      <figure>
        <img src={item.image.url} className="w-full" alt="" />
      </figure>
      <div className="">
        <div className="mt-1 flex gap-1 text-[16px]">
          <p className="flex h-[45px] flex-[0_0_111px] items-center bg-black px-2.5 text-white">
            名前/背番号
          </p>
          <p className="flex h-[45px] flex-1 items-center bg-white px-2.5 text-black">
            {item.name}/{item.number}
          </p>
        </div>
        <div className="mt-1 flex gap-1 text-[16px]">
          <p className="flex h-[45px] flex-[0_0_111px] items-center bg-black px-2.5 text-white">
            身長/体重
          </p>
          <p className="flex h-[45px] flex-1 items-center bg-white px-2.5 text-black">
            {item.hw}
          </p>
        </div>
        <div className="mt-1 flex gap-1 text-[16px]">
          <p className="flex h-[45px] flex-[0_0_111px] items-center bg-black px-2.5 text-white">
            誕生日
          </p>
          <p className="flex h-[45px] flex-1 items-center bg-white px-2.5 text-black">
            {item.birthday}
          </p>
        </div>
        <div className="mt-1 flex gap-1 text-[16px]">
          <p className="flex h-[45px] flex-[0_0_111px] items-center bg-black px-2.5 text-white">
            出身地
          </p>
          <p className="flex h-[45px] flex-1 items-center bg-white px-2.5 text-black">
            {item.place}
          </p>
        </div>
        <div className="mt-4 space-y-1">
          {item.career.map((text, i) => (
            <div className="flex gap-3 text-[14px]" key={i}>
              <p className="w-20 whitespace-nowrap">{text.time}</p>
              <p className="flex-1">{text.club}</p>
            </div>
          ))}
        </div>
        <div className="my-5 flex justify-end">
          <img src="/assets/images/team.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
