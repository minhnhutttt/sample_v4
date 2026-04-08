'use client'

import { motion } from 'framer-motion'

const points = [
  {
    num: '1',
    numAlt: 'ポイント1',
    img: '/assets/images/point_img-1.png',
    title: '大容量！',
    desc: (
      <>
        大容量！驚異の10000パフ！
        <br />
        タバコで換算すると約30箱分も。
        <br />
        1パフあたり約0.6円でコスパ抜群！
      </>
    ),
    note: (
      <>
        ※環境や吸い方により回数に大きくばらつきがございます。
        <br />
        初期不良ではございませんので、あらかじめご了承ください。
      </>
    ),
  },
  {
    num: '2',
    numAlt: 'ポイント2',
    img: '/assets/images/point_img-2.png',
    title: '強い打撃感',
    desc: '独自開発のフレーバーは果実感たっぷり！これまで体験できなかった濃厚な満足感をあなたに。',
  },
  {
    num: '3',
    numAlt: 'ポイント3',
    img: '/assets/images/point_img-3.png',
    title: 'カワイイ本体',
    desc: (
      <>
        薄さ16.8mm、重さ53g。スタイリッシュでコンパクトな本体がかわいい。
        <br className="max-md:hidden" />
        スマホ感覚で持っていても違和感なし！
      </>
    ),
  },
  {
    num: '4',
    numAlt: 'ポイント4',
    img: '/assets/images/point_img-4.png',
    title: '気を使わない',
    desc: '二重コイル構造で気化音なしで周りに聞こえにくい！ニコチン、タール0で、イヤなニオイもまったくありません。',
  },
]

const Points = () => {
  return (
    <section id="link-2" className="bg-[#030129] pt-32 md:pt-48">
      <div className="rounded-tr-[28vw] bg-[#A35EF9] pt-16 md:rounded-tr-[200px]">
        <div className="mx-auto mb-20 w-11/12">
          <img src="/assets/images/point_ttl-1.png" alt="Chillaxの推しPOINT" />
        </div>
        <div className="space-y-[16vw] md:space-y-32">
          {points.map((item, index) => (
            <motion.div
              key={index}
              className="mx-auto w-11/12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={`/assets/images/point_num-${item.num}.svg`}
                alt={item.numAlt}
                className="mb-8 w-full"
              />
              <div className="mt-4 text-center text-[13vw] font-bold text-white md:text-[80px]">
                {item.title}
              </div>
              <figure className="my-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-4xl mx-auto w-[96%]"
                />
              </figure>
              <div className="mx-auto text-center tracking-wider md:w-11/12">
                <p className="mt-2 text-[5.4vw] font-medium leading-relaxed text-white md:text-[32px]">
                  {item.desc}
                </p>
                {item.note && (
                  <p className="mt-2 text-[3.8vw] leading-relaxed text-white md:text-[18px]">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Points
