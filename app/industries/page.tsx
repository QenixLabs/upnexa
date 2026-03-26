"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Building2, GraduationCap, Rocket, Store, Globe } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const industries = [
  {
    title: "Banking & Financial Services",
    icon: Shield,
    description:
      "Financial institutions operate in highly regulated environments where cybersecurity, data protection, and operational reliability are critical. Our solutions for the BFSI sector focus on strengthening digital security, improving compliance readiness, and supporting secure technology infrastructure.",
    closing:
      "Our approach helps financial organizations improve resilience against evolving cyber threats while maintaining operational efficiency.",
    services: [
      "Cybersecurity risk assessments",
      "Vulnerability assessment and penetration testing",
      "Security awareness training for employees",
      "Technology infrastructure advisory",
      "Digital transformation consulting",
    ],
  },
  {
    title: "Government & Public Sector",
    icon: Building2,
    description:
      "Government departments and public institutions are increasingly adopting digital platforms to improve service delivery and operational efficiency. We support government and institutional initiatives through technology consulting, digital transformation, and skill development programs aligned with development initiatives such as One District One Product.",
    closing:
      "These initiatives help institutions strengthen digital capabilities and deliver better services to citizens.",
    services: [
      "Digital infrastructure advisory",
      "Cybersecurity awareness initiatives",
      "Technology adoption programs",
      "Skill development and training workshops",
    ],
  },
  {
    title: "Education & Academic Institutions",
    icon: GraduationCap,
    description:
      "Educational institutions are rapidly transitioning toward digital learning environments and technology-driven operations. We help institutions modernize their digital infrastructure and enhance student engagement through technology solutions.",
    closing:
      "We also explore partnerships with institutions such as Maharaja Suhel Dev State University to conduct skill development programs and technology workshops.",
    services: [
      "Website and digital platform development",
      "Cybersecurity awareness programs",
      "Digital marketing for educational institutions",
      "Digital admissions and student engagement solutions",
    ],
  },
  {
    title: "Startups & Technology Companies",
    icon: Rocket,
    description:
      "Startups require a strong foundation in technology, cybersecurity, and brand visibility to compete effectively in the digital marketplace. Our advisory services help startups build scalable digital infrastructure while establishing strong market credibility.",
    closing:
      "We help startups build the credibility and digital presence needed to attract customers, investors, and strategic partnerships.",
    services: [
      "Technology consulting and digital infrastructure",
      "Cybersecurity advisory",
      "Strategic public relations and media visibility",
      "Digital marketing strategies",
      "Brand positioning and founder visibility",
    ],
  },
  {
    title: "Small & Medium Enterprises (SMEs)",
    icon: Store,
    description:
      "Small and medium enterprises are a major driver of economic growth and innovation across India. We support SMEs in adopting digital technologies and expanding their market reach through integrated business solutions.",
    closing:
      "These initiatives help businesses transition from traditional operations to modern digital business models.",
    services: [
      "Digital transformation consulting",
      "Website and e-commerce development",
      "Digital marketing strategies",
      "Cybersecurity awareness and protection",
      "Brand building and media visibility",
    ],
  },
  {
    title: "Regional Enterprises & Traditional Industries",
    icon: Globe,
    description:
      "Many regional industries possess strong craftsmanship and production capabilities but require digital enablement to access broader markets. We support enterprises aligned with the vision of One District One Product by helping them adopt digital tools, improve product branding, and reach national and international markets.",
    closing: "",
    services: [
      "Digital product catalog development",
      "E-commerce enablement",
      "Digital marketing and brand positioning",
      "PR and media visibility campaigns",
    ],
  },
]

const approachPrinciples = [
  {
    title: "Technology-driven innovation",
    description:
      "We leverage modern technologies to create solutions that are scalable, efficient, and future-ready for every industry we serve.",
  },
  {
    title: "Strong cybersecurity and digital resilience",
    description:
      "Every solution we deliver is built with security at its core, ensuring organizations can operate confidently in the digital economy.",
  },
  {
    title: "Strategic communications and market credibility",
    description:
      "We combine technology with strategic communications to help organizations build trust, visibility, and lasting market credibility.",
  },
]

export default function IndustriesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b border-slate-200">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F2557] leading-tight">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-[#0F2557]/60 mt-6 max-w-3xl">
              Delivering Strategic Solutions Across Diverse Industries
            </p>
            <p className="text-base md:text-lg text-slate-600 mt-6 max-w-3xl leading-relaxed">
              Every industry faces unique challenges in technology adoption, cybersecurity,
              digital transformation, and brand visibility. Our advisory approach is designed to
              address sector-specific requirements and deliver tailored solutions that support
              sustainable business growth.
            </p>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-3xl leading-relaxed">
              With experience across multiple industries, we help organizations modernize their
              operations, protect digital assets, and build strong market credibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className={`py-12 md:py-16 ${
                  index < industries.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                {/* Industry Header */}
                <motion.div variants={fadeInUp} className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-[#0F2557]/5">
                    <IconComponent className="w-6 h-6 text-[#0F2557]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2557] tracking-tight">
                    {industry.title}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeInUp} className="mb-8">
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl">
                    {industry.description}
                  </p>
                </motion.div>

                {/* Key Services Cards */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-semibold text-[#0F2557]/80 uppercase tracking-wider mb-4">
                    Key Services
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industry.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: serviceIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
                      >
                        <div className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-[#B8860B]" />
                        <span className="text-sm md:text-base text-slate-700 leading-relaxed">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Closing Statement */}
                {industry.closing && (
                  <motion.p
                    variants={fadeInUp}
                    className="text-base text-slate-500 mt-6 max-w-4xl leading-relaxed italic"
                  >
                    {industry.closing}
                  </motion.p>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] tracking-tight">
              Our Approach
            </h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-2xl leading-relaxed">
              Our work across industries is guided by three core principles:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {approachPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="p-6 md:p-8 bg-white rounded-lg border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F2557]/10 mb-5">
                  <span className="text-sm font-bold text-[#0F2557]">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F2557] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-slate-500 mt-10 max-w-3xl leading-relaxed"
          >
            This integrated approach allows us to deliver solutions that help organizations
            operate securely, grow sustainably, and compete effectively in the modern digital
            economy.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0F2557]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Discuss Your Industry Needs
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Every industry has unique requirements. Let us understand your challenges and
              explore how our strategic solutions can support your organization&apos;s growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                className="inline-flex items-center justify-center bg-[#B8860B] text-[#0F2557] rounded-md px-10 py-4 font-semibold hover:bg-[#9A7209] transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule Consultation
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
  )
}
