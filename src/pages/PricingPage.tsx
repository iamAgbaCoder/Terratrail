import { motion } from 'framer-motion'
import { PageLayout } from '@components/PageLayout'
import { Pricing } from '@components/Pricing'
import { FAQ } from '@components/FAQ'
import { CTASection } from '@components/CTASection'
import { pricingPlans } from '@data/content'
import { PricingPlan } from '@/types/index'

const cycleLabels: { key: 'quarterly' | 'biannually' | 'annually'; label: string }[] = [
  { key: 'quarterly', label: 'Quarterly' },
  { key: 'biannually', label: 'Biannual' },
  { key: 'annually', label: 'Annual' },
]

function priceLine(plan: PricingPlan) {
  if (plan.contactSales) return 'Custom — billed by agreement'
  if (plan.price.quarterly === 0) return 'Free forever'
  return cycleLabels
    .map((c) => `${plan.currency}${plan.price[c.key].toLocaleString()} ${c.label.toLowerCase()}`)
    .join('  ·  ')
}

/** A detailed, readable breakdown of each plan below the cards + comparison table. */
function PlanDetails() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center mb-10 md:mb-12">
          Detailed plan breakdown
        </h2>

        <div className="space-y-5">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
              className={`grid md:grid-cols-5 gap-6 rounded-2xl border p-6 sm:p-7 ${
                plan.highlighted ? 'border-brand-blue/40 bg-blue-50/40' : 'border-slate-200 bg-white'
              }`}
            >
              {/* Left: identity + price */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[20px] font-black text-slate-900 tracking-tight">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="inline-flex items-center gap-1 bg-brand-blue text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                      <span className="material-icons-round text-[11px]">star</span>
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[13px] font-semibold text-slate-500 mb-3">{plan.tagline}</p>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4">{plan.description}</p>
                <p className="text-[12.5px] font-bold text-navy-900">{priceLine(plan)}</p>
              </div>

              {/* Right: full feature list */}
              <div className="md:col-span-3 md:border-l md:border-slate-200/70 md:pl-6">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.12em] mb-3">
                  What's included
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <span className="material-icons-round text-[16px] mt-0.5 text-brand-blue flex-shrink-0">
                        check_circle
                      </span>
                      <span className={`text-[13px] leading-snug ${f.startsWith('Everything in') ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PricingPage() {
  return (
    <PageLayout
      eyebrow="Pricing"
      title={
        <>
          Simple, transparent pricing for{' '}
          <span className="text-gradient-blue">every stage of growth.</span>
        </>
      }
      subtitle="Start free, then pick the plan that matches your portfolio. Pay quarterly, biannually, or annually — the longer the cycle, the more you save."
    >
      {/* Cards + billing toggle + full comparison table */}
      <Pricing showHeader={false} variant="full" />

      {/* Per-plan detailed information */}
      <PlanDetails />

      {/* Shared FAQ + closing CTA */}
      <FAQ />
      <CTASection />
    </PageLayout>
  )
}
