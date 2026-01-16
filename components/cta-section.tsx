"use client"

import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Massive CTA Headline */}
          <h2 className="text-[clamp(2.5rem,10vw,12rem)] font-bold uppercase tracking-tighter leading-[0.85] text-black mb-8">
            LET'S BUILD
            <br />
            SOMETHING
          </h2>

          <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto mb-12 leading-tight">
            Book a free 60-minute discovery call. No sales pitch—just real talk about your needs.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center h-16 md:h-20 px-12 md:px-16 bg-black text-primary font-bold uppercase tracking-tighter text-lg md:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCHEDULE A CALL
          </motion.a>

          {/* Consultation Note */}
          <p className="text-base text-black/60 mt-12 max-w-xl mx-auto">
            Not ready to commit? Start with a detailed technical consultation (₹15K, 3 hours). Get a complete project
            blueprint. If you hire us, we credit it back.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
