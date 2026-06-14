import { motion } from 'framer-motion'
import { pricingPlans } from '@data/content'

export function Pricing() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-text mb-4"
        >
          Straightforward pricing. Built for Nigerian businesses.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-16 max-w-2xl mx-auto"
        >
          Choose the plan that fits your business. Upgrade or downgrade anytime.
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: plan.highlighted ? 1 : 1.02 }}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-navy-900 text-white shadow-2xl md:scale-105 md:col-span-1 md:row-span-2 flex flex-col justify-center'
                  : 'bg-white border-2 border-border text-text'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col h-full">
                {/* Plan Name */}
                <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 text-sm ${plan.highlighted ? 'text-gray-300' : 'text-muted'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold">{plan.currency}</span>
                    <span className="text-2xl md:text-3xl font-bold">
                      {plan.price.toLocaleString()}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.highlighted ? 'text-gray-300' : 'text-muted'}`}>
                    {plan.period}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mb-8 px-6 py-3 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-white text-navy-900 hover:shadow-lg'
                      : 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {/* Features */}
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-text'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
