import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pricingPlans, comparisonRows } from '@data/content'
import { PricingPlan, BillingCycle } from '@/types/index'

const CYCLES: { id: BillingCycle; label: string; period: string }[] = [
  { id: 'quarterly', label: 'Pay Quarterly', period: '/quarter' },
  { id: 'biannually', label: 'Pay Biannual', period: '/6 months' },
  { id: 'annually', label: 'Pay Annually', period: '/year' },
]

/** Savings vs. paying the same span quarterly, e.g. annual vs. quarterly×4. */
function savingsPct(plan: PricingPlan, cycle: BillingCycle): number {
  if (cycle === 'quarterly' || plan.price.quarterly === 0) return 0
  const quarterlyEquivalent = cycle === 'annually' ? plan.price.quarterly * 4 : plan.price.quarterly * 2
  if (quarterlyEquivalent === 0) return 0
  return Math.round((1 - plan.price[cycle] / quarterlyEquivalent) * 100)
}

function PlanCard({ plan, cycle }: { plan: PricingPlan; cycle: BillingCycle }) {
  const featured = plan.highlighted
  const isFree = !plan.contactSales && plan.price[cycle] === 0
  const price = plan.price[cycle]
  const period = CYCLES.find((c) => c.id === cycle)!.period
  const saved = savingsPct(plan, cycle)

  return (
    <motion.div
      whileHover={{ y: featured ? -3 : -5 }}
      transition={{ duration: 0.25 }}
      className={`relative rounded-2xl flex flex-col h-full transition-shadow duration-300 ${
        featured
          ? 'dark-card-gradient shadow-feature text-white md:-mt-4 md:mb-[-4px] ring-1 ring-white/10'
          : 'bg-white border border-slate-200 shadow-soft hover:shadow-card text-slate-900'
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-white text-navy-900 text-[11px] font-black px-4 py-1 rounded-full shadow-card tracking-wide inline-flex items-center gap-1">
            <span className="material-icons-round text-[13px] text-amber-500">star</span>
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        {/* Name + tagline */}
        <div className="mb-5">
          <h3 className={`text-[20px] font-black tracking-tight mb-1 ${featured ? 'text-white' : 'text-slate-900'}`}>
            {plan.name}
          </h3>
          <p className={`text-[12.5px] leading-snug ${featured ? 'text-blue-200/70' : 'text-slate-500'}`}>
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6 min-h-[58px]">
          {plan.contactSales ? (
            <p className={`text-[30px] font-black tracking-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
              Contact Sales
            </p>
          ) : isFree && plan.id === 'free' ? (
            <div>
              <span className={`text-[34px] font-black tracking-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
                {plan.currency}0
              </span>
              <span className={`text-[13px] font-semibold ml-1.5 ${featured ? 'text-blue-200/70' : 'text-slate-400'}`}>
                forever free
              </span>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className={`text-[15px] font-black mt-1 ${featured ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.currency}
                </span>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className={`text-[32px] font-black tracking-tight leading-none ${featured ? 'text-white' : 'text-slate-900'}`}
                  >
                    {price.toLocaleString()}
                  </motion.span>
                </AnimatePresence>
                <span className={`text-[12.5px] font-semibold ml-0.5 ${featured ? 'text-blue-200/70' : 'text-slate-400'}`}>
                  {period}
                </span>
              </div>
              {saved > 0 && (
                <p className={`text-[12px] font-bold mt-1.5 ${featured ? 'text-emerald-300' : 'text-emerald-600'}`}>
                  Save {saved}% vs quarterly
                </p>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          className={`w-full py-2.5 rounded-xl font-bold text-[14px] mb-6 transition-all duration-250 ${
            featured
              ? 'bg-white text-navy-900 hover:bg-blue-50'
              : 'border-2 border-slate-200 text-slate-700 hover:border-navy-900 hover:bg-navy-900 hover:text-white'
          }`}
        >
          {plan.cta}
        </button>

        {/* Feature list */}
        <ul className="space-y-2.5 flex-1">
          {plan.features.map((f, i) => {
            const isInherit = f.startsWith('Everything in')
            return (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`material-icons-round text-[16px] mt-0.5 flex-shrink-0 ${featured ? 'text-blue-300' : 'text-brand-blue'}`}>
                  check_circle
                </span>
                <span
                  className={`text-[12.5px] leading-snug ${
                    isInherit
                      ? featured
                        ? 'text-blue-200 font-bold'
                        : 'text-slate-900 font-bold'
                      : featured
                        ? 'text-blue-100/80'
                        : 'text-slate-600'
                  }`}
                >
                  {f}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

/** Renders a single comparison-matrix cell value. */
function CompareCell({ value, featured }: { value: boolean | string; featured?: boolean }) {
  if (value === true)
    return (
      <span className={`material-icons-round text-[19px] ${featured ? 'text-brand-blue' : 'text-emerald-500'}`}>
        check_circle
      </span>
    )
  if (value === false) return <span className="text-slate-300 text-[18px] font-light">—</span>
  return <span className={`text-[13px] font-bold ${featured ? 'text-navy-900' : 'text-slate-700'}`}>{value}</span>
}

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>('quarterly')
  const [showCompare, setShowCompare] = useState(false)

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <span className="inline-flex items-center gap-2 text-brand-blue text-[13px] font-bold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block"></span>Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2">
            Straightforward pricing.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Built for <span className="text-gradient-blue">Nigerian businesses.</span>
          </h2>
        </motion.div>

        {/* Billing cycle toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-soft">
            {CYCLES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCycle(c.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-bold transition-colors duration-250 ${
                  cycle === c.id ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cycle === c.id && (
                  <motion.span
                    layoutId="cyclePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 bg-navy-900 rounded-full shadow-soft"
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch"
        >
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} cycle={cycle} />
          ))}
        </motion.div>

        {/* Compare-all toggle */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowCompare((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-navy-900 font-bold text-[13.5px] shadow-soft hover:shadow-card transition-all"
          >
            {showCompare ? 'Hide full comparison' : 'Compare all plans'}
            <motion.span
              animate={{ rotate: showCompare ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="material-icons-round text-[18px]"
            >
              expand_more
            </motion.span>
          </button>
        </div>

        {/* Dynamic comparison matrix */}
        <AnimatePresence initial={false}>
          {showCompare && (
            <motion.div
              key="compare"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
                <table className="w-full min-w-[680px] border-collapse">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-10 bg-white text-left text-[13px] font-black text-slate-900 p-4 md:p-5 border-b border-slate-200">
                        Features
                      </th>
                      {pricingPlans.map((plan) => (
                        <th
                          key={plan.id}
                          className={`p-4 md:p-5 border-b text-center align-bottom ${
                            plan.highlighted ? 'border-brand-blue/40 bg-blue-50/50' : 'border-slate-200'
                          }`}
                        >
                          <span className={`block text-[14px] font-black ${plan.highlighted ? 'text-brand-blue' : 'text-slate-900'}`}>
                            {plan.name}
                          </span>
                          <span className="block text-[11px] font-medium text-slate-400 mt-0.5">{plan.tagline}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, ri) => (
                      <tr key={row.feature} className={ri % 2 === 1 ? 'bg-slate-50/60' : ''}>
                        <td
                          className={`sticky left-0 z-10 text-[13px] font-semibold text-slate-700 p-4 md:px-5 md:py-3.5 ${
                            ri % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                          }`}
                        >
                          {row.feature}
                        </td>
                        {row.values.map((v, vi) => (
                          <td
                            key={vi}
                            className={`text-center p-4 md:px-5 md:py-3.5 ${
                              pricingPlans[vi]?.highlighted ? 'bg-blue-50/40' : ''
                            }`}
                          >
                            <CompareCell value={v} featured={pricingPlans[vi]?.highlighted} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
