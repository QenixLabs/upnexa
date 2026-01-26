"use client"

import { Metadata } from "next"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

const caseStudies = [
  // SHIPPED PROJECTS
  {
    number: "01",
    title: "VULSPHERE",
    subtitle: "Vulnerability Lifecycle Management System",
    category: "SHIPPED",
    challenge: "Enterprise security teams struggling to orchestrate the complete vulnerability remediation loop—from asset discovery and scanning to multi-stage approvals and confirmatory retesting across the organization.",
    metrics: [
      { value: "END-TO-END", label: "LIFECYCLE" },
      { value: "4-LEVEL", label: "APPROVAL FLOW" },
      { value: "NESSUS", label: "INTEGRATION" },
    ],
    tech: "Next.js, NestJS, MongoDB, PDFMake",
  },
  {
    number: "02",
    title: "CLIENT MANAGEMENT SYSTEM",
    subtitle: "Operational Software Platform",
    category: "SHIPPED",
    challenge: "Operations team drowning in Excel. Manual data entry, no visibility, constant errors, lost revenue from missed renewals.",
    metrics: [
      { value: "15 HRS", label: "SAVED/WEEK" },
      { value: "$24K+", label: "RECOVERED/YR" },
      { value: "500+", label: "CLIENTS" },
    ],
    tech: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    number: "03",
    title: "CREATOR TOOLKIT",
    subtitle: "Complete SaaS Platform",
    category: "SHIPPED",
    challenge: "Content creators spending 20+ hours/week on production (thumbnails, editing, voice-overs, metadata).",
    metrics: [
      { value: "3X", label: "OUTPUT" },
      { value: "14 WKS", label: "TO LAUNCH" },
      { value: "GLOBAL", label: "USERS" },
    ],
    tech: "Next.js, Node.js, AWS, OpenAI",
  },
  {
    number: "04",
    title: "EDUCATION APP",
    subtitle: "Mobile + Custom CMS",
    category: "SHIPPED",
    challenge: "Static website couldn't showcase dynamic campus life. Non-technical staff needed content control.",
    metrics: [
      { value: "10K+", label: "USERS" },
      { value: "67%", label: "OPEN RATE" },
      { value: "MINUTES", label: "TO UPDATE" },
    ],
    tech: "React Native, Expo, NestJS, AWS",
  },
  {
    number: "05",
    title: "ENTERPRISE LMS",
    subtitle: "Learning Management Platform",
    category: "SHIPPED",
    challenge: "Generic LMS platforms built for universities. Enterprise needed purpose-built system for their teaching model.",
    metrics: [
      { value: "18 WKS", label: "TO BUILD" },
      { value: "CUSTOM", label: "WORKFLOW" },
      { value: "ZERO", label: "VENDOR LOCK" },
    ],
    tech: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    number: "06",
    title: "SCALABLE INFRASTRUCTURE",
    subtitle: "Cloud & DevOps Implementation",
    category: "SHIPPED",
    challenge: "Application buckling under growth. Slow load times, frequent crashes, no clear path to scale from 1K to 1M users.",
    metrics: [
      { value: "99.9%", label: "UPTIME" },
      { value: "6 WKS", label: "TO DEPLOY" },
      { value: "70%", label: "COST CUT" },
    ],
    tech: "AWS, Docker, Kubernetes, Terraform",
  },
  // CAPABILITY DEMONSTRATIONS
  {
    number: "07",
    title: "AI AUDIT REPORTS",
    subtitle: "AI Agent Automation",
    category: "CAPABILITY",
    challenge: "Audit teams spending 6 hours per report analyzing data, structuring findings, and generating documents manually. AI agents trained on audit framework now handle the repetitive work.",
    metrics: [
      { value: "97%", label: "TIME REDUCTION" },
      { value: "8 MIN", label: "VS 6 HRS" },
      { value: "10X", label: "OUTPUT CAPACITY" },
    ],
    tech: "OpenAI, LangChain, Next.js",
    isAI: true,
  },
  {
    number: "08",
    title: "AI CUSTOMER SUPPORT",
    subtitle: "Example Use Case",
    category: "CAPABILITY",
    challenge: "Customer service teams overwhelmed by repetitive tickets. AI agents trained on your knowledge base handle 80% of routine inquiries—password resets, order status, troubleshooting—while humans focus on complex issues.",
    metrics: [
      { value: "80%", label: "AUTO-RESOLVED" },
      { value: "<30 SEC", label: "RESPONSE TIME" },
      { value: "24/7", label: "AVAILABILITY" },
    ],
    tech: "OpenAI, Anthropic, LangChain",
    isAI: true,
  },
  {
    number: "09",
    title: "AI BUSINESS INTELLIGENCE",
    subtitle: "Example Use Case",
    category: "CAPABILITY",
    challenge: "Business intelligence delayed by manual reporting. AI analyzes data trends, surfaces anomalies, and generates insights in real-time. Decisions based on current data, not last week's spreadsheet.",
    metrics: [
      { value: "REAL-TIME", label: "INSIGHTS" },
      { value: "0", label: "MANUAL WORK" },
      { value: "100%", label: "DATA VISIBILITY" },
    ],
    tech: "OpenAI, MongoDB, Next.js",
    isAI: true,
  },
  {
    number: "10",
    title: "AI CONTENT OPERATIONS",
    subtitle: "Example Use Case",
    category: "CAPABILITY",
    challenge: "Can't produce content fast enough? AI-assisted workflows scale output 5x without headcount. AI drafts first drafts, humans refine strategy and brand voice.",
    metrics: [
      { value: "5X", label: "OUTPUT" },
      { value: "HUMAN", label: "STRATEGY FOCUS" },
      { value: "100%", label: "BRAND CONSISTENCY" },
    ],
    tech: "OpenAI, Anthropic, Next.js",
    isAI: true,
  },
]

