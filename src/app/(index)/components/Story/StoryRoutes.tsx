import Image from 'next/image';

type Bullet = {
  id: string;
  lines: [string, string];
  ring: string;
  ringOffset: { x: number; y: number };
  className?: string;
};

const bullets: Bullet[] = [
  {
    id: 'buyer',
    lines: ['データをバイヤーに', 'アピール可能'],
    ring: '/assets/images/story/bullet-b.svg',
    ringOffset: { x: -10, y: -12 },
  },
  {
    id: 'tasting',
    lines: ['試食での', '一般顧客への宣伝'],
    ring: '/assets/images/story/bullet-b.svg',
    ringOffset: { x: 0, y: 10 },
    className: 'max-md:mb-7 xl:mt-[100px]',
  },
  {
    id: 'media',
    lines: ['メディアで', '店舗と一緒に紹介'],
    ring: '/assets/images/story/bullet-c.svg',
    ringOffset: { x: 10, y: -12 },
  },
];

const BulletLabel = ({ lines }: { lines: [string, string] }) => (
  <p className="relative z-10 text-center text-[22px] font-bold tracking-[0.48px] text-white md:text-[28px] md:tracking-[0.84px]">
    <span className="block leading-[1.58]">{lines[0]}</span>
    <span className="block leading-[1.58]">{lines[1]}</span>
  </p>
);

const StoryRoutes = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-[44px] md:mt-8 md:gap-[48px]">
      <h3 className="flex items-end gap-[12px] md:gap-[40px]">
        <Image
          src="/assets/images/story/burst-left.svg"
          alt=""
          aria-hidden
          width={30}
          height={48}
          className="h-[36px] w-auto md:h-[48px]"
        />
        <span className="text-[20px] font-black tracking-[0.4px] text-white drop-shadow-[0px_0px_20px_rgba(0,104,149,0.3)] md:text-[36px] md:tracking-[0.72px]">
          様々な
          <span className="text-[26px] md:text-[52px]">販売ルート</span>
          を確保
        </span>
        <Image
          src="/assets/images/story/burst-right.svg"
          alt=""
          aria-hidden
          width={30}
          height={48}
          className="h-[36px] w-auto md:h-[48px]"
        />
      </h3>

      <div className="relative flex w-full justify-center max-xl:max-w-[1000px] max-xl:flex-wrap max-xl:gap-5 max-md:flex-col max-md:items-center max-md:gap-6 xl:justify-between">
        {bullets.map((bullet) => (
          <div key={bullet.id} className={`relative ${bullet.className ?? ''}`}>
            <div className="relative size-[280px] rounded-full bg-white/15 md:size-[346px]"></div>
            <div
              className="absolute top-0 left-0 size-[280px] rounded-full border border-[#FFF] [box-shadow:10px_10px_0_0_rgba(0,_68,_119,_0.30)] md:size-[346px]"
              style={{
                left: bullet.ringOffset.x,
                top: bullet.ringOffset.y,
              }}
            ></div>
            <div className="absolute inset-0 flex size-[280px] items-center justify-center md:size-[346px]">
              <BulletLabel lines={bullet.lines} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryRoutes;
