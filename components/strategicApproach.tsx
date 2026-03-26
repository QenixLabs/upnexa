"use client"

import { motion } from "framer-motion"
import { Search, Target, Wrench, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: 1,
    title: "Discovery & Assessment",
    description:
      "Understanding your organization\u2019s goals, challenges and opportunities.",
    bullets: [
      "Stakeholder interviews and workshops",
      "Technology landscape audit",
      "Risk and vulnerability assessment",
    ],
    icon: Search,
  },
  {
    number: 2,
    title: "Strategy Development",
    description:
      "Developing customized technology, cybersecurity and communication strategies.",
    bullets: [
      "Tailored roadmap creation",
      "Cross-functional alignment planning",
      "KPI and success metric definition",
    ],
    icon: Target,
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "Deploying solutions including digital infrastructure, automation and PR programs.",
    bullets: [
      "Phased rollout and integration",
      "Team training and enablement",
      "Quality assurance and testing",
    ],
    icon: Wrench,
  },
  {
    number: 4,
    title: "Optimization",
    description:
      "Continuous monitoring and improvement for sustained growth.",
    bullets: [
      "Performance analytics and reporting",
      "Iterative strategy refinement",
      "Long-term partnership and support",
    ],
    icon: TrendingUp,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function StrategicApproach() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2557] mb-4">
            Our Strategic Approach
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            We follow a structured consulting model designed to deliver
            measurable impact.
          </p>
        </motion.div>

        {/* Steps grid - horizontal on desktop, vertical on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative"
        >
          {/* Connecting lines between steps - desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px bg-[#E2E8F0] z-0" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative z-10"
              >
                <div className="bg-slate-50 rounded-lg p-6 h-full flex flex-col">
                  {/* Number circle and icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0F2557] text-white font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#B8860B]/10 shrink-0">
                      <Icon
                        size={20}
                        className="text-[#B8860B]"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>

                  {/* Step title */}
                  <h3 className="text-lg font-semibold text-[#0F2557] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Bullet details */}
                  <ul className="space-y-2 mt-auto">
                    {step.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-[#475569]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
