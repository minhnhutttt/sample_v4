'use client'

import { motion } from 'framer-motion'

const voices = [
  {
    image: '/assets/images/voice_img1.jpg',
    alt: '果実感に驚く女性',
    title: (
      <>
        吸った瞬間の
        <br />
        果実感は衝撃でした！
      </>
    ),
    text: (
      <>
        こんなにすっきりできて甘い香りに包まれるとは驚きでした！
        <br />
        おいしいし清涼感も長続きするから気分転換に使ってます。
      </>
    ),
    person: '（30代　女性）',
  },
  {
    image: '/assets/images/voice_img2.jpg',
    alt: '満足する女性',
    title: <>イライラ解消しました！</>,
    text: (
      <>
        ダイエットをしていて口さみしかったのですが、濃厚なフレーバーで満足感があって、すっかりハマりました。
        <br />
        イヤなニオイはまったくないし、吸ってる感はしっかりしていて、いろいろな面で助かってます。
      </>
    ),
    person: '（20代　女性）',
  },
  {
    image: '/assets/images/voice_img3.jpg',
    alt: '満足感を得た女性',
    title: <>煙がたっぷりでチル感あり</>,
    text: (
      <>
        十分な量の煙が出て来るのでとても満足感がありました。
        <br />
        持ちやすい大きさで、バッテリーも長持ちだったのがヒットしました！
      </>
    ),
    person: '（20代　女性）',
  },
]

export default function Voice() {
  return (
    <section className="bg-[#030129] pt-24">
      <div className="mb-16 text-center text-[36px] font-medium text-white">
        体験した方の声
        <span className="mx-auto my-4 block h-0.5 w-12 rounded-2xl bg-white"></span>
      </div>
      <div className="space-y-16">
        {voices.map((voice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto flex w-[96%] flex-col gap-7 sm:flex-row"
          >
            <div className="w-full sm:w-2/5">
              <img
                src={voice.image}
                alt={voice.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-1 px-[5%] text-white sm:px-0">
              <div className="mb-6 text-[24px] leading-relaxed">
                {voice.title}
              </div>
              <p className="mb-3 text-lg">{voice.text}</p>
              <p className="text-right text-lg">{voice.person}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
