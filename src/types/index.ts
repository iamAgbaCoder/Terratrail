export interface OpsCard {
  id: string
  icon: string
  tabLabel: string
  title: string
  description: string
  cta: string
}

export interface Feature {
  id: string
  number: number
  badge: string
  headline: string
  description: string
  buttonText: string
  imagePosition: 'left' | 'right'
  /** One or two screenshot mockups for this feature. Omit to fall back to the coded mockup. */
  images?: string[]
  /** Short captions shown under each mockup, parallel to `images`. */
  imageCaptions?: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}

export type BillingCycle = 'quarterly' | 'biannually' | 'annually'

export interface PricingPrice {
  quarterly: number
  biannually: number
  annually: number
}

export interface PricingPlan {
  id: string
  name: string
  /** Short positioning line, e.g. "Solo agents, small teams". */
  tagline: string
  price: PricingPrice
  currency: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  /** Top tier with no public price — renders "Contact Sales". */
  contactSales?: boolean
}

/** A single row in the dynamic plan-comparison table. */
export interface ComparisonRow {
  feature: string
  /** One entry per plan, in the same order as `pricingPlans`. */
  values: (boolean | string)[]
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
