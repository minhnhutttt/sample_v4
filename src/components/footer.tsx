import Image from 'next/image';

import { EXTERNAL_LINKS } from '@/config/constants';

const FOOTER_LINKS = [
  { label: 'プライバシーポリシー', href: EXTERNAL_LINKS.privacyPolicy },
  { label: '利用規約', href: EXTERNAL_LINKS.termsOfService },
];

const Footer = () => (
  <footer className="bg-footer relative h-[272px] w-full pt-[33px]">
    <div className="mx-auto flex w-[274px] flex-col items-center gap-[21px]">
      <Image
        src="/assets/images/logo-alona.png"
        alt="ALONA"
        width={174}
        height={54}
        className="h-[54.301px] w-[173.854px] object-contain brightness-0 invert"
      />

      <nav className="flex w-full items-center gap-[28px]">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-[3px] transition-opacity hover:opacity-70"
          >
            <Image
              src="/assets/images/arrow-line.svg"
              alt=""
              width={16}
              height={6}
              className="h-[5.891px] w-[16.4px] shrink-0"
            />
            <span className="text-[12px] leading-[1.4] font-medium tracking-[0.48px] whitespace-nowrap text-white">
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </div>

    <p className="absolute inset-x-0 bottom-[11px] text-center text-[12px] leading-[1.25] tracking-[0.48px] text-white">
      &copy; {new Date().getFullYear()} ALONA
    </p>
  </footer>
);

export default Footer;
