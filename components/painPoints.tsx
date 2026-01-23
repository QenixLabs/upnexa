"use client"

import { motion } from "framer-motion"

const painPoints = [
  {
    number: "01",
    title: "MANUAL PROCESSES",
    description:
      "Manual data entry, copy-paste chaos, and repetitive workflows eating 20+ hours per week. AI automation can eliminate this.",
  },
  {
    number: "02",
    title: "OUTDATED DECISIONS",
    description:
      "Business decisions based on last week's data. Manual reports cause delays. Real-time dashboards give you current insights immediately.",
  },
  {
    number: "03",
    title: "CAN'T SCALE",
    description:
      "Adding customers requires adding headcount. Processes break at growth. AI automation scales operations without hiring.",
  },
  {
    number: "04",
    title: "DATA SCATTERED",
    description:
      "Data scattered across 7 different tools—Sales, Marketing, Finance, Support in isolation. No unified view. Custom systems integrate everything.",
  },
]

export function PainPointsSection() {
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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9]">
            IF THIS SOUNDS
            <br />
            <span className="text-primary">FAMILIAR</span>
          </h2>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#3F3F46]">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#09090B] p-8 md:p-12 hover:bg-primary transition-colors duration-300"
            >
              {/* Number */}
              <span
                className="block text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-[#27272A] group-hover:text-black/20 leading-none tracking-tighter transition-colors duration-300"
                aria-hidden="true"
              >
                {point.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black mt-4 mb-4 transition-colors duration-300">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#A1A1AA] group-hover:text-black/70 leading-tight transition-colors duration-300">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 border-2 border-[#3F3F46] p-8 md:p-12"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.95]">
            WE BUILD CUSTOM SYSTEMS THAT FIT <span className="text-primary">YOUR EXACT WORKFLOW</span>—NO COMPROMISES.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
