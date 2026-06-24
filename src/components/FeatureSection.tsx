import { motion } from 'framer-motion'
import { features } from '@data/content'

/* ─── Inline product-mockup placeholders ─── */

function PropertyMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-5 max-w-[360px] w-full mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[11px] font-bold px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>Published
        </span>
        <span className="material-icons-round text-slate-300 text-[18px]">more_horiz</span>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl h-28 flex flex-col items-center justify-center mb-4">
        <span className="material-icons-round text-slate-200 text-5xl">image</span>
        <p className="text-slate-300 text-[11px] font-bold tracking-widest mt-1">NO COVER IMAGE</p>
      </div>
      <h3 className="text-brand-blue font-black text-[17px]">Apex Heights</h3>
      <p className="text-[10px] text-slate-400 font-bold tracking-[0.12em] uppercase mt-0.5">Residential Land</p>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="material-icons-round text-slate-300 text-[13px]">location_on</span>
        <span className="text-slate-400 text-[12px] truncate">Apex Heights Estate, Mowe-Ofada, Ogun State...</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100">
        {[['SQM', '270,000'], ['SUBS', '22'], ['REVENUE', '₦0']].map(([label, val]) => (
          <div key={label}>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
            <p className="font-black text-[13px] text-slate-800 mt-0.5">{val}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SubscriptionMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-5 max-w-[360px] w-full mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[13px] font-black text-slate-500">WO</div>
        <div>
          <h3 className="font-black text-slate-800 text-[15px]">Wale Olowole</h3>
          <p className="text-[11px] text-slate-400">Apex Heights</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {[
          ['Pricing Plan', '600sqm (6 months)'],
          ['Status', 'Active'],
          ['Total Price', '₦3,770,000'],
          ['Amount Paid', '₦3,141,666.67'],
        ].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
            <span className={`text-[13px] font-black ${val === 'Active' ? 'text-emerald-600' : 'text-slate-800'}`}>{val}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Balance</span>
          <span className="text-[13px] font-black text-red-500">₦628,333.33</span>
        </div>
      </div>
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <div className="flex justify-between mb-1.5">
          <span className="text-[11px] text-slate-500 font-semibold">Payment Progress</span>
          <span className="text-[11px] font-black text-slate-700">83%</span>
        </div>
        <div className="h-1.5 bg-slate-200 rounded-full">
          <div className="h-1.5 bg-brand-blue rounded-full" style={{ width: '83%' }} />
        </div>
      </div>
    </div>
  )
}

function RealtorMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-5 max-w-[360px] w-full mx-auto">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[13px] font-black text-brand-blue">SA</div>
          <div>
            <h3 className="font-black text-slate-800 text-[15px]">Seun Adesanya</h3>
            <p className="text-[11px] text-slate-400 font-mono">REP-SA-004</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[11px] font-bold px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>Active
        </span>
      </div>
      <div className="flex gap-2 mb-5">
        <button className="flex-1 text-[11px] font-bold border border-slate-200 rounded-lg py-1.5 text-slate-600 hover:bg-slate-50">Edit Realtor</button>
        <button className="flex-1 text-[11px] font-bold border border-red-200 rounded-lg py-1.5 text-red-500 hover:bg-red-50">Deactivate</button>
      </div>
      <div className="space-y-2.5">
        {[
          ['Email', 'seun.adesanya@example.com'],
          ['Phone', '+2348000000004'],
          ['Tier', 'Realtor'],
          ['Referral Code', 'REP-SA-004'],
          ['Joined', '18 May 2026'],
        ].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-bold">{label}</span>
            <span className={`text-[12px] font-bold ${label === 'Referral Code' ? 'text-brand-blue font-mono' : 'text-slate-700'}`}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomerPortalMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-5 max-w-[360px] w-full mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[13px] font-black text-purple-500">FA</div>
        <div>
          <h3 className="font-black text-slate-800 text-[15px]">Funmilayo Akinwale</h3>
          <p className="text-[11px] text-slate-400">Apex Heights</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {[
          ['Plan', '300sqm (Outright)'],
          ['Status', 'Completed'],
          ['Total Price', '₦2,050,000'],
          ['Amount Paid', '₦2,050,000'],
        ].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
            <span className={`text-[13px] font-black ${val === 'Completed' ? 'text-sky-500' : val === '₦2,050,000' && label === 'Amount Paid' ? 'text-emerald-600' : 'text-slate-800'}`}>{val}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Balance</span>
          <span className="text-[13px] font-black text-slate-800">₦0</span>
        </div>
      </div>
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <div className="flex justify-between mb-1.5">
          <span className="text-[11px] text-slate-500 font-semibold">Payment Progress</span>
          <span className="text-[11px] font-black text-emerald-600">100%</span>
        </div>
        <div className="h-1.5 bg-slate-200 rounded-full">
          <div className="h-1.5 bg-emerald-500 rounded-full w-full" />
        </div>
      </div>
    </div>
  )
}

function OverviewMockup() {
  const bars = [28, 48, 38, 62, 78, 55, 88, 70, 92, 65, 82, 74]
  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 p-5 max-w-[360px] w-full mx-auto">
      <h3 className="font-black text-slate-800 text-[15px] mb-4">Payments</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Collected</p>
          <p className="font-black text-slate-800 text-[14px]">₦29,176,666</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-3">
          <span className="inline-block bg-amber-100 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">Pending</span>
          <p className="font-black text-slate-800 text-[14px]">5</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[['Selected', '2'], ['Outstanding', '₦0'], ['Commission', '₦0']].map(([l, v]) => (
          <div key={l} className="bg-slate-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-slate-400 font-bold">{l}</p>
            <p className="font-black text-slate-700 text-[12px] mt-0.5">{v}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-bold text-slate-700">Monthly Revenue</p>
          <div className="flex items-center gap-3">
            {[['bg-navy-900', 'Approved'], ['bg-slate-200', 'Financed']].map(([color, label]) => (
              <span key={label} className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className={`w-2 h-2 rounded-full ${color} inline-block`}></span>{label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-1 h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex items-end">
              <div className="w-full bg-navy-900 rounded-sm" style={{ height: `${h}%`, opacity: 0.75 + i * 0.02 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockups = [PropertyMockup, SubscriptionMockup, RealtorMockup, CustomerPortalMockup, OverviewMockup]

/* ─── Real screenshot showcase (uses /public/img assets) ─── */

function WindowFrame({
  src,
  caption,
  className = '',
}: {
  src: string
  caption?: string
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-elevated ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 h-9 bg-slate-50/90 border-b border-slate-100">
        <span className="flex gap-1.5 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </span>
        {caption && (
          <span className="ml-2 truncate text-[11px] font-semibold text-slate-400">
            {caption}
          </span>
        )}
      </div>
      <img
        src={src}
        alt={caption ? `Terratrail — ${caption}` : 'Terratrail product screenshot'}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
    </div>
  )
}

function MockupShowcase({
  images,
  captions = [],
  fallback: Fallback,
}: {
  images?: string[]
  captions?: string[]
  fallback?: () => JSX.Element
}) {
  // No screenshot supplied → fall back to the coded mockup component.
  if (!images || images.length === 0) {
    return Fallback ? <Fallback /> : null
  }

  // Single screenshot — clean floating frame with an ambient glow.
  if (images.length === 1) {
    return (
      <div className="relative mx-auto w-full max-w-[440px]">
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-brand-blue/15 via-brand-indigo/10 to-transparent blur-2xl" />
        <WindowFrame src={images[0]} caption={captions[0]} />
      </div>
    )
  }

  // Two screenshots — layered "deck" that fans apart on hover, no distortion.
  return (
    <div className="group relative mx-auto w-full max-w-[400px] pb-12 pr-8">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-brand-blue/15 via-brand-indigo/10 to-transparent blur-2xl" />
      {/* Back card */}
      <div className="absolute inset-x-0 top-0 z-0 origin-bottom-left rotate-[3deg] translate-x-7 translate-y-10 transition-transform duration-500 ease-out group-hover:translate-x-10 group-hover:translate-y-14 group-hover:rotate-[4deg]">
        <WindowFrame src={images[1]} caption={captions[1]} className="opacity-95" />
      </div>
      {/* Front card */}
      <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <WindowFrame src={images[0]} caption={captions[0]} />
      </div>
    </div>
  )
}

export function FeatureSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="inline-flex items-center gap-2 text-brand-blue text-[13px] font-bold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block"></span>Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-2xl mx-auto leading-tight">
            Everything your real estate business needs in one place
          </h2>
        </motion.div>

        {/* Feature rows */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isRight = feature.imagePosition === 'right'

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${!isRight ? 'lg:[&>*:first-child]:order-last' : ''}`}>

                  {/* Text side */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-[12px] font-bold px-3 py-1 rounded-full">
                        <span className="material-icons-round text-[14px]">
                          {['domain', 'receipt_long', 'group', 'person', 'analytics'][index]}
                        </span>
                        {feature.badge}
                      </span>
                      <button className="text-[12px] font-bold text-brand-blue hover:underline flex items-center gap-1">
                        See features
                        <span className="material-icons-round text-[14px]">arrow_forward</span>
                      </button>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-[32px] font-black text-slate-900 leading-tight tracking-tight mb-5">
                      {feature.headline}
                    </h3>

                    <p className="text-[16px] text-slate-500 leading-[1.75] mb-8">
                      {feature.description}
                    </p>

                    <motion.a
                      href="https://dashboard.terratrail.app/auth/sign-up"
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px] bg-navy-900 text-white hover:bg-navy-800 shadow-soft hover:shadow-card transition-all duration-250"
                    >
                      {feature.buttonText}
                      <span className="material-icons-round text-[16px]">arrow_forward</span>
                    </motion.a>
                  </div>

                  {/* Mockup side */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center"
                  >
                    <MockupShowcase
                      images={feature.images}
                      captions={feature.imageCaptions}
                      fallback={mockups[index]}
                    />
                  </motion.div>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
