'use client'

import { motion } from 'framer-motion'

const ingredients = [
  {
    title: '植物性グリセリン',
    description:
      'ヤシ油やパーム油などの植物油脂から作られたもので、医薬品や化粧品などでも多く利用されています。甘味料・保存料・保湿剤として使用しています。',
  },
  {
    title: 'プロピレングリコール',
    description:
      '水に溶けたときに、香料や精油などをよく溶かす性質を持っており、香料の定着に使用しています。そのほか保湿、湿潤、静菌作用のある食品添加物です。',
  },
  {
    title: '香料',
    description: '食品添加物として認可されている香料を使用しています。',
  },
]

const Ingredient = () => {
  return (
    <section className="bg-[#030129] pt-24">
      <h2 className="mb-8 text-center text-[36px] font-medium text-white">
        安心を考えた成分
        <span className="mx-auto my-4 block h-0.5 w-12 rounded-2xl bg-white"></span>
      </h2>
      <p className="mx-[5%] mb-11 text-center text-lg text-white">
        Chillaxは全世界で人気の商品。
        <br />
        世界中で安心してお使いいただける成分で作られています。
      </p>

      <div className="mx-auto mt-12 w-11/12 max-w-[520px] border-2 border-[#00E4E4] bg-[rgba(0,228,228,0.2)]">
        {ingredients.map((item, index) => (
          <motion.dl
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            className={`flex-col py-14 ${
              index !== ingredients.length - 1
                ? 'border-b border-dashed border-[#00E4E4]'
                : ''
            }`}
          >
            <dt className="pb-8 text-center text-2xl tracking-wider text-white">
              {item.title}
            </dt>
            <dd className="px-6 text-[18px] leading-loose text-white">
              {item.description}
            </dd>
          </motion.dl>
        ))}
      </div>
    </section>
  )
}

export default Ingredient
