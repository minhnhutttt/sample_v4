'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const slides = [
    '/assets/images/intr_item1-1.jpg',
    '/assets/images/intr_item1-2.jpg',
    '/assets/images/intr_item1-3.jpg',
    '/assets/images/intr_item1-4.jpg',
    '/assets/images/intr_item1-5.jpg',
  ]

  return (
    <section id="link-1" className="relative bg-[#030129]">
      <div className="mx-[5%] mb-12 border-b border-t border-white py-8 text-center text-[6.4vw] leading-normal text-white md:text-[48px]">
        そんなChillaxが
        <br />
        日本限定パッケージで登場！
      </div>
      <div className="relative mx-auto w-[83%]">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setTimeout(() => {
              swiper.autoplay?.start()
            }, 100)
          }}
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`slide-${idx}`}
                width={1200}
                height={800}
                className="rounded-4xl h-auto w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 w-[10%] -translate-x-full -translate-y-1/2"
        >
          <img src="/assets/images/prev.svg" alt="前へ" className="h-auto" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 w-[10%] -translate-y-1/2 translate-x-full"
        >
          <img src="/assets/images/next.svg" alt="次へ" className="h-auto" />
        </button>
      </div>
      <div className="mx-auto mb-8 pt-20 text-center text-[8vw] font-bold text-white md:text-5xl">
        日本限定パッケージ
        <br />
        フレーバー各種
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-fit"
      >
        <img
          src="/assets/images/price_img-4980.png"
          alt="4980円（税込）"
          width={573}
          height={242}
          className="mx-auto object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="mt-[3vw] text-center text-[7vw] text-white md:mt-16 md:text-3xl">
          ＼ Chillaxを始めてみる ／
        </p>
        <Link
          href="#collection-component-1754018041708"
          className="animate-neonPulse mx-auto mt-9 block w-3/4"
        >
          <img
            src="/assets/images/btn-1.svg"
            alt="BUY NOW"
            width={600}
            height={120}
          />
        </Link>
      </motion.div>
    </section>
  )
}

export default Products
