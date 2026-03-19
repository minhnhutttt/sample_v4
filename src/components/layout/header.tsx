'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

// ─── Types ─────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  sub?: string;
  href: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const kivoAppItems: NavItem[] = [
  { label: 'アプリ紹介', sub: 'App Introduction', href: '/app' },
  { label: 'KIVOをダウンロード', sub: 'Download KIVO', href: '/download' },
  { label: 'プレミアム特典', sub: 'Premium Benefits', href: '/premium' },
  { label: 'サポート', sub: 'Support', href: '/support' },
  { label: 'KIVOの強み', sub: 'KIVO vs Other', href: '/compare' },
];

const aboutItems: NavItem[] = [
  { label: 'お知らせ・公開情報', sub: 'Announcements', href: '/announcements' },
  { label: '運営会社概要', sub: 'We are KIVO', href: '/company' },
  { label: 'ブランドアセット', sub: 'Brand asset', href: '/brand' },
];

const legalItems: NavItem[] = [
  { label: '利用規約', sub: 'Terms of Use', href: '/terms' },
  { label: 'プライバシーポリシー', sub: 'Privacy Policy', href: '/privacy' },
];

const MARQUEE_TEXT = 'NEW: KIVO公式サイト公開のお知らせ';

// ─── Marquee ───────────────────────────────────────────────────────────────
function MarqueeTicker() {
  return (
    <div className="flex h-5 items-center overflow-hidden bg-[#F78629] duration-200 group-[.active]:bg-[#242424]">
      <style>{`
        @keyframes kivo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kivo-marquee-track {
          display: flex;
          white-space: nowrap;
          animation: kivo-marquee 70s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="kivo-marquee-track">
        {[0, 1].map((outerIdx) => (
          <div key={outerIdx} className="flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                className="flex items-center gap-4 px-4 text-xs font-semibold tracking-wide text-black duration-200 group-[.active]:text-white"
                key={i}
              >
                <img src="/assets/images/kivo.svg" alt="" />
                {MARQUEE_TEXT}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Single menu row ────────────────────────────────────────────────────────
function MenuItem({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onClick}
        className="group/item flex min-h-[56px] flex-col justify-center py-2.5 transition-colors duration-150 last:border-b-0 hover:border-[#F78629]/50"
      >
        <span className="block text-[16px] font-medium text-white transition-colors duration-150 group-hover/item:text-[#F78629]">
          {item.label}
        </span>
        {item.sub && (
          <span className="mt-0.5 block text-[12px] text-white/50">
            {item.sub}
          </span>
        )}
      </Link>
    </li>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
export default function Header() {
  const [open, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState(false); // ← thêm state này
  const ref = useRef<HTMLDivElement>(null);

  // ── IntersectionObserver cho js-header-color ──────────────────
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.js-header-color');
    if (!targets.length) return;

    const HEADER_HEIGHT = 48; // h-12 = 48px (top bar của mày)

    const observer = new IntersectionObserver(
      (entries) => {
        // Nếu bất kỳ target nào đang intersect với vùng header → active
        const anyActive = entries.some((entry) => entry.isIntersecting);
        setHeaderColor(anyActive);
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px -${window.innerHeight - HEADER_HEIGHT - 1}px 0px`,
        threshold: 0,
      },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        ref={ref}
        // ── Thêm active-color class vào đây ──────────────────────
        className={`group fixed inset-x-0 top-0 bottom-auto z-50 flex w-full translate-y-0 justify-center p-2.5 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          headerColor ? 'active' : ''
        }`}
      >
        <div
          // ── KEY CHANGE ────────────────────────────────────────────────────
          // Opening:  width expands first (500ms), then height reveals (500ms delay)
          // Closing:  height collapses first (500ms), then width shrinks (500ms, with 500ms delay)
          style={
            open
              ? {
                  transition: 'max-width 500ms cubic-bezier(0.22,1,0.36,1)',
                  maxWidth: '100%',
                }
              : {
                  transition:
                    'max-width 500ms cubic-bezier(0.22,1,0.36,1) 500ms',
                  maxWidth: undefined, // let Tailwind class take over
                }
          }
          className={`origin-center overflow-hidden rounded-md ${open ? '' : 'max-w-[350px] md:max-w-[520px]'}`}
        >
          {/* ── Top bar ─────────────────────────────────────────────────── */}
          <header className="relative z-99 flex h-12 items-center justify-between border-b border-white/10 bg-[#242424] px-5 transition-shadow duration-200 group-[.active]:bg-[#F78629]">
            {/* Left — hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="flex cursor-pointer items-center gap-2.5 text-white"
            >
              <span className="flex h-[8px] w-[18px] flex-col justify-between">
                <span
                  className={`block h-[2px] origin-center rounded bg-white transition-all duration-200 duration-250 group-[.active]:bg-[#242424] ${
                    open ? 'translate-y-[3px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] origin-center rounded bg-white transition-all duration-200 duration-250 group-[.active]:bg-[#242424] ${
                    open ? '-translate-y-[3px] -rotate-45' : ''
                  }`}
                />
              </span>
              <span className="text-[16px] duration-200 group-[.active]:text-[#242424] md:text-[20px]">
                Menu
              </span>
            </button>

            {/* Center — logo */}
            <Link
              href="/"
              aria-label="KIVO home"
              className="absolute top-1/2 left-1/2 w-[53px] -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                width="53"
                height="36"
                viewBox="0 0 53 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.4431 13.1597C50.4393 12.4914 50.4431 3.07107 50.4392 2.71527C50.4364 2.46298 50.2907 2.51216 50.0421 2.5055C49.9577 2.5032 49.3583 2.4871 48.9866 2.49481C47.9246 2.51688 40.2584 2.48636 38.6845 2.50513C38.2 2.51091 38.0457 2.55941 38.0312 2.34137C38.0246 2.24184 38.0254 0.647844 38.0298 0.477931C38.0381 0.152219 38.0116 0.0350891 38.1902 0.00866652C38.2261 0.00331984 41.1372 0.00133065 41.4773 0.00126848C46.3685 8.72321e-05 52.4069 -0.00414033 52.7119 0.0141379C52.7435 0.0160651 52.9416 0.0279395 52.9914 0.294341C53.0059 0.372303 52.9977 0.372863 52.9976 1.28534C52.9964 11.2951 52.9985 11.2949 52.9944 12.1652C52.9892 13.2536 53.0059 13.2967 52.8931 13.3394C52.8515 13.3552 52.8257 13.365 52.3378 13.3634C50.7373 13.358 50.738 13.3666 50.5992 13.3583C50.5382 13.3547 50.4668 13.3325 50.4448 13.2186C50.4411 13.1993 50.4468 13.179 50.4431 13.1597Z"
                  className="fill-[#F4841E] duration-200 group-[.active]:fill-[#fff]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.00903189 7.99895C0.00605307 6.42627 0.00878359 3.76636 0.00915594 3.39825C0.0120106 0.5946 -0.00679292 0.594725 0.00270206 0.351078C0.00419147 0.312843 0.0154861 0.0217598 0.332979 0.00571979C0.44034 0.00024877 13.2879 -0.00167864 13.9852 0.00161641C14.8499 0.00571967 14.8784 -0.0107555 14.9464 0.08449C15.0181 0.184833 14.9735 1.32554 14.9721 2.27936C14.9718 2.49883 14.8686 2.48583 14.7298 2.49274C14.3431 2.51188 14.3431 2.50933 9.8894 2.50075C6.52427 2.49429 4.22096 2.50977 3.00076 2.50685C2.7753 2.50635 2.60222 2.46438 2.56418 2.58922C2.54817 2.64163 2.5522 2.64182 2.55114 3.27397C2.54953 4.24769 2.55003 4.24632 2.54972 4.33081C2.54128 6.77058 2.55176 12.6246 2.5517 12.8483C2.5517 13.2351 2.59372 13.3619 2.31768 13.3577C1.73377 13.349 1.31897 13.3628 0.64259 13.3584C0.127564 13.355 0.0219399 13.3954 0.0128173 13.1595C0.00599083 12.9827 0.00878366 8.41182 0.00903189 7.99895Z"
                  className="fill-[#F4841E] duration-200 group-[.active]:fill-[#fff]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.4524 31.7509C50.4554 31.2175 50.4461 23.1625 50.4575 22.8597C50.458 22.8445 50.4627 22.7219 50.5447 22.6917C50.6697 22.6457 52.0024 22.6665 52.0276 22.6672C52.6359 22.6836 52.8485 22.6668 52.8913 22.688C52.9956 22.7397 53.0009 22.7842 52.9992 23.4199C52.9988 23.579 52.9949 25.0582 52.9889 25.4095C52.9754 26.2054 52.9967 27.0118 52.9956 28.0207C52.9886 34.7129 52.9819 34.7125 52.9854 35.2944C52.9857 35.3447 52.9882 35.7633 52.8981 35.9176C52.8281 36.0375 52.4888 35.9834 51.7793 35.9885C47.7949 36.0171 44.3562 35.9835 42.7188 35.9971C42.401 35.9997 42.3159 36.0004 38.7469 35.9981C38.1842 35.9977 38.0403 36.0481 38.0237 35.7903C38.012 35.607 38.0183 34.7625 38.0189 34.6731C38.0255 33.7951 38.0159 33.7849 38.0613 33.7379C38.1067 33.691 38.1624 33.6867 38.6849 33.682C38.8933 33.6801 40.7725 33.6634 41.2913 33.6647C43.3186 33.6679 45.3458 33.6711 47.373 33.6744C47.6063 33.6751 49.9977 33.6833 50.2885 33.665C50.387 33.6589 50.4291 33.5602 50.4296 33.5585C50.4513 33.4907 50.4523 31.8955 50.4524 31.7509Z"
                  className="fill-[#F4841E] duration-200 group-[.active]:fill-[#fff]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0094629 23.1679C0.00940084 22.8032 -0.00468646 22.7597 0.0619646 22.7041C0.0977725 22.6743 0.104972 22.6683 0.642587 22.6626C0.761739 22.6614 1.78887 22.6505 2.13224 22.6548C2.37731 22.6579 2.54072 22.6132 2.54413 22.8572C2.57286 24.9307 2.54121 24.93 2.54667 25.7792C2.5607 27.9558 2.54587 32.5423 2.5499 32.8668C2.55859 33.5582 2.52415 33.6796 2.68978 33.6867C2.80397 33.6916 2.80341 33.668 4.11794 33.6765C5.34534 33.6845 5.34472 33.6629 5.9797 33.6747C6.90283 33.6917 6.99089 33.6518 7.65541 33.6689C8.48501 33.6903 8.58909 33.6599 9.0827 33.6639C9.85844 33.6702 9.85763 33.6633 10.634 33.6614C10.7731 33.661 10.7729 33.6696 12.3718 33.6686C12.5455 33.6686 14.4619 33.6675 14.544 33.6687C14.8172 33.6725 14.9179 33.6471 14.9602 33.8022C14.9762 33.8607 14.9895 35.4276 14.9743 35.7885C14.9641 36.0304 14.7722 35.9896 14.6681 35.9905C13.0895 36.0034 12.7869 35.9804 12.2477 35.9846C9.45003 36.0058 9.45021 35.9875 9.20694 35.9903C7.84612 36.0066 5.09065 35.9871 3.8697 35.9911C3.58169 35.9921 0.422526 36.0024 0.269675 35.9803C0.215932 35.9725 -0.00083848 35.9411 0.00878063 35.3531C0.0152968 34.9534 0.013497 32.322 0.0133108 32.0584C0.0120076 29.0949 0.0107041 26.1314 0.0094629 23.1679Z"
                  className="fill-[#F4841E] duration-200 group-[.active]:fill-[#fff]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7065 16.8734C12.7288 16.8747 12.7261 16.8626 12.748 16.8638C12.797 16.8665 12.7937 16.8794 12.7977 16.8784C12.8054 16.8767 12.8905 16.7441 12.8982 16.7321C13.003 16.5687 13.4443 15.9945 13.4794 15.9518C13.6704 15.7198 13.823 15.5044 13.9113 15.3909C14.0266 15.2427 14.2991 14.8654 14.5297 14.5805C15.5241 13.3518 15.8124 12.8305 15.9696 12.7839C16.0928 12.7475 18.5415 12.7707 18.7696 12.7592C18.8234 12.7565 18.8283 12.7551 18.863 12.8034C18.9252 12.8905 18.8231 12.9304 18.7313 13.0606C18.5599 13.3035 18.56 13.3031 18.2096 13.725C18.0696 13.8935 18.0841 13.9043 17.4214 14.7343C16.7674 15.5532 16.7268 15.6463 16.5214 15.8906C16.4715 15.9499 16.0473 16.4545 15.9057 16.6409C15.6482 16.9801 15.4178 17.2374 15.3978 17.3231C15.3874 17.3674 15.3696 17.4433 15.6491 17.8332C15.9418 18.2415 16.0791 18.4966 16.3232 18.8336C16.5984 19.2134 18.4077 21.9929 18.4467 22.0565C18.7951 22.6256 18.7962 22.6243 18.8256 22.6743C18.9094 22.817 19.0097 22.8487 18.9068 22.9483C18.8747 22.9793 18.8701 22.9698 18.8251 22.9668C18.5579 22.9495 18.5582 22.9691 16.5299 22.9601C15.9787 22.9576 15.9428 22.9872 15.8207 22.8161C15.6417 22.5653 15.374 22.1218 15.337 22.0603C15.2964 21.9931 15.0446 21.5759 14.8081 21.2335C14.5285 20.8287 14.4948 20.7247 14.3764 20.5483C14.3589 20.5222 13.6629 19.4151 13.4521 19.0494C13.4215 18.9965 13.4311 18.9767 13.371 18.9759C13.3528 18.9756 13.3332 18.9654 13.3163 18.9724C13.2573 18.9969 13.2704 19.0112 13.2326 19.0617C12.8644 19.5532 12.7189 19.569 12.7071 19.8142C12.7064 19.8283 12.7024 21.2886 12.7027 22.4255C12.7028 22.8431 12.7453 22.9649 12.4965 22.9629C11.9213 22.9581 10.9041 22.9588 10.8825 22.9587C10.1188 22.9569 10.1171 22.9542 10.0707 22.9305C10.0156 22.9024 10.0051 22.8891 10.0079 22.2389C10.0229 18.8052 10.0074 12.9964 10.013 12.9132C10.025 12.7357 10.1512 12.7666 10.5097 12.7636C11.4723 12.7556 11.4711 12.7608 12.4343 12.7518C12.6131 12.7501 12.7019 12.7214 12.7015 12.9762C12.6973 16.265 12.7209 16.2654 12.687 16.7672C12.6822 16.8386 12.7046 16.8632 12.7065 16.8734Z"
                  className="fill-white duration-200 group-[.active]:fill-[#242424]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.005 20.2451C29.0249 20.248 29.0447 20.2509 29.0645 20.2538C29.081 20.2523 29.0905 20.2809 29.107 20.2795C29.1138 20.2789 29.1122 20.2762 29.1489 20.1977C29.2075 20.0726 29.1289 20.0528 29.2391 19.7446C29.2741 19.6468 29.2381 19.6362 29.6032 18.4985C29.6253 18.4296 29.6198 18.428 29.861 17.6315C30.1378 16.7179 30.1088 16.7103 30.3238 16.0866C30.3254 16.0821 30.8761 14.239 31.083 13.5234C31.1378 13.3339 31.129 13.3329 31.2209 13.0291C31.2807 12.8315 31.3003 12.7684 31.486 12.7657C32.5915 12.7501 33.6555 12.7575 33.8441 12.7589C33.9224 12.7595 34.0967 12.7423 34.1394 12.7965C34.1909 12.8617 34.1302 12.94 34.1055 13.0382C34.0234 13.3636 33.1482 15.8222 33.1234 15.9019C32.9976 16.3062 32.7071 17.1042 32.6719 17.2021C32.5597 17.5155 32.0109 19.2153 31.9967 19.2561C31.9744 19.3199 31.9764 19.3197 31.7278 20.0574C31.7062 20.1214 31.6325 20.2965 31.5022 20.6866C31.231 21.4984 31.242 21.5012 30.9579 22.3083C30.7739 22.831 30.8109 22.9522 30.5547 22.9589C30.4609 22.9614 27.5786 22.9602 27.4508 22.9501C27.2603 22.9351 27.2701 22.883 27.0977 22.4157C27.0433 22.2681 26.9868 22.0297 26.7623 21.3674C26.5508 20.7434 26.5737 20.7372 26.3591 20.1128C26.1527 19.5123 25.9745 18.8935 25.8174 18.4508C25.7963 18.3915 25.686 18.0295 25.6097 17.8149C25.5303 17.5916 24.6774 14.9946 24.645 14.9044C24.6109 14.8095 24.6188 14.8071 24.254 13.7074C24.0348 13.0466 24.0247 13.0214 24.0013 12.9631C23.9043 12.7216 24.1253 12.7637 24.3489 12.7613C24.5325 12.7594 26.4886 12.7386 26.6452 12.7483C26.8239 12.7595 26.8691 12.8203 26.9672 13.2175C27.0445 13.5303 28.075 16.9482 28.1334 17.2C28.1397 17.2267 28.3633 17.9515 28.3637 17.9525C28.4555 18.223 28.4454 18.2248 28.5271 18.499C28.5814 18.6815 28.7356 19.2281 28.9322 19.8758C28.987 20.0565 28.965 20.0606 29.005 20.2451Z"
                  className="fill-white duration-200 group-[.active]:fill-[#242424]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0186 16.7042C20.0202 13.2154 20.0064 13.2155 20.0166 12.9124C20.0171 12.8977 20.0208 12.7868 20.124 12.7642C20.1643 12.7554 21.4419 12.7553 21.5565 12.7553C21.8882 12.7552 21.8873 12.7539 22.1152 12.7528C22.6047 12.7502 22.7179 12.7296 22.7683 12.8565C22.7766 12.8773 22.7766 13.1361 22.7766 13.1604C22.7776 21.7055 22.7745 21.9117 22.7632 22.6726C22.7625 22.7185 22.8005 22.9273 22.6099 22.9568C22.5587 22.9648 20.7274 22.9564 20.5637 22.9557C20.1589 22.9538 20.0298 22.9786 20.0226 22.7961C20.0069 22.3945 20.0176 17.1916 20.0186 16.7042Z"
                  className="fill-white duration-200 group-[.active]:fill-[#242424]"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.434 12.6521C38.8353 12.5666 39.938 12.5181 40.5502 12.6423C40.6585 12.6643 40.9912 12.7036 41.3617 12.822C41.5336 12.877 42.2572 13.1085 42.7865 13.5261C43.8614 14.3741 44.1474 15.1657 44.3539 15.7644C44.3788 15.8366 44.5037 16.288 44.5111 16.3328C44.6046 16.8998 44.6082 16.9612 44.6117 17.0164C44.6591 17.7591 44.6347 18.2159 44.6293 18.3201C44.5997 18.8856 44.5392 19.093 44.5336 19.1316C44.4917 19.4167 44.4845 19.4144 44.4144 19.6931C44.3872 19.8014 44.2416 20.3795 43.8764 20.9822C43.4908 21.6182 43.074 21.9495 42.9887 22.0173C42.3848 22.4975 42.3733 22.484 41.7748 22.7693C41.6027 22.8514 41.0522 23.0118 40.9174 23.0379C40.4859 23.121 40.4881 23.1343 40.0502 23.1668C39.4611 23.2104 39.461 23.1923 38.8715 23.1619C38.465 23.1409 38.4685 23.1144 38.184 23.0662C37.7226 22.9879 37.0361 22.7343 36.7514 22.5652C36.3425 22.3223 35.9711 22.0739 35.5912 21.6687C34.8987 20.93 34.5851 19.9365 34.5277 19.6882C34.4278 19.2555 34.4087 19.2589 34.3695 18.8152C34.2903 17.917 34.3264 17.5587 34.3373 17.45C34.373 17.0966 34.3806 16.6711 34.4779 16.3357C34.6842 15.6257 34.7952 15.1311 35.4633 14.2839C35.6953 14.0033 35.8709 13.8513 36.1547 13.613C37.1037 12.8164 38.3274 12.6747 38.434 12.6521ZM39.8031 14.8172C38.417 14.729 37.9393 15.3505 37.6449 15.782C37.3806 16.1694 37.2179 16.8209 37.1947 17.0154C37.0004 18.6451 37.4106 19.5529 37.5014 19.7537C37.6451 20.0714 37.9215 20.3895 38.0248 20.4695C39.0892 21.2918 40.3093 20.8248 40.435 20.7752C41.2477 20.4539 41.4978 19.7755 41.5912 19.5603C41.6852 19.3441 41.812 18.8047 41.8275 18.6297C41.9252 17.531 41.8168 17.0276 41.7875 16.8914C41.6979 16.4751 41.6116 16.0667 41.1811 15.5125C41.081 15.3941 41.0857 15.3905 40.9711 15.2849C40.8959 15.2157 40.5102 14.8621 39.8031 14.8172Z"
                  className="fill-white duration-200 group-[.active]:fill-[#242424]"
                />
              </svg>
            </Link>

            {/* Right — CTA buttons */}
            <nav className="flex items-center gap-1">
              <Link
                href="/premium"
                className="rounded-full border border-[#F78629] px-1 py-2 text-[10px] leading-none font-bold text-[#F78629] transition-all duration-200 group-[.active]:border-[#242424] group-[.active]:text-[#242424] md:px-3 md:text-[12px]"
              >
                Premium
              </Link>
              <Link
                href="/download"
                className="rounded-full bg-[#F78629] px-1 py-2 text-[10px] leading-none font-bold text-white transition-all duration-200 group-[.active]:bg-[#242424] md:px-3 md:text-[12px]"
              >
                Download
              </Link>
            </nav>
          </header>

          {/* ── Dropdown panel ────────────────────────────────────────── */}
          <div
            style={
              open
                ? {
                    // Opening: height expands AFTER width (300ms delay)
                    transition:
                      'max-height 700ms cubic-bezier(0.22,1,0.36,1) 500ms, opacity 500ms ease 500ms',
                    maxHeight: '520px',
                  }
                : {
                    // Closing: height collapses FIRST, no delay
                    transition:
                      'max-height 700ms cubic-bezier(0.22,1,0.36,1) 0ms, opacity 500ms ease 0ms',
                    maxHeight: '0px',
                  }
            }
            className="relative z-99 flex flex-col-reverse overflow-auto"
          >
            <div className="overflow-auto bg-[#242424] text-white">
              <div className="grid grid-cols-1 p-5 md:grid-cols-3">
                {/* ── Col 1: KIVO App ─────────────────────────── */}
                <div className="rounded-[4px] bg-[#3C3C3C] p-5">
                  <p className="mb-4 text-[14px]">KIVO App</p>
                  <ul className="divide-y divide-[#626262]">
                    {kivoAppItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={close} />
                    ))}
                  </ul>
                </div>

                {/* ── Col 2: About Us ─────────────────────────── */}
                <div className="p-5">
                  <p className="mb-4 text-[11px] font-semibold tracking-widest text-white/40 uppercase">
                    About Us
                  </p>
                  <ul className="divide-y divide-[#626262]">
                    {aboutItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={close} />
                    ))}
                  </ul>

                  {/* Legal row */}
                  <div className="flex gap-8 border-t border-[#626262] py-3">
                    {legalItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="group"
                      >
                        <span className="block text-[12px] font-medium text-white/60 transition-colors duration-150 group-hover:text-[#F78629]">
                          {item.label}
                        </span>
                        {item.sub && (
                          <span className="block text-[10px] text-white/30">
                            {item.sub}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ── Col 3: App Status ───────────────────────── */}
                <div className="flex flex-col items-center gap-4 rounded-[4px] bg-[#3C3C3C] p-5">
                  {/* Status pill */}
                  <div className="flex justify-center self-stretch">
                    <div className="flex flex-col items-center rounded-full bg-[#F78629] px-6 py-2">
                      <span className="text-[12px]">アプリステータス</span>
                      <span className="text-[10px]">App Status</span>
                    </div>
                  </div>

                  {/* Status label */}
                  <div className="text-center md:mt-[55px]">
                    <p className="text-2xl font-bold text-white">
                      開発中 - MVP
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Under Development - MVP
                    </p>
                  </div>

                  {/* Logo display */}
                  <img
                    src="/assets/images/logo.svg"
                    alt=""
                    className="w-[60px]"
                  />

                  {/* CTA */}
                  <Link
                    href="/status"
                    onClick={close}
                    className="mt-5 flex h-8 w-25 items-center justify-center rounded-[4px] bg-white text-black"
                  >
                    More info
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#242424] p-1.5 duration-200 group-[.active]:bg-[#F78629]">
            <MarqueeTicker />
          </div>
        </div>

        {/* ── Backdrop ──────────────────────────────────────────────── */}
        <div
          className={[
            'fixed top-0 left-0 z-50 h-screen w-full transition-opacity duration-200',
            open
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0',
          ].join(' ')}
          onClick={close}
          aria-hidden="true"
        />
      </div>
    </>
  );
}
