"use client"

import { motion } from "framer-motion"
import { ExternalLink, LayoutDashboard, FileText, CheckCircle, MessageSquare } from "lucide-react"

export function ClientPortalSection() {
  return (
    <section className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
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

            {/* Features */}
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

            {/* CTA */}
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
                href="#contact"
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
  )
}
