import { useEffect, useId, useState } from 'react'

import logoSrc from '../assets/logo.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (!mobileMenuOpen) return
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

  return (
    <header className="mx-auto max-w-6xl px-6 py-6">
      <nav
        aria-label="Primary"
        className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]"
      >
      <div className="flex items-center justify-start">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="HTribe"
            className="h-[60px] w-36 rounded-lg object-contain md:h-[72px]"
          />
          <span className="sr-only">HTribe</span>
        </a>
      </div>

      <div className="flex items-center justify-end md:hidden">
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-[rgb(16,72,98)] hover:bg-[rgb(16,72,98)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(16,72,98)]"
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {mobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden items-center justify-center gap-6 text-sm text-[rgb(16,72,98)]/80 md:flex">
        <a className="hover:text-[rgb(16,72,98)]" href="#community">
          Events
        </a>
        <a className="hover:text-[rgb(16,72,98)]" href="#design">
          FAQ
        </a>
      </div>

      <div className="hidden items-center justify-end gap-3 md:flex">
        <a
          href="#recruitment"
          className="rounded-xl bg-[rgb(16,72,98)] px-4 py-2 text-sm font-medium text-[rgb(255,253,241)] shadow-sm hover:bg-[rgb(14,62,85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(16,72,98)]"
        >
          Join
        </a>
      </div>

      </nav>

      <div
        id={mobileMenuId}
        className={
          mobileMenuOpen
            ? 'mt-4 grid gap-2 rounded-2xl border border-[rgb(16,72,98)]/10 bg-[rgb(255,253,241)] p-3 shadow-sm md:hidden'
            : 'hidden'
        }
      >
        <a
          className="rounded-xl px-3 py-2 text-sm text-[rgb(16,72,98)]/80 hover:bg-[rgb(16,72,98)]/10 hover:text-[rgb(16,72,98)]"
          href="#community"
          onClick={() => setMobileMenuOpen(false)}
        >
          Events
        </a>
        <a
          className="rounded-xl px-3 py-2 text-sm text-[rgb(16,72,98)]/80 hover:bg-[rgb(16,72,98)]/10 hover:text-[rgb(16,72,98)]"
          href="#design"
          onClick={() => setMobileMenuOpen(false)}
        >
          FAQ
        </a>
        <a
          href="#recruitment"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-1 rounded-xl bg-[rgb(16,72,98)] px-4 py-2 text-center text-sm font-medium text-[rgb(255,253,241)] shadow-sm hover:bg-[rgb(14,62,85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(16,72,98)]"
        >
          Join
        </a>
      </div>
    </header>
  )
}
