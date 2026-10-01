import {
  Navbar,
  Hero,
  OpsShowcase,
  FeatureSection,
  // Testimonials, // temporarily hidden
  Pricing,
  FAQ,
  CTASection,
  Footer,
} from '@components/index'
import { useDocumentMeta } from '@/useDocumentMeta'

export function HomePage() {
  useDocumentMeta(
    'Terratrail — Land Sales Operations Platform for Nigerian Real Estate',
    'Terratrail shows you exactly where money is coming in, which customers are falling behind, and which plots are still available — without opening a single spreadsheet.',
  )
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <OpsShowcase />
        <FeatureSection />
        {/* <Testimonials /> temporarily hidden */}
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
