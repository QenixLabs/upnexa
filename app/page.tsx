import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { PainPointsSection } from "@/components/painPoints"
import { ServicesSection } from "@/components/services"
import { ProcessSection } from "@/components/process"
import { CaseStudiesSection } from "@/components/caseStudies"
import { WhyUsSection } from "@/components/whyUs"
import { TechStackSection } from "@/components/techStack"
import { GuaranteeSection } from "@/components/guarantee"
import { CtaSection } from "@/components/cta"
import { FounderSection } from "@/components/founder"
import { FaqSection } from "@/components/faq"
import { ContactSection } from "@/components/contact"
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
