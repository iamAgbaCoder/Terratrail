import { motion } from 'framer-motion'

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="visible" className="text-center">

          {/* Eyebrow badge */}
          <motion.div variants={item} className="flex justify-center mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-[13px] font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block"></span>
              Built for Nigerian Land Sales
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] font-black text-slate-900 leading-[1.07] tracking-[-0.02em] mb-6 max-w-4xl mx-auto"
          >
            The operations stack your{' '}
            <span className="text-gradient-blue">land sales business</span>{' '}
            actually needs
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-[17px] text-slate-500 max-w-xl mx-auto mb-9 leading-relaxed"
          >
            Terratrail shows you exactly where money is coming in, which customers are falling
            behind, and which plots are still available without opening a single spreadsheet.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 md:mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://dashboard.terratrail.app/auth/sign-up"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-bold text-[15px] rounded-xl hover:bg-navy-800 transition-colors shadow-soft hover:shadow-card"
            >
              Get Started Free
              <span className="material-icons-round text-[18px]">arrow_forward</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-navy-900 font-bold text-[15px] rounded-xl hover:border-navy-900/30 hover:bg-white transition-all"
            >
              <span className="material-icons-round text-[18px]">play_circle</span>
              Book a Demo
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Product screenshot — the live overview dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-6 -z-10 rounded-[48px] bg-gradient-to-tr from-brand-blue/15 via-brand-indigo/10 to-transparent blur-3xl" />

          <div className="rounded-2xl md:rounded-[20px] overflow-hidden border border-slate-200/80 bg-white shadow-elevated">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 h-10 bg-slate-50/90 border-b border-slate-100">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </span>
              <span className="mx-auto hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 bg-white border border-slate-200/80 rounded-md px-3 py-0.5">
                <span className="material-icons-round text-[12px]">lock</span>
                dashboard.terratrail.app/overview
              </span>
            </div>
            <img
              src="/img/dashboard.png"
              alt="Terratrail overview dashboard showing active subscriptions, customers and pending payments"
              width={1064}
              height={420}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
