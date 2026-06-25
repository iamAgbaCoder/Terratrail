import { motion } from 'framer-motion'
import { testimonials } from '@data/content'

const avatarColors = [
  'bg-indigo-100 text-indigo-600',
  'bg-rose-100 text-rose-600',
  'bg-amber-100 text-amber-600',
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-navy-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-navy-900/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-blue-400 text-[13px] font-bold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-xl mx-auto">
            Real estate companies running smarter on Terratrail
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="material-icons-round text-amber-400 text-[16px]">star</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-[15px] leading-[1.75] flex-1 mb-7">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-black flex-shrink-0 ${avatarColors[i]}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-[14px]">{t.author}</p>
                  <p className="text-white/45 text-[12px] font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
