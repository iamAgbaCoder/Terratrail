export interface FeatureIcon {
  id: string
  icon: string
  label: string
}

export interface Feature {
  id: string
  number: number
  headline: string
  description: string
  buttonText: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: string
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
