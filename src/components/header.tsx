'use client';

import { useState } from 'react';

import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/nexus-card', label: 'Nexus Card' },
  { href: '/community-board', label: 'Community Board' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="promo-header promo--has-loading-state promo--loaded promo-header--border-auto promo-header--expanded ui-orange ui-background px-1">
      <div className="row row--gx row--middle promo-header__row">
        {/* Logo */}
        <div className="col col--8 col--5:md col--6:xl promo-header__logo">
          <Link
            href="/"
            className="not-nuxt-link btn btn--link btn--block btn--accent btn--text-smaller"
            title=""
          >
            <span className="btn__content">
              <span className="btn__text">
                <span className="btn__text-text">FOLLOW. ART</span>
              </span>
            </span>
          </Link>
          <p className="promo-header__logo-text text-smaller text-color-small text-box-trim">
            Nexus of Curators and Artists
          </p>
        </div>

        {/* Desktop Nav Links */}
        <nav className="promo-header__desktop-links col col--5 col--4:xl is-hidden:sm-down">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="not-nuxt-link btn btn--link btn--block btn--accent btn--text-smaller promo-header__animated-button"
              title=""
            >
              <span className="btn__content">
                <span className="btn__text">
                  <span className="btn__text-text">{label}</span>
                </span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Links */}
        <div className="col col--2 is-hidden:sm-down promo-header__content-right text-right">
          <div className="promo-header__desktop-links">
            <Link
              href="/signin"
              className="not-nuxt-link btn btn--link btn--block btn--accent btn--text-smaller promo-header__animated-button"
              title=""
            >
              <span className="btn__content">
                <span className="btn__text">
                  <span className="btn__text-text">Login</span>
                </span>
              </span>
            </Link>
            <Link
              href="/signup"
              className="not-nuxt-link btn btn--link btn--block btn--accent btn--text-smaller promo-header__animated-button"
              title=""
            >
              <span className="btn__content">
                <span className="btn__text">
                  <span className="btn__text-text">Join</span>
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="col col--4 is-hidden:md-up promo-header__content-right text-right">
          <button
            className="not-nuxt-link btn btn--start btn--link btn--block btn--accent"
            aria-label="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="btn__content">
              {/* Simple hamburger icon (3 lines) */}
              <svg
                className="btn__icon"
                role="presentation"
                width="40"
                height="8"
                viewBox="0 0 40 8"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="40"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="0"
                  y1="4"
                  x2="40"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="0"
                  y1="7"
                  x2="40"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="promo-header__mobile-menu is-hidden:md-up">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="btn btn--link btn--block btn--accent btn--text-smaller"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/signin"
            className="btn btn--link btn--block btn--accent btn--text-smaller"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="btn btn--link btn--block btn--accent btn--text-smaller"
            onClick={() => setMenuOpen(false)}
          >
            Join
          </Link>
        </nav>
      )}
    </header>
  );
}
