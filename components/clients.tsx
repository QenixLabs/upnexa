"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Building2,
  GraduationCap,
  Cpu,
  Factory,
  Landmark,
} from "lucide-react"

const industries = [
  {
    name: "GRC & Compliance",
    description: "Governance, risk management, and regulatory compliance platforms",
    icon: Shield,
  },
  {
    name: "Enterprise Security",
    description: "Vulnerability management and enterprise security solutions",
    icon: Building2,
  },
  {
    name: "Education Technology",
    description: "University management systems and learning platforms",
    icon: GraduationCap,
  },
  {
    name: "EdTech & AI Skills",
    description: "AI-powered soft skills training and interview preparation",
    icon: Cpu,
  },
  {
    name: "Manufacturing",
    description: "Industrial automation and process optimization systems",
    icon: Factory,
  },
  {
    name: "Financial Services",
    description: "Banking, fintech, and financial data management platforms",
    icon: Landmark,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <span className="text-sm font-semibold text-[#B8860B] tracking-wide">
            Credibility
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F2557] leading-tight mt-3">
            Our Clients & Partners
          </h2>
          <p className="text-base md:text-lg text-[#475569] mt-4 max-w-2xl mx-auto leading-relaxed">
            We deliver technology solutions across diverse industries, partnering
            with enterprises, startups, and academic institutions.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group border border-slate-200 rounded-lg bg-white hover:shadow-md transition-all duration-300 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0F2557]/[0.06] shrink-0 group-hover:bg-[#0F2557]/[0.1] transition-colors duration-300">
                  <industry.icon className="w-5 h-5 text-[#0F2557]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0F2557] leading-snug">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-[#64748B] text-center mt-10"
        >
          Industries we have served. Specific client references available upon
          request.
        </motion.p>
      </div>
    </section>
  )
}
