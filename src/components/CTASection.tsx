import { motion } from 'framer-motion'
import { CircledText } from './CircledText'
import { Link } from '@/router'

export function CTASection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden max-w-6xl mx-auto rounded-[28px] sm:rounded-[36px] bg-navy-950 px-6 sm:px-10 lg:px-16 py-14 sm:py-20 md:py-24"
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] max-w-full h-[480px] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-4xl lg:text-[52px] font-black text-white leading-[1.12] tracking-tight mb-5 sm:mb-6 text-balance">
            Stop managing your estate on{' '}
            <CircledText color="#60a5fa">WhatsApp.</CircledText>
            <br className="hidden sm:block" />{' '}
            Start on Terratrail.
          </h2>

          <p className="text-[15px] sm:text-[17px] text-white/50 mb-9 sm:mb-12 max-w-lg mx-auto leading-relaxed">
            Join hundreds of real estate businesses simplifying their operations and scaling faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://dashboard.terratrail.app/auth/sign-up"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-white text-navy-900 font-black text-[15px] rounded-xl hover:bg-blue-50 transition-colors shadow-glow"
            >
              Get Started Free
              <span className="material-icons-round text-[18px]">arrow_forward</span>
            </motion.a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 border-2 border-white/20 text-white font-bold text-[15px] rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
