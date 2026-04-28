'use client';

const Footer = () => {
  return (
    <footer className="bg-[#242424] py-6 text-center md:py-10">
      <div className="text-[12px] text-white/80 md:text-[14px]">
        Copyright &copy; {new Date().getFullYear()} KIVO
      </div>
    </footer>
  );
};

export default Footer;
