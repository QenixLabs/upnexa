"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ scale, opacity }}>
        {/* Massive background number */}
        <span
          className="text-[15rem] md:text-[30rem] lg:text-[50rem] font-bold text-[#27272A] select-none leading-none max-w-full"
          aria-hidden="true"
        >
          01
        </span>
      </motion.div>

      <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 py-20 lg:py-32">
        <div className="max-w-6xl">
          {/* Main Headline - Viewport-based typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(3rem,12vw,14rem)] font-bold uppercase tracking-tighter leading-[0.85] text-[#FAFAFA] mb-8"
          >
            WE BUILD
            <br />
            <span className="text-primary">OPERATIONAL</span>
            <br />
            PLATFORMS
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-[#A1A1AA] max-w-3xl mb-8 leading-tight"
          >
            AI automation cutting reporting from 6 hours to 8 minutes. Custom platforms managing ₹50Cr+ revenue.
          </motion.p>

          {/* Supporting copy with metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-[#71717A] max-w-3xl mb-12 leading-relaxed"
          >
            <p className="mb-4">
              We build operational platforms that scale. AI where it delivers ROI, custom software where it matters.
            </p>
            <p className="mb-4">
              <span className="text-primary font-semibold">Cut reporting by 97%.</span> Replace Excel chaos with unified systems. Scale without adding headcount.
            </p>
            <p>
              Fixed scope. Fixed price. You own everything. No salespeople, just engineers.
            </p>
          </motion.div>

          {/* Momentum Signal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-[#71717A] max-w-3xl mb-8 italic"
          >
            Building the future of AI-powered business software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center h-14 md:h-16 px-8 md:px-12 bg-primary text-black font-bold uppercase tracking-tighter text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START A PROJECT
            </motion.a>
            <motion.a
              href="#work"
              className="inline-flex items-center justify-center h-14 md:h-16 px-8 md:px-12 border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-base md:text-lg hover:bg-[#FAFAFA] hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEE OUR WORK
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
