"use client"

import { motion } from "framer-motion"

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">TESTIMONIALS</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            WHAT CLIENTS
            <br />
            <span className="text-primary">SAY</span>
          </h2>
        </motion.div>

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-[#3F3F46] p-12 md:p-16 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FAFAFA] mb-6">
            Client testimonials coming soon
          </p>
          <p className="text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            We're reaching out to our past clients to collect their experiences working with us.
            <br />
            Check back soon for real feedback from real projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
