import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsMarquee } from "@/components/stats-marquee"
import { PainPointsSection } from "@/components/pain-points-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { CtaSection } from "@/components/cta-section"
import { FounderSection } from "@/components/founder-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <PainPointsSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <WhyUsSection />
      <TechStackSection />
      <GuaranteeSection />
      <CtaSection />
      <FounderSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
