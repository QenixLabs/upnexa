"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, Bot, Monitor, Newspaper } from "lucide-react"

const divisions = [
  {
    icon: Shield,
    title: "Cybersecurity & Risk Advisory",
    description:
      "Protect your organization from evolving cyber threats through proactive security strategies.",
    services: [
      "Vulnerability assessment & penetration testing",
      "Security posture evaluation",
      "Cyber risk advisory",
      "Compliance readiness",
      "Security awareness programs",
    ],
  },
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Improve operational efficiency with intelligent automation.",
    services: [
      "Workflow automation",
      "AI productivity integration",
      "CRM automation",
      "Chatbot deployment",
      "Process optimization",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Transformation Services",
    description:
      "Enable business growth through modern digital systems.",
    services: [
      "Website & application development",
      "CRM and ERP implementation",
      "Digital business infrastructure",
      "Cloud solutions",
      "System integration",
    ],
  },
  {
    icon: Newspaper,
    title: "Strategic PR & Media Visibility",
    description:
      "Build authority, credibility and trust through strategic communications.",
    services: [
      "Media relations",
      "Founder and executive branding",
      "Thought leadership articles",
      "Corporate reputation management",
      "Press releases and media coverage",
    ],
    publications: ["Entrepreneur India", "YourStory", "BusinessWorld"],
  },
]

export function ServiceDivisions() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-snug">
            Core Service Divisions
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-3 max-w-2xl">
            Four focused divisions. Each designed to solve a critical business
            challenge.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-[#B8860B]/30 transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-md bg-[#B8860B]/10">
                  <Icon className="w-5 h-5 text-[#B8860B]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {division.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4">
                  {division.description}
                </p>

                {/* Service List */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {division.services.map((service) => (
                    <li
                      key={service}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span className="text-[#B8860B] mt-1.5 shrink-0 text-[6px]">
                        &#9679;
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Publications (PR division only) */}
                {"publications" in division && (
                  <div className="mb-6">
                    <p className="text-xs font-medium text-[#0F172A] mb-2">
                      Featured in:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {division.publications?.map((pub) => (
                        <span
                          key={pub}
                          className="inline-block text-xs text-[#B8860B] bg-[#B8860B]/10 px-2 py-0.5 rounded"
                        >
                          {pub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-[#B8860B] hover:underline"
                >
                  Learn More
                  <svg
                    className="ml-1.5 w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
