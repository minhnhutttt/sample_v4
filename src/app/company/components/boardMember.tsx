'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const BoardMember = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const item02Ref = useRef<HTMLDivElement>(null)
  const item04Ref = useRef<HTMLDivElement>(null)
  const item05Ref = useRef<HTMLDivElement>(null)
  const item06Ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current

    const items = [
      item02Ref.current,
      item04Ref.current,
      item05Ref.current,
      item06Ref.current,
    ].filter(Boolean) as HTMLDivElement[]

    if (!wrapper || items.length === 0) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top center',
          end: 'bottom top',
          invalidateOnRefresh: true,
        },
      })

      tl.from(items, {
        top: 'auto',
        left: 'auto',
        duration: 1,
      })
    }, wrapper)
    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className="bg-stone-900 px-5 pt-32 pb-28 md:pt-32 md:pb-64 text-[#f6c548]">
      <h2 className="text-center text-[clamp(68px,46.55px+100vw*.055,140px)] leading-[1.3] tracking-tighter uppercase">
        Board Member
      </h2>
      <div
        ref={wrapperRef}
        className="relative flex min-h-screen items-center justify-center font-bold text-black"
      >
        <div
          ref={item02Ref}
          className="absolute top-[10%] left-[25%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[-3deg] flex-col items-center justify-center rounded-2xl bg-[#ffc36a] p-4 md:top-[10%] md:left-[45%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Arima Yoshiki
          </p>
          <img
            src="/assets/images/people-02.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CEO
          </p>
        </div>
        <div
          ref={item04Ref}
          className="absolute top-[38%] left-[65%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[2deg] flex-col items-center justify-center rounded-2xl bg-[#D9F7BB] p-4 md:top-[30%] md:left-[64%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Kato Yoshiya
          </p>
          <img
            src="/assets/images/people-02.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CFO
          </p>
        </div>
        <div
          ref={item05Ref}
          className="absolute top-[70%] left-[45%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[-2deg] flex-col items-center justify-center rounded-2xl bg-[#E07787] p-4 md:top-[60%] md:left-[45%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Ishida Toshiyuki
          </p>
          <img
            src="/assets/images/people-01.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            COO
          </p>
        </div>
        <div
          ref={item06Ref}
          className="absolute top-[42%] left-[4%] flex h-[clamp(190px,26vw,320px)] w-[clamp(150px,20vw,240px)] rotate-[7deg] flex-col items-center justify-center rounded-2xl bg-[#8ADCFF] p-4 md:top-[30%] md:left-[26%] md:p-6"
        >
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            Naridomi Yasuhiro
          </p>
          <img
            src="/assets/images/people-02.png"
            alt=""
            className="h-[clamp(100px,13vw,180px)] w-auto object-cover"
          />
          <p className="text-center text-[clamp(18px,17.415px+100vw*.0015,20px)] uppercase">
            CTO
          </p>
        </div>
      </div>
    </div>
  )
}

export default BoardMember
