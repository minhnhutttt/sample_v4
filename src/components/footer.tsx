'use client'

import Link from 'next/link'

const Footer = () => {
  const links = [
    {
      href: 'https://ec.chillax-shop.jp/policies/privacy-policy',
      label: 'プライバシーポリシー',
    },
    {
      href: 'https://ec.chillax-shop.jp/policies/legal-notice',
      label: '特定商取引法に基づく表記',
    },
  ]

  return (
    <footer className="mx-auto max-w-[750px] bg-[#030129] py-16 text-center text-white md:py-8">
      <img
        className="mx-auto max-md:max-w-[70%]"
        src="/assets/images/logo_ft.png"
        alt="Chillax"
      />
      <ul className="mx-[10%] mb-28 mt-8 md:mt-16">
        {links.map((link, idx) => (
          <li key={idx} className="border-b border-[#FF00CC] last:border-b-0">
            <Link
              href={link.href}
              className="block py-6 text-lg text-[#FF00CC]"
              target="_blank"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm tracking-widest">&copy; 2025 Chillax</p>
    </footer>
  )
}

export default Footer
