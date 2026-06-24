import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/** Shared shell for every standalone page: dynamic-island nav, a gradient
 *  page-hero header, the page body, then the global footer. */
export function PageLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="hero-gradient pt-32 pb-12 md:pt-40 md:pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-[13px] font-bold tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                {eyebrow}
              </span>
            )}
            <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.08] tracking-[-0.02em] mb-5 text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[16px] sm:text-[18px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export interface LegalSection {
  heading: string
  body: string[]
}

/** Renders the body of a policy / terms page from structured sections. */
export function LegalBody({
  sections,
  lastUpdated,
}: {
  sections: LegalSection[]
  lastUpdated: string
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] font-semibold text-slate-400 mb-10 pb-6 border-b border-slate-100">
          Last updated: {lastUpdated}
        </p>
        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.2) }}
            >
              <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight mb-3">
                <span className="text-brand-blue mr-2">{String(i + 1).padStart(2, '0')}</span>
                {s.heading}
              </h2>
              <div className="space-y-3">
                {s.body.map((p, pi) => (
                  <p key={pi} className="text-[15px] text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
