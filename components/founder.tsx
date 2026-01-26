"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const achievements = [
  "AI systems cutting report generation by 97%",
  "Enterprise platforms managing $6M+ annual revenue",
  "Custom tools saving companies 40+ hours weekly",
  "Real AI implementation with OpenAI, Anthropic, LangGraph",
]

export function FounderSection() {
  return (
    <section id="about" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative "
          >
            <div className="aspect-square border-2 border-[#3F3F46] rounded-t-[100px] overflow-hidden">
              <Image
                src="/photo.png"
                alt="Founder - Full Stack Developer"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-right-12 p-4 md:p-6 bg-primary text-black">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter">5+</div>
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
              THE TEAM
            </h2>

            <p className="text-lg md:text-xl text-[#A1A1AA] mb-8 leading-tight">
              Founded & Led by engineers with 5+ years of combined experience building software that solves actual business
              problems. We understand AI, not hype. Real implementation experience with OpenAI, Anthropic, Mastra, LangGraph.
              We know what AI can do—and what it can't.
            </p>

            {/* What We've Built */}
            <div className="mb-8">
              <p className="font-bold text-[#FAFAFA] uppercase tracking-wider text-sm mb-4">WHAT WE'VE BUILT:</p>
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
                "If we take your project, you're getting our full focus. Brutal honesty. Real AI implementation—not ChatGPT wrappers.
                And a partner who gives a damn about your success."
              </p>
            </div>

            {/* Momentum Signal */}
            <div className="mt-8 pt-8 border-t-2 border-[#3F3F46]">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">CURRENTLY BUILDING</p>
              <p className="text-base text-[#A1A1AA]">The future of AI-powered business software. Whether you hire us or not.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
