"use client"

import { motion } from "framer-motion"
import { Users, Brain, Target, Lock, Eye, ShieldCheck, Sparkles, Filter } from "lucide-react"

const benefits = [
  {
    title: "ENGINEERS FIRST",
    subtitle: "No salespeople. Ever.",
    description:
      "Every line of code written by experienced engineers. When we say something is possible, it's from experience—not a sales script.",
    icon: Users,
  },
  {
    title: "REAL AI IMPLEMENTATION",
    subtitle: "Not just ChatGPT wrappers.",
    description:
      "We build actual AI systems with OpenAI, Anthropic, LangChain. Agents trained on YOUR data. Not generic prompts—custom solutions.",
    icon: Brain,
  },
  {
    title: "OUTCOME-BASED ENGAGEMENT",
    subtitle: "You know exactly what you're paying for.",
    description:
      "Scope defined upfront. Milestones delivered on time. Changes tracked transparently. No hourly BS that incentivizes slow work.",
    icon: Target,
  },
  {
    title: "YOU OWN EVERYTHING",
    subtitle: "Complete code ownership. No lock-in.",
    description:
      "Every line becomes yours. Full repository access. Complete documentation. No licensing fees. You own the AI models too.",
    icon: Lock,
  },
  {
    title: "WEEKLY MILESTONE DEMOS",
    subtitle: "See progress live.",
    description:
      "Bi-weekly demos of working features. See your software being built. No black boxes—full transparency into our development process.",
    icon: Eye,
  },
  {
    title: "30-DAY BUG FIX GUARANTEE",
    subtitle: "We stand behind our code.",
    description:
      "Post-launch support included. We fix any bugs found within 30 days at no cost. Optional AMC for ongoing support.",
    icon: ShieldCheck,
  },
  {
    title: "WE KNOW WHEN AI HELPS",
    subtitle: "Honest about limitations.",
    description:
      "We won't sell you AI when you need a simple database. AI where it delivers ROI, traditional software where it doesn't. Brutal honesty.",
    icon: Sparkles,
  },
  {
    title: "SELECTIVE PROJECT INTAKE",
    subtitle: "3-4 new projects per quarter.",
    description:
      "We take on limited engagements to ensure quality delivery. This means full attention on your project, not spreading ourselves thin.",
    icon: Filter,
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative border border-[#3F3F46] bg-[#09090B]/80 hover:border-primary/40 hover:bg-[#18181B] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-6 h-px bg-primary/40" />
                <div className="absolute top-0 right-0 w-px h-6 bg-primary/40" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 border border-[#3F3F46] bg-[#18181B] group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-2">
                      {benefit.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-bold text-primary mb-2">
                      {benefit.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#71717A] group-hover:text-[#A1A1AA] leading-relaxed transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
