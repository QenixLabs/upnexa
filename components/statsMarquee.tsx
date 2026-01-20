"use client"

import Marquee from "react-fast-marquee"

const stats = [
  { value: "97%", label: "AI TIME REDUCTION" },
  { value: "8-16", label: "WEEKS TO SHIP" },
  { value: "100%", label: "CODE OWNERSHIP" },
  { value: "24H", label: "RESPONSE TIME" },
  { value: "₹12L+", label: "CLIENT REVENUE" },
  { value: "FIXED", label: "SCOPE & PRICE" },
]

export function StatsMarquee() {
  return (
    <section className="py-8 bg-primary border-y-2 border-black">
      <Marquee speed={80} gradient={false} autoFill>
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-6 lg:gap-8 mx-2 md:mx-4 lg:mx-8">
            <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold text-black leading-none tracking-tighter">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm lg:text-base font-bold text-black uppercase tracking-widest">{stat.label}</span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-black" aria-hidden="true">
              ★
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
