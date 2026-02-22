interface TitleType {
  title: string;
  sub: string;
}

const Title = ({ title, sub }: TitleType) => {
  return (
    <div className="text-center">
      <p className="text-[14px] font-medium">{sub}</p>
      <h3 className="font-bebas-neue text-[36px] tracking-widest md:text-[45px]">
        {title}
      </h3>
    </div>
  );
};
export default Title;
