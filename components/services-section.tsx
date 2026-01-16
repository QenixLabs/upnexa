"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "ENTERPRISE PLATFORMS",
    tagline: "Turn operational chaos into a single source of truth",
    features: [
      "Custom dashboards showing real-time business state",
      "Automated workflows eliminating repetitive tasks",
      "Role-based access control",
      "Integration layers connecting your existing tools",
    ],
    example:
      "Built a client management system replacing 7 Excel files. Automated payment reminders, AMC tracking, revenue analytics.",
    tech: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    number: "02",
    title: "AI INTEGRATION",
    tagline: "Stop doing work a computer can handle",
    features: [
      "AI agents trained on YOUR specific data",
      "Conversational interfaces that feel natural",
      "Automated report generation",
      "Document processing with context",
    ],
    example:
      "AI analytics layer reduced report generation from 6 hours to 8 minutes. Teams shifted from data entry to analysis.",
    tech: "OpenAI, Anthropic, LangChain, LangGraph",
  },
  {
    number: "03",
    title: "MOBILE APPLICATIONS",
    tagline: "Meet your users where they actually are",
    features: [
      "Native iOS/Android that don't feel like web wrappers",
      "Custom CMS for non-technical content updates",
      "Push notifications people want to receive",
      "Offline-first architecture",
    ],
    example: "Education platform with custom CMS. 10,000+ users, 67% push notification open rate.",
    tech: "React Native, Expo, NestJS, AWS",
  },
  {
    number: "04",
    title: "LEGACY MODERNIZATION",
    tagline: "Your old system works, but it's holding you back",
    features: [
      "Migrate from Excel/Access to modern cloud",
      "Zero downtime, zero data loss",
      "Clean up years of messy data",
      "Build proper APIs for modern integrations",
    ],
    example:
      "Migrated 7 years of scattered client data into unified platform. Every record intact. Team productive in one week.",
    tech: "PostgreSQL, MongoDB, NestJS",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky top-24 md:top-32"
              style={{ zIndex: index + 1 }}
            >
              <div className="group border-2 border-[#3F3F46] bg-[#09090B] hover:bg-primary hover:border-primary transition-colors duration-300">
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-start gap-6 mb-8">
                        <span className="text-[4rem] md:text-[6rem] font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300">
                          {service.number}
                        </span>
                        <div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-lg md:text-xl text-[#A1A1AA] group-hover:text-black/70 mt-2 transition-colors duration-300">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-primary group-hover:text-black text-xl transition-colors duration-300">
                              →
                            </span>
                            <span className="text-lg text-[#A1A1AA] group-hover:text-black/80 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div className="lg:border-l-2 lg:border-[#3F3F46] lg:group-hover:border-black/20 lg:pl-16 transition-colors duration-300">
                      <div className="mb-8">
                        <span className="text-xs font-bold text-primary group-hover:text-black uppercase tracking-widest transition-colors duration-300">
                          REAL EXAMPLE
                        </span>
                        <p className="text-lg md:text-xl text-[#FAFAFA] group-hover:text-black mt-2 leading-tight transition-colors duration-300">
                          {service.example}
                        </p>
                      </div>

                      <div className="pt-6 border-t-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300">
                        <span className="text-xs font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                          TECH STACK
                        </span>
                        <p className="text-sm font-mono text-[#FAFAFA] group-hover:text-black mt-2 transition-colors duration-300">
                          {service.tech}
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
