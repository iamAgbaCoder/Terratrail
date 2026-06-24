import { OpsCard, Feature, Testimonial, PricingPlan, FAQItem, ComparisonRow } from '@/types/index'

export const opsCards: OpsCard[] = [
  {
    id: 'subscription',
    icon: 'calendar_today',
    tabLabel: 'Subscription Overview',
    title: 'Subscription Overview',
    description:
      'Track the health of every customer subscription — which ones are active, which are defaulting, and which are due for plot allocation.',
    cta: 'Learn More',
  },
  {
    id: 'payments',
    icon: 'bar_chart',
    tabLabel: 'Payment Reports',
    title: 'Payment Reports & Revenue Insights',
    description:
      "See a full breakdown of collections by property, by time period, and by customer segment. Know exactly how much you've collected and what's still outstanding.",
    cta: 'Learn More',
  },
  {
    id: 'commission',
    icon: 'person',
    tabLabel: 'Commission Tracker',
    title: 'Sales Rep Commission Tracker',
    description:
      "Every approved payment automatically updates the relevant rep's commission record. No manual calculations. No disputes. Just clean, accurate numbers.",
    cta: 'Learn More',
  },
]

export const features: Feature[] = [
  {
    id: 'properties',
    number: 1,
    badge: 'Property Management',
    headline: 'List Properties with Pricing Plans & Installment Schedules',
    description:
      'Create estates with multiple payment plans, whatever you need. Attach gallery images, property documents, and location details. Configure bank transfer or online payment collection per property.',
    buttonText: 'Get Started',
    imagePosition: 'right',
    images: ['/img/payment_plan1.jpg', '/img/payment_plan2.jpg'],
    imageCaptions: ['Admin pricing & plan setup', 'Customer-facing listing'],
  },
  {
    id: 'tracking',
    number: 2,
    badge: 'Subscription & Payment Tracking',
    headline: 'Track Every Installment. Automate Every Reminder.',
    description:
      'Every customer subscription generates a full installment schedule automatically. Payments are logged when customers upload receipts. Automated email reminders for 7 days before, 2 days before, on the due date, and 2 days after. No more WhatsApp chasing.',
    buttonText: 'Get Started',
    imagePosition: 'left',
    images: ['/img/installment_schedule2.jpg', '/img/installment_schedule1.jpg'],
    imageCaptions: ['Live subscription status', 'Auto-generated schedule'],
  },
  {
    id: 'realtor',
    number: 3,
    badge: 'Sales Rep & Commission',
    headline: '3-Tier Realtor System with Automatic Commission Tracking',
    description:
      'Set up Realtor, Senior Realtor, and Principal Realtor tiers. Each tier gets a unique invite link. Reps self-register, get a referral code, and commissions are calculated automatically when their referred customers make payments. No more manual spreadsheet lookups.',
    buttonText: 'Get Started',
    imagePosition: 'right',
    images: ['/img/commission_settings.jpg'],
    imageCaptions: ['Tiered commission rates'],
  },
  {
    id: 'customer-dashboard',
    number: 4,
    badge: 'Customer Self-Service Portal',
    headline: 'Give Customers Their Own Dashboard, Stop Answering the Same Questions',
    description:
      'Every customer gets a self-service portal on all plans. They can view their subscription, track their installment schedule, see payment history, and upload payment receipts — all without calling your team. OTP authentication via email or phone.',
    buttonText: 'Get Started',
    imagePosition: 'left',
  },
  {
    id: 'revenue',
    number: 5,
    badge: 'Revenue Intelligence',
    headline: 'See Every Naira, Revenue, Outstanding, and Potential',
    description:
      'Your Overview dashboard shows total revenue collected, outstanding balance across all active subscriptions, and potential revenue if every customer completes their plan. Filter by property, customer rep, or time period. Leaderboards show top-performing estates, reps, and customers.',
    buttonText: 'Get Started',
    imagePosition: 'right',
    images: ['/img/revenue_metricsjpg.jpg'],
    imageCaptions: ['Financial summary at a glance'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Before TerraTrail, I had three Excel files, a WhatsApp group, and a prayer. Now I can see exactly what every customer owes, which plots are taken, and what my sales reps have earned — all in one place.',
    author: 'Adeyemi Ogunwale',
    role: 'MD, Vertical Cities — Lagos',
    avatar: 'AO',
  },
  {
    id: 'testimonial-2',
    quote:
      "Our sales reps used to argue every month about commission calculations. With TerraTrail the system calculates it automatically when a customer pays. No disputes, no manual work. It's saved us hours every week.",
    author: 'Funke Nwachukwu',
    role: 'Director of Ops, Lagos Prop Partners',
    avatar: 'FN',
  },
  {
    id: 'testimonial-3',
    quote:
      'My customers no longer call every day asking how many payments they\'ve made. They log in to their portal and see everything themselves. My team is no longer answering the same 20 questions daily.',
    author: 'Emeka Balogun',
    role: 'CEO, Landmark Realty — Abuja',
    avatar: 'EB',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Trying it out',
    price: { quarterly: 0, biannually: 0, annually: 0 },
    currency: '₦',
    description: 'Get a feel for Terratrail with no commitment — one estate, two customers.',
    features: [
      '1 property',
      '2 customers',
      'Subscriptions & payments',
      'Site inspection management',
      'Sales reps & commissions',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Solo agents, small teams',
    price: { quarterly: 300000, biannually: 550000, annually: 1000000 },
    currency: '₦',
    description: 'Everything you need to start selling and tracking with a small team.',
    features: [
      'Everything in Free',
      '3 properties',
      '500 customers',
      'Bulk upload',
      'Data export',
      'Customer portal',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Growing agencies',
    price: { quarterly: 600000, biannually: 1100000, annually: 2000000 },
    currency: '₦',
    description: 'For growing agencies that need room to scale and a branded presence.',
    features: [
      'Everything in Starter',
      '7 properties',
      '1,500 customers',
      'Custom domain',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Multi-property developers',
    price: { quarterly: 1200000, biannually: 2200000, annually: 4000000 },
    currency: '₦',
    description: 'For multi-property developers running large, active portfolios.',
    features: [
      'Everything in Pro',
      '15 properties',
      '3,500 customers',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Large enterprises',
    price: { quarterly: 0, biannually: 0, annually: 0 },
    currency: '₦',
    description: 'For large enterprises with unlimited scope, custom SLA and integrations.',
    features: [
      'Everything in Growth',
      'Unlimited properties & customers',
      'Dedicated account manager',
      'API access (on request)',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
    contactSales: true,
  },
]

/* Dynamic plan-comparison matrix. `values` align to pricingPlans order:
   [Free, Starter, Pro, Growth, Scale]. true → included, false → not included. */
export const comparisonRows: ComparisonRow[] = [
  { feature: 'Properties', values: ['1', '3', '7', '15', 'Unlimited'] },
  { feature: 'Customers', values: ['2', '500', '1,500', '3,500', 'Unlimited'] },
  { feature: 'Subscriptions & payments', values: [true, true, true, true, true] },
  { feature: 'Site inspection management', values: [true, true, true, true, true] },
  { feature: 'Sales reps & commissions', values: [true, true, true, true, true] },
  { feature: 'Bulk upload', values: [false, true, true, true, true] },
  { feature: 'Data export', values: [false, true, true, true, true] },
  { feature: 'Customer portal', values: [false, true, true, true, true] },
  { feature: 'Custom domain', values: [false, false, true, true, true] },
  { feature: 'Priority support', values: [false, false, false, true, true] },
  { feature: 'Dedicated account manager', values: [false, false, false, false, true] },
  { feature: 'API access', values: [false, false, false, false, 'On request'] },
]

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is TerraTrail?',
    answer:
      'TerraTrail is an operations platform built specifically for Nigerian land sales companies. It helps you manage properties, track subscriptions, automate payment reminders, run a realtor network, and give customers a self-service portal — all without spreadsheets.',
  },
  {
    id: 'faq-2',
    question: 'Does Terratrail work with any estate company?',
    answer:
      "Yes! TerraTrail is designed for any real estate business selling land or property on installment plans. Whether you're a startup developer or an established estate company, TerraTrail scales with your business.",
  },
  {
    id: 'faq-3',
    question: 'Is there a free trial available?',
    answer:
      'Yes — our Free plan lets you start with 1 property and 2 customers indefinitely, with no credit card required. When you\'re ready to grow, upgrading takes just a few clicks.',
  },
  {
    id: 'faq-4',
    question: 'How does TerraTrail handle installment payments?',
    answer:
      "Every subscription auto-generates a full installment schedule. When customers make payments, they upload receipts which your team approves. Automated email/SMS reminders go out 7 days before, 2 days before, and on the due date. You'll never chase a payment manually again.",
  },
  {
    id: 'faq-5',
    question: 'How does TerraTrail support outright payments?',
    answer:
      'Outright payments are supported as a single-payment subscription plan. The customer completes one payment, and TerraTrail marks the subscription as complete — no installment schedule needed.',
  },
  {
    id: 'faq-6',
    question: 'Can I add and remove team members easily?',
    answer:
      'Absolutely. You can invite team members, assign them roles (Admin, Customer Rep, etc.), and revoke access at any time from your workspace settings. Role-based permissions ensure each team member only sees what they need.',
  },
]
