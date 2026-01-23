"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileCheck, AlertCircle } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "SECURITY-FIRST DEVELOPMENT",
    description: "We build security into every layer—from architecture to deployment.",
  },
  {
    icon: Lock,
    title: "GDPR-COMPLIANT DATA HANDLING",
    description: "Your data is processed with enterprise-grade security and compliance standards.",
  },
  {
    icon: FileCheck,
    title: "NDA-PROTECTED ENGAGEMENTS",
    description: "Every project starts with confidentiality. Your IP stays yours.",
  },
  {
    icon: AlertCircle,
    title: "INCIDENT RESPONSE READY",
    description: "Clear processes for handling security concerns. 24-hour response commitment.",
  },
]

export function CompanyInfoSection() {
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
          <span className="text-sm font-bold text-primary uppercase tracking-widest">COMPANY</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            BUILT FOR
            <br />
            <span className="text-primary">ENTERPRISE</span>
          </h2>
        </motion.div>

        {/* Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-6">
              ABOUT QENIXLABS
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span className="text-lg text-[#A1A1AA]">Founded: 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span className="text-lg text-[#A1A1AA]">Team: Core engineers + specialist network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span className="text-lg text-[#A1A1AA]">Location: Mumbai, India • Serving global clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span className="text-lg text-[#A1A1AA]">Focus: AI-powered business software</span>
              </li>
            </ul>
          </motion.div>

          {/* Security Link */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#3F3F46] p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">SECURITY & COMPLIANCE</p>
            <p className="text-base md:text-lg text-[#A1A1AA] mb-6">
              Enterprise buyers need to know we take security seriously. Read our full security practices, compliance approach, and data handling policies.
            </p>
            <motion.a
              href="/security"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold uppercase tracking-tighter text-base md:text-lg w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW SECURITY PAGE
            </motion.a>
          </motion.div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3F3F46]">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#09090B] p-6 md:p-8 hover:bg-primary transition-colors duration-300"
            >
              <feature.icon className="text-primary mb-4 group-hover:text-black transition-colors" size={32} />
              <h4 className="text-sm font-bold text-[#FAFAFA] uppercase tracking-wider mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-[#A1A1AA] group-hover:text-black/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
