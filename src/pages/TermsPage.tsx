import { PageLayout, LegalBody, LegalSection } from '@components/PageLayout'

const sections: LegalSection[] = [
  {
    heading: 'Acceptance of terms',
    body: [
      'These Terms & Conditions govern your access to and use of the Terratrail platform. By creating an account or using the service, you agree to be bound by these terms on behalf of yourself and any business you represent.',
    ],
  },
  {
    heading: 'The service',
    body: [
      'Terratrail provides software to manage properties, subscriptions, installment payments, site inspections, realtor commissions, and a customer self-service portal.',
      'We may add, change, or remove features over time to improve the platform. We will give reasonable notice of material changes that affect how you use the service.',
    ],
  },
  {
    heading: 'Accounts and responsibilities',
    body: [
      'You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.',
      'You agree to provide accurate information and to ensure that any customer or realtor data you upload is collected and used in compliance with applicable law.',
    ],
  },
  {
    heading: 'Plans, billing, and payments',
    body: [
      'Paid plans are billed in advance on a quarterly, biannual, or annual cycle as selected at checkout. Prices are listed in Nigerian Naira (₦).',
      'Fees are non-refundable except where required by law. Failure to pay may result in suspension or downgrade of your workspace.',
      'The Free plan is offered at no cost subject to its stated limits and may change with notice.',
    ],
  },
  {
    heading: 'Acceptable use',
    body: [
      'You may not use Terratrail for any unlawful purpose, to upload malicious code, to attempt to gain unauthorized access to the platform, or to infringe the rights of others.',
      'We may suspend or terminate accounts that violate these terms or that pose a risk to the platform or other users.',
    ],
  },
  {
    heading: 'Data ownership',
    body: [
      'You retain ownership of the data you enter into Terratrail. You grant us a limited license to process that data solely to provide the service.',
      'You can export your data at any time. Handling of personal data is described in our Privacy Policy.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'The service is provided "as is". To the maximum extent permitted by law, Terratrail is not liable for indirect, incidental, or consequential damages, or for loss of profits or data arising from your use of the service.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these terms from time to time. Continued use of the service after changes take effect constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Contact',
    body: ['Questions about these terms can be sent to legal@terratrail.app.'],
  },
]

export function TermsPage() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="The rules for using Terratrail. Please read them carefully."
    >
      <LegalBody sections={sections} lastUpdated="1 June 2026" />
    </PageLayout>
  )
}
