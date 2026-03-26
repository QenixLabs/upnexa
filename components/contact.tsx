"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@upnexa.com",
    href: "mailto:info@upnexa.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 (XXX) XXX-XXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Mumbai Office",
    value: "Mumbai, Maharashtra, India",
    href: null,
  },
  {
    icon: MapPin,
    label: "Uttar Pradesh Office",
    value: "Uttar Pradesh, India",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
  },
]

const serviceOptions = [
  "Digital Transformation",
  "AI Automation",
  "Cybersecurity",
  "Digital Marketing",
  "PR & Media",
  "Skill Development",
  "MSME & ODOP",
  "Other",
]

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
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
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
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[#B8860B]">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-4">
            Connect With Our Team
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Reach out to discuss how our strategic solutions can support your
              organization&apos;s growth and digital transformation journey.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {card.href ? (
                    <a
                      href={card.href}
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 border border-slate-200 rounded-lg p-5 bg-white hover:border-[#0F2557]/30 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-md bg-[#0F2557]/5 shrink-0">
                        <card.icon className="w-5 h-5 text-[#0F2557]" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 mb-1">
                          {card.label}
                        </div>
                        <div className="text-sm font-semibold text-[#0F2557]">
                          {card.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 border border-slate-200 rounded-lg p-5 bg-white">
                      <div className="flex items-center justify-center w-11 h-11 rounded-md bg-[#0F2557]/5 shrink-0">
                        <card.icon className="w-5 h-5 text-[#0F2557]" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 mb-1">
                          {card.label}
                        </div>
                        <div className="text-sm font-semibold text-[#0F2557]">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-lg p-8 md:p-10"
            >
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                  />
                </div>

                {/* Company Input */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                  />
                </div>

                {/* Service Interest Dropdown */}
                <div>
                  <select
                    name="service"
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Service of Interest
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#0F2557] text-white rounded-md font-medium hover:bg-[#0C1D45] disabled:opacity-50 transition-colors duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-md text-center text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
