import DragCarousel from '@/components/DragCarousel';

const HomeSlider = () => {
  return (
    <div className="my-10 px-2 text-center md:my-[170px]">
      <h3 className="text-[35px] font-black md:text-[70px]">
        KIVOを選んでいるのは、こんな方たちです。
      </h3>
      <main className="flex min-h-screen items-center justify-center overflow-hidden">
        <DragCarousel />
      </main>
    </div>
  );
};

export default HomeSlider;
