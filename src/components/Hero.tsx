import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen bg-white pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
          >
            Manage Your Land Sales with <span className="text-primary">Clarity and Control</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
          >
            Stop managing your real estate operations on WhatsApp. TerraTrail brings clarity to property listings, installment tracking, and commission management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
            >
              Book Demo
            </motion.button>
          </motion.div>

          {/* Dashboard Screenshot Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-navy-900/20 rounded-2xl blur-2xl" />
            <div className="relative bg-light-gray rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-navy-900/5 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-muted">Dashboard Preview</p>
                  <p className="text-sm text-muted mt-2">Production-ready interface</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
