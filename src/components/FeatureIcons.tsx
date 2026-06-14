import { motion } from 'framer-motion'
import { featureIcons } from '@data/content'

export function FeatureIcons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-text mb-16"
        >
          The operations stack your land sales business actually needs
        </motion.h2>

        {/* Feature Icons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {featureIcons.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
              className="bg-light-gray rounded-xl p-6 text-center transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">{feature.icon}</div>
              <p className="text-text font-semibold">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
