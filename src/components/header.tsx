'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative px-12 py-[12vw] text-white md:bg-[#A35EF9] md:py-8">
      <Link
        href="/"
        className="absolute left-4 top-6 w-1/3 max-w-[585px] md:left-0 md:top-0 md:w-[28%]"
      >
        <img src="/assets/images/logo_hd.png" alt="Chillax" />
        <div className="text-center text-[14px] font-medium text-white md:text-[28px]">
          販売代理店
        </div>
      </Link>

      <button
        className="fixed right-4 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#eda5f2] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="burger"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="space-y-1"
            >
              <div className="h-1 w-6 rounded bg-white"></div>
              <div className="h-1 w-6 rounded bg-white"></div>
              <div className="h-1 w-6 rounded bg-white"></div>
            </motion.div>
          ) : (
            <motion.span
              key="close"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="-mt-1 text-3xl font-bold"
            >
              ×
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-[#A35EF9] p-12 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center space-y-6 text-2xl">
          <Link href="#link-1" onClick={() => setIsOpen(false)}>
            日本限定パッケージ
          </Link>
          <Link href="#link-2" onClick={() => setIsOpen(false)}>
            推しPOINT
          </Link>
          <Link href="#link-3" onClick={() => setIsOpen(false)}>
            使い方
          </Link>
        </nav>
      </div>

      <nav className="ml-auto hidden w-fit items-center gap-8 text-lg md:flex">
        <Link href="#link-1">日本限定パッケージ</Link>
        <Link href="#link-2">推しPOINT</Link>
        <Link href="#link-3">使い方</Link>
      </nav>
    </header>
  )
}

export default Header
