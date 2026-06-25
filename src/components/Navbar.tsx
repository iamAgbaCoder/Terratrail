import { useState, useEffect, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigate } from '@/router'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/about' },
]

/** Intercept internal links for SPA navigation; allow modified clicks through. */
function handleNav(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(href)
}

const spring = { type: 'spring', stiffness: 380, damping: 34, mass: 0.9 } as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll while the mobile island is expanded.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      {/* Dim backdrop when the mobile island is open */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="md:hidden fixed inset-0 -z-10 bg-navy-950/30 backdrop-blur-[2px] pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* The island */}
      <motion.div
        layout
        transition={spring}
        className={`pointer-events-auto mt-3 md:mt-4 w-full glass overflow-hidden rounded-[26px] border transition-[box-shadow,border-color,max-width] duration-500 ${
          scrolled || mobileOpen
            ? 'max-w-2xl border-slate-200/70 shadow-card'
            : 'max-w-3xl border-slate-200/50 shadow-soft'
        }`}
      >
        <motion.div
          layout="position"
          className="flex items-center justify-between gap-2 px-2.5 sm:px-3 h-14"
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              closeMobile()
              handleNav(e, '/')
            }}
            className="flex items-center gap-2 pl-1.5 group flex-shrink-0"
          >
            <img
              src="/icon-logo.png"
              alt="Terratrail logo"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[17px] font-black text-navy-900 tracking-tight">Terratrail</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-2 text-[14px] font-semibold text-slate-500 hover:text-navy-900 rounded-full hover:bg-slate-900/[0.05] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://dashboard.terratrail.app/auth/sign-in"
              className="px-4 py-2 text-[13px] font-bold text-navy-900 rounded-full hover:bg-slate-900/[0.05] transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://dashboard.terratrail.app/auth/sign-up"
              className="px-4 py-2 text-[13px] font-bold text-white bg-navy-900 rounded-full hover:bg-navy-800 transition-all duration-250 shadow-soft hover:shadow-card"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-navy-900 hover:bg-slate-900/[0.05] transition-colors flex-shrink-0"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <motion.span
              key={mobileOpen ? 'close' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="material-icons-round text-[24px]"
            >
              {mobileOpen ? 'close' : 'menu'}
            </motion.span>
          </button>
        </motion.div>

        {/* Mobile expanded panel — the island morphs to reveal this */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.05 } }}
              exit={{ opacity: 0 }}
              className="md:hidden px-2.5 pb-2.5"
            >
              <nav className="space-y-1 pt-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      closeMobile()
                      handleNav(e, link.href)
                    }}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.06 + i * 0.04 } }}
                    className="flex items-center px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-900/[0.05] rounded-2xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="grid grid-cols-2 gap-2 pt-2.5 mt-1.5 border-t border-slate-200/70">
                <a
                  href="https://dashboard.terratrail.app/auth/sign-in"
                  onClick={closeMobile}
                  className="py-3 text-center text-[14px] font-bold text-navy-900 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="https://dashboard.terratrail.app/auth/sign-up"
                  onClick={closeMobile}
                  className="py-3 text-center text-[14px] font-bold text-white bg-navy-900 rounded-2xl hover:bg-navy-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
