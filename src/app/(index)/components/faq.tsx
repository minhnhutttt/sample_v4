'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: '１日に何回吸入しても問題はありませんか？',
    answer:
      '一日量を制限してはおりませんが、個人差により長時間吸入することで体調が優れなくなった場合にはすぐにご使用をお控えになることをおすすめいたします。',
  },
  {
    question: 'どのくらいの回数吸引できますか？',
    answer:
      '1台あたり約10,000回の吸引が可能です。<br />また、一定量を吸引すると自動的にストッパーが作動しますので息もれや吸い過ぎで吸引回数が減る事もございません。',
  },
  {
    question: '禁煙エリアなど、どこでも吸えますか？',
    answer:
      '法律などでの規制はありませんが、水蒸気が発生するため、公共マナーなどを遵守してご使用ください。',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#030129] px-[5%] pt-24">
      <div className="mb-8 text-center text-[36px] font-medium text-white">
        よくある質問
        <span className="mx-auto my-4 block h-0.5 w-12 rounded-2xl bg-white"></span>
      </div>
      <div className="mx-auto max-w-[680px] space-y-4">
        {faqs.map((faq, idx) => (
          <motion.dl
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white p-6"
          >
            <dt
              className="flex cursor-pointer items-center gap-2"
              onClick={() => toggle(idx)}
            >
              <span className="text-3xl font-black text-[#FF00CC]">Q</span>
              <p className="flex-1 text-[22px] font-medium">{faq.question}</p>
              <img
                src="/assets/images/ac_arw.svg"
                alt=""
                className={`ml-auto h-auto w-9 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </dt>
            <dd
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden pl-9 pt-3 md:px-9">
                <p
                  className="text-[18px] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `A.${faq.answer}` }}
                />
              </div>
            </dd>
          </motion.dl>
        ))}
      </div>
    </section>
  )
}

export default FAQ
