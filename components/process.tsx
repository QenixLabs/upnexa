"use client"

import { motion } from "framer-motion"
import { Search, LayoutGrid, Code2, Rocket } from "lucide-react"

const steps = [
  {
    week: "WEEK 1",
    title: "DISCOVERY",
    subtitle: "We figure out what you actually need",
    details: [
      "Deep dive into your current workflow",
      "Map pain points and bottlenecks",
      "Identify high-ROI AI opportunities",
      "Honest feasibility assessment",
    ],
    icon: Search,
  },
  {
    week: "WEEK 1-2",
    title: "ARCHITECTURE",
    subtitle: "We plan before we build",
    details: [
      "System design with AI integration points",
      "Database design & API structure",
      "Human-AI workflow mapping",
      "Fixed-price proposal",
    ],
    icon: LayoutGrid,
  },
  {
    week: "WEEKS 3-12",
    title: "BUILD",
    subtitle: "Working software every 2 weeks",
    details: [
      "Bi-weekly demos of working features",
      "Train AI agents on YOUR business data",
      "Staging environment to test",
      "Transparent scope tracking",
    ],
    icon: Code2,
  },
  {
    week: "WEEK 12+",
    title: "LAUNCH",
    subtitle: "We stick around after go-live",
    details: [
      "Deployment to your infrastructure",
      "Track AI performance metrics",
      "Complete documentation",
      "30 days post-launch support",
    ],
    icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PROCESS</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            TRANSPARENT.
            <br />
            <span className="text-primary">NO SURPRISES.</span>
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-[#3F3F46] bg-[#09090B]/80 hover:border-primary/40 hover:bg-[#18181B] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-6 h-px bg-primary/40" />
                <div className="absolute top-0 right-0 w-px h-6 bg-primary/40" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#3F3F46] bg-[#18181B] group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Week Badge */}
                <span className="inline-block px-3 py-1 text-xs font-bold text-primary border border-primary/30 bg-primary/5 uppercase tracking-widest mb-6">
                  {step.week}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-2">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base text-[#71717A] group-hover:text-[#A1A1AA] mb-6 transition-colors duration-300">
                  {step.subtitle}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span className="text-sm text-[#71717A]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