const filters = ["ALL", "SHIPPED", "CAPABILITY"]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filteredStudies =
    activeFilter === "ALL" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter)

  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">PROOF OF WORK</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              THINGS WE'VE
              <br />
              <span className="text-primary">ACTUALLY BUILT</span>
            </h1>
            <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
              Real projects shipped. Plus AI use cases we can build for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex gap-4 md:gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  activeFilter === filter
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent text-[#A1A1AA] border-[#3F3F46] hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
                {filter === "SHIPPED" && <span className="ml-2 text-xs">6</span>}
                {filter === "CAPABILITY" && <span className="ml-2 text-xs">4</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#3F3F46]">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group bg-[#09090B] p-6 md:p-8 lg:p-12 hover:bg-primary transition-colors duration-300 h-full flex flex-col ${study.isAI ? "ring-1 ring-primary/50" : ""}`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">
                  <span className="text-[2rem] md:text-[3rem] lg:text-[5rem] font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300 flex-shrink-0">
                    {study.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300 break-words">
                        {study.title}
                      </h3>
                      {study.isAI && (
                        <span className="text-[10px] font-bold text-primary group-hover:text-black bg-primary/10 group-hover:bg-black/10 px-2 py-1 uppercase tracking-wider">
                          AI
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm lg:text-base text-primary group-hover:text-black/70 uppercase tracking-wider transition-colors duration-300">
                      {study.subtitle}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <p className="text-sm md:text-base lg:text-lg text-[#A1A1AA] group-hover:text-black/80 mb-4 md:mb-6 lg:mb-8 transition-colors duration-300">
                  {study.challenge}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 lg:mb-8 p-3 md:p-4 lg:p-6 border-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary group-hover:text-black tracking-tighter transition-colors duration-300">
                        {metric.value}
                      </div>
                      <div className="text-[10px] md:text-xs font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-wider transition-colors duration-300 break-words">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 md:pt-6 border-t-2 border-[#3F3F46] group-hover:border-black/20 transition-colors duration-300 mt-auto">
                  <span className="text-xs font-bold text-[#A1A1AA] group-hover:text-black/60 uppercase tracking-widest transition-colors duration-300">
                    STACK:
                  </span>
                  <span className="text-xs md:text-sm font-mono text-[#FAFAFA] group-hover:text-black ml-2 transition-colors duration-300 break-words">
                    {study.tech}
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
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl text-[#FAFAFA] mb-6">Have a use case in mind?</p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center justify-center h-14 px-12 bg-primary text-black font-bold uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DISCUSS YOUR USE CASE
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
