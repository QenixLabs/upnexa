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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3F3F46] mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-[#09090B] p-6 md:p-8 hover:bg-primary transition-colors duration-300 h-full flex flex-col"
            >
              {/* Number */}
              <span className="text-3xl md:text-4xl font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300 mb-4">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black transition-colors duration-300 mb-3">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm md:text-base text-[#A1A1AA] group-hover:text-black/70 transition-colors duration-300">
                {service.tagline}
              </p>

              {/* Arrow Indicator */}
              <div className="mt-auto pt-6">
                <span className="text-primary group-hover:text-black text-xl transition-colors duration-300">→</span>
              </div>
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
            className="inline-flex items-center justify-center h-14 px-12 bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter text-lg hover:border-primary hover:text-primary hover:scale-105 active:scale-95 transition-all"
          >
            LEARN MORE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
