"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

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
    id: "consultation",
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
    id: "engagement",
  },
]

const faqs = [
  {
    question: "DO YOU WORK WITH STARTUPS?",
    answer: "Yes, if you have real budget and realistic expectations. We don't do 'MVP in 2 weeks for $600' projects—that sets everyone up for failure.",
  },
  {
    question: "WHAT'S YOUR MINIMUM ENGAGEMENT?",
    answer: "$3.6K-6K minimum for new projects. This ensures we can deliver proper attention and outcomes. For exploratory work, our technical consultation is $180.",
  },
  {
    question: "CAN I SEE YOUR CODE?",
    answer: "Client code is confidential, but we can share architecture decisions and technical approaches during our call. Past clients can speak to code quality.",
  },
  {
    question: "WHAT IF I NEED CHANGES AFTER LAUNCH?",
    answer: "Minor fixes covered in 30-day post-launch period. New features billed separately or covered under AMC.",
  },
  {
    question: "DO YOU SIGN NDAS?",
    answer: "Absolutely. We sign NDAs and confidentiality agreements as standard practice.",
  },
  {
    question: "WHY CHOOSE YOU OVER A BIGGER AGENCY?",
    answer: "You're working directly with the people who write the code. No account managers, no junior devs, no outsourcing. Just direct communication with engineers who know what they're doing.",
  },
  {
    question: "CAN YOU PROVIDE REFERENCES?",
    answer: "Yes. We'll connect you with past clients who'll tell you exactly what working with us is like.",
  },
]

// FAQ Structured Data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#09090B]">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">PRICING</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              CLEAR
              <br />
              <span className="text-primary">PRICING</span>
            </h1>
            <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl mx-auto">
              No sales calls. No hourly billing. No surprises. Just clear pricing for serious projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scarcity Banner */}
      <section className="py-16 md:py-20 border-b-2 border-[#3F3F46]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-primary bg-primary/10 p-6 md:p-8 text-center"
          >
            <p className="text-lg md:text-xl font-bold text-primary uppercase tracking-wider mb-2">
              WE TAKE ON 3-4 NEW PROJECTS PER QUARTER
            </p>
            <p className="text-base text-[#A1A1AA]">
              This ensures we can deliver the attention and quality your project deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border-2 ${tier.featured ? "border-primary" : "border-[#3F3F46]"} p-8 md:p-12 flex flex-col`}
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
                  href="/#contact"
                  className={`mt-auto ${tier.featured ? "bg-primary text-black" : "bg-transparent border-2 border-[#3F3F46] text-[#FAFAFA]"} py-4 px-6 font-bold uppercase tracking-tighter text-center`}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              QUESTIONS?
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="border-2 border-[#3F3F46]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b-2 border-[#3F3F46] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-[#27272A] transition-colors duration-300 group"
                >
                  <span className="text-lg md:text-xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="text-primary shrink-0">
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-6 md:pb-8 text-lg text-[#A1A1AA] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mb-6">
              READY TO MOVE
              <br />
              <span className="text-primary">FORWARD?</span>
            </h2>
            <motion.a
              href="/#contact"
              className="inline-flex items-center justify-center h-14 px-12 bg-primary text-black font-bold uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LET'S TALK
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
