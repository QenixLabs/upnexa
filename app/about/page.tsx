"use client"

import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { ShieldCheck, Lightbulb, Handshake, TrendingUp } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const reasons = [
  {
    icon: ShieldCheck,
    title: "Integrated Expertise",
    description:
      "We offer a unique combination of technology consulting, cybersecurity advisory, digital transformation, and strategic communications under one platform.",
  },
  {
    icon: TrendingUp,
    title: "Regional Understanding",
    description:
      "Our strong understanding of the business environment in Uttar Pradesh and the Purvanchal region allows us to design solutions that are both practical and impactful for local enterprises and institutions.",
  },
  {
    icon: Handshake,
    title: "Strategic Advisory Approach",
    description:
      "We work as long-term advisors rather than just service providers, helping organizations build sustainable growth strategies.",
  },
  {
    icon: Lightbulb,
    title: "Focus on Innovation & Skills",
    description:
      "We actively promote technology adoption, digital skills development, and entrepreneurship through training programs and institutional collaborations.",
  },
]

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="text-sm font-semibold text-[#B8860B] tracking-wide">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F2557] leading-tight mt-4">
              About UPNexa
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl leading-relaxed">
              A strategic technology, cybersecurity, and communications advisory firm committed to the digital and economic transformation of Uttar Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold text-[#B8860B] tracking-wide">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] leading-snug mt-4 mb-10">
              Strategic Advisory for the Digital Economy
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
              <p>
                We are a strategic technology, cybersecurity, and communications advisory firm committed to supporting organizations, entrepreneurs, and institutions in navigating the evolving digital economy.
              </p>
              <p>
                With a strong presence in Uttar Pradesh and Mumbai, our firm focuses on enabling businesses to adopt modern technologies, strengthen cybersecurity resilience, and build credible market presence through strategic communications.
              </p>
              <p>
                Our work is particularly aligned with the emerging opportunities across Uttar Pradesh&apos;s rapidly growing digital and entrepreneurial ecosystem, where traditional industries, startups, and institutions are increasingly embracing innovation and digital transformation.
              </p>
              <p>
                By combining expertise in technology consulting, cybersecurity advisory, digital transformation, and public relations, we provide integrated solutions that help organizations operate securely, grow sustainably, and build lasting credibility.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Our Vision (Dark Navy Contrast) */}
      <section className="py-20 md:py-28 bg-[#0F2557]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-semibold text-[#B8860B] tracking-wide">Our Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mt-4 mb-10">
                Empowering Regional Enterprises on a Global Stage
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-4xl">
              <p>
                To become a leading strategic advisory firm contributing to the digital and economic transformation of Uttar Pradesh, by empowering businesses, institutions, and entrepreneurs with technology, cybersecurity expertise, and global market visibility.
              </p>
              <p>
                We envision a future where regional enterprises and emerging entrepreneurs from cities like Azamgarh and across Purvanchal are able to compete confidently in national and international markets through innovation, digital capabilities, and strong brand reputation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-20 md:py-28 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold text-[#B8860B] tracking-wide">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] leading-snug mt-4 mb-10">
              Enabling Growth in the Digital Economy
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
              <p>
                Our mission is to enable organizations and entrepreneurs to grow in the digital economy by providing practical, impactful solutions across technology, cybersecurity, automation, and strategic communications.
              </p>
              <p>
                We aim to support regional development by helping businesses modernize operations, protect their digital assets, and access wider markets through digital platforms and media visibility.
              </p>
              <p>
                Our initiatives also align with development programs such as One District One Product, which promotes district-specific industries and local entrepreneurship across the state.
              </p>
              <p>
                Through training programs, advisory services, and technology solutions, we work to bridge the gap between traditional industries and modern digital opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 md:py-28 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold text-[#B8860B] tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] leading-snug mt-4 mb-4">
              Organizations Partner With Us
            </h2>
            <p className="text-lg text-slate-600 mb-14 max-w-2xl">
              Because we combine technology expertise with strategic business understanding.
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border border-slate-200 rounded-lg bg-white p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#0F2557]/5">
                      <Icon className="w-5 h-5 text-[#0F2557]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F2557]">{reason.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Our Commitment to Uttar Pradesh */}
      <section className="py-20 md:py-28 bg-[#0F2557]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-semibold text-[#B8860B] tracking-wide">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mt-4 mb-10">
                Committed to Uttar Pradesh
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-4xl">
              <p>
                Uttar Pradesh is witnessing significant growth in entrepreneurship, digital adoption, and infrastructure development.
              </p>
              <p>
                Our firm is committed to supporting this transformation by enabling businesses, educational institutions, and emerging entrepreneurs to leverage modern technologies, improve cybersecurity resilience, and build strong brand credibility.
              </p>
              <p>
                By connecting regional enterprises with digital tools, automation, and strategic communications, we aim to contribute to the creation of a more innovative, secure, and globally competitive business ecosystem in Uttar Pradesh.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
