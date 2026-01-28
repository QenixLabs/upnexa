"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const featuredWork = [
  {
    number: "01",
    title: "VULSPHERE",
    subtitle: "Vulnerability Lifecycle Management System",
    category: "SHIPPED",
    metrics: [{ value: "END-TO-END", label: "LIFECYCLE" }, { value: "4-LEVEL", label: "APPROVAL FLOW" }],
    tech: "Next.js, NestJS, MongoDB",
  },
  {
    number: "02",
    title: "CLIENT MANAGEMENT SYSTEM",
    subtitle: "Operational Software Platform",
    category: "SHIPPED",
    metrics: [{ value: "15 HRS", label: "SAVED/WEEK" }, { value: "$24K+", label: "RECOVERED/YR" }],
    tech: "Next.js, NestJS, MongoDB",
  },
  {
    number: "07",
    title: "AI AUDIT REPORTS",
    subtitle: "AI Agent Automation",
    category: "CAPABILITY",
    metrics: [{ value: "97%", label: "TIME REDUCTION" }, { value: "8 MIN", label: "VS 6 HRS" }],
    tech: "OpenAI, LangChain, Next.js",
    isAI: true,
  },
]

export function WorkPreview() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PROOF OF WORK</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            THINGS WE'VE
            <br />
            <span className="text-primary">ACTUALLY BUILT</span>
          </h2>
          <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
            Real projects shipped. Plus AI use cases we can build for you.
          </p>
        </motion.div>

        {/* Work Preview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredWork.map((work, index) => (
            <motion.div
              key={work.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative border border-[#3F3F46] bg-[#09090B]/80 hover:border-primary/40 hover:bg-[#18181B] transition-all duration-500 overflow-hidden h-full flex flex-col ${work.isAI ? "ring-1 ring-primary/20" : ""}`}
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-px bg-primary/40" />
                <div className="absolute top-0 right-0 w-px h-8 bg-primary/40" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-[#27272A] group-hover:text-primary/30 leading-none tracking-tighter transition-colors duration-500 flex-shrink-0">
                    {work.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base md:text-lg font-bold uppercase tracking-tighter text-[#FAFAFA]">
                        {work.title}
                      </h3>
                      {work.isAI && (
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 uppercase tracking-wider border border-primary/20">
                          AI
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-primary uppercase tracking-wider">
                      {work.subtitle}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-[#18181B] text-[#71717A] border border-[#3F3F46]">
                    {work.category}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4 p-3 border border-[#3F3F46] bg-[#0D0D0F]">
                  {work.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base md:text-lg font-bold text-primary tracking-tighter">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-bold text-[#71717A] uppercase tracking-wider break-words">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-[#3F3F46] mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {work.tech.split(", ").map((tech) => (
                      <span key={tech} className="text-xs text-[#71717A] bg-[#18181B] border border-[#27272A] px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-14 px-12 bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-lg hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(220,20,60,0.15)] transition-all duration-300"
          >
            VIEW ALL WORK
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
