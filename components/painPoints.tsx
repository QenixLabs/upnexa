"use client"

import { motion } from "framer-motion"

const painPoints = [
  {
    number: "01",
    title: "MANUAL DATA ENTRY",
    description:
      "Your team is drowning in Excel files. Data scattered across departments. Manual copy-paste eating hours every week. AI can automate this.",
  },
  {
    number: "02",
    title: "DELAYED DECISIONS",
    description:
      "Business intelligence waiting on manual reports. Decisions made on last week's data. Real-time AI dashboards give you current insights.",
  },
  {
    number: "03",
    title: "REPETITIVE WORK",
    description:
      "Smart people spending time on low-value tasks. Data entry, report generation, document processing—AI agents handle this work 97% faster.",
  },
  {
    number: "04",
    title: "CONTENT CAN'T SCALE",
    description:
      "Can't produce content fast enough. Marketing, documentation, customer communication limited by human capacity. AI-assisted workflows scale output 5x.",
  },
  {
    number: "05",
    title: "SUPPORT OVERWHELMED",
    description:
      "Customer service drowning in repetitive tickets. FAQ, password resets, order status. AI agents handle 80% automatically—humans focus on complex issues.",
  },
  {
    number: "06",
    title: "WORKFLOW BOTTLENECKS",
    description:
      "Processes break at scale. No clear path to 10x growth without 10x headcount. AI automation removes bottlenecks without hiring.",
  },
  {
    number: "07",
    title: "DATA SCATTERED EVERYWHERE",
    description:
      "Sales, marketing, finance—each department's data lives in isolation. No unified view. Manual reconciliation wastes hours. AI integrates everything automatically.",
  },
  {
    number: "08",
    title: "STUCK IN OUTDATED SYSTEMS",
    description:
      "Old tech can't integrate with modern tools. Can't scale. Maintenance drains budget. AI bridges legacy systems with modern workflows.",
  },
  {
    number: "09",
    title: "KNOWLEDGE TRAPPED IN HEADS",
    description:
      "Critical processes exist only in key employees' minds. When they leave, knowledge walks out. AI documents and standardizes automatically.",
  },
  {
    number: "10",
    title: "APPROVAL BLACK HOLES",
    description:
      "Projects stall waiting for sign-offs. Too many checkpoints. Momentum dies. AI agents route and auto-approve routine decisions.",
  },
  {
    number: "11",
    title: "FLYING BLIND WITH OUTDATED DATA",
    description:
      "Decisions made on last week's reports. Can't see what's happening now. Real-time AI dashboards replace waiting games.",
  },
  {
    number: "12",
    title: "GROWTH PAINS WITHOUT GAIN",
    description:
      "Adding 10× customers requires 10× headcount. Processes break at scale. AI automation scales without hiring.",
  },
  {
    number: "13",
    title: "ONE-SIZE-FITS-NONE",
    description:
      "Off-the-shelf tools don't match your workflow. Forced compromises kill productivity. Custom AI systems built around your exact processes.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3F3F46]">
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
