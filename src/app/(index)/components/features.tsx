'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Features() {
  const classWrapperRef = useRef<HTMLDivElement>(null)
  const classTextTopRef = useRef<HTMLSpanElement>(null)
  const classTextMiddleRef = useRef<HTMLSpanElement>(null)
  const classTextBottomRef = useRef<HTMLSpanElement>(null)
  const img01Ref = useRef<HTMLSpanElement>(null)
  const img02Ref = useRef<HTMLSpanElement>(null)
  const img03Ref = useRef<HTMLSpanElement>(null)
  const img04Ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const wrapper = classWrapperRef.current
    const topEl = classTextTopRef.current
    const middleEl = classTextMiddleRef.current
    const bottomEl = classTextBottomRef.current
    const img01El = img01Ref.current
    const img02El = img02Ref.current
    const img03El = img03Ref.current
    const img04El = img04Ref.current
    if (
      !wrapper ||
      !topEl ||
      !middleEl ||
      !bottomEl ||
      !img01El ||
      !img02El ||
      !img03El ||
      !img04El
    )
      return

    const imgs = [img01El, img02El, img03El, img04El]

    gsap.set(imgs, { yPercent: 100, force3D: true, willChange: 'transform' })

    const getExitYPercent = (el: HTMLElement) => {
      const H = wrapper.clientHeight || window.innerHeight
      const h = el.clientHeight || el.getBoundingClientRect().height || 1
      const epsilon = 2
      return -(1 + H / h) * 100 - epsilon
    }

    const splits: SplitText[] = []
    const ctx = gsap.context(() => {
      const splitTop = new SplitText(topEl, { type: 'chars' })
      const splitMiddle = new SplitText(middleEl, { type: 'chars' })
      const splitBottom = new SplitText(bottomEl, { type: 'chars' })
      splits.push(splitTop, splitMiddle, splitBottom)

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            imgs.forEach((el) =>
              gsap.set(el, {
                yPercent: gsap.getProperty(el, 'yPercent') as number,
              })
            )
          },
        },
        defaults: { ease: 'none', stagger: { each: 0.06, from: 'start' } },
      })

      const scaleChars = (
        targets: Element[] | NodeListOf<Element>,
        fromScale: number,
        toScale: number,
        origin: string,
        pos?: gsap.Position
      ) =>
        textTl.fromTo(
          targets,
          { scaleY: fromScale, transformOrigin: origin },
          { scaleY: toScale, transformOrigin: origin },
          pos
        )

      scaleChars(splitTop.chars, 1, 0, '50% 0%')
      scaleChars(splitMiddle.chars, 0, 1, '50% 100%')
      scaleChars(splitMiddle.chars, 1, 0, '50% 0%')
      scaleChars(splitBottom.chars, 0, 1, '50% 100%')

      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=400%',
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            imgs.forEach((el) =>
              gsap.set(el, {
                yPercent: gsap.getProperty(el, 'yPercent') as number,
              })
            )
          },
        },
        defaults: { ease: 'none' },
      })

      imageTl.to(
        img01El,
        { yPercent: () => getExitYPercent(img01El), force3D: true },
        0
      )

      imageTl.to(
        img02El,
        { yPercent: () => getExitYPercent(img02El), force3D: true },
        '<+=0.2'
      )

      imageTl.to(
        img03El,
        { yPercent: () => getExitYPercent(img03El), force3D: true },
        '<+=0.2'
      )

      imageTl.to(
        img04El,
        { yPercent: () => getExitYPercent(img04El), force3D: true },
        '<+=0.2'
      )
    }, wrapper)
    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
      splits.forEach((s) => s.revert())
    }
  }, [])

  return (
    <div
      ref={classWrapperRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative text-center text-[clamp(42px,20px+7.8vw,72px)] leading-none font-bold whitespace-nowrap text-[#F78629] will-change-transform md:text-[clamp(80px,calc(30px+15.25vw),100px)]">
        <span ref={classTextTopRef} className="inline-block">
          情報は<span className="max-md:hidden">、届け方次第</span>
        </span>
        <span
          ref={classTextMiddleRef}
          className="absolute inset-0 inline-block"
        >
          必要な人に
        </span>
        <span
          ref={classTextBottomRef}
          className="absolute inset-0 inline-block"
        >
          必要な形で
        </span>
        <p className="mt-4 mx-auto w-full max-w-[600px] px-5 text-center text-[clamp(18px,16px+100vw*.006,24px)] md:text-[clamp(16px,14.206px+100vw*.0046,22px)] md:text-[clamp(26px,23px+0.75vw,36px)] leading-snug whitespace-normal text-[#F78629] uppercase whitespace-nowrap">
          あなたの発信した情報は簡単に<br />切り取られない設計です。<br />あなたの情報は軽く扱われません。
        </p>
      </div>

      <span
        ref={img01Ref}
        className="group absolute top-full left-0 w-[45vw] max-w-[400px] origin-bottom border-2 border-[#F78629]/40 duration-300 will-change-transform hover:border-[4px] hover:border-[#F78629] md:w-[25vw]"
      >
        <img
          src="/assets/images/features-01.png"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] whitespace-nowrap text-white uppercase duration-300 group-hover:text-[#F78629]">
          ドロップ
        </span>
      </span>
      <span
        ref={img02Ref}
        className="group absolute top-full right-0 w-[45vw] max-w-[400px] origin-bottom border-2 border-[#F78629]/40 duration-300 will-change-transform hover:border-[4px] hover:border-[#F78629] md:w-[25vw]"
      >
        <img
          src="/assets/images/features-02.png"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] whitespace-nowrap text-white uppercase duration-300 group-hover:text-[#F78629]">
          チャンネル
        </span>
      </span>
      <span
        ref={img03Ref}
        className="group absolute top-full left-0 w-[45vw] max-w-[400px] origin-bottom border-2 border-[#F78629]/40 duration-300 will-change-transform hover:border-[4px] hover:border-[#F78629] md:w-[25vw]"
      >
        <img
          src="/assets/images/features-03.png"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] whitespace-nowrap text-white uppercase duration-300 group-hover:text-[#F78629]">
          <span className="md:hidden">
            ダイレクト
            <br />
            メッセージ
          </span>
          <span className="max-md:hidden">ダイレクトメッセージ</span>
        </span>
      </span>
      <span
        ref={img04Ref}
        className="group absolute top-full right-1/5 w-[45vw] max-w-[400px] origin-bottom border-2 border-[#F78629]/40 duration-300 will-change-transform hover:border-[4px] hover:border-[#F78629] md:w-[25vw]"
      >
        <img
          src="/assets/images/features-04.png"
          alt=""
          className="block h-auto w-full"
        />
        <span className="absolute inset-x-0 bottom-0 p-5 text-[clamp(20px,12px+100vw*.0076,30px)] whitespace-nowrap text-white uppercase duration-300 group-hover:text-[#F78629]">
          プロテクション
        </span>
      </span>
    </div>
  )
}
