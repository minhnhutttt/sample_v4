'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Download = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current
    const imageEl = imageRef.current
    const logoEl = logoRef.current
    const textEl = textRef.current
    const buttonsEl = buttonsRef.current

    if (!sectionEl || !imageEl || !logoEl || !textEl || !buttonsEl) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        gsap.set([imageEl, logoEl, textEl, buttonsEl], {
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
          defaults: { ease: 'power4.out' },
        })

        tl.fromTo(
          imageEl,
          { scale: 2.2, autoAlpha: 0, y: 80 },
          { scale: 1, autoAlpha: 1, y: 0, duration: 1.2 },
          0
        )
          .fromTo(
            logoEl,
            { scale: 2.1, autoAlpha: 0, y: 60 },
            { scale: 1, autoAlpha: 1, y: 0, duration: 1.05 },
            0.05
          )
          .fromTo(
            textEl,
            { scale: 1.7, autoAlpha: 0, y: 50 },
            { scale: 1, autoAlpha: 1, y: 0, duration: 0.95 },
            0.12
          )
          .fromTo(
            buttonsEl,
            { scale: 1.7, autoAlpha: 0, y: 40 },
            { scale: 1, autoAlpha: 1, y: 0, duration: 0.85 },
            0.18
          )

        return () => {
          tl.kill()
          gsap.set([imageEl, logoEl, textEl, buttonsEl], { clearProps: 'all' })
        }
      })

      return () => {
        mm.revert()
      }
    }, sectionEl)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="download"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#161003] text-[#F78629] md:bg-[radial-gradient(82%_72%_at_74%_82%,_#3b2d10_10%,_#161003_96%)]"
    >
      {/* Mobile */}
      <div className="flex flex-col pt-20 md:hidden">
        <div className="mx-auto flex w-full max-w-none flex-col items-start gap-[max(20.4px,20.4px+100vw*.0021)] px-5 uppercase">
          <div className="w-full leading-none">
            <img
              src="/assets/images/logo.svg"
              alt="KIVO APP"
              className="mx-auto h-[clamp(104px,78px+9.6vw,224px)] w-auto max-w-full select-none object-contain"
              draggable={false}
            />
          </div>
          <p className="text-[clamp(14px,13.415px+100vw*.0015,16px)] text-[#ffffff]">
            あなたが届ける情報には、
            <br className="max-md:hidden" />
            かけがえのない価値があります。
            <br className="max-md:hidden" />
            その価値が、正しく受け取られる場所。それがKIVOです。
          </p>
          <div className="flex gap-5">
            <a href="#">
              <img src="/assets/images/btn-appstore.png" alt="" />
            </a>
            <a href="#">
              <img src="/assets/images/btn-google.png" alt="" />
            </a>
          </div>
        </div>

        <div className="mt-10 w-full" data-component="image-asset-static">
          <img
            className="w-full p-4"
            src="/assets/images/app-img.png"
            alt=""
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden min-h-screen grid-cols-2 items-center gap-10 px-10 py-20 md:grid lg:px-20">
        <div className="flex items-center justify-center">
          <img
            ref={imageRef}
            src="/assets/images/app-img.png"
            alt=""
            className="h-auto w-full max-w-[520px] object-contain p-4"
          />
        </div>

        <div className="flex flex-col items-start gap-[max(20.4px,20.4px+100vw*.0021)] uppercase">
          <div className="leading-none">
            <img
              ref={logoRef}
              src="/assets/images/logo.svg"
              alt="KIVO APP"
              className="h-[clamp(104px,78px+6.4vw,224px)] w-auto max-w-full select-none object-contain"
              draggable={false}
            />
          </div>
          <p
            ref={textRef}
            className="mt-12 max-w-[720px] leading-[1.1] tracking-[-.02em] text-[#ffffff]"
          >
            <span className="block text-[clamp(28px,22px+1.25vw,48px)]">
              あなたが届ける情報には、<br />
              かけがえのない価値があります。
            </span>
            <span className="mt-12 block text-[clamp(14px,11px+0.625vw,24px)]">
              その価値が、正しく受け取られる場所。それがKIVOです。
            </span>
          </p>
          <div ref={buttonsRef} className="mt-12 flex gap-5">
            <a href="#">
              <img src="/assets/images/btn-appstore.png" alt="" />
            </a>
            <a href="#">
              <img src="/assets/images/btn-google.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
