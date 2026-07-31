type AchievementCardProps = {
  title: string;
  description: string;
};

const AchievementCard = ({ title, description }: AchievementCardProps) => (
  <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-8 shadow-[12px_12px_0px_0px_rgba(0,74,106,0.3)] md:p-10">
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 bottom-0 h-30 w-30 opacity-[0.07]"
      style={{
        backgroundImage:
          'repeating-conic-gradient(#434f8e 0% 25%, transparent 0% 50%)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'bottom right',
        maskImage:
          'linear-gradient(to top left, black, black 60%, transparent 100%)',
      }}
    />
    <div className="relative flex flex-col gap-3">
      <p className="text-[20px] leading-[1.67] font-bold text-[#434f8e] md:text-[24px]">
        {title}
      </p>
      <p className="text-[16px] leading-[2] font-medium tracking-wider text-[#1c213b] md:text-[18px]">
        {description}
      </p>
    </div>
  </div>
);

export default AchievementCard;
