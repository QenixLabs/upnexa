"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const headlineWords = [
    "Transform",
    "Your",
    "Business",
    "with",
    "Strategic",
    "Technology,",
    "Cybersecurity",
    "&",
    "Media",
    "Influence",
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F2557]">
      <div className="relative w-full px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={titleRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Thin gold line accent */}
            <motion.div
              variants={fadeUpVariants}
              className="w-16 h-0.5 bg-[#B8860B] mb-10"
            />

            {/* Main headline with staggered word fade-in */}
            <motion.h1
              variants={containerVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-8"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word === "Technology," ||
                  word === "Cybersecurity" ||
                  word === "Media" ? (
                    <span className="text-[#B8860B]">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-6"
            >
              We help organizations, founders and institutions accelerate growth
              through digital transformation, advanced cybersecurity, AI
              automation and strategic public relations.
            </motion.p>

            {/* Secondary subheadline */}
            <motion.p
              variants={fadeUpVariants}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mb-10"
            >
              From protecting digital assets to building powerful media
              visibility, we enable businesses to compete confidently in the
              modern economy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8860B] text-[#0F2557] rounded-md px-8 py-4 font-semibold text-base hover:bg-[#9A7209] transition-colors duration-300"
              >
                Book Strategic Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white rounded-md px-8 py-4 font-medium text-base hover:bg-white/10 transition-colors duration-300"
              >
                Explore Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F2557] to-transparent pointer-events-none" />
    </section>
  )
}
