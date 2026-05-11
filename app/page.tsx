import { FaqSection } from "@/components/landing/faq-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"
import { GallerySection } from "@/components/landing/gallery-section"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { LocationSection } from "@/components/landing/location-section"
import { PartsSection } from "@/components/landing/parts-section"
import { ProblemSolutionSection } from "@/components/landing/problem-solution-section"
import { ServicesSection } from "@/components/landing/services-section"
import { TrustBar } from "@/components/landing/trust-bar"
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="relative">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <ProblemSolutionSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <PartsSection />
        <LocationSection />
        <GallerySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
