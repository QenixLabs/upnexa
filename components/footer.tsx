"use client"

import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/regional-impact", label: "Regional Impact" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F2557] border-t border-white/10">
      {/* Footer Marquee */}
      <div className="py-8 border-b border-white/10 overflow-hidden bg-[#B8860B]">
        <Marquee speed={60} gradient={false} autoFill>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold mx-2 md:mx-4 text-[#0F2557]">
            Strategic Technology. Cybersecurity. Media Advisory.
          </span>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] mx-2 md:mx-4 text-[#0F2557]">
            ★
          </span>
        </Marquee>
      </div>

      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="/" className="flex items-center gap-3 mb-6">
              <span className="text-xl font-bold text-white tracking-tight">
                UP<span className="text-[#B8860B]">Nexa</span>
              </span>
            </a>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Strategic technology, cybersecurity, and communications advisory firm serving organizations across India.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-sm mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-sm mb-6 text-white">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@upnexa.com"
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  info@upnexa.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Office Addresses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-sm mb-6 text-white">Our Offices</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-1">Mumbai Office</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-1">Uttar Pradesh Office</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Azamgarh, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; 2026 UPNexa. All Rights Reserved.
          </p>
          <p className="text-sm text-white/40">
            Mumbai, Maharashtra &amp; Azamgarh, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  )
}
