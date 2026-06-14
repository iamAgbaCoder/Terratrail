import { OpsCard, Feature, Testimonial, PricingPlan, FAQItem } from '@types/index'

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
      'Create estates with multiple pricing tiers — Launch Price, Pre-launch Price, whatever you need. Attach gallery images, property documents, and location details. Configure bank transfer or online payment collection per property.',
    buttonText: 'Get Started',
    imagePosition: 'right',
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
    price: { quarterly: 0, annually: 0 },
    currency: '₦',
    periodLabel: 'Free',
    description: 'Try Terratrail with no commitment. One estate, two customers.',
    features: [
      '1 property',
      '2 customers',
      'Land booking & subscription management',
      'Installment payment tracking',
      'Unit inventory tracking',
      'Admin & customer rep roles',
      'Approval workflows',
      'Customer self-service portal (OTP login)',
      'Realtor tiers & commission tracking',
      'Email & SMS notifications',
      'Overview dashboard',
      'Workspace settings & preferences',
      'Email support',
    ],
    cta: 'Select Plan',
    highlighted: false,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: { quarterly: 300000, annually: 252000 },
    currency: '₦',
    periodLabel: '/quarter',
    description: 'For high-volume teams running large portfolios.',
    features: [
      '3 properties · 500 customers',
      'Custom subdomain: yourcompany.terratrail.app',
      'Online payment gateway',
      'Site inspection management',
      'Public estate listing page',
      'Data export (CSV — all 8 export types)',
      'Leaderboards (top properties, reps, customers)',
      'Activity logs & audit trail',
      'Realtor invite links (3 tiers)',
      'Everything in Free',
    ],
    cta: 'Select Plan',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: { quarterly: 600000, annually: 504000 },
    currency: '₦',
    periodLabel: '/quarter',
    description: 'For developers getting their first estates off the ground.',
    features: [
      '7 properties · 1,500 customers',
      'Custom subdomain: yourcompany.terratrail.app',
      'Online payment gateway',
      'Full data export suite',
      'Advanced leaderboard analytics',
      'Activity logs & full audit trail',
      'Multi-property commission reporting',
      'Expanded team collaboration tools',
      'Everything in Starter',
    ],
    cta: 'Select Plan',
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'Growth',
    price: { quarterly: 1200000, annually: 1008000 },
    currency: '₦',
    periodLabel: '/quarter',
    description: 'For established real estate companies with large portfolios.',
    features: [
      '15 properties · 3,500 customers',
      'Custom subdomain: yourcompany.terratrail.app',
      'Installment payment tracking',
      'Custom domain: Connect your own DNS (yourcompany.com)',
      'Priority support',
      'Advanced commission analytics',
      'Full multi-state portfolio management',
      'High-volume SMS & email notifications',
      'Dedicated workspace configuration support',
      'Everything in Pro',
    ],
    cta: 'Select Plan',
    highlighted: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    price: { quarterly: 0, annually: 0 },
    currency: '₦',
    periodLabel: 'Scale',
    description: 'For enterprise groups with unlimited scope. Custom SLA and integrations.',
    features: [
      'Unlimited properties',
      'Custom subdomain & custom domain',
      'Priority support',
      'Dedicated account manager',
      'Custom integrations & SLA agreement',
      'Bespoke onboarding & training',
      'Volume SMS credit pricing',
      'API access (on request)',
      'Everything in Growth',
    ],
    cta: 'Select Plan',
    highlighted: false,
  },
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
