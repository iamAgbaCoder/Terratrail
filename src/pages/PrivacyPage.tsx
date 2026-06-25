import { PageLayout, LegalBody, LegalSection } from '@components/PageLayout'

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    body: [
      'Terratrail ("we", "us", "our") provides an operations platform for land sales and real estate businesses. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and application.',
      'By using Terratrail, you agree to the practices described in this policy. If you do not agree, please do not use the service.',
    ],
  },
  {
    heading: 'Information we collect',
    body: [
      'Account information: your name, email address, phone number, business name, and role when you register a workspace.',
      'Operational data: properties, subscriptions, payment records, customer details, and realtor information that you or your team enter into the platform.',
      'Usage data: how you interact with the product, device and browser type, and log information, collected to improve performance and security.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'To provide and maintain the service, including processing subscriptions, generating installment schedules, and calculating commissions.',
      'To send transactional communications such as payment reminders, receipts, and account notifications.',
      'To improve and secure the platform, detect fraud, and comply with legal obligations.',
    ],
  },
  {
    heading: 'Data sharing',
    body: [
      'We do not sell your data. We share information only with service providers that help us operate the platform (for example, payment processors and email/SMS providers), and only to the extent necessary to deliver the service.',
      'We may disclose information where required by law or to protect the rights, property, or safety of Terratrail, our users, or the public.',
    ],
  },
  {
    heading: 'Data security',
    body: [
      'We use industry-standard safeguards including encryption in transit, access controls, and regular backups. No method of transmission or storage is completely secure, but we work continuously to protect your information.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You may access, correct, export, or request deletion of your personal data at any time from your workspace settings or by contacting us.',
      'Customers added to a workspace may exercise these rights through the business that manages their account, or by contacting us directly.',
    ],
  },
  {
    heading: 'Data retention',
    body: [
      'We retain your data for as long as your account is active or as needed to provide the service. After account closure, we retain limited records only as required for legal, accounting, or fraud-prevention purposes.',
    ],
  },
  {
    heading: 'Contact us',
    body: [
      'If you have questions about this Privacy Policy or your data, contact us at privacy@terratrail.app.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when you use Terratrail."
    >
      <LegalBody sections={sections} lastUpdated="1 June 2026" />
    </PageLayout>
  )
}
