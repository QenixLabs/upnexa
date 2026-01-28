import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { ClientsSection } from "@/components/clients"
import { WorkPreview } from "@/components/workPreview"
import { ProcessSection } from "@/components/process"
import { ServicesOverview } from "@/components/servicesOverview"
import { WhyUsSection } from "@/components/whyUs"
import { TestimonialsSection } from "@/components/testimonials"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <ClientsSection />
      <WorkPreview />
      <ProcessSection />
      <ServicesOverview />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
