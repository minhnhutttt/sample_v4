type SectionHeadingProps = {
  /** Mỗi dòng bọc trong một <p> để xuống dòng theo thiết kế. */
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => {
  return (
    <h2
      className={`u-text-gadient space-y-3 text-[54px] leading-[1.15] font-bold md:space-y-6 md:text-[100px] lg:text-[130px] ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
