const ButtonCta = ({ white }: { white?: boolean }) => {
  return (
    <div className="relative mx-auto flex w-full max-w-[558px] flex-col items-center justify-center">
      <p className="mb-2 flex items-center justify-center gap-2 text-[12px] font-bold before:h-0.5 before:w-5 before:rotate-45 before:bg-[#333] after:h-0.5 after:w-5 after:-rotate-45 after:bg-[#333] md:text-[14px]">
        広告未経験でもOK！
      </p>
      <a
        href="#"
        className="relative flex h-[60px] w-full items-center justify-center rounded-[30px] bg-[linear-gradient(90deg,_#00BDC7_0%,_#00D7E3_50.04%,_#00BDC7_100.09%)] text-[16px] font-bold text-white [box-shadow:0_4px_0_0_#008D95] max-md:pr-16 md:text-[20px]"
      >
        <span className="relative">
          <span>アカウント作成して無料体験</span>
          <span className="absolute bottom-1 left-full flex aspect-191/74 w-[120px] animate-bounce items-center justify-center bg-[url(/assets/images/bubble.png)] bg-cover pb-1.5 text-[11px] font-medium text-[#333] md:w-[191px] md:pb-3.5 md:text-[16px]">
            URLを入れるだけ！
          </span>
        </span>
      </a>
      <p className="mt-2.5 text-[12px] font-medium md:text-[14px]">
        ※無料ではプレビューまで。内容は保存されません
      </p>
    </div>
  );
};

export default ButtonCta;
