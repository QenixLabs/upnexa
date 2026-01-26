"use client"

import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Linkedin, ArrowRight, Zap } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function AboutPage() {
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

  const values = [
    {
      title: "TRANSPARENCY",
      description: "No black boxes. No hidden fees. You see what we see.",
    },
    {
      title: "ENGINEERING FIRST",
      description: "Built by engineers. No salespeople, no account managers.",
    },
    {
      title: "OUTCOME FOCUSED",
      description: "We care about results, not hours billed.",
    },
    {
      title: "LONG-TERM PARTNERSHIPS",
      description: "We build to last. Relationships too.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">ABOUT US</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              THE PEOPLE
              <br />
              <span className="text-primary">BUILDING</span>
            </h1>
            <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
              Engineer-led. Specialist network. Building the future of AI-powered business software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-[#09090B] border-b-2 border-[#3F3F46]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
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
              <span className="text-sm font-bold text-primary uppercase tracking-widest">LEADERSHIP</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.85]">
                FOUNDED & LED BY
                <br />
                <span className="text-primary">ENGINEERS</span>
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column - Main Content */}
              <motion.div variants={itemVariants} className="lg:col-span-7 space-y-10">
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
                  <span className="text-lg font-bold uppercase tracking-wider">Connect on LinkedIn</span>
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
                    <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Specialist Network</span>
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
            <motion.div variants={itemVariants} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 border border-primary/30 bg-[#27272A]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-12 h-12 border border-primary/50 rounded-full">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-1">Currently Building</p>
                      <p className="text-xl md:text-2xl text-[#FAFAFA] font-medium leading-tight">
                        The future of AI-powered business software.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-[#A1A1AA] italic">Whether you hire us or not.</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary via-primary to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-primary uppercase tracking-widest">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4 mb-8">
                FOUNDED IN 2026
                <br />
                <span className="text-primary">WITH A MISSION</span>
              </h2>
              <div className="space-y-6 text-lg text-[#A1A1AA]">
                <p>
                  QenixLabs was born from a simple observation: businesses drowning in chaos while technology sits unused.
                  Excel sheets replacing databases. Manual processes automatable with AI. Custom workflows forced into generic tools.
                </p>
                <p>
                  We exist to fix this. Not by selling you more software—but by building what actually works for YOUR business.
                </p>
                <p>
                  AI isn't a buzzword here. It's a tool we deploy when it makes sense. Same with custom platforms. Same with infrastructure.
                  We're brutally honest about what you need.
                </p>
                <p className="text-[#FAFAFA] font-semibold">
                  We take on 3-4 projects per quarter. This isn't about scaling to 100 employees. It's about doing exceptional work for clients who value excellence.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-primary uppercase tracking-widest">OUR VALUES</span>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4 mb-8">
                WHAT WE
                <br />
                <span className="text-primary">STAND FOR</span>
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-[#3F3F46] pl-6 hover:border-primary transition-colors duration-300"
                  >
                    <h4 className="text-xl font-bold text-primary uppercase tracking-wider mb-2">{value.title}</h4>
                    <p className="text-base text-[#A1A1AA]">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Status Banner */}
      <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-primary rounded-full mb-6">
              <Zap size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mb-6">
              CURRENTLY
              <br />
              <span className="text-primary">AVAILABLE</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#A1A1AA] mb-8">
              We take on 3-4 new projects per quarter to ensure quality delivery.
              <br />
              Spaces fill up quickly.
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center justify-center h-14 px-12 bg-primary text-black font-bold uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WORK WITH US
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
