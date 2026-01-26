"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, BarChart3, Zap, Shield } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const metrics = [
    { value: "97%", label: "Time Reduction", icon: BarChart3 },
    { value: "8-16", label: "Weeks Deployment", icon: Zap },
    { value: "$6M+", label: "Revenue Managed", icon: Shield },
  ]

  const words = ["OPERATIONAL", "PLATFORMS", "FOR", "REVENUE-CRITICAL", "SYSTEMS"]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#18181b]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Animated Background with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ scale, opacity }}
      >
        {/* Massive background number with grid overlay */}
        <div className="relative">
          <span
            className="text-[20rem] md:text-[35rem] font-bold text-[#27272A] select-none leading-none"
            aria-hidden="true"
          >
            01
          </span>
          {/* Grid lines overlay */}
          <div className="absolute inset-0 border-2 border-primary/10" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10" />
        </div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2 border-primary/15" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2 border-primary/15" />

      <div className="relative w-full px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase">
              Hero — 001
            </span>
          </motion.div>

          {/* Main headline with staggered word reveal */}
          <motion.h1
            ref={titleRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tighter leading-[1.1] text-[#FAFAFA] mb-8"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-4 last:mr-0"
              >
                {word === "PLATFORMS" || word === "FOR" || word === "REVENUE-CRITICAL" ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}
                {index < words.length - 1 && <br />}
              </motion.span>
            ))}
          </motion.h1>

          {/* Content grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left column - Main content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Subheadline */}
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#A1A1AA] leading-relaxed font-light">
                We replace manual workflows with production-grade software.
                <span className="text-primary font-semibold"> Proven results.</span>
              </motion.p>

              {/* Key metrics highlight */}
              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-[#27272A]/50 backdrop-blur-sm">
                <p className="text-[#FAFAFA] text-lg leading-relaxed mb-4">
                  Custom platforms managing{" "}
                  <span className="text-primary font-bold text-2xl">$6M+ revenue</span>.
                  AI automation cutting reporting from{" "}
                  <span className="text-[#A1A1AA] line-through">6 hours</span> to{" "}
                  <span className="text-primary font-bold text-2xl">8 minutes</span>.
                </p>
                <p className="text-[#A1A1AA] text-base">
                  Replace Excel chaos with unified systems. Scale without adding headcount.
                  <span className="text-primary font-semibold"> Full IP assignment with escrow.</span>
                </p>
              </motion.div>

              {/* Momentum statement */}
              <motion.p variants={itemVariants} className="text-sm text-[#71717A] italic border-l-2 border-primary/30 pl-4">
                Building the future of AI-powered business software. Whether you hire us or not.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 h-14 md:h-16 px-8 md:px-10 bg-primary text-black font-bold uppercase tracking-tighter text-sm md:text-base relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Discuss Your Use Case</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-black/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href="/work"
                  className="inline-flex items-center justify-center h-14 md:h-16 px-8 md:px-10 border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-sm md:text-base hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Studies
                </motion.a>
              </motion.div>
            </div>

            {/* Right column - Metrics grid */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-primary/20" />

              <div className="relative p-8 border border-[#3F3F46] bg-[#27272A]/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#3F3F46]">
                  <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
                    Impact Metrics
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                  </div>
                </div>

                <div className="space-y-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center gap-4 p-4 border border-[#3F3F46] hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-12 h-12 border border-primary/30 rounded-full group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                        <metric.icon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated progress indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px bg-gradient-to-r from-primary via-primary to-transparent mt-8"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#52525B]">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-primary/50"
          />
        </div>
      </motion.div>
    </section>
  )
}
