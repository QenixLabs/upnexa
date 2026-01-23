"use client"

import { motion } from "framer-motion"

/*
 * REAL CLIENTS - FOR FUTURE IMPLEMENTATION WITH PERMISSION
 *
 * 1. Etrends Technologies Pvt. Ltd. (est. 2008)
 *    - Industry: GRC & Compliance Solutions
 *    - Location: Mumbai, Maharashtra
 *    - Business: Laser brand - governance, risk management, compliance software
 *    - Website: etrendscomm.com
 *
 * 2. JayaaIt Solutions (VULSPHERE project)
 *    - Industry: Enterprise Security / Vulnerability Management
 *    - Project: End-to-end vulnerability lifecycle management system
 *    - Features: 4-level approval flow, Nessus integration, asset discovery
 *
 * 3. Atharva University (formerly Atharva College of Engineering)
 *    - Industry: Education Technology
 *    - Founded: 1999, Mumbai (Malad)
 *    - Maharashtra's 1st Self-Financed Private Vertical University
 *    - 800+ students, 85% placement rate
 *    - Website: atharvauniversity.org
 *
 * 4. Mauka Education Pvt. Ltd.
 *    - Industry: EdTech / AI Soft Skills Platform
 *    - Founded: 2021, Mumbai
 *    - Product: AI-enabled soft skills education, mock interview simulator
 *    - Reach: 4000+ learners, 50+ cities, 20+ states
 *    - Website: maukaeducation.com
 *
 * TO UPDATE: Replace industries below with actual client names/logos when permission is granted
 */

const clients = [
  { name: "GRC & COMPLIANCE", type: "industry" },
  { name: "ENTERPRISE SECURITY", type: "industry" },
  { name: "EDUCATION TECHNOLOGY", type: "industry" },
  { name: "EDTECH & AI SKILLS", type: "industry" },
  { name: "MANUFACTURING", type: "industry" },
  { name: "FINTECH", type: "industry" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">CLIENTS</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            TRUSTED BY
            <br />
            <span className="text-primary">TEAMS</span>
          </h2>
          <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl mx-auto">
            Enterprise platforms. Growing startups. Industry leaders.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-2 border-[#3F3F46] p-6 md:p-8 flex items-center justify-center min-h-[120px] md:min-h-[140px] hover:border-primary transition-colors duration-300 group"
            >
              <div className="text-center">
                <p className="text-sm md:text-base font-bold text-[#A1A1AA] group-hover:text-primary uppercase tracking-wider transition-colors duration-300">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-[#71717A] text-center mt-12"
        >
          Industries we've served. Specific client references available upon request.
        </motion.p>
      </div>
    </section>
  )
}
