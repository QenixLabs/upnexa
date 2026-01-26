import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | AI Automation, Custom Software, Infrastructure | QENIXLABS",
  description: "Four core services: AI Automation & Agents, Custom Software Platforms, Infrastructure & DevOps, and Strategic Consulting. Real results: 97% time reduction proven.",
  keywords: [
    "AI automation services",
    "custom software development",
    "infrastructure and DevOps",
    "strategic consulting",
    "AI agents",
    "enterprise platforms",
    "cloud infrastructure",
    "software architecture consulting",
  ],
  openGraph: {
    title: "Services | AI Automation, Custom Software, Infrastructure | QENIXLABS",
    description: "Four core services: AI Automation, Custom Platforms, Infrastructure, Consulting.",
    url: "https://qenixlabs.com/services",
    images: [
      {
        url: "https://qenixlabs.com/og.png",
        width: 1200,
        height: 630,
        alt: "QENIXLABS Services",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
