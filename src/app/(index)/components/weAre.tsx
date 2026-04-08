'use client'

import { motion } from 'framer-motion'

import Characters from './characters'

const WeAre = () => {
  return (
    <section className="bg-[#00CF90] pt-32 md:pt-48">
      <div className="rounded-tr-[28vw] bg-[#FF5EDF] pb-12 pt-16 md:rounded-tr-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-[10vw] text-center text-[16vw] font-black leading-tight tracking-widest text-white md:mb-20 md:text-[92px]"
        >
          We are
          <br />
          Chillax5
          <img
            src="/assets/images/surprisemark.svg"
            alt=""
            className="ml-[1%] inline align-baseline max-md:w-[4%] md:ml-5 md:h-auto md:w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="my-12"
        >
          <img
            src="/assets/images/view_img-1.jpg"
            alt=""
            className="aspect-[750/483] h-auto w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/assets/images/bubble_ttl-1.svg"
            alt="Chillax5はCHILL CITY（チルシティ）に住む救世主ー。人々の安らぎを提供することをモットーとして活動をしている。"
            className="mx-auto mb-6 aspect-[664/253] h-auto w-11/12"
          />
        </motion.div>
        <Characters />
      </div>
    </section>
  )
}

export default WeAre
