"use client"

import Marquee from "react-fast-marquee"

const techItems = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "NESTJS",
  "NODE.JS",
  "MONGODB",
  "POSTGRESQL",
  "REDIS",
  "OPENAI",
  "ANTHROPIC",
  "LANGCHAIN",
  "REACT NATIVE",
  "AWS",
  "DOCKER",
  "VERCEL",
]

export function TechStackSection() {
  return (
    <section className="py-12 md:py-16 border-b-2 border-[#3F3F46] overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8 mb-8">
        <span className="text-sm font-bold text-primary uppercase tracking-widest">TECH STACK</span>
      </div>

      {/* Tech Marquee */}
      <Marquee speed={40} gradient={false} autoFill direction="right">
        {techItems.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#3F3F46] hover:text-[#FAFAFA] transition-colors duration-300 mx-4 md:mx-8"
          >
            {item}
            <span className="text-primary ml-4 md:ml-8">★</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
