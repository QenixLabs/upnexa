"use client"

import { motion } from "framer-motion"

const steps = [
  {
    week: "WEEK 1",
    title: "DISCOVERY",
    subtitle: "We figure out what you actually need",
    details: [
      "Deep dive into your current workflow",
      "Map pain points and bottlenecks",
      "Define success metrics",
      "Honest feasibility assessment",
    ],
  },
  {
    week: "WEEK 1-2",
    title: "ARCHITECTURE",
    subtitle: "We plan before we build",
    details: [
      "Detailed technical specification",
      "Database design & API structure",
      "Timeline with milestones",
      "Fixed-price proposal",
    ],
  },
  {
    week: "WEEKS 3-12",
    title: "BUILD",
    subtitle: "Working software every 2 weeks",
    details: [
      "Bi-weekly demos of working features",
      "Staging environment to test",
      "Regular direction validation",
      "Transparent scope tracking",
    ],
  },
  {
    week: "WEEK 12+",
    title: "LAUNCH",
    subtitle: "We stick around after go-live",
    details: [
      "Deployment to your infrastructure",
      "Team training (recorded)",
      "Complete documentation",
      "30 days post-launch support",
    ],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PROCESS</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            TRANSPARENT.
            <br />
            <span className="text-primary">NO SURPRISES.</span>
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3F3F46]">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#09090B] p-8 md:p-10 hover:bg-primary transition-colors duration-300"
            >
              {/* Week Badge */}
              <span className="inline-block px-3 py-1 text-xs font-bold text-primary group-hover:text-black border-2 border-primary group-hover:border-black uppercase tracking-widest mb-6 transition-colors duration-300">
                {step.week}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black mb-2 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-base text-[#A1A1AA] group-hover:text-black/70 mb-6 transition-colors duration-300">
                {step.subtitle}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary group-hover:text-black transition-colors duration-300">→</span>
                    <span className="text-sm text-[#A1A1AA] group-hover:text-black/80 transition-colors duration-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
