import { motion } from 'framer-motion'
import { features } from '@data/content'

export function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-navy-900 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {features.map((feature, index) => {
          const isTextLeft = feature.imagePosition === 'left'

          return (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="mb-20 md:mb-32 last:mb-0"
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isTextLeft ? 'md:grid-flow-dense' : ''}`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={isTextLeft ? 'md:col-start-1' : ''}
                >
                  <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Feature {feature.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {feature.headline}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                  >
                    {feature.buttonText}
                  </motion.button>
                </motion.div>

                {/* Image Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={isTextLeft ? 'md:col-start-2' : ''}
                >
                  <div className="bg-white rounded-2xl shadow-feature overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-light-gray to-border flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-5xl mb-4">📱</div>
                        <p className="text-text font-semibold">{feature.imageAlt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
