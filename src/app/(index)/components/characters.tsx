'use client'

import type { MotionStyle } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import type { Swiper as SwiperClass } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Slide {
  thumb: { src: string; alt: string }
  name: { src: string; alt: string }
  bubble: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }
  product: { src: string; alt: string }
  description: {
    title: React.ReactNode
    text: React.ReactNode
  }
  buttonStyle: MotionStyle
  profile: {
    src: string
    catch: React.ReactNode
    flavor: string
    age: string
    character: string
    likes: string
    dislikes: string
    skill: React.ReactNode
  }
}

const slides: Slide[] = [
  {
    thumb: {
      src: '/assets/images/intr_thumb-1.png',
      alt: 'CITRUS JELLY',
    },
    name: {
      src: '/assets/images/intr_name-1.png',
      alt: 'シトラスゼリー',
    },
    bubble: {
      src: '/assets/images/intr_bubble-1.svg',
      alt: 'この一口であなたが明るく元気になれますようにっ！',
      width: 333,
      height: 156,
      className: 'max-md:aspect-[333/156] ml-auto max-md:w-4/5',
    },
    product: {
      src: '/assets/images/intr_item-1.png',
      alt: 'シトラスゼリー',
    },
    description: {
      title: 'シトラスゼリー',
      text: (
        <>
          弾ける甘酸っぱさと
          <br />
          ゼリーの甘さが癖になる！
        </>
      ),
    },
    buttonStyle: {
      backgroundColor: '#00E4E4',
      boxShadow: '0 0 20px #00E4E4',
    },
    profile: {
      src: '/assets/images/intr_pop-1.png',
      catch: (
        <>
          CHILL CITY
          のエナジーガール。彼女の登場とともに、街の空気が一気に明るくなる。
          <br />
          朝のラッシュで疲れた人々にフレッシュな元気を与え、活気あふれる一日をスタートさせる。
        </>
      ),
      flavor: 'シトラスゼリー',
      age: '23歳',
      character: '基本的にポジティブ、明るい、ムードメーカー',
      likes: 'マリンスポーツ、日光浴、踊り',
      dislikes: 'じっとしていること、退屈な時間',
      skill: (
        <>
          「ビタミンエナジーシャワー」💥
          <br />
          一緒にいるだけで、周囲に活力を与える。明るくなれる。
          <br />
          どんな疲れた人も、彼女のフレーバーパワーで明るく元気に
        </>
      ),
    },
  },
  {
    thumb: {
      src: '/assets/images/intr_thumb-2.png',
      alt: 'ALOE GRAPE',
    },
    name: {
      src: '/assets/images/intr_name-2.png',
      alt: 'アロエグレープ',
    },
    bubble: {
      src: '/assets/images/intr_bubble-2.svg',
      alt: '私の甘さに惚れ惚れするでしょ！',
      width: 370,
      height: 104,
      className: 'max-md:aspect-[370/104] ml-auto max-md:w-4/5',
    },
    product: {
      src: '/assets/images/intr_item-2.png',
      alt: 'アロエグレープ',
    },
    description: {
      title: 'アロエグレープ',
      text: (
        <>
          グレープとアロエの甘さの
          <br />
          絶妙なバランス
        </>
      ),
    },
    buttonStyle: {
      backgroundColor: '#0084DB',
      boxShadow: '0 0 20px #0084DB',
    },
    profile: {
      src: '/assets/images/intr_pop-2.png',
      catch: (
        <>
          CHILL CITY の「いたずらガール」。
          <br />
          誰よりも人に関心がある彼女は、人の心を動かしたり笑顔にするのが得意。
          <br />
          一度彼女のフレーバーを吸えば、その深みから抜け出せなくなる。
        </>
      ),
      flavor: 'アロエグレープ',
      age: '22歳',
      character: 'いたずら好き、少しツンデレな面がある',
      likes: '個性的なぬいぐるみ、ベースギター',
      dislikes: '無関心、派手な色',
      skill: (
        <>
          「ディープスイートビート」💙
          <br />
          彼女のフレーバーパワーで、誰もが深みにはまる
          <br />
          気分がのらない日でもなんだか身体が動く力が湧く
        </>
      ),
    },
  },
  {
    thumb: {
      src: '/assets/images/intr_thumb-3.png',
      alt: 'ロリポップキャンディ',
    },
    name: {
      src: '/assets/images/intr_name-3.png',
      alt: 'ロリポップキャンディ',
    },
    bubble: {
      src: '/assets/images/intr_bubble-3.svg',
      alt: 'カワイイは正義！みんな私に夢中でしょ？',
      width: 296,
      height: 156,
      className: 'max-md:aspect-[296/156] ml-auto max-md:w-4/5',
    },
    product: {
      src: '/assets/images/intr_item-3.png',
      alt: 'ロリポップキャンディ',
    },
    description: {
      title: (
        <>
          ロリポップ
          <br />
          キャンディ
        </>
      ),
      text: (
        <>
          甘くてクセになる、
          <br />
          まるで魔法のキャンディ♪
        </>
      ),
    },
    buttonStyle: {
      backgroundColor: '#E40048',
      boxShadow: '0 0 20px #E40048',
    },
    profile: {
      src: '/assets/images/intr_pop-3.png',
      catch: (
        <>
          CHILL CITY のアイドル的存在。SNSで絶大な人気を誇る。
          <br />
          彼女の周りには「推し活」するファンがいっぱい。甘くてカラフルな世界観が、現実を忘れさせてくれる。
        </>
      ),
      flavor: 'ロリポップキャンディ',
      age: '21歳',
      character: '甘え上手、おしゃれ、自由奔放',
      likes: 'カラフルなもの、スイーツ、SNS映え',
      dislikes: '虫、堅苦しいルール',
      skill: (
        <>
          「スウィートマジック」✨
          <br />
          彼女のフレーバーパワーを吸うと、気持ちが明るくなり、幸福感に包まれる
          <br />
          どんなに落ち込んでいた人も、彼女の魔法で笑顔に
        </>
      ),
    },
  },
  {
    thumb: {
      src: '/assets/images/intr_thumb-4.png',
      alt: 'ジャスミングリーンティー',
    },
    name: {
      src: '/assets/images/intr_name-4.png',
      alt: 'ジャスミングリーンティー',
    },
    bubble: {
      src: '/assets/images/intr_bubble-4.svg',
      alt: '落ち着いて心を整えましょう',
      width: 296,
      height: 104,
      className: 'max-md:aspect-[296/104] ml-auto max-md:w-4/5',
    },
    product: {
      src: '/assets/images/intr_item-4.png',
      alt: 'ジャスミングリーンティー',
    },
    description: {
      title: (
        <>
          ジャスミン
          <br />
          グリーンティー
        </>
      ),
      text: (
        <>
          爽やかでほのかに香る、
          <br />
          癒しのひととき。
        </>
      ),
    },
    buttonStyle: {
      backgroundColor: '#00CF90',
      boxShadow: '0 0 20px #00CF90',
    },
    profile: {
      src: '/assets/images/intr_pop-4.png',
      catch: (
        <>
          CHILL CITY
          の「精神安定剤」。仕事や人間関係に疲れた人々が彼女を求める。
          <br />
          彼女の一言とフレーバーパワーで、焦りやストレスが和らぎ、冷静な判断ができるようになる。
        </>
      ),
      flavor: 'ジャスミングリーンティー',
      age: '24歳',
      character: '知的で冷静、落ち着いた雰囲気、淑やか',
      likes: '静かなカフェ、夜の読書、禅',
      dislikes: '騒がしい場所、せかされること',
      skill: (
        <>
          「マインドリラックス」💫
          <br />
          彼女のフレーバーパワーでストレスがすっと消える
          <br />
          イライラしていた人も、落ち着きを取り戻し、深呼吸できる
        </>
      ),
    },
  },
  {
    thumb: {
      src: '/assets/images/intr_thumb-5.png',
      alt: 'ユージャハイボール',
    },
    name: {
      src: '/assets/images/intr_name-5.png',
      alt: 'ユージャハイボール',
    },
    bubble: {
      src: '/assets/images/intr_bubble-5.svg',
      alt: '今日もお疲れ様何か困ったことでもあった？',
      width: 407,
      height: 104,
      className: 'max-md:aspect-[407/104] ml-auto max-md:w-11/12',
    },
    product: {
      src: '/assets/images/intr_item-5.png',
      alt: 'ユージャハイボール',
    },
    description: {
      title: (
        <>
          ユージャ
          <br />
          ハイボール
        </>
      ),
      text: (
        <>
          爽やかでほのかに香る、
          <br />
          癒しのひととき。
        </>
      ),
    },
    buttonStyle: {
      backgroundColor: '#030129',
      boxShadow: '0 0 20px #030129',
    },
    profile: {
      src: '/assets/images/intr_pop-5.png',
      catch: (
        <>
          CHILL CITY の「リーダー的存在」。彼女の前では嘘は通用しない。
          <br />
          目標に向けて頑張っている人、強くなりたい人が、彼女のフレーバーを求める。
          <br />
          彼女のウイスキーのような甘く深い香りが、人々の自信と決断力を高める。
        </>
      ),
      flavor: 'ユージャハイボール',
      age: '28歳',
      character: '品があるけど抜け感のある大人、ちょっとミステリアス',
      likes: '夜のバー、ウイスキー、ジャズ音楽',
      dislikes: '押しつけ、軽い人',
      skill: (
        <>
          「ディープハイボール」🔥
          <br />
          彼女のフレーバーパワーを吸うと、不思議と身体の奥から自信が湧いてくる
          <br />
          迷いが消え、やるべきことに向かう勇気が出る
        </>
      ),
    },
  },
]

