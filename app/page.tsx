import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { AuthoritySection } from "@/components/authoritySection"
import { ServiceDivisions } from "@/components/serviceDivisions"
import { IndustriesServed } from "@/components/industriesServed"
import { StrategicApproach } from "@/components/strategicApproach"
import { WhyChooseUs } from "@/components/whyChooseUs"
import { ThoughtLeadership } from "@/components/thoughtLeadership"
import { CtaSection } from "@/components/cta"
import { TestimonialsSection } from "@/components/testimonials"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StickyCta } from "@/components/stickyCta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <AuthoritySection />
      <ServiceDivisions />
      <IndustriesServed />
      <StrategicApproach />
      <WhyChooseUs />
      <ThoughtLeadership />
      <CtaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <StickyCta />
    </main>
  )
}
