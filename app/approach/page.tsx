"use client"

import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ExternalLink, LayoutDashboard, FileText, CheckCircle, MessageSquare } from "lucide-react"

const steps = [
  {
    week: "WEEK 1",
    title: "DISCOVERY",
    subtitle: "We figure out what you actually need",
    details: [
      "Deep dive into your current workflow",
      "Map pain points and bottlenecks",
      "Identify high-ROI AI opportunities",
      "Honest feasibility assessment",
    ],
  },
  {
    week: "WEEK 1-2",
    title: "ARCHITECTURE",
    subtitle: "We plan before we build",
    details: [
      "System design with AI integration points",
      "Database design & API structure",
      "Human-AI workflow mapping",
      "Fixed-price proposal",
    ],
  },
  {
    week: "WEEKS 3-12",
    title: "BUILD",
    subtitle: "Working software every 2 weeks",
    details: [
      "Bi-weekly demos of working features",
      "Train AI agents on YOUR business data",
      "Staging environment to test",
      "Transparent scope tracking",
    ],
  },
  {
    week: "WEEK 12+",
    title: "LAUNCH",
    subtitle: "We stick around after go-live",
    details: [
      "Deployment to your infrastructure",
      "Track AI performance metrics",
      "Complete documentation",
      "30 days post-launch support",
    ],
  },
]

