import ButtonCta from '@/components/buttonCta';

const HomeBanner = () => {
  return (
    <div className="flex h-[522px] items-center justify-center overflow-hidden bg-[url(/assets/images/bg-cta.png)] bg-cover px-5">
      <ButtonCta white />
    </div>
  );
};

export default HomeBanner;
