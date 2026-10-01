import { PageLayout, LegalBody, LegalSection } from '@components/PageLayout'

const sections: LegalSection[] = [
  {
    heading: 'Introduction',
    body: [
      'Terratrail ("we", "us", "our") provides an operations platform for land sales and real estate businesses. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and application.',
      'Terratrail has completed its compliance audit and is registered as compliant with the Nigeria Data Protection Regulation (NDPR) 2019, issued under the Nigeria Data Protection Act. This policy reflects the standards that compliance requires.',
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
    heading: 'Legal basis for processing',
    body: [
      'We process personal data under one or more of the lawful bases recognised by the NDPR: your consent, the necessity of processing to perform our contract with you, compliance with a legal obligation, or our legitimate interest in operating and securing the platform.',
      'Where we rely on consent (for example, for marketing communications), you may withdraw it at any time without affecting the lawfulness of processing carried out beforehand.',
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
    heading: 'International data transfers',
    body: [
      'Some of our infrastructure and service providers operate outside Nigeria. Where personal data is transferred internationally, we take steps required by the NDPR to ensure it remains protected — including using providers with adequate data protection standards and, where applicable, contractual safeguards.',
    ],
  },
  {
    heading: 'Data security',
    body: [
      'We use industry-standard safeguards including encryption in transit, access controls, and regular backups. No method of transmission or storage is completely secure, but we work continuously to protect your information.',
    ],
  },
  {
    heading: 'Data breach notification',
    body: [
      'If a personal data breach occurs that is likely to pose a risk to your rights, we will notify the appropriate regulatory authority and affected individuals in line with the timelines and thresholds set out in the NDPR.',
    ],
  },
  {
    heading: 'Your rights as a data subject',
    body: [
      'Under the NDPR, you have the right to be informed about how your data is used, to access the personal data we hold about you, to request correction of inaccurate data, to request erasure or restriction of processing, to object to certain processing, and to receive your data in a portable format.',
      'You may exercise these rights at any time from your workspace settings or by contacting us. Customers added to a workspace may exercise these rights through the business that manages their account, or by contacting us directly.',
    ],
  },
  {
    heading: 'Data retention',
    body: [
      'We retain your data for as long as your account is active or as needed to provide the service. After account closure, we retain limited records only as required for legal, accounting, or fraud-prevention purposes.',
    ],
  },
  {
    heading: 'Data Protection Officer & contact',
    body: [
      'Questions about this Privacy Policy, our NDPR compliance, or a request concerning your personal data can be directed to our Data Protection Officer at privacy@terratrail.app.',
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
      <LegalBody sections={sections} lastUpdated="1 October 2026" />
    </PageLayout>
  )
}
