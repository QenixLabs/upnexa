"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

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

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 (XXX) XXX-XXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@upnexa.com",
    href: "mailto:info@upnexa.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
  },
]

const offices = [
  {
    title: "Mumbai Office",
    address: "Mumbai, Maharashtra, India",
  },
  {
    title: "Uttar Pradesh Office",
    address: "Azamgarh, Uttar Pradesh, India",
  },
]

export default function ContactPage() {
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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#B8860B]">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2557] mt-3 mb-4">
              Connect With Our Team
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Reach out to discuss how our strategic solutions can support your
              organization&apos;s growth and digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Layout: Form + Contact Info */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F2557] mb-8">
                Send us a message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-lg p-8 md:p-10"
              >
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 (XXX) XXX-XXXX"
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Service Interest Dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Service interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-md px-4 text-sm text-slate-900 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
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

            {/* Right Column - Office Addresses & Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F2557] mb-8">
                Get in touch
              </h2>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 border border-slate-200 rounded-lg p-5 bg-white hover:border-[#0F2557]/30 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-md bg-[#0F2557]/5 shrink-0">
                      <item.icon className="w-5 h-5 text-[#0F2557]" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-[#0F2557]">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Addresses */}
              <h3 className="text-lg font-bold text-[#0F2557] mb-4">
                Our offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="border border-slate-200 rounded-lg p-5 bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-md bg-[#0F2557]/5 shrink-0">
                        <MapPin className="w-5 h-5 text-[#0F2557]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0F2557] mb-1">
                          {office.title}
                        </div>
                        <div className="text-sm text-slate-600">
                          {office.address}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
