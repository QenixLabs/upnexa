"use client"

import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp } from "lucide-react"

const challenges = [
  {
    icon: ShieldCheck,
    title: "Managing Digital Risk",
    description:
      "Organizations need robust strategies to protect their digital assets, data, and infrastructure against evolving cyber threats and compliance demands.",
  },
  {
    icon: TrendingUp,
    title: "Building Market Credibility",
    description:
      "Establishing trust and visibility in competitive markets requires strategic positioning, consistent messaging, and a strong public presence.",
  },
]

export function AuthoritySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-0.5 bg-[#B8860B] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mb-4">
            Trusted Strategic Partner for Growth and Reputation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Modern organizations face two major challenges
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Challenge cards */}
          <div className="flex flex-col gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Gold accent line at top of card */}
                  <div className="w-10 h-0.5 bg-[#B8860B] mb-4" />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#0F2557]/5 flex items-center justify-center">
                      <Icon
                        size={20}
                        className="text-[#B8860B]"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0F2557] mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
              {/* Gold accent line at top of card */}
              <div className="w-10 h-0.5 bg-[#B8860B] mb-6" />

              <p className="text-slate-700 text-base leading-relaxed mb-6">
                Our integrated expertise in technology, cybersecurity, and
                strategic communications enables clients to solve both challenges
                effectively.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                We work with organizations seeking long-term growth, operational
                efficiency and strong brand reputation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
