"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "DO YOU WORK WITH STARTUPS?",
    answer:
      "Yes, if you have real budget and realistic expectations. We don't do 'MVP in 2 weeks for ₹50K' projects—that sets everyone up for failure.",
  },
  {
    question: "WHAT'S YOUR MINIMUM ENGAGEMENT?",
    answer:
      "₹3-5L minimum for new projects. This ensures we can deliver proper attention and outcomes. For exploratory work, our technical consultation is ₹15K.",
  },
  {
    question: "CAN I SEE YOUR CODE?",
    answer:
      "Client code is confidential, but we can share architecture decisions and technical approaches during our call. Past clients can speak to code quality.",
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
    answer:
      "You're working directly with the people who write the code. No account managers, no junior devs, no outsourcing. Just direct communication with engineers who know what they're doing.",
  },
  {
    question: "CAN YOU PROVIDE REFERENCES?",
    answer: "Yes. We'll connect you with past clients who'll tell you exactly what working with us is like.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            QUESTIONS
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
  )
}
