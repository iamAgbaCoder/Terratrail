import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { PageLayout } from '@components/PageLayout'

const channels = [
  { icon: 'mail', label: 'Email us', value: 'hello@terratrail.app', href: 'mailto:hello@terratrail.app' },
  { icon: 'support_agent', label: 'Sales & demos', value: 'sales@terratrail.app', href: 'mailto:sales@terratrail.app' },
  { icon: 'chat', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/2348000000000' },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const message = String(data.get('message') || '')
    const company = String(data.get('company') || '')
    const body = encodeURIComponent(`${message}\n\n— ${name}${company ? `, ${company}` : ''}`)
    const subject = encodeURIComponent(`New enquiry from ${name || 'Terratrail website'}`)
    window.location.href = `mailto:hello@terratrail.app?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <PageLayout
      eyebrow="Contact"
      title={
        <>
          Let's get your estate <span className="text-gradient-blue">running on Terratrail.</span>
        </>
      }
      subtitle="Questions, a demo request, or help choosing a plan — we usually reply within one business day."
    >
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Channels */}
          <div className="md:col-span-2 space-y-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-center gap-4 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card transition-all p-4 sm:p-5 group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                  <span className="material-icons-round text-[22px]">{c.icon}</span>
                </span>
                <span>
                  <span className="block text-[12.5px] font-semibold text-slate-400">{c.label}</span>
                  <span className="block text-[15px] font-bold text-slate-900">{c.value}</span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-3 rounded-3xl bg-white border border-slate-200 shadow-card p-6 sm:p-8"
          >
            {sent ? (
              <div className="text-center py-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 mb-4">
                  <span className="material-icons-round text-[30px]">mark_email_read</span>
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-2">Thanks — your email is ready to send.</h3>
                <p className="text-[14px] text-slate-500">
                  We opened your mail app with the message pre-filled. Hit send and we'll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Full name" placeholder="Adeyemi Ogunwale" required />
                  <Field name="company" label="Company" placeholder="Vertical Cities" />
                </div>
                <Field name="email" label="Work email" type="email" placeholder="you@company.com" required />
                <div>
                  <label htmlFor="message" className="block text-[13px] font-bold text-slate-700 mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your estate and what you'd like to achieve…"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 text-white font-bold text-[15px] rounded-xl hover:bg-navy-800 transition-colors shadow-soft hover:shadow-card"
                >
                  Send message
                  <span className="material-icons-round text-[18px]">send</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

function Field({
  name,
  label,
  type = 'text',
  placeholder,
  required,
}: {
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-bold text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 outline-none transition"
      />
    </div>
  )
}
