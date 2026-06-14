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
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}

export interface PricingPrice {
  quarterly: number
  annually: number
}

export interface PricingPlan {
  id: string
  name: string
  price: PricingPrice
  currency: string
  periodLabel: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
