'use client';

import { useEffect, useRef, useState } from 'react';

const HomeAwards = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  const awards = [
    { title: 'Ad Age Best Workplaces - 2026', image: 'a-01.png' },
    {
      title: 'U.S. Agency Independent Agency of the Year - 2025',
      image: 'a-02.png',
    },
    { title: 'Digiday Most Innovative Agency - 2025', image: 'a-03.png' },
    {
      title: 'U.S. Agency Marketing Agency of the Year - 2025',
      image: 'a-04.png',
    },
    { title: 'Adweek Agency of the Year Finalist - 2025', image: 'a-05.png' },
    {
      title: 'U.S. Agency Awards: Digital Agency of the Year - 2024',
      image: 'a-06.png',
    },
    {
      title: "Adweek's Fastest Growing Agencies - 2023, 2024",
      image: 'a-07.png',
    },
    {
      title: "Inc.'s 5000 Fastest Growing Companies - 2021, 2022, 2023, 2024",
      image: 'a-08.png',
    },
    {
      title: "Inc.'s Best Workplaces in America - 2023, 2024",
      image: 'a-09.png',
    },
    {
      title: 'Google Premiere Partner of the Year - Online Sales',
      image: 'a-10.png',
    },
    {
      title: 'Hello Partner Top 30 Affiliate Agencies - 2024',
      image: 'a-11.png',
    },
    {
      title: 'Best Influencer Marketing Partnership - 2024',
      image: 'a-12.png',
    },
    { title: 'Digiday: Best Use of Retail Media - 2024', image: 'a-13.png' },
  ];

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smooth follow animation
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setImagePosition((prev) => ({
        x: lerp(prev.x, cursorPosition.x, 0.1),
        y: lerp(prev.y, cursorPosition.y, 0.1),
      }));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursorPosition, isVisible]);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    if (!isVisible) {
      setIsVisible(true);
      setImagePosition(cursorPosition);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  // Calculate slide height based on the 16:9 aspect ratio
  const slideHeight = 'calc(57.5rem * 9 / 16)';

  return (
    <div className="bg-green w-full">
      <div className="relative py-[9rem] md:py-[10rem]" ref={containerRef}>
        <div className="site-max flex flex-col items-center gap-y-[5rem] text-center">
          <h2 className="h7">AWARDS</h2>
          <p className="h2 md:max-w-[100rem]">
            Our hard work keeps paying off.
          </p>
        </div>
        <div
          className="relative z-2 mt-[10rem] flex flex-col divide-y divide-[#cce56133] border-y border-[#cce56133]"
          onMouseLeave={handleMouseLeave}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="site-max cursor-pointer py-[3rem] hover:text-[#CCE561]">
                <p className="h4 transition-colors duration-300 ease-out">
                  {award.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cursor Image Slider */}
        {isVisible && (
          <div
            className="pointer-events-none absolute z-[99] max-md:hidden"
            style={{
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
            }}
          >
            <div
              className="relative w-[57.5rem] overflow-hidden rounded-lg shadow-2xl"
              style={{
                height: slideHeight,
              }}
            >
              {/* Slider container */}
              <div
                ref={imageRef}
                className="absolute top-0 left-0 w-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translateY(calc(-${activeIndex} * ${slideHeight}))`,
                }}
              >
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="w-[57.5rem]"
                    style={{
                      height: slideHeight,
                    }}
                  >
                    <img
                      src={`/assets/images/${award.image}`}
                      alt={award.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        console.error('Image load error:', award.image);
                        e.currentTarget.src =
                          'https://via.placeholder.com/920x518?text=Image+Not+Found';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeAwards;
