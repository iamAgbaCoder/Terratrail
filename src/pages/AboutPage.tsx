import { motion } from 'framer-motion'
import { PageLayout } from '@components/PageLayout'
import { CircledText } from '@components/CircledText'
import { Link } from '@/router'

const values = [
  {
    icon: 'visibility',
    title: 'Clarity over chaos',
    body: 'Every naira, every plot, every customer — visible at a glance. We replace spreadsheets and WhatsApp threads with one source of truth.',
  },
  {
    icon: 'bolt',
    title: 'Built for how Nigeria sells land',
    body: 'Installments, site inspections, realtor tiers, receipt uploads. We model the way estates actually operate here, not a foreign template.',
  },
  {
    icon: 'handshake',
    title: 'Trust by default',
    body: 'Automated commissions and audit-ready records mean fewer disputes with reps and more confidence for your customers.',
  },
]

const stats = [
  { value: '₦10B+', label: 'Sales tracked' },
  { value: '500+', label: 'Estates onboarded' },
  { value: '36', label: 'States reached' },
  { value: '99.9%', label: 'Uptime' },
]

export function AboutPage() {
  return (
    <PageLayout
      eyebrow="About TerraTrail"
      title={
        <>
          We're building the operating system for{' '}
          <span className="text-gradient-blue">Nigerian land sales.</span>
        </>
      }
      subtitle="TerraTrail started with a simple frustration: estate businesses were running millions of naira in sales on Excel files and group chats. We thought they deserved better."
    >
      {/* Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
            For most Nigerian land sales companies, the back office is held together by{' '}
            <CircledText color="#60a5fa" delay={0.2}>three Excel files</CircledText>, a busy
            WhatsApp group, and a lot of hope. Payments slip through the cracks, commission
            disputes drag on for weeks, and customers call daily just to ask how much they've paid.
          </p>
          <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
            TerraTrail brings all of it into one place — properties, installment subscriptions,
            automated reminders, a self-service customer portal, and a realtor network that pays
            itself out correctly, every time. No more spreadsheets. No more guesswork.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 text-center"
            >
              <p className="text-[26px] sm:text-[34px] font-black text-slate-900 tracking-tight">{s.value}</p>
              <p className="text-[12.5px] sm:text-[13px] font-semibold text-slate-500 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center mb-10 md:mb-12">
            What we believe
          </h2>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card transition-shadow p-6 sm:p-7"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue mb-5">
                  <span className="material-icons-round text-[24px]">{v.icon}</span>
                </span>
                <h3 className="text-[18px] font-black text-slate-900 tracking-tight mb-2">{v.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl dark-card-gradient text-white text-center px-6 sm:px-10 py-12 sm:py-14">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">Ready to see it in action?</h2>
          <p className="text-white/60 text-[15px] mb-7 max-w-md mx-auto">
            Start free with one property and two customers — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://dashboard.terratrail.app/auth/sign-up"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy-900 font-black text-[15px] rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get Started Free
              <span className="material-icons-round text-[18px]">arrow_forward</span>
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/20 text-white font-bold text-[15px] rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
