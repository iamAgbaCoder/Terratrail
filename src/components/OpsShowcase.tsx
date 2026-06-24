import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { opsCards } from '@data/content'

/* A small coded visual that stands in for each ops view — keeps the section
   lively without shipping more screenshots. Switched on the active card id. */
function CardVisual({ id }: { id: string }) {
  if (id === 'payments') {
    const bars = [42, 68, 55, 80, 62, 95, 74]
    return (
      <div className="flex items-end gap-2 h-40 w-full">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue to-brand-indigo/70"
          />
        ))}
      </div>
    )
  }

  if (id === 'commission') {
    const reps = [
      { name: 'Senior Realtor', pct: 92, amt: '₦1.4M' },
      { name: 'Realtor', pct: 64, amt: '₦820K' },
      { name: 'Principal Realtor', pct: 78, amt: '₦1.1M' },
    ]
    return (
      <div className="space-y-4 w-full">
        {reps.map((r, i) => (
          <div key={i}>
            <div className="flex justify-between text-[12px] font-semibold text-slate-600 mb-1.5">
              <span>{r.name}</span>
              <span className="text-slate-900">{r.amt}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${r.pct}%` }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-indigo"
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // default — subscription overview: stacked status rows
  const rows = [
    { label: 'Active', count: 128, tone: 'bg-emerald-500', track: 'bg-emerald-100', pct: 70 },
    { label: 'Due soon', count: 34, tone: 'bg-amber-500', track: 'bg-amber-100', pct: 40 },
    { label: 'Defaulting', count: 9, tone: 'bg-red-500', track: 'bg-red-100', pct: 18 },
  ]
  return (
    <div className="space-y-4 w-full">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full ${r.tone} flex-shrink-0`} />
          <div className="flex-1">
            <div className="flex justify-between text-[12px] font-semibold text-slate-600 mb-1.5">
              <span>{r.label}</span>
              <span className="text-slate-900">{r.count}</span>
            </div>
            <div className={`h-2 rounded-full ${r.track} overflow-hidden`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${r.pct}%` }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                className={`h-full rounded-full ${r.tone}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function OpsShowcase() {
  const [active, setActive] = useState(0)
  const card = opsCards[active]

  return (
    <section id="platform" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-brand-blue text-[13px] font-bold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block"></span>
            One command center
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything you run, <span className="text-gradient-blue">in one view.</span>
          </h2>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {opsCards.map((c, i) => {
            const isActive = i === active
            return (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-bold transition-all duration-250 ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-soft'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <span className="material-icons-round text-[17px]">{c.icon}</span>
                {c.tabLabel}
              </button>
            )
          })}
        </div>

        {/* Active panel */}
        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 p-7 md:p-12 items-center"
            >
              {/* Copy */}
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue mb-5">
                  <span className="material-icons-round text-[24px]">{card.icon}</span>
                </span>
                <h3 className="text-2xl md:text-[28px] font-black text-slate-900 tracking-tight leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-6">{card.description}</p>
                <a
                  href="#features"
                  className="inline-flex items-center gap-1.5 text-brand-blue font-bold text-[14px] hover:gap-2.5 transition-all"
                >
                  {card.cta}
                  <span className="material-icons-round text-[18px]">arrow_forward</span>
                </a>
              </div>

              {/* Visual */}
              <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-6 md:p-8 flex items-center min-h-[200px]">
                <CardVisual id={card.id} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
