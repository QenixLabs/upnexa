"use client"

import Marquee from "react-fast-marquee"

const stats = [
  { value: "₹12L+", label: "REVENUE RECOVERED" },
  { value: "97%", label: "TIME REDUCTION" },
  { value: "10K+", label: "ACTIVE USERS" },
  { value: "100%", label: "TEAM ADOPTION" },
  { value: "500+", label: "REPORTS MONTHLY" },
  { value: "40+", label: "HOURS SAVED WEEKLY" },
]

export function StatsMarquee() {
  return (
    <section className="py-8 bg-primary border-y-2 border-black">
      <Marquee speed={80} gradient={false} autoFill>
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-8 mx-8">
            <span className="text-[4rem] md:text-[6rem] font-bold text-black leading-none tracking-tighter">
              {stat.value}
            </span>
            <span className="text-sm md:text-base font-bold text-black uppercase tracking-widest">{stat.label}</span>
            <span className="text-4xl text-black" aria-hidden="true">
              ★
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
