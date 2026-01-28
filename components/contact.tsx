"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent! We'll be in touch within 24 hours.",
      })
      form.reset()
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">CONTACT</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl  font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4 mb-6 md:mb-8">
              LET'S
              <br />
              <span className="text-primary">TALK</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-[#A1A1AA] mb-8 md:mb-12 leading-tight">
              Drop us a message. Global team. 24-hour response guarantee. No sales pitch—just real talk about your needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <div className="group relative p-6 border border-[#3F3F46] bg-[#0D0D0F] hover:border-primary/30 transition-all duration-300">
                {/* Corner brackets */}
                <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border border-primary/30 bg-primary/5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#71717A] uppercase tracking-wider mb-1">Email Us</div>
                    <a
                      href="mailto:info@qenixlabs.com"
                      className="text-base md:text-lg font-bold text-[#FAFAFA] hover:text-primary transition-colors uppercase tracking-tighter break-all"
                    >
                      INFO@QENIXLABS.COM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Corner bracket accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16">
              <div className="absolute top-0 right-0 w-8 h-px bg-primary/40" />
              <div className="absolute top-0 right-0 w-px h-8 bg-primary/40" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-8 h-px bg-primary/40" />
              <div className="absolute bottom-0 left-0 w-px h-8 bg-primary/40" />
            </div>

            <form onSubmit={handleSubmit} className="relative border border-[#3F3F46] bg-[#09090B]/80 p-6 md:p-10 lg:p-12 hover:border-primary/40 hover:bg-[#18181B] transition-all duration-500">
              <div className="space-y-6 md:space-y-8">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    required
                    className="w-full h-14 md:h-16 lg:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    required
                    className="w-full h-14 md:h-16 lg:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Company Input */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="YOUR COMPANY"
                    className="w-full h-14 md:h-16 lg:h-20 bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="TELL US ABOUT YOUR PROJECT"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-[#3F3F46] focus:border-primary text-base md:text-lg lg:text-xl font-bold uppercase tracking-tighter text-[#FAFAFA] placeholder:text-[#27272A] outline-none transition-colors px-0 py-4 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 md:h-16 lg:h-20 bg-primary text-black font-bold uppercase tracking-tighter text-base md:text-lg lg:text-xl disabled:opacity-50 hover:shadow-[0_0_40px_rgba(220,20,60,0.3)] transition-shadow duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-md text-center ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/50"
                        : "bg-red-500/20 text-red-400 border border-red-500/50"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
