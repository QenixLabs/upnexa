"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "AI AUTOMATION & AGENTS",
    tagline: "Automate High-Value Work. 97% Time Reduction Proven.",
    features: [
      "AI agents trained on YOUR specific business data",
      "Document analysis and intelligent processing",
      "Multi-agent orchestration for complex workflows",
      "Customer support, content operations, business intelligence",
    ],
    example:
      "AI analytics layer reduced report generation from 6 hours to 8 minutes. Teams shifted from data entry to strategic analysis.",
  },
  {
    number: "02",
    title: "CUSTOM SOFTWARE PLATFORMS",
    tagline: "From Idea to Market in 8–16 Weeks. Production-Ready.",
    features: [
      "Complete product discovery and strategy",
      "SaaS platforms, operational tools, internal systems",
      "Mobile apps (iOS & Android) with custom backends",
      "Custom CMS & LMS platforms built for your workflow",
    ],
    example:
      "Replaced 7 Excel files with unified client management platform. 15 hours/week saved, automated reminders, real-time operations visibility.",
  },
  {
    number: "03",
    title: "INFRASTRUCTURE & DEVOPS",
    tagline: "Enterprise Infrastructure. Cloud-Native & Scalable.",
    features: [
      "Cloud architecture design and implementation",
      "CI/CD automation for seamless deployments",
      "Monitoring, auto-scaling, and security hardening",
      "Infrastructure handling millions of users",
    ],
    example:
      "Production-ready infrastructure with 99.9% uptime. 70% cost reduction through optimization. Scalable from 1K to 1M users.",
  },
  {
    number: "04",
    title: "STRATEGIC CONSULTING",
    tagline: "Bridge Vision and Reality. Technical Architecture.",
    features: [
      "Product vision aligned with technical reality",
      "Identify high-ROI automation opportunities",
      "Architectural decisions that scale",
      "AI readiness assessment and implementation roadmap",
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
