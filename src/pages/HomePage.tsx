import {
  Navbar,
  Hero,
  FeatureIcons,
  FeatureShowcase,
  FeatureSection,
  Testimonials,
  Pricing,
  FAQ,
  CTASection,
  Footer,
} from '@components/index'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureIcons />
      <FeatureShowcase />
      <FeatureSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  )
}
