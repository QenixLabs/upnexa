"use client"

import Marquee from "react-fast-marquee"

const techItems = [
  // AI & Automation (Lead section)
  "OPENAI",
  "ANTHROPIC",
  "LANGCHAIN",
  "LANGGRAPH",
  // Core Engineering
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "NESTJS",
  "NODE.JS",
  // Data & Infrastructure
  "MONGODB",
  "POSTGRESQL",
  "REDIS",
  "AWS",
  "DOCKER",
  "VERCEL",
  // Mobile
  "REACT NATIVE",
]

export function TechStackSection() {
  return (
    <section className="py-12 md:py-16 border-b-2 border-[#3F3F46] overflow-hidden">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 mb-8">
        <span className="text-sm font-bold text-primary uppercase tracking-widest">TECH STACK</span>
      </div>

      {/* Tech Marquee */}
      <Marquee speed={40} gradient={false} autoFill direction="right">
        {techItems.map((item, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-[#3F3F46] hover:text-[#FAFAFA] transition-colors duration-300 mx-2 md:mx-4 lg:mx-8"
          >
            {item}
            <span className="text-primary ml-2 md:ml-4 lg:ml-8">★</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
