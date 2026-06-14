import {
  Navbar,
  Hero,
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
      <main>
        <Hero />
        <FeatureSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
