"use client"

import { motion } from "framer-motion"
import { Layers, Compass, Briefcase, Award } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Reason {
  icon: LucideIcon
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: Layers,
    title: "Integrated Expertise",
    description:
      "Few firms combine technology consulting, cybersecurity advisory and strategic communications under one umbrella.",
  },
  {
    icon: Compass,
    title: "Strategic Advisory Approach",
    description:
      "We work as long-term advisors focused on sustainable business growth.",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    description:
      "Our experience across technology, financial services and consulting enables us to provide tailored solutions.",
  },
  {
    icon: Award,
    title: "Results-Oriented Execution",
    description:
      "Every project is designed to deliver measurable business impact.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function WhyChooseUs() {
  return (
    <section className="bg-[#0F2557] py-20 md:py-28">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Organizations Choose Us
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[#B8860B]" />
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="border border-slate-200 rounded-lg p-8 hover:shadow-md bg-white transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(184,134,11,0.1)]">
                  <Icon className="h-6 w-6 text-[#B8860B]" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-[#0F2557]">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-[#475569]">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
