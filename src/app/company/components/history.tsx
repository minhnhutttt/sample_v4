'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const timelineItems = [
  {
    year: '2026/03',
    title: '株式会社KIVO設立',
    description: 'Establishment of KIVO Inc.',
  },
  {
    year: '2026/04',
    title: '「KIVO」App βテスト',
    description: '“KIVO” App Beta Test',
  },
  {
    year: '2026/06',
    title: 'iOS Appローンチ',
    description: 'iOS App Launch',
  },
  {
    year: '2026/08',
    title: 'Android App ローンチ',
    description: 'Android App Launch',
  },
]

const History = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const heading = headingRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current

    if (!wrapper || !heading || !middleEl || !bottomEl) return

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })

      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: 'none',
          duration: 1.6,
          stagger: { each: 0.06, from: 'start' },
        },
      })

      gsap.set(splitMiddle.chars, { scaleY: 0 })
      headingTl.to(splitBottom.chars, { scaleY: 0, transformOrigin: '50% 100%' })
      headingTl.to(
        splitMiddle.chars,
        { scaleY: 1, transformOrigin: '50% 0%' },
        '<'
      )

      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const card = item.querySelector<HTMLElement>('[data-timeline-card]')
        if (!card) return

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            rotate: 6,
            x: index % 2 === 0 ? 96 : -96,
            y: -10,
          },
          {
            autoAlpha: 1,
            rotate: 0,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              end: 'top 50%',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, wrapper)

    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={wrapperRef}
      className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] overflow-hidden py-[max(24px,24px+100vw*.0212)]"
    >
      <div
        ref={headingRef}
        className="relative z-10 text-center text-[clamp(60px,calc(30px+10.25vw),240px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#F78629] will-change-transform"
      >
        <span ref={textMiddleRef} className="inline-block">
          HISTORY
        </span>
        <span ref={textBottomRef} className="absolute inset-0 inline-block">
          HISTORY
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-10 md:w-[900px]">
        <div className="absolute top-0 bottom-0 left-1/2 w-[6px] -translate-x-1/2 bg-white max-md:left-6 max-md:translate-x-0" />
        <ul className="space-y-10 md:space-y-12">
          {timelineItems.map((item, index) => (
            <li
              key={`${item.year}-${index}`}
              ref={(node) => {
                itemRefs.current[index] = node
              }}
              className="relative pt-8"
            >
              <span className="absolute top-8 left-1/2 z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-[#eee] max-md:left-6 max-md:translate-x-0" />
              <div
                data-timeline-card
                className={`relative flex w-[calc(50%-36px)] items-center rounded-[6px] bg-white p-5 shadow-[4px_13px_30px_1px_rgba(252,56,56,0.2)] max-md:ml-14 max-md:w-[calc(100%-56px)] max-md:flex-col max-md:items-start ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}
              >
                <time className="absolute top-[-15px] inline-flex h-[30px] w-20 items-center justify-center rounded-[5px] bg-[#f5af19] text-[12px] tracking-[0.12em] text-black">
                  {item.year}
                </time>
                <div className="mr-2 flex h-[100px] flex-1 flex-col items-center justify-center max-md:mr-0 max-md:w-full">
                  <h3 className="text-[20px] font-bold text-black">{item.title}</h3>
                  <p className="text-center text-[14px] text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default History
