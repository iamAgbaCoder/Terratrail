import { motion } from 'framer-motion'

const links = {
  Product: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog'],
  Company: ['About Us', 'Blog', 'Careers', 'Contact'],
  Contact: ['hello@terratrail.app', 'Twitter / X', 'LinkedIn', 'Instagram'],
}

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 md:py-20 border-b border-white/8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="material-icons-round text-white text-[15px]">terrain</span>
              </div>
              <span className="text-[17px] font-black text-white tracking-tight">Terratrail</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[200px]">
              Simplifying land sales operations for Nigerian real estate businesses.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: 'mail', label: 'Email' },
                { icon: 'link', label: 'Twitter' },
                { icon: 'work', label: 'LinkedIn' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/6 hover:bg-white/12 flex items-center justify-center transition-colors"
                >
                  <span className="material-icons-round text-white/60 text-[17px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[12px] font-black text-white/30 uppercase tracking-[0.12em] mb-4">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-white/55 hover:text-white transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-[12px] text-white/30 font-medium">
            © 2025 Terratrail. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
