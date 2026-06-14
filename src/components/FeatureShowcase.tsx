import { motion } from 'framer-motion'

export function FeatureShowcase() {
  const features = [
    { label: 'Real-time Sync', icon: '🔄' },
    { label: 'Custom Workflows', icon: '⚙️' },
    { label: 'Advanced Reports', icon: '📈' },
  ]

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Center Gradient Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative mx-auto max-w-2xl mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-gradient-to-br from-primary/10 to-navy-900/10 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 shadow-feature">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                  Smart Operations Hub
                </h3>
                <p className="text-muted">
                  Everything you need to scale your real estate business in one powerful platform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards Around Center */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                whileHover={{ y: -10 }}
                className="bg-light-gray rounded-2xl p-8 text-center border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-text">{feature.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
