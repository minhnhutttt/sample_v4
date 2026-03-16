'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Vision = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textMiddleRef = useRef<HTMLSpanElement>(null)
  const textBottomRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const middleEl = textMiddleRef.current
    const bottomEl = textBottomRef.current

    if (!wrapper || !middleEl || !bottomEl) return

    const ctx = gsap.context(() => {
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
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

      gsap.set([splitMiddle.chars], {
        scaleY: 0,
      })

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) => tl.to(targets, { scaleY: toScale, transformOrigin: origin }, pos)

      scaleChars(splitBottom.chars, 0, '50% 100%')
      scaleChars(splitMiddle.chars, 1, '50% 0%', '<')
    }, wrapper)

    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col gap-[max(22.8px,22.8px+100vw*.0148)] py-[max(24px,24px+100vw*.0212)]"
    >
      <div className="relative z-10 text-center text-[clamp(60px,calc(30px+10.25vw),240px)] leading-none font-bold tracking-tight whitespace-nowrap text-[#F78629] will-change-transform">
        <span ref={textMiddleRef} className="inline-block">
          VISION
        </span>
        <span ref={textBottomRef} className="absolute inset-0 inline-block">
          VISION
        </span>
        <p className="mt-4 mx-auto w-full max-w-[600px] px-5 text-center text-[clamp(18px,16px+100vw*.006,24px)] leading-snug tracking-[0.08em] whitespace-nowrap text-[#F78629] uppercase md:text-[clamp(26px,23px+0.75vw,36px)]">
          私たちはKIVOを通して
          <br />
          人々が発信する情報に価値を付け
          <br />
          必要な人に必要な情報を届けます
        </p>
      </div>
    </div>
  )
}

export default Vision
