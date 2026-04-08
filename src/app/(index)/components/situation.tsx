'use client'

import { motion } from 'framer-motion'

const voices = [
  {
    image: '/assets/images/scene_img1.png',
    alt: 'ダイエットサポートシーン',
    title: 'ダイエットで口さみしいときに',
    text: (
      <>
        何か食べたくなってもガマンしなきゃ…！
        <br />
        そんな時に満足感と清涼感のあるフレーバーがあなたをサポートします。
        <br />
        ノンカロリーだから気にせず吸ってダイエット継続！
      </>
    ),
    bgColor: 'bg-[#00E4E4]',
    rounded: 'rounded-r-full',
    reverse: false,
  },
  {
    image: '/assets/images/scene_img2.png',
    alt: 'ダイエットサポートシーン2',
    title: '夜のリラックスタイムに',
    text: (
      <>
        眠る前のひとときにすーっとリラックス。
        <br />
        果実の香りが優しくあなたを包み込みます。
        <br />
        ざわついた気持ちを穏やかにして、さわやかに目覚めるための1パフを。
      </>
    ),
    bgColor: 'bg-[#1EA5FF]',
    rounded: 'rounded-l-full',
    reverse: true,
  },
  {
    image: '/assets/images/scene_img3.png',
    alt: 'リラックスシーン',
    title: '落ち込んだときに',
    text: (
      <>
        ストレスをため込んでしまった…！
        <br />
        そんなときに包み込んでくれる優しさがChillaxにはあります。
        <br />
        落ち込んだ時の気分転換に最適です。
      </>
    ),
    bgColor: 'bg-[#A35EF9]',
    rounded: 'rounded-r-full',
    reverse: false,
  },
  {
    image: '/assets/images/scene_img4.png',
    alt: '集中サポートシーン',
    title: '減煙や禁煙中に',
    text: (
      <>
        大容量だから交換の必要がなくて集中が途切れません。
        <br />
        わずらわしさがないからこそ継続ができるというもの。
        <br />
        もっとトライを続けたいあなたをサポートします。
      </>
    ),
    bgColor: 'bg-[#FF00CC]',
    rounded: 'rounded-l-full',
    reverse: true,
  },
]

const Situation = () => {
  return (
    <section className="bg-[#030129] pt-24">
      <div className="mb-30 mx-auto w-[80%] border-b border-t border-white py-12 text-center text-[42px] font-bold leading-normal text-white md:text-[48px]">
        <img src="/assets/images/scene_ttl.png" alt="!" className="mx-auto" />
        チルタイムを
        <br className="md:hidden" />
        演出
      </div>
      <div className="mt-24 space-y-[22vw] md:space-y-32">
        {voices.map((voice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`relative z-10 flex gap-[5%] px-[5%] md:gap-0 ${
              voice.reverse ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`flex-1 ${voice.reverse ? 'pl-0 md:pl-6' : 'pl-0 md:pr-6'}`}
            >
              <div className="py-[30%] md:py-20">
                <p className="mb-[2.4vw] text-[5.6vw] font-bold tracking-widest md:mb-6 md:text-[26px]">
                  {voice.title}
                </p>
                <p className="text-[4.2vw] font-medium tracking-wider md:text-[24px] md:leading-relaxed">
                  {voice.text}
                </p>
              </div>
            </div>
            <div className="w-2/5 md:w-[44%]">
              <img
                src={voice.image}
                alt={voice.alt}
                className="aspect-[1/1] h-auto w-full"
              />
            </div>
            <span
              className={`absolute bottom-0 top-0 -z-10 w-11/12 md:w-2/3 ${voice.rounded} ${voice.bgColor} ${
                voice.reverse ? 'right-0' : 'left-0'
              }`}
            ></span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Situation
