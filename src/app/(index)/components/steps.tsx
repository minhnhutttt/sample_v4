'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: 1,
    image: '/assets/images/step_img-1.png',
    arw: '/assets/images/step_arw-1.svg',
    text: <>本体を取り出す</>,
  },
  {
    step: 2,
    image: '/assets/images/step_img-2.png',
    arw: '/assets/images/step_arw-1.svg',
    text: (
      <>
        シリコンストッパーを外し、
        <br />
        本体下部のステッカーをはがす
      </>
    ),
  },
  {
    step: 3,
    image: '/assets/images/step_img-3.png',
    arw: '/assets/images/step_arw-1.svg',
    text: (
      <>
        本体下部のLEDが2つ
        <br />
        同時に点灯していたら正常です
      </>
    ),
  },
  {
    step: 4,
    image: '/assets/images/step_img-4.png',
    arw: '/assets/images/step_arw-1.svg',
    text: (
      <>
        最高のチルタイムを
        <br />
        満喫してください
      </>
    ),
  },
]

const liquidStatus = [
  {
    title: '液体残量',
    ico: {
      src: '/assets/images/detail_item4-1.png',
      alt: '液体残量',
      width: 84,
      height: 84,
    },
    images: [
      {
        src: '/assets/images/detail_item1-1.png',
        alt: '液体残量正常',
        width: 184,
        height: 104,
        desc: '正常に使用可能',
      },
      {
        src: '/assets/images/detail_item3-1.png',
        alt: '液体残量なし',
        width: 84,
        height: 84,
        desc: '液体がなくなった合図',
        note: '※残量が29％以下',
      },
    ],
  },
  {
    title: '充電状況',
    ico: {
      src: '/assets/images/detail_item4-2.png',
      alt: '充電状況',
      width: 84,
      height: 84,
    },
    images: [
      {
        src: '/assets/images/detail_item2-1.png',
        alt: 'バッテリー正常',
        width: 184,
        height: 104,
        desc: '正常に使用可能',
      },
      {
        src: '/assets/images/detail_item3-2.png',
        alt: 'バッテリーなし',
        width: 84,
        height: 84,
        desc: '電池がなくなった合図',
        note: '※残量が29％以下',
      },
    ],
  },
]

const Steps = () => {
  return (
    <section id="link-3" className="bg-[#A35EF9] pt-32 md:pt-48">
      <div className="rounded-tl-[28vw] bg-[#00CF90] pt-16 md:rounded-tl-[200px]">
        <p className="mx-auto w-2/3">
          <img
            src="/assets/images/step_ttl-sub.svg"
            alt="How to Chillax "
            className="w-full"
          />
        </p>
        <div className="mb-[12vw] text-center text-[13vw] font-black leading-tight text-white md:mb-20 md:text-[92px]">
          届いたら
          <br />
          すぐつかえる！
        </div>
        <div className="space-y-[12vw] md:space-y-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="mx-auto w-11/12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="max-w-1/2 mx-auto">
                <img
                  src={`/assets/images/step_num-${item.step}.svg`}
                  alt={`Step${item.step}`}
                  className="mx-auto"
                />
              </p>
              <p className="mb-6 mt-4 text-center text-[6vw] font-medium leading-normal tracking-wider text-white md:text-[32px]">
                {item.text}
              </p>
              <figure className="relative">
                <img
                  src={item.image}
                  alt={`ステップ${item.step}のイメージ`}
                  width={680}
                  height={400}
                  className="aspect-[680/400] h-auto w-full rounded-2xl"
                />
              </figure>
              {index < steps.length - 1 && item.arw && (
                <img
                  src={item.arw}
                  alt={`ステップ${item.step}の補足画像`}
                  width={200}
                  height={200}
                  className="mx-auto mt-8 h-auto w-[100px]"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-[16vw] w-11/12 text-white md:mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-12 text-center text-[10vw] font-medium leading-tight tracking-widest md:text-[60px]">
            一目でわかる
            <br />
            残量表示
          </div>
          <img
            src="/assets/images/battery_img.png"
            alt="一目でわかる残量表示"
            width={688}
            height={700}
            className="aspect-[688/700] h-auto w-full"
          />
          <p className="mb-16 mt-10 text-center text-[7vw] underline underline-offset-8 md:text-[36px]">
            吸引時の本体下部のLEDの色で
            <br className="max-md:hidden" />
            各種残量がわかります。
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex w-11/12 flex-wrap gap-[8%] rounded-2xl bg-black px-[5%] py-[8%] md:p-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {liquidStatus.map((status, idx) => (
            <div key={idx} className="w-[46%] text-white">
              <img
                src={status.ico.src}
                alt={status.ico.alt}
                width={status.ico.width}
                height={status.ico.height}
                className="mx-auto h-auto max-md:h-[16vw] max-md:w-auto"
              />
              <h3 className="rounded-full border border-white p-[3.8%] text-center text-[5vw] md:p-4 md:text-3xl">
                {status.title}
              </h3>
              {status.images.map((img, i) => (
                <div key={i} className="mb-4">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="mx-auto h-auto max-md:h-[16vw] max-md:w-auto"
                  />
                  <p className="mt-2 text-center text-[3vw] md:text-xl">
                    {img.desc}
                  </p>
                  <p className="mt-2 text-center text-[3vw] md:text-xl">
                    {img.note}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Steps
