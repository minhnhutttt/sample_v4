'use client'

import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Introduction = () => {
  return (
    <section className="bg-[#030129]">
      <img
        src="/assets/images/view_img-1.jpg"
        alt=""
        className="h-auto w-full"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="-mt-[32vw] md:-mt-64"
      >
        <img
          src="/assets/images/heart-1.png"
          alt=""
          className="mx-auto h-auto"
        />
      </motion.div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute left-[5%] top-0 w-1/2 max-w-[290px] -translate-y-[60%]"
        >
          <img src="/assets/images/read_ttl-1.png" alt="見た目で判断しないで" />
        </motion.div>
        <img
          src="/assets/images/read_img-1.jpg"
          alt=""
          className="h-auto w-full"
        />
        <div
          className="bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/read_bg-1.png')",
            backgroundSize: '100% 100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 mt-14 text-center"
          >
            <img
              src="/assets/images/read_ttl-2.png"
              alt="スタイリッシュ＆コンパクト"
              className="mx-auto w-full max-w-[600px]"
            />
          </motion.div>
          <div className="flex gap-12 px-9 max-md:flex-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full rounded-[60px] border border-[#00E4E4] px-2 py-10 text-center"
            >
              <div className="mb-6">
                <img
                  src="/assets/images/read_itemTtl-1.png"
                  alt="爆煙で濃厚"
                  className="mx-auto h-auto drop-shadow-[0_0_.4rem_#00E4E4] filter"
                />
              </div>
              <p className="text-xl text-white md:text-[22px]">
                Chillax5が厳選した
                <br />
                おいしい果実フレーバー
                <br />
                清涼感も長続きして満足
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full rounded-[60px] border border-[#00E4E4] px-2 py-10 text-center"
            >
              <div className="mb-6">
                <img
                  src="/assets/images/read_itemTtl-2.png"
                  alt="10,000パフ"
                  className="mx-auto h-auto drop-shadow-[0_0_.4rem_#00E4E4] filter"
                />
              </div>
              <p className="text-xl text-white md:text-[22px]">
                驚異の大容量で
                <br />
                圧倒的なコスパ！
                <br />
                面倒なリキッド交換は不要
                <br />
                ※1回の吸引＝1パフ
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-28"
        >
          <div className="text-center text-[12vw] font-bold leading-none tracking-wider text-white md:text-[64px]">
            <span className="block text-[8vw] text-white md:text-[36px]">
              Chillaxは全世界で
            </span>
            累計
            <b className="mx-4 text-[21vw] font-black text-[#00E4E4] md:text-[150px]">
              375
            </b>
            万台
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 -mt-[10vw] md:-mt-16"
        >
          <img
            src="/assets/images/read_ttl-3.png"
            alt="突破"
            className="mx-auto h-auto max-w-[48%] md:max-w-[272px]"
          />
        </motion.div>
        <div className="-mt-12 pl-6 md:-mt-16">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.4}
            spaceBetween={16}
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.3,
              },
            }}
          >
            {Array.from({ length: 7 }, (_, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-[1/1] w-full overflow-hidden">
                  <img
                    src={`/assets/images/list_img1-${i + 1}.png`}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img
          src="/assets/images/arw_img1-1.png"
          alt=""
          className="-my-24 mx-auto h-auto"
        />
      </div>
    </section>
  )
}

export default Introduction
