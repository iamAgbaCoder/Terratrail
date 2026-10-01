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

export type LegalAccent = 'blue' | 'indigo' | 'emerald' | 'amber' | 'purple' | 'sky'

export interface LegalItem {
  icon: string
  title: string
  text?: string
}

export interface LegalSection {
  heading: string
  body: string[]
  /** Material Icons Round glyph name shown in the section's icon badge. */
  icon?: string
  /** Overrides the auto-cycled accent colour for this section's icon badge. */
  accent?: LegalAccent
  /** Optional icon-card grid rendered under the body paragraphs — use for
   *  enumerable lists (data types collected, rights granted, etc.) instead
   *  of a wall of prose. */
  items?: LegalItem[]
  /** Optional small inline illustration (e.g. a certification badge) shown
   *  under the section body. */
  image?: { src: string; alt: string }
}

const ACCENT_STYLES: Record<LegalAccent, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-brand-blue', border: 'border-blue-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-brand-indigo', border: 'border-indigo-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-100' },
}
const ACCENT_CYCLE: LegalAccent[] = ['blue', 'indigo', 'emerald', 'amber', 'purple', 'sky']

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

/** Renders the body of a policy / terms page from structured sections: a
 *  sticky in-page table of contents alongside icon-badged section cards,
 *  with an optional trust-signal badge strip up top. */
export function LegalBody({
  sections,
  lastUpdated,
  highlights,
}: {
  sections: LegalSection[]
  lastUpdated: string
  /** Small trust-signal pills shown above the content, e.g. "NDPR Compliant". */
  highlights?: { icon: string; label: string }[]
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-6xl mx-auto">
        {highlights && highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {highlights.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-soft text-slate-700 text-[13px] font-bold px-4 py-2 rounded-full"
              >
                <span className="material-icons-round text-[16px] text-brand-blue">{h.icon}</span>
                {h.label}
              </span>
            ))}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">
          {/* Sticky table of contents */}
          <motion.nav
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block sticky top-28"
            aria-label="Table of contents"
          >
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.12em] mb-4">On this page</p>
            <ul className="space-y-1 border-l-2 border-slate-100">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugify(s.heading)}`}
                    className="block pl-4 -ml-0.5 border-l-2 border-transparent hover:border-brand-blue text-[13px] text-slate-500 hover:text-brand-blue font-semibold py-1.5 transition-colors"
                  >
                    {String(i + 1).padStart(2, '0')}. {s.heading}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-slate-400 font-semibold mt-6 pt-6 border-t border-slate-100">
              Last updated
              <br />
              <span className="text-slate-600">{lastUpdated}</span>
            </p>
          </motion.nav>

          {/* Section cards */}
          <div className="space-y-6">
            <p className="lg:hidden text-[13px] font-semibold text-slate-400 pb-6 border-b border-slate-100">
              Last updated: {lastUpdated}
            </p>
            {sections.map((s, i) => {
              const accent = ACCENT_STYLES[s.accent ?? ACCENT_CYCLE[i % ACCENT_CYCLE.length]]
              return (
                <motion.div
                  key={s.heading}
                  id={slugify(s.heading)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.18) }}
                  className="scroll-mt-28 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card transition-shadow duration-300 p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className={`flex-shrink-0 w-11 h-11 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center`}
                    >
                      <span className={`material-icons-round text-[22px] ${accent.text}`}>
                        {s.icon ?? 'description'}
                      </span>
                    </span>
                    <div className="pt-1.5">
                      <span className={`text-[12px] font-black ${accent.text} tracking-wide`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-[19px] sm:text-[21px] font-black text-slate-900 tracking-tight leading-snug">
                        {s.heading}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-3 sm:pl-[60px]">
                    {s.body.map((p, pi) => (
                      <p key={pi} className="text-[15px] text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {s.items && s.items.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {s.items.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
                          >
                            <span className="material-icons-round text-[18px] text-slate-400 mt-0.5 flex-shrink-0">
                              {item.icon}
                            </span>
                            <div>
                              <p className="text-[13px] font-black text-slate-800">{item.title}</p>
                              {item.text && (
                                <p className="text-[12.5px] text-slate-500 mt-0.5 leading-snug">{item.text}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {s.image && (
                      <img
                        src={s.image.src}
                        alt={s.image.alt}
                        className="h-14 w-auto rounded-lg border border-slate-100 bg-white p-2 mt-2"
                      />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
