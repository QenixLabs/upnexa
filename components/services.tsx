"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "AI AGENTS & WORKFLOW AUTOMATION",
    tagline: "Automate High-Value Work. 97% Time Reduction Proven.",
    features: [
      "AI agents trained on YOUR specific business data",
      "Document analysis and intelligent processing",
      "Multi-agent orchestration for complex workflows",
      "Conversational interfaces that feel natural",
    ],
    example:
      "AI analytics layer reduced report generation from 6 hours to 8 minutes. Teams shifted from data entry to strategic analysis.",
  },
  {
    number: "02",
    title: "CUSTOM SAAS & PRODUCT DEVELOPMENT",
    tagline: "From Idea to Market in 8–16 Weeks. AI-Accelerated Where It Matters.",
    features: [
      "Complete product discovery and strategy",
      "Full-stack development with modern frontend and backend",
      "AI-powered features for competitive advantage",
      "Cloud infrastructure with security and scalability",
    ],
    example:
      "Built complete SaaS platform from scratch. Production-ready with clean architecture, proper scalability, and ongoing support—not just a hand-off.",
  },
  {
    number: "03",
    title: "OPERATIONAL SOFTWARE & INTERNAL TOOLS",
    tagline: "Replace Excel. Add AI Intelligence. Real-Time Visibility.",
    features: [
      "Centralized workflows replacing fragmented systems",
      "AI-powered insights and automation layer",
      "Real-time dashboards and business intelligence",
      "Custom-built without bloat or licensing costs",
    ],
    example:
      "Replaced 7 Excel files with unified client management platform. 15 hours/week saved, automated reminders, real-time operations visibility.",
  },
  {
    number: "04",
    title: "MOBILE APP DEVELOPMENT",
    tagline: "Full-Featured Mobile Apps. AI-Enhanced User Experiences.",
    features: [
      "Native iOS and Android applications",
      "On-device AI capabilities where appropriate",
      "Custom backend systems with real-time features",
      "Full admin dashboard for content management",
    ],
    example: "Education platform with custom CMS. 10,000+ users, 67% push notification open rate, native performance.",
  },
  {
    number: "05",
    title: "CUSTOM CMS & CONTENT MANAGEMENT",
    tagline: "Manage Content Without Code. AI-Assisted Creation at Scale.",
    features: [
      "Purpose-built for YOUR content structure",
      "AI content suggestions and workflow assistance",
      "Non-technical team can manage content",
      "Multi-tenant platform support",
    ],
    example:
      "Custom CMS platform matching exact workflow. Educational content management with scalable architecture and zero vendor lock-in.",
  },
  {
    number: "06",
    title: "LEARNING MANAGEMENT SYSTEMS (LMS)",
    tagline: "Build Your Academy. AI-Personalized Learning Paths.",
    features: [
      "Complete course builder for instructors",
      "AI-driven course recommendations and assessment",
      "Student dashboard with progress tracking",
      "Admin platform for insights and management",
    ],
    example:
      "Enterprise LMS purpose-built for specific teaching model. You own the platform—no vendor dependency or university-focused constraints.",
  },
  {
    number: "07",
    title: "CLOUD INFRASTRUCTURE & DEVOPS",
    tagline: "Enterprise Infrastructure. AI-Optimized for Cost & Performance.",
    features: [
      "Cloud architecture design and implementation",
      "AI-powered monitoring and auto-scaling",
      "CI/CD automation for seamless deployments",
      "Security hardening and compliance",
    ],
    example:
      "Production-ready infrastructure handling millions of users. Secure, scalable, with automated deployment pipelines.",
  },
  {
    number: "08",
    title: "STRATEGY & TECHNICAL CONSULTING",
    tagline: "Bridge Vision and Reality. AI Readiness Assessment Included.",
    features: [
      "Product vision aligned with technical reality",
      "Identify high-ROI AI opportunities for your business",
      "Architectural decisions that scale",
      "Strategic guidance from idea to shipped product",
    ],
    example:
      "Strategic planning that turned vague ideas into shipped products. Architectural decisions preventing expensive rewrites.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">SERVICES</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            WHAT WE
            <br />
            <span className="text-primary">ACTUALLY BUILD</span>
          </h2>
        </motion.div>

        {/* Services - Sticky Scroll Cards */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="sticky top-24 md:top-32"
              style={{ zIndex: index + 1 }}
            >
              <div className="group border-2 border-[#3F3F46] bg-[#09090B] hover:bg-primary hover:border-primary transition-colors duration-300">
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-start gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">
                        <span className="text-[2rem] md:text-[3rem] lg:text-[6rem] font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300 flex-shrink-0">
                          {service.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300 break-words">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-base lg:text-lg text-[#A1A1AA] group-hover:text-black/70 mt-2 transition-colors duration-300">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 md:space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3">
                            <span className="text-primary group-hover:text-black text-base md:text-lg lg:text-xl transition-colors duration-300 flex-shrink-0">
                              →
                            </span>
                            <span className="text-sm md:text-base lg:text-lg text-[#A1A1AA] group-hover:text-black/80 transition-colors duration-300 break-words">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div className="lg:border-l-2 lg:border-[#3F3F46] lg:group-hover:border-black/20 lg:pl-0 lg:pl-16 pt-6 lg:pt-0 border-t-2 border-[#3F3F46] lg:border-t-0 transition-colors duration-300">
                      <div>
                        <span className="text-xs font-bold text-primary group-hover:text-black uppercase tracking-widest transition-colors duration-300">
                          REAL EXAMPLE
                        </span>
                        <p className="text-base md:text-lg lg:text-xl text-[#FAFAFA] group-hover:text-black mt-2 leading-tight transition-colors duration-300">
                          {service.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
