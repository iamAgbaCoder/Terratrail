import { PageLayout, LegalBody, LegalSection } from '@components/PageLayout'
import { useDocumentMeta } from '@/useDocumentMeta'

const highlights = [
  { icon: 'verified_user', label: 'NDPR Compliant' },
  { icon: 'block', label: 'We Never Sell Data' },
  { icon: 'lock', label: 'Encrypted in Transit' },
  { icon: 'manage_accounts', label: 'Full Data Control' },
]

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    icon: 'privacy_tip',
    accent: 'blue',
    body: [
      'Terratrail ("we", "us", "our") provides an operations platform for land sales and real estate businesses. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and application.',
      'Terratrail has completed its compliance audit and is registered as compliant with the Nigeria Data Protection Regulation (NDPR) 2019, issued under the Nigeria Data Protection Act. This policy reflects the standards that compliance requires.',
      'By using Terratrail, you agree to the practices described in this policy. If you do not agree, please do not use the service.',
    ],
    image: { src: '/ndpr-image.jpg', alt: 'NDPR Data Compliant, 2026' },
  },
  {
    heading: 'Information we collect',
    icon: 'folder_shared',
    accent: 'indigo',
    body: [],
    items: [
      {
        icon: 'badge',
        title: 'Account information',
        text: 'Your name, email address, phone number, business name, and role when you register a workspace.',
      },
      {
        icon: 'domain',
        title: 'Operational data',
        text: 'Properties, subscriptions, payment records, customer details, and realtor information entered into the platform.',
      },
      {
        icon: 'insights',
        title: 'Usage data',
        text: 'How you interact with the product, device and browser type, and log information, used to improve performance and security.',
      },
    ],
  },
  {
    heading: 'How we use your information',
    icon: 'settings_suggest',
    accent: 'emerald',
    body: [
      'To provide and maintain the service, including processing subscriptions, generating installment schedules, and calculating commissions.',
      'To send transactional communications such as payment reminders, receipts, and account notifications.',
      'To improve and secure the platform, detect fraud, and comply with legal obligations.',
    ],
  },
  {
    heading: 'Legal basis for processing',
    icon: 'gavel',
    accent: 'amber',
    body: [
      'We process personal data under one or more of the lawful bases recognised by the NDPR: your consent, the necessity of processing to perform our contract with you, compliance with a legal obligation, or our legitimate interest in operating and securing the platform.',
      'Where we rely on consent (for example, for marketing communications), you may withdraw it at any time without affecting the lawfulness of processing carried out beforehand.',
    ],
  },
  {
    heading: 'Data sharing',
    icon: 'share',
    accent: 'purple',
    body: [
      'We do not sell your data. We share information only with service providers that help us operate the platform (for example, payment processors and email/SMS providers), and only to the extent necessary to deliver the service.',
      'We may disclose information where required by law or to protect the rights, property, or safety of Terratrail, our users, or the public.',
    ],
  },
  {
    heading: 'International data transfers',
    icon: 'public',
    accent: 'sky',
    body: [
      'Some of our infrastructure and service providers operate outside Nigeria. Where personal data is transferred internationally, we take steps required by the NDPR to ensure it remains protected — including using providers with adequate data protection standards and, where applicable, contractual safeguards.',
    ],
  },
  {
    heading: 'Data security',
    icon: 'lock',
    accent: 'blue',
    body: [
      'We use industry-standard safeguards including encryption in transit, access controls, and regular backups. No method of transmission or storage is completely secure, but we work continuously to protect your information.',
    ],
  },
  {
    heading: 'Data breach notification',
    icon: 'report_problem',
    accent: 'amber',
    body: [
      'If a personal data breach occurs that is likely to pose a risk to your rights, we will notify the appropriate regulatory authority and affected individuals in line with the timelines and thresholds set out in the NDPR.',
    ],
  },
  {
    heading: 'Your rights as a data subject',
    icon: 'fact_check',
    accent: 'emerald',
    body: [
      'You may exercise these rights at any time from your workspace settings or by contacting us. Customers added to a workspace may exercise these rights through the business that manages their account, or by contacting us directly.',
    ],
    items: [
      { icon: 'visibility', title: 'Be informed', text: 'How your data is used.' },
      { icon: 'search', title: 'Access', text: 'The personal data we hold about you.' },
      { icon: 'edit', title: 'Rectification', text: 'Correction of inaccurate data.' },
      { icon: 'delete_outline', title: 'Erasure / restriction', text: 'Of processing, where applicable.' },
      { icon: 'block', title: 'Object', text: 'To certain kinds of processing.' },
      { icon: 'import_export', title: 'Portability', text: 'Receive your data in a portable format.' },
    ],
  },
  {
    heading: 'Data retention',
    icon: 'schedule',
    accent: 'sky',
    body: [
      'We retain your data for as long as your account is active or as needed to provide the service. After account closure, we retain limited records only as required for legal, accounting, or fraud-prevention purposes.',
    ],
  },
  {
    heading: 'Data Protection Officer & contact',
    icon: 'support_agent',
    accent: 'indigo',
    body: [
      'Questions about this Privacy Policy, our NDPR compliance, or a request concerning your personal data can be directed to our Data Protection Officer at privacy@terratrail.app.',
    ],
  },
]

export function PrivacyPage() {
  useDocumentMeta(
    'Privacy Policy — Terratrail',
    'How we collect, use, and protect your information when you use Terratrail. NDPR compliant.',
  )
  return (
    <PageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when you use Terratrail."
    >
      <LegalBody sections={sections} lastUpdated="1 October 2026" highlights={highlights} />
    </PageLayout>
  )
}
