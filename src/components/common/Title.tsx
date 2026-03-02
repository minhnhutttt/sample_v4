interface TitleType {
  title: string;
  sub: string;
}

const Title = ({ title, sub }: TitleType) => {
  return (
    <div className="text-center">
      <p className="text-[14px] font-medium">{sub}</p>
      <h3 className="font-bebas-neue text-[40px] leading-[1.3] tracking-widest md:text-[56px]">
        {title}
      </h3>
    </div>
  );
};
export default Title;
