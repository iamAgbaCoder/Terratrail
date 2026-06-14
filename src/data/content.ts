import { FeatureIcon, Feature, Testimonial, PricingPlan, FAQItem } from '@types/index'

export const featureIcons: FeatureIcon[] = [
  {
    id: 'automation',
    icon: '⚡',
    label: 'Automated Reminders'
  },
  {
    id: 'analytics',
    icon: '📊',
    label: 'Real-time Analytics'
  },
  {
    id: 'security',
    icon: '🔒',
    label: 'Bank-grade Security'
  },
  {
    id: 'integration',
    icon: '🔗',
    label: 'Easy Integration'
  },
  {
    id: 'support',
    icon: '👥',
    label: 'Expert Support'
  },
]

export const features: Feature[] = [
  {
    id: 'properties',
    number: 1,
    headline: 'List Properties with Pricing Plans & Installment Schedules',
    description: 'Create flexible pricing plans with custom installment schedules. Set up payment terms that work for your business and let TerraTrail handle the tracking automatically.',
    buttonText: 'Learn More',
    image: '/feature-1.svg',
    imageAlt: 'Property listing interface',
    imagePosition: 'right'
  },
  {
    id: 'tracking',
    number: 2,
    headline: 'Track Every Installment. Automate Every Reminder.',
    description: 'Never miss a payment. Automatically send reminders to customers at key intervals. Track payment status in real-time and get alerts for overdue payments.',
    buttonText: 'Learn More',
    image: '/feature-2.svg',
    imageAlt: 'Payment tracking dashboard',
    imagePosition: 'left'
  },
  {
    id: 'realtor',
    number: 3,
    headline: 'Three-tier Realtor System with Automatic Commission Tracking',
    description: 'Manage tier-based realtor roles with automatic commission calculations. Ensure accurate payouts and transparent commission tracking for your agents.',
    buttonText: 'Learn More',
    image: '/feature-3.svg',
    imageAlt: 'Realtor management system',
    imagePosition: 'right'
  },
  {
    id: 'customer-dashboard',
    number: 4,
    headline: 'Give Customers Their Own Dashboard',
    description: 'Empower your customers with a dedicated portal. They can track their property, view payment schedules, and access important documents anytime.',
    buttonText: 'Learn More',
    image: '/feature-4.svg',
    imageAlt: 'Customer dashboard',
    imagePosition: 'left'
  },
  {
    id: 'revenue',
    number: 5,
    headline: 'See Every Naira, Revenue, Outstanding, and Potential',
    description: 'Comprehensive financial reporting at your fingertips. View total revenue, outstanding balances, and projected income. Make data-driven business decisions.',
    buttonText: 'Learn More',
    image: '/feature-5.svg',
    imageAlt: 'Financial dashboard',
    imagePosition: 'right'
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'TerraTrail transformed how we manage our land sales. Payment tracking is now seamless, and our customers love having their own dashboard.',
    author: 'Chioma Okafor',
    role: 'Real Estate Director',
    avatar: '👩‍💼'
  },
  {
    id: 'testimonial-2',
    quote: 'The commission tracking system saved us hours every month. We finally have clarity on payouts, and our realtors are happier than ever.',
    author: 'Tunde Adeyemi',
    role: 'Estate Manager',
    avatar: '👨‍💼'
  },
  {
    id: 'testimonial-3',
    quote: 'From WhatsApp chaos to organized operations. TerraTrail made scaling our business possible without adding more staff.',
    author: 'Aisha Patel',
    role: 'Business Owner',
    avatar: '👩‍🔬'
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: '₦',
    period: 'forever',
    description: 'Perfect to get started',
    features: [
      'Up to 10 properties',
      'Basic customer dashboard',
      'Email support',
      'Standard reports'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 300000,
    currency: '₦',
    period: '/year',
    description: 'For growing businesses',
    features: [
      'Up to 50 properties',
      'Advanced customer dashboard',
      'Payment reminders automation',
      'Priority email support',
      'Custom branding',
      'Advanced analytics'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 600000,
    currency: '₦',
    period: '/year',
    description: 'For established companies',
    features: [
      'Unlimited properties',
      'Multi-user access',
      'Realtor commission tracking',
      'Phone & email support',
      'API access',
      'White-label options',
      'Monthly strategy calls'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 1200000,
    currency: '₦',
    period: '/year',
    description: 'For large-scale operations',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
      'Custom workflows',
      'Priority implementation'
    ],
    cta: 'Contact Sales',
    highlighted: false
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 0,
    currency: '₦',
    period: 'Contact us',
    description: 'Tailored solution for your needs',
    features: [
      'All enterprise features',
      'Fully customizable',
      'Dedicated support team',
      'Custom development',
      'Training included',
      'Unlimited everything'
    ],
    cta: 'Schedule Demo',
    highlighted: false
  },
]

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get started with TerraTrail?',
    answer: 'Sign up for a free account, add your properties, and start creating pricing plans. Our onboarding team will guide you through setup in minutes.'
  },
  {
    id: 'faq-2',
    question: 'Can I integrate TerraTrail with my existing tools?',
    answer: 'Yes! We offer integrations with popular accounting software, CRMs, and payment gateways. Contact our team for custom integrations.'
  },
  {
    id: 'faq-3',
    question: 'Is my customer data secure?',
    answer: 'Absolutely. We use bank-grade encryption, comply with international security standards, and conduct regular security audits.'
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept?',
    answer: 'We accept transfers, card payments, and all major Nigerian payment methods. You can set up payment automation for your customers.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer customer support?',
    answer: 'Yes! All plans include email support. Starter and above get priority support, and Enterprise customers get a dedicated account manager.'
  },
  {
    id: 'faq-6',
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
]
