"use client"

import { motion } from "framer-motion"

const caseStudies = [
  {
    number: "01",
    title: "VULSPHERE",
    subtitle: "Vulnerability Management System",
    challenge: "Enterprise-grade security platform with Nessus integration, multi-level approvals, ironclad licensing.",
    metrics: [
      { value: "10K+", label: "VULNERABILITIES" },
      { value: "85%", label: "TIME SAVED" },
      { value: "500+", label: "ASSETS" },
    ],
    tech: "Next.js 15, NestJS, MongoDB, Docker",
  },
  {
    number: "02",
    title: "CLIENT INTELLIGENCE",
    subtitle: "Enterprise Management Platform",
    challenge: "Company managing clients across 6 countries using Excel. Missed deadlines, no AMC visibility.",
    metrics: [
      { value: "₹12L+", label: "RECOVERED" },
      { value: "40+ HRS", label: "SAVED/WEEK" },
      { value: "ZERO", label: "MISSED AMC" },
    ],
    tech: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    number: "03",
    title: "EDUCATION PLATFORM",
    subtitle: "Mobile App + Custom CMS",
    challenge: "Static website couldn't showcase dynamic campus life. Non-technical staff needed content control.",
    metrics: [
      { value: "10K+", label: "USERS" },
      { value: "67%", label: "OPEN RATE" },
      { value: "MINUTES", label: "TO UPDATE" },
    ],
    tech: "React Native, Expo, NestJS, AWS",
  },
  {
    number: "04",
    title: "AI AUDIT ANALYTICS",
    subtitle: "Built in 1 Week",
    challenge: "Audit teams spending hours on custom reports. Needed flexible, AI-driven insights.",
    metrics: [
      { value: "97%", label: "TIME CUT" },
      { value: "8 MIN", label: "VS 6 HRS" },
      { value: "500+", label: "REPORTS" },
    ],
    tech: "Next.js, Anthropic Claude, LangChain",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PROOF OF WORK</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            THINGS WE'VE
            <br />
            <span className="text-primary">ACTUALLY BUILT</span>
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-[#3F3F46]">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#09090B] p-8 md:p-12 hover:bg-primary transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <span className="text-[4rem] md:text-[5rem] font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300">
                  {study.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-base text-primary group-hover:text-black/70 uppercase tracking-wider transition-colors duration-300">
                    {study.subtitle}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <p className="text-lg text-[#A1A1AA] group-hover:text-black/80 mb-8 transition-colors duration-300">
                {study.challenge}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 border-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary group-hover:text-black tracking-tighter transition-colors duration-300">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300">
                <span className="text-xs font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                  STACK:
                </span>
                <span className="text-sm font-mono text-[#FAFAFA] group-hover:text-black ml-2 transition-colors duration-300">
                  {study.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
