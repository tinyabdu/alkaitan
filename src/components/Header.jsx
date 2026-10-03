import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/business'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)

  // Escape closes the menu and returns focus to the toggle button
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Close if the viewport grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-pale bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" aria-label="Alkaitan Restaurant, back to top" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-pale hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#reservations" className="btn btn-primary hidden !min-h-11 !py-2 sm:inline-flex">
            Reserve a table
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-pale lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-6 w-6" aria-hidden="true" /> : <FiMenu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  )
}