const Characters = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selected, setSelected] = useState<Slide | null>(null)
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <section>
      <motion.div
        className="max-w-1/2 mx-auto -mb-[10vw] md:-mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          className="mx-auto max-w-[400px]"
          src="/assets/images/intr_ttl.png"
          alt="Chillax 5"
        />
      </motion.div>

      <div
        style={{
          backgroundImage: "url('/assets/images/intr_bg.png')",
          backgroundSize: '90% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => {
          if (!selected) swiperRef.current?.autoplay?.start()
        }}
      >
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween="3%"
          className="px-[10%]"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="!w-[76%] pb-[8vw] pt-[22vw] md:!w-[530px] md:pb-16 md:pt-36"
            >
              <div className="relative w-full">
                <img
                  src={slide.thumb.src}
                  alt={slide.thumb.alt}
                  className="mx-auto w-11/12 max-w-[480px]"
                />

                {i === activeIndex && (
                  <>
                    <div className="absolute -left-[28%] -top-[10%] md:-left-[10%]">
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: [0.6, 1.2, 0.95, 1], opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      >
                        <img
                          src={slide.name.src}
                          alt={slide.name.alt}
                          className="relative mx-auto max-w-[50%] md:max-w-[160px]"
                        />
                      </motion.div>
                    </div>
                    <motion.p
                      className="absolute -right-4 bottom-[13%] md:bottom-[5%]"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <img
                        src={slide.bubble.src}
                        alt={slide.bubble.alt}
                        width={slide.bubble.width}
                        height={slide.bubble.height}
                        className={slide.bubble.className}
                      />
                    </motion.p>
                  </>
                )}
              </div>

              {i === activeIndex && (
                <>
                  <motion.div
                    className="relative -mt-5 mb-6 flex items-center gap-2 md:-mt-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <img
                      src={slide.product.src}
                      alt={slide.product.alt}
                      className="max-w-[189px] max-md:w-[36%]"
                    />
                    <div className="flex-1 border-b border-t py-[8%] text-center md:py-7">
                      <h4 className="text-[6vw] font-bold leading-tight md:text-[38px]">
                        {slide.description.title}
                      </h4>
                      <p className="mt-2 text-[3.4vw] leading-relaxed md:text-2xl">
                        {slide.description.text}
                      </p>
                    </div>
                  </motion.div>

                  <motion.button
                    style={slide.buttonStyle}
                    className="w-full cursor-pointer rounded-full p-[2vw] text-center text-[6vw] font-black tracking-widest text-white md:p-3 md:text-4xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    onClick={() => setSelected(slide)}
                  >
                    <p className="rounded-full border border-white p-[1.5vw] md:border-2 md:p-6">
                      キャラクター紹介
                    </p>
                  </motion.button>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-[610px] overflow-auto text-white"
              onWheel={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute right-4 top-0 cursor-pointer text-5xl text-white"
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <figure>
                <img
                  src={selected.profile.src}
                  alt={selected.name.alt}
                  className="mx-auto h-auto w-full max-w-[483px]"
                />
              </figure>

              <p className="border-b border-t border-[#D1D1D1] py-8 text-xl leading-normal md:text-2xl">
                {selected.profile.catch}
              </p>

              <dl className="flex items-center border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">フレーバー</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.flavor}
                </dd>
              </dl>

              <dl className="flex items-center border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">年齢</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.age}
                </dd>
              </dl>

              <dl className="flex items-center border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">性格</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.character}
                </dd>
              </dl>

              <dl className="flex items-center border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">好きなもの</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.likes}
                </dd>
              </dl>

              <dl className="flex items-center border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">嫌いなもの</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.dislikes}
                </dd>
              </dl>

              <dl className="flex items-start border-b border-[#D1D1D1] py-5">
                <dt className="w-32 text-lg">能力</dt>
                <dd className="flex-1 text-xl md:text-2xl">
                  {selected.profile.skill}
                </dd>
              </dl>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Characters
