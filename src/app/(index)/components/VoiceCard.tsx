import Image from 'next/image';

type VoiceCardProps = {
  avatar: string;
  avatarAlt: string;
  name: string;
  role: string;
  category: string;
  title: string;
  description: string;
};

const VoiceCard = ({
  avatar,
  avatarAlt,
  name,
  role,
  category,
  title,
  description,
}: VoiceCardProps) => {
  const photo = (
    <div className="flex w-[72px] flex-col items-center gap-4 md:w-55 md:shrink-0">
      <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full bg-[#eeeff7] md:size-55">
        <Image
          src={avatar}
          alt={avatarAlt}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center gap-0.5 text-center text-[#1c213b]">
        <p className="text-[14px] leading-[1.6] font-semibold md:text-[18px]">
          {name}
          <br />
          {role}
        </p>
        <p className="text-[12px] leading-[1.6] font-medium md:text-[16px]">
          {category}
        </p>
      </div>
    </div>
  );

  const card = (
    <div className="relative flex flex-col gap-2 rounded-[28px] bg-[#eeeff7] px-5 py-9 max-md:flex-1 md:w-170 md:px-12">
      <p className="text-[18px] leading-[1.67] font-bold text-[#434f8e] md:text-[24px]">
        {title}
      </p>
      <p className="text-justify text-[14px] leading-[2] font-medium text-[#1c213b] md:text-[18px]">
        {description}
      </p>
      <div
        aria-hidden
        className="absolute top-20 h-[19px] w-[28px] -translate-y-1/2 group-odd:-left-[20px] group-even:-right-[20px] group-even:-scale-x-100"
      >
        <Image src="/assets/images/voice/quote-tail.svg" alt="" fill />
      </div>
    </div>
  );

  return (
    <div className="group flex w-full justify-center gap-5 even:flex-row-reverse md:gap-10">
      {photo}
      {card}
    </div>
  );
};

export default VoiceCard;
