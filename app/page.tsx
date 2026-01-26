import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { ClientsSection } from "@/components/clients"
import { WorkPreview } from "@/components/workPreview"
import { ServicesOverview } from "@/components/servicesOverview"
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
      <ServicesOverview />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
