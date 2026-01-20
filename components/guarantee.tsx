"use client"

import { motion } from "framer-motion"

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">GUARANTEE</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            OUR
            <br />
            <span className="text-primary">COMMITMENT</span>
          </h2>
        </motion.div>

        {/* Guarantee Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-[#3F3F46] p-12 md:p-16 mb-12"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-tight text-center">
            We deliver working software,
            <br />
            <span className="text-primary">not excuses.</span>
          </p>
          <p className="text-lg md:text-xl text-[#A1A1AA] text-center mt-6 max-w-3xl mx-auto">
            Fixed-scope projects. Milestone-based payments. You own everything we build.
          </p>
        </motion.div>

        {/* Value Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["FIXED-SCOPE", "MILESTONE PAYMENTS", "NO HOURLY", "TRANSPARENT"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#3F3F46] text-sm font-bold text-[#FAFAFA] uppercase tracking-wider hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300"
            >
              <span className="text-primary group-hover:text-black">→</span>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
