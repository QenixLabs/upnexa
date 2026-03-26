"use client"

import Marquee from "react-fast-marquee"

const stats = [
  { value: "6+", label: "Industries Served" },
  { value: "50+", label: "Organizations Served" },
  { value: "15+", label: "Services Offered" },
  { value: "100+", label: "Projects Delivered" },
  { value: "2", label: "Office Locations" },
  { value: "UP", label: "Regional Focus" },
]

export function StatsMarquee() {
  return (
    <section className="relative py-8 bg-[#B8860B] border-y-2 border-[#0F2557] overflow-hidden">
      {/* Gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#B8860B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#B8860B] to-transparent z-10 pointer-events-none" />

      <Marquee speed={80} gradient={false} autoFill>
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-6 lg:gap-8 mx-2 md:mx-4 lg:mx-8">
            <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold text-[#0F2557] leading-none">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm lg:text-base font-semibold text-[#0F2557]/80">
              {stat.label}
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-[#0F2557]" aria-hidden="true">
              ●
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
