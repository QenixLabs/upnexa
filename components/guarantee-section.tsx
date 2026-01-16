"use client"

import { motion } from "framer-motion"

const pricingTiers = [
  { title: "SIMPLE AUTOMATION", range: "₹3L - ₹6L" },
  { title: "CUSTOM DASHBOARDS", range: "₹6L - ₹12L" },
  { title: "ENTERPRISE PLATFORMS", range: "₹12L - ₹25L+" },
  { title: "AI INTEGRATION", range: "₹4L - ₹15L" },
]

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PRICING</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            BALLPARK
            <br />
            <span className="text-primary">PRICING</span>
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3F3F46] mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-[#09090B] p-8 hover:bg-primary transition-colors duration-300"
            >
              <h3 className="text-lg font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black mb-4 transition-colors duration-300">
                {tier.title}
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-primary group-hover:text-black tracking-tighter transition-colors duration-300">
                {tier.range}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-2 border-[#3F3F46] p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-[#A1A1AA] mb-6">
            <span className="font-bold text-[#FAFAFA]">THE FINE PRINT:</span> These are estimates. Your actual quote
            depends on requirements discovered during the strategy call. All pricing is fixed-scope, not hourly.
            Milestone-based payments.
          </p>
          <div className="flex flex-wrap gap-4">
            {["FIXED-SCOPE", "MILESTONE PAYMENTS", "NO HOURLY", "TRANSPARENT"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#3F3F46] text-sm font-bold text-[#FAFAFA] uppercase tracking-wider"
              >
                <span className="text-primary">→</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
