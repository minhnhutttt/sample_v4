const AnnouncementsHead = () => {
  return (
    <div className="px-5 pb-10">
      <div className="@container mx-auto w-full max-w-[1400px]">
        <h2 className="text-center text-[15cqw] leading-none font-black uppercase md:text-[13cqw]">
          <p>UPDATES</p>
          <p className="flex items-center justify-center max-md:flex-col">
            BY KIVO
            <button className="group relative mt-[2cqw] flex h-[20cqw] w-[50cqw] items-center justify-center overflow-hidden md:h-[9cqw] md:w-[12cqw]">
              <img src="/assets/images/icon.png" alt="" />
            </button>
          </p>
        </h2>
        <p className="mt-[2cqw] text-center text-[20px] md:text-[2cqw]">
          KIVOの最新情報、プレスリリース、アップデートノートをここで発信します。
        </p>
      </div>
    </div>
  );
};

export default AnnouncementsHead;
