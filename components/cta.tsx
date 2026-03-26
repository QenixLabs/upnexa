"use client"

import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0F2557]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
            Whether you are seeking advanced cybersecurity protection, digital
            transformation or strategic PR visibility, our team is ready to help.
            Schedule a consultation to explore how our solutions can accelerate
            your organization&apos;s growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              className="inline-flex items-center justify-center bg-[#B8860B] text-[#0F2557] rounded-md px-10 py-4 font-semibold hover:bg-[#9A7209] transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule Consultation
            </motion.a>
            <motion.a
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white rounded-md px-10 py-4 font-medium hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
