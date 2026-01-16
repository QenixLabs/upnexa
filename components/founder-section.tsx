"use client"

import { motion } from "framer-motion"

const achievements = [
  "Enterprise platforms managing ₹50Cr+ annual revenue",
  "AI systems processing 500+ reports monthly",
  "Mobile apps with 10,000+ active users",
  "Custom tools saving companies 40+ hours weekly",
]

export function FounderSection() {
  return (
    <section id="about" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square border-2 border-[#3F3F46] overflow-hidden">
              <img
                src="/professional-male-developer-portrait-dark-backgrou.jpg"
                alt="Founder - Full Stack Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 p-6 bg-primary text-black">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter">3+</div>
              <div className="text-sm font-bold uppercase tracking-widest">YEARS</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">ABOUT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4 mb-8">
              WHO AM I?
            </h2>

            <p className="text-lg md:text-xl text-[#A1A1AA] mb-8 leading-tight">
              Full Stack Developer & AI Integrator. I've spent 3+ years building software that solves actual business
              problems. Not chasing design awards. Not collecting VC funding. Just building things that work.
            </p>

            {/* What I've Built */}
            <div className="mb-8">
              <p className="font-bold text-[#FAFAFA] uppercase tracking-wider text-sm mb-4">WHAT I'VE BUILT:</p>
              <ul className="space-y-3">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary text-xl">→</span>
                    <span className="text-lg text-[#A1A1AA]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="p-6 md:p-8 border-l-4 border-primary bg-[#27272A]">
              <p className="text-lg md:text-xl text-[#FAFAFA] font-medium italic leading-tight">
                "If I take your project, you're getting my full focus. Brutal honesty. Code that works. And a partner
                who gives a damn about your success."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