const benefits = [
  {
    title: "ENGINEERS FIRST",
    subtitle: "No salespeople. Ever.",
    description:
      "Every line of code written by experienced engineers. When we say something is possible, it's from experience—not a sales script.",
  },
  {
    title: "REAL AI IMPLEMENTATION",
    subtitle: "Not just ChatGPT wrappers.",
    description:
      "We build actual AI systems with OpenAI, Anthropic, LangChain. Agents trained on YOUR data. Not generic prompts—custom solutions.",
  },
  {
    title: "OUTCOME-BASED ENGAGEMENT",
    subtitle: "You know exactly what you're paying for.",
    description:
      "Scope defined upfront. Milestones delivered on time. Changes tracked transparently. No hourly BS that incentivizes slow work.",
  },
  {
    title: "YOU OWN EVERYTHING",
    subtitle: "Complete code ownership. No lock-in.",
    description:
      "Every line becomes yours. Full repository access. Complete documentation. No licensing fees. You own the AI models too.",
  },
  {
    title: "WEEKLY MILESTONE DEMOS",
    subtitle: "See progress live.",
    description:
      "Bi-weekly demos of working features. See your software being built. No black boxes—full transparency into our development process.",
  },
  {
    title: "30-DAY BUG FIX GUARANTEE",
    subtitle: "We stand behind our code.",
    description:
      "Post-launch support included. We fix any bugs found within 30 days at no cost. Optional AMC for ongoing support.",
  },
  {
    title: "WE KNOW WHEN AI HELPS",
    subtitle: "Honest about limitations.",
    description:
      "We won't sell you AI when you need a simple database. AI where it delivers ROI, traditional software where it doesn't. Brutal honesty.",
  },
  {
    title: "SELECTIVE PROJECT INTAKE",
    subtitle: "3-4 new projects per quarter.",
    description:
      "We take on limited engagements to ensure quality delivery. This means full attention on your project, not spreading ourselves thin.",
  },
]

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">APPROACH</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              TRANSPARENT.
              <br />
              <span className="text-primary">NO SURPRISES.</span>
            </h1>
            <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
              Our process, our differentiators, and our commitment to transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">PROCESS</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              HOW WE
              <br />
              <span className="text-primary">WORK WITH YOU</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3F3F46]">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#09090B] p-8 md:p-10 hover:bg-primary transition-colors duration-300"
              >
                <span className="inline-block px-3 py-1 text-xs font-bold text-primary group-hover:text-black border-2 border-primary group-hover:border-black uppercase tracking-widest mb-6 transition-colors duration-300">
                  {step.week}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black mb-2 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-base text-[#A1A1AA] group-hover:text-black/70 mb-6 transition-colors duration-300">
                  {step.subtitle}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary group-hover:text-black transition-colors duration-300">→</span>
                      <span className="text-sm text-[#A1A1AA] group-hover:text-black/80 transition-colors duration-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="differentiators" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">WHY US</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              WHAT MAKES US
              <br />
              <span className="text-primary">DIFFERENT</span>
            </h2>
          </motion.div>

          <div className="space-y-0 border-2 border-[#3F3F46]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b-2 border-[#3F3F46] last:border-b-0 hover:bg-primary transition-colors duration-300"
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#FAFAFA] group-hover:text-black group-hover:translate-x-4 transition-all duration-300 md:w-1/3">
                    {benefit.title}
                  </h3>

                  <div className="md:w-2/3">
                    <p className="text-lg font-bold text-primary group-hover:text-black/70 mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {benefit.subtitle}
                    </p>
                    <p className="text-base text-[#A1A1AA] group-hover:text-black/80 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portal Section */}
      <section id="portal" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">CLIENT PORTAL</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
              24/7 PROJECT
              <br />
              <span className="text-primary">VISIBILITY</span>
            </h2>
            <p className="text-base md:text-lg text-[#A1A1AA] mt-6 max-w-2xl">
              Current clients get round-the-clock access to project status, milestones, and documentation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Portal Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="border-2 border-[#3F3F46] bg-[#09090B]">
                {/* Header */}
                <div className="border-b-2 border-[#3F3F46] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="text-primary" size={20} />
                    <span className="text-sm font-bold text-[#FAFAFA] uppercase tracking-wider">Client Portal</span>
                  </div>
                  <span className="text-xs text-[#A1A1AA]">qenixlabs.com</span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Project Card */}
                    <div className="border-2 border-[#3F3F46] p-4 hover:border-primary transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="text-primary" size={16} />
                        <span className="text-xs font-bold text-[#A1A1AA] uppercase">Active Project</span>
                      </div>
                      <p className="text-lg font-bold text-[#FAFAFA]">Enterprise Platform</p>
                      <p className="text-sm text-[#71717A]">Week 6 of 12</p>
                    </div>

                    {/* Status Card */}
                    <div className="border-2 border-[#3F3F46] p-4 hover:border-primary transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="text-primary" size={16} />
                        <span className="text-xs font-bold text-[#A1A1AA] uppercase">Milestone</span>
                      </div>
                      <p className="text-lg font-bold text-[#FAFAFA]">On Track</p>
                      <p className="text-sm text-[#71717A]">Next demo in 3 days</p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="border-2 border-[#3F3F46] p-4">
                    <p className="text-xs font-bold text-[#A1A1AA] uppercase mb-3">Recent Activity</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-primary shrink-0" size={14} />
                        <p className="text-sm text-[#A1A1AA]">User authentication module deployed</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <MessageSquare className="text-primary shrink-0" size={14} />
                        <p className="text-sm text-[#A1A1AA]">New architecture document available</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="text-primary shrink-0" size={14} />
                        <p className="text-sm text-[#A1A1AA]">API integration testing complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-6">
                TRANSPARENCY IS
                <br />
                <span className="text-primary">DEFAULT</span>
              </h3>

              <p className="text-lg md:text-xl text-[#A1A1AA] mb-8 leading-tight">
                We believe long-term relationships are built on transparency. Every client gets access to our portal—track progress, review milestones, access documentation.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Real-time project status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Milestone tracking & demo scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Documentation & deliverables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Direct communication channel</span>
                </li>
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 border-2 border-[#3F3F46]"
              >
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">NEW CLIENTS</p>
                <p className="text-base text-[#A1A1AA] mb-4">
                  Portal access within 48 hours of project start.
                </p>
                <motion.a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-[#FAFAFA] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  START YOUR PROJECT <ExternalLink size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
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
              READY TO START
              <br />
              <span className="text-primary">YOUR PROJECT?</span>
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
