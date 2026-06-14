import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Company', href: '#company' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-slate-200/60 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center">
              <span className="material-icons-round text-white text-base">terrain</span>
            </div>
            <span className="text-[18px] font-black text-navy-900 tracking-tight">Terratrail</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[15px] font-semibold text-slate-500 hover:text-navy-900 rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#signin"
              className="px-5 py-2 text-[14px] font-bold text-navy-900 border-2 border-navy-900/20 rounded-xl hover:border-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-250"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="px-5 py-2 text-[14px] font-bold text-white bg-navy-900 rounded-xl hover:bg-navy-800 transition-all duration-250 shadow-soft hover:shadow-card"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            <span className="material-icons-round text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-slate-100/60"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a href="#signin" className="w-full py-3 text-center text-[14px] font-bold text-navy-900 border-2 border-slate-200 rounded-xl">
                  Sign In
                </a>
                <a href="#get-started" className="w-full py-3 text-center text-[14px] font-bold text-white bg-navy-900 rounded-xl">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
