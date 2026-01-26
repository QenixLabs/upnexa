"use client"

import { motion } from "framer-motion"
import { Linkedin, ArrowRight, Zap } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const specialistItems = [
    { title: "Product & UX Design", icon: "○" },
    { title: "DevOps & Cloud Infrastructure", icon: "△" },
    { title: "Security & Compliance", icon: "□" },
  ]

  return (
    <section id="team" ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-[#09090B] border-b-2 border-[#3F3F46]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">TEAM</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.85]">
              THE PEOPLE
              <br />
              <span className="text-primary">BUILDING</span>
            </h1>
            {/* Decorative underline */}
            <motion.div
              variants={lineVariants}
              className="absolute -bottom-4 left-0 h-1 bg-primary origin-left"
              style={{ width: '120px' }}
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-10">
              {/* Subheading */}
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-px to-transparent from-primary/50 bg-linear-gradient-to-b" />
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#FAFAFA] leading-tight">
                  FOUNDED & LED BY
                  <br />
                  <span className="text-primary">ENGINEERS</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-[#A1A1AA] leading-relaxed font-light">
                Lead Engineer & AI Integrator with <span className="text-primary font-semibold">5+ years</span> building enterprise software.
                <br />
                <br />
                Supported by a specialist network—Design, DevOps, Security.
              </p>

              {/* LinkedIn CTA */}
              <motion.a
                href="https://linkedin.com/in/jaiswarnilesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-[#FAFAFA] hover:text-primary transition-colors duration-300"
                whileHover={{ x: 8 }}
              >
                <span className="text-lg font-bold uppercase tracking-wider">
                  Connect on LinkedIn
                </span>
                <div className="relative">
                  <Linkedin size={20} className="relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Right Column - Specialist Network */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              {/* Decorative bracket */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-primary/30" />

              <div className="relative p-8 md:p-10 border border-[#3F3F46] bg-[#27272A]/50 backdrop-blur-sm">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#3F3F46]">
                  <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
                    Specialist Network
                  </span>
                  <Zap size={16} className="text-primary" />
                </div>

                {/* Specialist Items */}
                <ul className="space-y-6">
                  {specialistItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="group flex items-center gap-4 cursor-default"
                    >
                      <span className="text-primary text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      <span className="text-lg text-[#FAFAFA] group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Currently Building Banner */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-10 border border-primary/30 bg-[#27272A]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 border border-primary/50 rounded-full">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-1">
                      Currently Building
                    </p>
                    <p className="text-xl md:text-2xl text-[#FAFAFA] font-medium leading-tight">
                      The future of AI-powered business software.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm text-[#A1A1AA] italic">
                    Whether you hire us or not.
                  </p>
                </div>
              </div>
            </div>
            {/* Animated bottom border */}
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary via-primary to-transparent origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            />
          </motion.div>

          {/* Decorative Footer Element */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between pt-8 border-t border-[#3F3F46]"
          >
            <span className="text-xs text-[#52525B] tracking-[0.2em] uppercase">
              Est. 2026 — QenixLabs
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-[#52525B] tracking-wider">AVAILABLE FOR PROJECTS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
