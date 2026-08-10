'use client';

import { useEffect, useRef } from 'react';

type ParallaxProps = {
  /** Cường độ parallax. 0 = đứng yên, 0.25 ~ nhẹ, 0.5 = mạnh. Âm = chạy ngược. */
  speed?: number;
  /** Tắt parallax khi OS bật "giảm chuyển động". Đặt false để luôn chạy. */
  respectReducedMotion?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Parallax = ({
  speed = 0.25,
  respectReducedMotion = true,
  className,
  children,
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (
      respectReducedMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          '[Parallax] Đã tắt vì OS đang bật "giảm chuyển động" (prefers-reduced-motion: reduce). ' +
            'Truyền respectReducedMotion={false} nếu muốn luôn chạy.',
        );
      }

      return;
    }

    let frame = 0;
    let baseTop = 0;
    let height = 0;

    // Đo vị trí gốc khi chưa transform, nếu không rect sẽ tính cả offset
    // vừa áp vào frame trước và giá trị bị cộng dồn vô hạn.
    const measure = () => {
      el.style.transform = '';

      const rect = el.getBoundingClientRect();

      baseTop = rect.top + window.scrollY;
      height = rect.height;
    };

    const update = () => {
      frame = 0;

      // Offset = 0 khi tâm phần tử trùng tâm viewport.
      const center = baseTop + height / 2 - window.scrollY;
      const distance = window.innerHeight / 2 - center;

      el.style.transform = `translate3d(0, ${distance * speed}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    const remeasure = () => {
      measure();
      update();
    };

    remeasure();

    // Ảnh load xong / đổi breakpoint làm thay đổi kích thước -> đo lại.
    const observer = new ResizeObserver(remeasure);

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', remeasure);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', remeasure);
    };
  }, [speed, respectReducedMotion]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
