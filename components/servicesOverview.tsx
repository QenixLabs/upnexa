"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    number: "01",
    title: "AI AUTOMATION & AGENTS",
    tagline: "Automate High-Value Work. 97% Time Reduction Proven.",
  },
  {
    number: "02",
    title: "CUSTOM SOFTWARE PLATFORMS",
    tagline: "From Idea to Market in 8–16 Weeks. Production-Ready.",
  },
  {
    number: "03",
    title: "INFRASTRUCTURE & DEVOPS",
    tagline: "Enterprise Infrastructure. Cloud-Native & Scalable.",
  },
  {
    number: "04",
    title: "STRATEGIC CONSULTING",
    tagline: "Bridge Vision and Reality. Technical Architecture.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">SERVICES</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            WHAT WE
            <br />
            <span className="text-primary">ACTUALLY BUILD</span>
          </h2>
          <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
            Four core services. Real results. No fluff.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative border border-[#3F3F46] bg-[#09090B]/80 hover:border-primary/40 hover:bg-[#18181B] transition-all duration-500 overflow-hidden h-full flex flex-col"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-px bg-primary/40" />
                <div className="absolute top-0 right-0 w-px h-8 bg-primary/40" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Number */}
                <span className="text-3xl md:text-4xl font-bold text-[#27272A] group-hover:text-primary/30 leading-none tracking-tighter transition-colors duration-500 mb-4">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold uppercase tracking-tighter text-[#FAFAFA] mb-3">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm md:text-base text-[#A1A1AA] group-hover:text-[#A1A1AA] transition-colors duration-300">
                  {service.tagline}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-auto pt-6">
                  <span className="text-primary text-xl group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
                </div>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center h-14 px-12 bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-lg hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(220,20,60,0.15)] transition-all duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
