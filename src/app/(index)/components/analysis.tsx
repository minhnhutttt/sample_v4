'use client'

import { motion } from 'framer-motion'

const Analysis = () => {
  return (
    <section className="pb-18 bg-[#030129] pt-24">
      <h2 className="mb-8 text-center text-[8vw] font-medium text-white md:text-[36px]">
        有害物質の
        <br />
        成分分析試験を実施
        <span className="mx-auto my-4 block h-0.5 w-12 rounded-2xl bg-white"></span>
      </h2>
      <p className="mb-11 text-center text-lg text-white">
        信頼のある第三者機関
        <br className="md:hidden" />
        （日本食品分析センター）にて
        <br />
        成分分析試験を実施しました。
        <br />
        有害成分は認められませんでした。
      </p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-11/12 max-w-[460px]"
      >
        <img
          src="/assets/images/analysis_img1.png"
          alt="日本食品分析センターの分析試験成績書"
          className="w-full"
        />
      </motion.div>
    </section>
  )
}

export default Analysis
