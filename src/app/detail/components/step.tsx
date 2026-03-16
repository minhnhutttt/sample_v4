'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: '1. Draft', text: 'First delivery flow for your information.' },
  { title: '2. Publish', text: 'The message reaches your audience clearly.' },
  { title: '3. Share', text: 'Distribution expands with consistent quality.' },
  { title: '4. Value', text: 'Information creates value in every touchpoint.' },
]

export default function Step() {
  const rootRef = useRef<HTMLDivElement>(null)
  const logoSectionRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  const sliderSectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useLayoutEffect(() => {
    const rootEl = rootRef.current
    const logoSectionEl = logoSectionRef.current
    const logoEl = logoRef.current
    const sliderSectionEl = sliderSectionRef.current
    const trackEl = trackRef.current
    const cards = cardRefs.current

    if (
      !rootEl ||
      !logoSectionEl ||
      !logoEl ||
      !sliderSectionEl ||
      !trackEl ||
      cards.length === 0
    ) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(logoEl, { autoAlpha: 1, scale: 1 })
      gsap.set(cards, { yPercent: 110, autoAlpha: 1 })
      gsap.set(cards[0], { yPercent: 0 })
      const getCenteredTrackX = (index: number) => {
        const card = cards[index]
        const viewportWidth = sliderSectionEl.clientWidth || window.innerWidth
        const cardCenterX = card.offsetLeft + card.offsetWidth / 2
        return viewportWidth / 2 - cardCenterX
      }

      gsap.set(trackEl, {
        x: () => getCenteredTrackX(0),
        force3D: true,
        willChange: 'transform',
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: logoSectionEl,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }).to(logoEl, { autoAlpha: 0, scale: 0.9, ease: 'none' })

      const horizontalTl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sliderSectionEl,
          start: 'top top',
          end: '+=420%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      horizontalTl
        .to(trackEl, { x: () => getCenteredTrackX(1), duration: 1 })
        .to(cards[1], { yPercent: 0, duration: 0.7 }, '<+=0.1')
        .to(trackEl, { x: () => getCenteredTrackX(2), duration: 1 })
        .to(cards[2], { yPercent: 0, duration: 0.7 }, '<+=0.1')
        .to(trackEl, { x: () => getCenteredTrackX(3), duration: 1 })
        .to(cards[3], { yPercent: 0, duration: 0.7 }, '<+=0.1')
    }, rootEl)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className="bg-[#1c1917] text-white">
      <section
        ref={logoSectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <img
          ref={logoRef}
          src="/assets/images/logo.svg"
          alt="KIVO"
          className="h-auto w-[min(82vw,780px)] select-none object-contain"
          draggable={false}
        />
      </section>

      <section
        ref={sliderSectionRef}
        className="relative h-screen overflow-hidden border-t border-[#2a2623]"
      >
        <div
          ref={trackRef}
          className="flex h-full items-center gap-8 px-[8vw] md:gap-12 md:px-[10vw]"
        >
          {steps.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="flex w-[72vw] min-w-[72vw] flex-col items-center rounded-[28px] border border-[#3b342f] bg-[#26221e] p-6 md:w-[36vw] md:min-w-[36vw] md:p-10"
            >
              <img
                src="/assets/images/phone.png"
                alt={item.title}
                className="h-auto w-[min(64vw,420px)] object-contain md:w-[min(26vw,460px)]"
                draggable={false}
              />
              <div className="mt-6 text-center uppercase">
                <p className="text-[clamp(18px,16px+0.5vw,26px)] font-bold text-[#F78629]">
                  {item.title}
                </p>
                <p className="mt-3 text-[clamp(12px,11px+0.25vw,16px)] text-[#e6ddd0]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
