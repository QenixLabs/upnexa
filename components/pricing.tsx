"use client"

import { motion } from "framer-motion"

const pricing = [
  {
    name: "TECHNICAL CONSULTATION",
    price: "$180",
    duration: "3 HOURS",
    description: "Perfect for exploratory work. Get a complete technical assessment, architecture recommendations, and implementation roadmap.",
    included: [
      "Deep technical assessment of your needs",
      "Architecture recommendations",
      "AI feasibility analysis",
      "Implementation roadmap",
      "Credited back if you hire us for the full project",
    ],
    notIncluded: [
      "No sales pitch",
      "No obligation",
    ],
  },
  {
    name: "MINIMUM PROJECT ENGAGEMENT",
    price: "$3.6K-6K",
    duration: "8-16 WEEKS",
    description: "From discovery to deployed solution. We take on 3-4 new projects per quarter to ensure quality delivery.",
    included: [
      "Complete discovery phase",
      "System architecture & design",
      "Full development & deployment",
      "30-day post-launch support",
      "Outcome-based pricing—no hourly surprises",
      "Direct access to engineers",
    ],
    notIncluded: [
      "No hourly billing",
      "No scope creep",
      "No sales calls—engineers only",
    ],
    featured: true,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">PRICING</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            CLEAR
            <br />
            <span className="text-primary">PRICING</span>
          </h2>
          <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl mx-auto">
            No sales calls. No hourly billing. No surprises. Just clear pricing for serious projects.
          </p>
        </motion.div>

        {/* Scarcity Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-primary bg-primary/10 p-6 md:p-8 mb-12 text-center"
        >
          <p className="text-lg md:text-xl font-bold text-primary uppercase tracking-wider mb-2">
            WE TAKE ON 3-4 NEW PROJECTS PER QUARTER
          </p>
          <p className="text-base text-[#A1A1AA]">
            This ensures we can deliver the attention and quality your project deserves.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-2 ${tier.featured ? 'border-primary' : 'border-[#3F3F46]'} p-8 md:p-12 flex flex-col`}
            >
              {/* Header */}
              <div className="mb-6">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{tier.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#FAFAFA]">{tier.price}</span>
                </div>
                <p className="text-sm text-[#A1A1AA]">{tier.duration}</p>
              </div>

              {/* Description */}
              <p className="text-base text-[#A1A1AA] mb-6">{tier.description}</p>

              {/* Included */}
              <div className="mb-6">
                <p className="text-xs font-bold text-[#FAFAFA] uppercase tracking-wider mb-3">INCLUDED:</p>
                <ul className="space-y-2">
                  {tier.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary shrink-0">→</span>
                      <span className="text-sm text-[#A1A1AA]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              {tier.notIncluded.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs font-bold text-[#71717A] uppercase tracking-wider mb-3">NOT INCLUDED:</p>
                  <ul className="space-y-2">
                    {tier.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#71717A] shrink-0">×</span>
                        <span className="text-sm text-[#71717A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <motion.a
                href="#contact"
                className={`mt-auto ${tier.featured ? 'bg-primary text-black' : 'bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA]'} py-4 px-6 font-bold uppercase tracking-tighter text-center`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.featured ? "START A PROJECT" : "BOOK CONSULTATION"}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-[#71717A] text-center mt-12 max-w-2xl mx-auto"
        >
          Pricing varies based on project scope and complexity. We'll provide a detailed fixed-price proposal after our initial consultation.
        </motion.p>
      </div>
    </section>
  )
}
