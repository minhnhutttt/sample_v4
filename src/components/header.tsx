'use client';

import { useEffect, useState } from 'react';

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

  // Khoá scroll body khi menu mở
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="promo-header promo--has-loading-state promo--loaded promo-header--border-auto promo-header--expanded ui-orange px-1">
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
              onClick={() => setMenuOpen(true)}
            >
              <span className="btn__content">
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
      </header>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div
          className="modal modal--open ui-orange"
          aria-label=""
          aria-modal="true"
          aria-hidden="false"
          role="dialog"
          tabIndex={0}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Backdrop */}
          <div
            className="modal__background ui-background"
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />

          <div
            className="modal__wrapper"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '480px',
              height: '100%',
              backgroundColor: '#f4793a',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Modal Header */}
            <div className="modal__wrapper-header">
              {/* Close Button */}
              <span
                className="not-nuxt-link btn btn--start btn--link btn--accent modal__wrapper-header-close"
                role="button"
                tabIndex={0}
                aria-label="Close"
                title=""
                onClick={() => setMenuOpen(false)}
                onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(false)}
              >
                <span className="btn__content">
                  <svg
                    className="btn__icon icon icon-close"
                    role="presentation"
                    width="30px"
                    height="30px"
                    viewBox="0 0 30 30"
                  >
                    {/* X icon */}
                    <line
                      x1="6"
                      y1="6"
                      x2="24"
                      y2="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="24"
                      y1="6"
                      x2="6"
                      y2="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>

              {/* Logo */}
              <Link
                href="/"
                className="block p-[20px] text-left"
                tabIndex={0}
                title=""
                onClick={() => setMenuOpen(false)}
              >
                <span className="btn__content">
                  <span className="btn__text-text text-left">FOLLOW. ART</span>
                </span>
              </Link>
            </div>

            {/* Scrollable Content */}
            <div className="scrollable scrollable--fullscreen modal__wrapper-scrollable">
              <div className="scrollable__area">
                <div className="scrollable__area-inner">
                  <div className="mobile-menu">
                    <div className="mobile-menu__stub" />

                    {/* Nav Links */}
                    <div className="mobile-menu__list">
                      <ul className="p-1">
                        {navLinks.map(({ href, label }) => (
                          <li key={href}>
                            <Link
                              href={href}
                              className="not-nuxt-link btn btn--link btn--text-h5"
                              tabIndex={0}
                              title=""
                              onClick={() => setMenuOpen(false)}
                            >
                              <span className="btn__content">
                                <span className="btn__text">
                                  <span className="btn__text-text">
                                    {label}
                                  </span>
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <hr className="mobile-menu__list-line hr-thin" />

                      {/* Auth Links */}
                      <div className="mobile-menu__list-auth p-1">
                        <img
                          width={260}
                          height={262}
                          alt=""
                          className="mobile-menu__list-decoration"
                          src="/images/menu-decoration.png"
                        />
                        <Link
                          href="/signin"
                          className="not-nuxt-link btn btn--link btn--text-h5"
                          tabIndex={0}
                          title=""
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="btn__content">
                            <span className="btn__text">
                              <span className="btn__text-text">Login</span>
                            </span>
                          </span>
                        </Link>
                        <Link
                          href="/signup"
                          className="not-nuxt-link btn btn--link btn--text-h5"
                          tabIndex={0}
                          title=""
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="btn__content">
                            <span className="btn__text">
                              <span className="btn__text-text">Join</span>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Sub Links */}
                    <div className="mobile-menu__sub-links mt-auto px-1 py-1">
                      <a
                        href="https://drive.google.com/file/d/1TRkafTTsg9FOyLTzmTkNSRsd5lD0kx3X/view?usp=sharing"
                        className="not-nuxt-link btn btn--link"
                        tabIndex={0}
                        target="_blank"
                        rel="noopener noreferrer"
                        title=""
                      >
                        <span className="btn__content">
                          <span className="btn__text">
                            <span className="btn__text-text">Brand Kit</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
