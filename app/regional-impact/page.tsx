"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyCta } from "@/components/stickyCta"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  Handshake,
  MonitorSmartphone,
  Lock,
  BarChart3,
  Target,
} from "lucide-react"

/* ─── animation helpers ─── */

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

/* ─── data ─── */

const initiatives = [
  {
    icon: Globe,
    title: "Digital branding & online presence",
    description:
      "Helping local businesses establish a compelling digital identity that resonates with wider audiences and opens doors to new markets.",
  },
  {
    icon: MonitorSmartphone,
    title: "E-commerce enablement",
    description:
      "Enabling traditional enterprises to sell online through modern platforms, payment integrations, and logistics support.",
  },
  {
    icon: Megaphone,
    title: "Digital marketing strategies",
    description:
      "Designing targeted digital marketing campaigns that drive visibility, engagement, and growth for regional products and services.",
  },
  {
    icon: TrendingUp,
    title: "Technology adoption for small enterprises",
    description:
      "Guiding MSMEs through digital transformation with practical tools, process automation, and scalable technology solutions.",
  },
]

const skillPrograms = [
  {
    icon: Megaphone,
    title: "Digital marketing & online business",
    description:
      "Training on SEO, social media marketing, content strategy, and building profitable online businesses from the ground up.",
  },
  {
    icon: Lock,
    title: "Cybersecurity awareness",
    description:
      "Building awareness of digital threats, safe online practices, and fundamental cybersecurity hygiene for businesses and professionals.",
  },
  {
    icon: Lightbulb,
    title: "AI tools & automation",
    description:
      "Hands-on training with modern AI tools, automation platforms, and productivity solutions that give professionals a competitive edge.",
  },
  {
    icon: Target,
    title: "Entrepreneurship & startup development",
    description:
      "Equipping aspiring entrepreneurs with business planning, fundraising, go-to-market strategy, and operational fundamentals.",
  },
]

const advisoryAreas = [
  {
    icon: MonitorSmartphone,
    title: "Digital infrastructure development",
    description:
      "Advising startups on building robust, scalable digital infrastructure from cloud architecture to software systems and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity consulting",
    description:
      "Helping emerging businesses protect their digital assets, comply with regulations, and build trust with their customers.",
  },
  {
    icon: BarChart3,
    title: "Digital marketing & brand positioning",
    description:
      "Strategic guidance on market positioning, audience targeting, content strategy, and building lasting brand equity in competitive markets.",
  },
  {
    icon: Handshake,
    title: "Strategic public relations & media visibility",
    description:
      "Supporting entrepreneurs with media outreach, thought leadership, and communications strategies that amplify their market presence.",
  },
]

/* ─── page ─── */

