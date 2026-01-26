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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3F3F46] mb-12">
          {featuredWork.map((work, index) => (
            <motion.div
              key={work.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-[#09090B] p-6 md:p-8 hover:bg-primary transition-colors duration-300 h-full flex flex-col ${work.isAI ? "ring-1 ring-primary/50" : ""}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300 flex-shrink-0">
                  {work.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300">
                      {work.title}
                    </h3>
                    {work.isAI && (
                      <span className="text-[10px] font-bold text-primary group-hover:text-black bg-primary/10 group-hover:bg-black/10 px-2 py-0.5 uppercase tracking-wider">
                        AI
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-primary group-hover:text-black/70 uppercase tracking-wider transition-colors duration-300">
                    {work.subtitle}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4 p-3 border-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300">
                {work.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-base md:text-lg font-bold text-primary group-hover:text-black tracking-tighter transition-colors duration-300">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-wider transition-colors duration-300 break-words">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300 mt-auto">
                <span className="text-xs font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                  STACK:
                </span>
                <span className="text-xs font-mono text-[#FAFAFA] group-hover:text-black ml-2 transition-colors duration-300 break-words">
                  {work.tech}
                </span>
              </div>
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
            className="inline-flex items-center justify-center h-14 px-12 bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-lg hover:border-primary hover:text-primary hover:scale-105 active:scale-95 transition-all"
          >
            VIEW ALL WORK
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
