import Link from 'next/link';

const Button = () => {
  return (
    <Link
      href="/"
      className="mx-auto flex h-16 w-[240px] items-center justify-center gap-[15px] rounded-[20px] bg-[#F78629] md:h-[95px] md:w-[362px]"
    >
      <svg
        className="w-4 md:w-12"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col">
        <span className="text-[16px] font-bold md:text-[20px]">
          アプリをダウンロード
        </span>
        <span className="text-[10px] font-light md:text-[12px]">
          無料で始められます
        </span>
      </span>
    </Link>
  );
};
export default Button;
