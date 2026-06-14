import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-blue/8 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
          Stop managing your estate{' '}
          <span className="text-white/60">on WhatsApp.</span>
          <br />
          Start on TerraTrail.
        </h2>

        <p className="text-[17px] text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
          Join hundreds of real estate businesses simplifying their operations and scaling faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 font-black text-[15px] rounded-xl hover:bg-blue-50 transition-colors shadow-glow"
          >
            Get Started Free
            <span className="material-icons-round text-[18px]">arrow_forward</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold text-[15px] rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Book a Demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
