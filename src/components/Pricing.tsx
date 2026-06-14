import { useState } from 'react'
import { motion } from 'framer-motion'
import { pricingPlans } from '@data/content'
import { PricingPlan } from '@types/index'

type Cycle = 'quarterly' | 'annually'

function PlanCard({ plan, cycle, featured }: { plan: PricingPlan; cycle: Cycle; featured?: boolean }) {
  const isFree = plan.id === 'free'
  const isCustom = plan.id === 'custom'
  const price = plan.price[cycle]

  return (
    <motion.div
      whileHover={{ y: featured ? -2 : -5 }}
      transition={{ duration: 0.25 }}
      className={`relative rounded-2xl flex flex-col h-full transition-shadow duration-300 ${
        featured
          ? 'dark-card-gradient shadow-feature text-white'
          : 'bg-white border border-slate-200 shadow-soft hover:shadow-card text-slate-900'
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-white text-navy-900 text-[11px] font-black px-4 py-1 rounded-full shadow-card tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col h-full">
        {/* Name + desc */}
        <div className="mb-6">
          <h3 className={`text-[22px] font-black tracking-tight mb-1 ${featured ? 'text-white' : 'text-slate-900'}`}>
            {plan.name}
          </h3>
          <p className={`text-[13px] leading-relaxed ${featured ? 'text-blue-200/70' : 'text-slate-500'}`}>
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-7">
          {isFree || isCustom ? (
            <p className={`text-[36px] font-black tracking-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
              {isFree ? 'Free' : 'Custom'}
            </p>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className={`text-[15px] font-black mt-1 ${featured ? 'text-blue-200' : 'text-slate-500'}`}>₦</span>
              <span className={`text-[36px] font-black tracking-tight leading-none ${featured ? 'text-white' : 'text-slate-900'}`}>
                {price.toLocaleString()}
              </span>
              <span className={`text-[13px] font-semibold ml-0.5 ${featured ? 'text-blue-200/70' : 'text-slate-400'}`}>
                {plan.periodLabel}
              </span>
            </div>
          )}
          {cycle === 'annually' && !isFree && !isCustom && (
            <p className="text-[12px] text-emerald-400 font-bold mt-1">Save 16% annually</p>
          )}
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3 rounded-xl font-bold text-[14px] mb-7 transition-all duration-250 ${
            featured
              ? 'bg-white text-navy-900 hover:bg-blue-50'
              : 'border-2 border-slate-200 text-slate-700 hover:border-navy-900 hover:bg-navy-900 hover:text-white'
          }`}
        >
          {plan.cta}
        </button>

        {/* Feature list */}
        <ul className="space-y-3 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`material-icons-round text-[16px] mt-0.5 flex-shrink-0 ${featured ? 'text-blue-300' : 'text-brand-blue'}`}>
                check_circle
              </span>
              <span className={`text-[13px] leading-snug ${featured ? 'text-blue-100/80' : 'text-slate-600'}`}>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('quarterly')

  const [free, scale, growth, pro, custom] = pricingPlans

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-soft">
            {(['quarterly', 'annually'] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-250 ${
                  cycle === c
                    ? 'bg-navy-900 text-white shadow-soft'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {c === 'quarterly' ? 'Pay Quarterly' : 'Pay Annually (Save 16%)'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Top row: Free | Growth (featured) | Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start mb-5 md:mb-6"
        >
          <div className="md:pt-4">
            <PlanCard plan={free} cycle={cycle} />
          </div>
          <div className="md:-mt-4">
            <PlanCard plan={growth} cycle={cycle} featured />
          </div>
          <div className="md:pt-4">
            <PlanCard plan={scale} cycle={cycle} />
          </div>
        </motion.div>

        {/* Bottom row: Pro | Custom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          <PlanCard plan={pro} cycle={cycle} />
          <PlanCard plan={custom} cycle={cycle} />
        </motion.div>

      </div>
    </section>
  )
}
