"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Building2,
  Cpu,
  Heart,
  GraduationCap,
  Landmark,
  HardHat,
} from "lucide-react"

const industries = [
  {
    icon: Building2,
    name: "Banking & Financial Services",
    description:
      "Technology security and compliance support for financial institutions.",
  },
  {
    icon: Cpu,
    name: "Technology & Startups",
    description:
      "Digital infrastructure, cybersecurity and media positioning for emerging technology companies.",
  },
  {
    icon: Heart,
    name: "Healthcare & Hospitals",
    description:
      "Secure systems and brand visibility for healthcare organizations.",
  },
  {
    icon: GraduationCap,
    name: "Education & Universities",
    description:
      "Digital transformation and cybersecurity solutions for educational institutions including institutions like Maharaja Suhel Dev State University.",
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    description:
      "Technology modernization and cyber risk advisory for public sector organizations.",
  },
  {
    icon: HardHat,
    name: "Real Estate & Infrastructure",
    description:
      "Digital marketing, reputation management and automation systems for real estate developers.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function IndustriesServed() {
  return (
    <section className="py-20 md:py-28 bg-[#0F2557]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Our experience spans multiple industries where trust, technology and
            reputation are critical.
          </p>
        </motion.div>

        {/* Industry cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                variants={cardVariants}
                className="border border-slate-200 rounded-lg p-6 hover:shadow-md bg-white transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0F2557]/5">
                    <Icon className="w-5 h-5 text-[#0F2557]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F2557]">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Industries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/industries"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white rounded-md px-8 py-3 font-medium hover:bg-white/10 transition-colors duration-300"
          >
            View All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
