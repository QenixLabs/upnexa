import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { ClientsSection } from "@/components/clients"
import { CaseStudiesSection } from "@/components/caseStudies"
import { ServicesSection } from "@/components/services"
import { TeamSection } from "@/components/team"
import { ClientPortalSection } from "@/components/clientPortal"
import { ProcessSection } from "@/components/process"
import { WhyUsSection } from "@/components/whyUs"
import { TestimonialsSection } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing"
import { FaqSection } from "@/components/faq"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <ClientsSection />
      <CaseStudiesSection />
      <ServicesSection />
      <TeamSection />
      <ClientPortalSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
