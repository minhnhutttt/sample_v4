type PlainTitleProps = {
  en: string;
  jp: string;
};

const PlainTitle = ({ en, jp }: PlainTitleProps) => (
  <div className="flex flex-col items-center">
    <p className="text-muted text-[15px] leading-[1.87] font-bold tracking-[0.6px]">
      {en}
    </p>
    <h2 className="text-ink text-center text-[24px] leading-[1.67] font-bold tracking-[0.72px]">
      {jp}
    </h2>
  </div>
);

export default PlainTitle;