export default function RegionalImpactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <>
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0F2557]">
        <div
          ref={heroRef}
          className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 py-28 md:py-36"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Gold accent line */}
            <motion.div
              variants={fadeUp}
              className="w-16 h-0.5 bg-[#B8860B] mb-10"
            />

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-6"
            >
              Regional Impact{" "}
              <span className="text-[#B8860B]">&</span> Development
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-6"
            >
              Supporting Innovation, Skills and Entrepreneurship in Uttar
              Pradesh
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
            >
              Uttar Pradesh is emerging as one of India&apos;s most dynamic
              economic regions, driven by entrepreneurship, digital
              transformation, and government initiatives aimed at strengthening
              local industries and innovation ecosystems.
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── Intro bridge ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Our firm is committed to contributing to this transformation by
              supporting businesses, institutions, and entrepreneurs with modern
              technology solutions, cybersecurity expertise, digital
              capabilities, and strategic communications.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-4">
              By combining advisory services, skill development initiatives, and
              technology adoption programs, we aim to help regional enterprises
              become more competitive and future-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: Empowering Local Industries ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <span className="text-sm font-semibold text-[#B8860B]">
              Local Industries
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-4">
              Empowering Local Industries
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Across many districts of Uttar Pradesh, traditional industries and
              small enterprises play a vital role in local economic development.
              Our organization supports businesses aligned with the vision of the
              One District One Product program by helping them modernize
              operations, adopt digital platforms, and access wider markets.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {initiatives.map((card) => (
              <motion.div
                key={card.title}
                variants={item}
                className="group bg-white border border-slate-200 rounded-md p-6 hover:border-[#B8860B]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#0F2557]/5 mb-5 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                  <card.icon className="w-6 h-6 text-[#0F2557] group-hover:text-[#B8860B] transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold text-[#0F2557] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="mt-10 text-base text-slate-500 leading-relaxed max-w-3xl"
          >
            These solutions help local businesses transition from regional
            markets to national and global opportunities.
          </motion.p>
        </div>
      </section>

      {/* ── Section 2: Skill Development & Digital Literacy ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <span className="text-sm font-semibold text-[#B8860B]">
              Skills & Literacy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-4">
              Skill Development & Digital Literacy
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
              A strong digital economy requires a skilled workforce capable of
              adapting to emerging technologies. We conduct skill development
              programs focused on practical, industry-relevant competencies.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillPrograms.map((program) => (
              <motion.div
                key={program.title}
                variants={item}
                className="group flex gap-5 bg-slate-50 border border-slate-200 rounded-md p-6 hover:border-[#B8860B]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#0F2557]/5 shrink-0 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                  <program.icon className="w-6 h-6 text-[#0F2557] group-hover:text-[#B8860B] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0F2557] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* University partnerships callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-14 bg-[#0F2557] rounded-md p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white/10 shrink-0">
                <GraduationCap className="w-6 h-6 text-[#B8860B]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  University Partnerships
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  We actively explore collaborations with educational
                  institutions including universities such as Maharaja Suhel Dev
                  State University to deliver training programs, workshops, and
                  technology awareness initiatives that bridge the gap between
                  academia and industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Supporting Emerging Entrepreneurs ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <span className="text-sm font-semibold text-[#B8860B]">
              Entrepreneurship
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-4">
              Supporting Emerging Entrepreneurs
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Entrepreneurship is a key driver of economic growth in Uttar
              Pradesh. Our organization supports startups and small businesses by
              providing advisory services across critical areas of business
              development.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {advisoryAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={item}
                className="group relative bg-white border border-slate-200 rounded-md p-6 hover:border-[#B8860B]/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Gold accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#B8860B]/20 group-hover:bg-[#B8860B] transition-colors duration-300" />

                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0F2557]/5 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                      <area.icon className="w-5 h-5 text-[#0F2557] group-hover:text-[#B8860B] transition-colors duration-300" />
                    </div>
                    <h3 className="text-base font-semibold text-[#0F2557]">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="mt-10 text-base text-slate-500 leading-relaxed max-w-3xl"
          >
            By combining technology solutions with strategic communications, we
            help entrepreneurs strengthen their market presence and scale their
            businesses more effectively.
          </motion.p>
        </div>
      </section>

      {/* ── Section 4: Our Commitment to Regional Growth ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-semibold text-[#B8860B]">
              Long-term Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-6">
              Our Commitment to Regional Growth
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              We believe that the next phase of India&apos;s economic growth will
              be driven by innovation and entrepreneurship emerging from regional
              cities.
            </p>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              Through our initiatives in technology consulting, cybersecurity
              advisory, digital transformation, and skill development, we aim to
              contribute to building a more innovative, digitally empowered, and
              globally competitive business ecosystem in Uttar Pradesh.
            </p>

            <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium">
              Our long-term goal is to help create sustainable opportunities for
              entrepreneurs, professionals, and institutions across the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA: Partner With Us ── */}
      <section className="py-20 md:py-32 bg-[#0F2557]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Partner With Us
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Whether you are a local enterprise, educational institution, or
              emerging entrepreneur, we are here to help you grow. Let us build
              a stronger regional ecosystem together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8860B] text-[#0F2557] rounded-md px-10 py-4 font-semibold hover:bg-[#9A7209] transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white rounded-md px-10 py-4 font-medium hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
    <StickyCta />
    </>
  )
}
