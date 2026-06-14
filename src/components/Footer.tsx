import { motion } from 'framer-motion'

export function Footer() {
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
      transition: { duration: 0.5 },
    },
  }

  const footerSections = [
    {
      title: 'TerraTrail',
      items: [
        'Simplifying real estate operations for Nigerian businesses',
      ],
    },
    {
      title: 'Product',
      items: ['Features', 'Pricing', 'Integrations', 'Security'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ]

  const socialLinks = [
    { name: 'Email', icon: '✉️', link: 'mailto:hello@terratrail.com' },
    { name: 'Instagram', icon: '📷', link: '#' },
    { name: 'LinkedIn', icon: '💼', link: '#' },
  ]

  return (
    <footer className="bg-navy-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 md:py-24 border-b border-white/10"
        >
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 TerraTrail. All rights reserved. Built for the future of real estate.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
