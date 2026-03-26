"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Their team delivered a custom platform that replaced seven separate spreadsheets and saved us fifteen hours every week. The AI automation alone transformed how we handle client reporting.",
    name: "Placeholder Client",
    role: "CEO, Technology Company",
  },
  {
    quote:
      "From the initial discovery call to post-launch support, every step was handled with precision. Our infrastructure costs dropped by seventy percent while reliability actually improved.",
    name: "Placeholder Client",
    role: "CTO, SaaS Startup",
  },
  {
    quote:
      "The cybersecurity audit uncovered vulnerabilities we never knew existed. Their remediation plan was clear, actionable, and gave our board complete confidence in our security posture.",
    name: "Placeholder Client",
    role: "VP of Engineering, Financial Services",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="w-16 h-0.5 bg-[#B8860B] mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2557] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl">
            Hear directly from the leaders and teams we have partnered with to
            deliver measurable results.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm flex flex-col"
            >
              {/* Gold accent line */}
              <div className="w-10 h-0.5 bg-[#B8860B] mb-6" />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#B8860B]/30 mb-4" />

              {/* Testimonial text */}
              <blockquote className="text-[#0F2557] text-base leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-slate-200 pt-6">
                <p className="font-semibold text-[#0F2557] text-sm">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#64748B] mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
