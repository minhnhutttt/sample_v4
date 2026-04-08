'use client'

import { useEffect, useState } from 'react'

const FV = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        id="viewAnim"
        className={`fixed inset-0 -z-10 bg-[#EDA5F2] transition-all duration-500 ${scrolled ? 'top-0 rounded-tl-none' : 'top-[12vw] rounded-tl-[100px] md:top-24 md:rounded-tl-[300px]'}`}
        style={{
          backgroundImage: "url('/assets/images/logo_bg.svg')",
          backgroundSize: '90% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <span className="animate-floatY animate-delay-0 fixed left-[calc(50vw-920px)] top-[28%] max-w-[430px]">
          <img src="/assets/images/view_dec1-1.png" alt="" />
        </span>
        <span className="animate-floatY animate-delay-1 fixed right-[calc(50vw-850px)] top-1/2 max-w-[430px]">
          <img src="/assets/images/view_dec1-2.png" alt="" />
        </span>
        <span className="animate-floatY animate-delay-2 fixed bottom-[0%] left-[calc(50vw-820px)] max-w-[430px]">
          <img src="/assets/images/view_dec1-3.png" alt="" />
        </span>
      </div>

      <div className="mx-auto max-w-[750px]">
        <div className="px-[5%]">
          <div>
            <img src="/assets/images/view_ttl1.png" alt="" />
          </div>
          <img src="/assets/images/view_img-2.png" alt="" />
          <div className="max-w-10/12 mx-auto pb-9">
            <img
              src="/assets/images/view_ttl2.png"
              alt="ノンニコチン ノンタール"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FV
