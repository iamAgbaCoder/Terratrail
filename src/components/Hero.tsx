import { useState } from 'react'
import { motion } from 'framer-motion'
import { opsCards } from '@data/content'

export function Hero() {
  const [activeTab, setActiveTab] = useState(1)

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero-gradient pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 overflow-hidden">
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
            className="text-[17px] text-slate-500 max-w-xl mx-auto mb-11 leading-relaxed"
          >
            Terratrail shows you exactly where money is coming in, which customers are falling
            behind, and which plots are still available without opening a single spreadsheet.
          </motion.p>

          {/* Tab pills */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {opsCards.map((card, i) => (
              <button
                key={card.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] font-bold transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-navy-900 text-white border-navy-900 shadow-elevated'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-navy-900/30 hover:shadow-soft'
                }`}
              >
                <span className="material-icons-round text-[18px]">{card.icon}</span>
                {card.tabLabel}
              </button>
            ))}
          </motion.div>

          {/* Card carousel */}
          <motion.div variants={item} className="relative">
            {/* Side fade overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 md:w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 md:w-16 z-10 bg-gradient-to-l from-white to-transparent" />

            <div className="flex items-stretch justify-center gap-4 md:gap-5">
              {opsCards.map((card, i) => {
                const isActive = i === activeTab
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveTab(i)}
                    animate={{
                      scale: isActive ? 1 : 0.87,
                      opacity: isActive ? 1 : 0.52,
                    }}
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                    className={`flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-2xl md:rounded-3xl cursor-pointer text-left ${
                      isActive
                        ? 'dark-card-gradient shadow-feature'
                        : 'bg-white shadow-card border border-slate-100'
                    }`}
                  >
                    <div className="p-7 md:p-9 flex flex-col h-full min-h-[280px]">
                      {/* Icon bubble */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-7 flex-shrink-0 ${
                          isActive ? 'bg-white/15 shimmer-bg' : 'bg-navy-900'
                        }`}
                      >
                        <span className="material-icons-round text-[22px] text-white">
                          {card.icon}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-[19px] font-black leading-snug mb-3 ${
                          isActive ? 'text-white' : 'text-slate-800'
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Body */}
                      <p
                        className={`text-[14px] leading-[1.75] flex-1 mb-8 ${
                          isActive ? 'text-blue-100/70' : 'text-slate-500'
                        }`}
                      >
                        {card.description}
                      </p>

                      {/* CTA row */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[13px] font-bold ${
                            isActive ? 'text-white' : 'text-navy-900'
                          }`}
                        >
                          {card.cta}
                        </span>
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-white/20' : 'bg-navy-900'
                          }`}
                        >
                          <span className="material-icons-round text-[16px] text-white">
                            arrow_forward
                          </span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
