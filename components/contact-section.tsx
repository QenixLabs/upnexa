"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Message sent! We'll be in touch within 24 hours.")
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[95vw] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">CONTACT</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4 mb-8">
              LET'S
              <br />
              <span className="text-primary">TALK</span>
            </h2>

            <p className="text-lg md:text-xl text-[#A1A1AA] mb-12 leading-tight">
              Drop us a message. We'll get back within 24 hours. No sales pitch—just real talk about your needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-primary text-2xl">→</span>
                <a
                  href="mailto:hello@aurelius.engineering"
                  className="text-xl md:text-2xl font-bold text-[#FAFAFA] hover:text-primary transition-colors uppercase tracking-tighter"
                >
                  HELLO@AURELIUS.ENGINEERING
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary text-2xl">→</span>
                <span className="text-xl md:text-2xl font-bold text-[#FAFAFA] uppercase tracking-tighter">
                  MUMBAI, INDIA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="border-2 border-[#3F3F46] p-8 md:p-12">
              <div className="space-y-8">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    required
                    className="w-full h-16 md:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-xl md:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    required
                    className="w-full h-16 md:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-xl md:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Company Input */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="YOUR COMPANY"
                    className="w-full h-16 md:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-xl md:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="TELL US ABOUT YOUR PROJECT"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-lg md:text-xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0 py-4 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 md:h-20 bg-primary text-black font-bold uppercase tracking-tighter text-lg md:text-xl disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
