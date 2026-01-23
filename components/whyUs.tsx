"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    title: "ENGINEERS FIRST",
    subtitle: "No salespeople. Ever.",
    description:
      "Every line of code written by experienced engineers. When we say something is possible, it's from experience—not a sales script.",
  },
  {
    title: "REAL AI IMPLEMENTATION",
    subtitle: "Not just ChatGPT wrappers.",
    description:
      "We build actual AI systems with OpenAI, Anthropic, LangChain. Agents trained on YOUR data. Not generic prompts—custom solutions.",
  },
  {
    title: "FIXED SCOPE, FIXED PRICE",
    subtitle: "You know exactly what you're paying for.",
    description:
      "Scope defined upfront. Milestones delivered on time. Changes tracked transparently. No hourly BS that incentivizes slow work.",
  },
  {
    title: "YOU OWN EVERYTHING",
    subtitle: "Complete code ownership. No lock-in.",
    description:
      "Every line becomes yours. Full repository access. Complete documentation. No licensing fees. You own the AI models too.",
  },
  {
    title: "WEEKLY MILESTONE DEMOS",
    subtitle: "See progress live.",
    description:
      "Bi-weekly demos of working features. See your software being built. No black boxes—full transparency into our development process.",
  },
  {
    title: "30-DAY BUG FIX GUARANTEE",
    subtitle: "We stand behind our code.",
    description:
      "Post-launch support included. We fix any bugs found within 30 days at no cost. Optional AMC for ongoing support.",
  },
  {
    title: "WE KNOW WHEN AI HELPS",
    subtitle: "Honest about limitations.",
    description:
      "We won't sell you AI when you need a simple database. AI where it delivers ROI, traditional software where it doesn't. Brutal honesty.",
  },
  {
    title: "SELECTIVE PROJECT INTAKE",
    subtitle: "3-4 new projects per quarter.",
    description:
      "We take on limited engagements to ensure quality delivery. This means full attention on your project, not spreading ourselves thin.",
  },
]

export function WhyUsSection() {
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
          <span className="text-sm font-bold text-primary uppercase tracking-widest">WHY US</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            WHAT MAKES US
            <br />
            <span className="text-primary">DIFFERENT</span>
          </h2>
        </motion.div>

        {/* Benefits List */}
        <div className="space-y-0 border-2 border-[#3F3F46]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b-2 border-[#3F3F46] last:border-b-0 hover:bg-primary transition-colors duration-300"
            >
              <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black group-hover:translate-x-4 transition-all duration-300 md:w-1/3">
                  {benefit.title}
                </h3>

                {/* Subtitle & Description */}
                <div className="md:w-2/3">
                  <p className="text-lg font-bold text-primary group-hover:text-black/70 mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {benefit.subtitle}
                  </p>
                  <p className="text-base text-[#A1A1AA] group-hover:text-black/80 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
