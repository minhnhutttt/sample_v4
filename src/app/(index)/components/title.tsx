import PageTitle from '@/components/PageTitle';

const Title = () => {
  return (
    <PageTitle
      appLabel="KIVO TALK"
      heightClassName="h-[480px] max-md:h-[360px]"
      titleFinalOpacity={0.85}
      titleClassName="font-anton text-[153px] font-normal leading-[100%] tracking-[-3.06px] text-[#E36600] mix-blend-plus-lighter max-lg:text-[110px] max-md:max-w-[340px] max-md:!whitespace-normal max-md:text-[56px] max-md:tracking-[-1px]"
      titleWrapperClassName="absolute top-[206px] left-1/2 -translate-x-1/2 max-md:top-[170px]"
      appLabelWrapperClassName="absolute right-0 text-[#F78629] mix-blend-plus-lighter max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2"
      text={
        <>
          <span className="whitespace-nowrap">FIND YOUR</span>
          <br className="hidden max-md:block" />

          <span className="ml-[0.22em] whitespace-nowrap max-md:ml-0">
            KIVO
          </span>
        </>
      }
    />
  );
};

export default Title;
