import Image from 'next/image';

const Footer = () => (
  <footer className="bg-footer relative flex min-h-[272px] w-full flex-col items-center pt-[33px] pb-[11px]">
    <div className="mx-auto flex w-[274px] flex-col items-center gap-[21px]">
      <Image
        src="/assets/images/logo-alona.png"
        alt="ALONA"
        width={174}
        height={54}
        className="h-[54px] w-[174px] object-contain brightness-0 invert"
      />
    </div>

    <p className="mt-auto w-[250px] pt-[20px] text-center text-[11px] leading-[1.4] font-medium tracking-[0.44px] text-white">
      &copy; {new Date().getFullYear()} ALONA
    </p>
  </footer>
);

export default Footer;
