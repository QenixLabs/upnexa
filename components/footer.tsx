"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"

const footerLinks = [
  { href: "/services", label: "SERVICES" },
  { href: "/work", label: "WORK" },
  { href: "/approach", label: "APPROACH" },
  { href: "/about", label: "ABOUT" },
  { href: "/pricing", label: "PRICING" },
  { href: "/security", label: "SECURITY" },
]

export function Footer() {
  return (
    <footer className="bg-[#09090B] border-t-2 border-[#3F3F46]">
      {/* Footer Marquee */}
      <div className="py-8 border-b-2 border-[#3F3F46] overflow-hidden bg-primary">
        <Marquee speed={60} gradient={false} autoFill>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold uppercase tracking-tighter mx-2 md:mx-4 text-black">
            LET&apos;S BUILD SOMETHING GREAT
          </span>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] mx-2 md:mx-4 text-black">★</span>
        </Marquee>
      </div>

      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="QenixLabs - Custom Software Development"
                width={180}
                height={80}
                className="object-contain"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </a>
            <p className="text-[#71717A] text-base max-w-xs">
              Remote-first team serving global clients. Custom software that solves real problems.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg uppercase tracking-wider mb-6 text-[#FAFAFA]">NAVIGATION</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-primary transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg uppercase tracking-wider mb-6 text-[#FAFAFA]">CONNECT</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@qenixlabs.com"
                  className="group inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-primary transition-colors"
                >
                  <span className="relative">
                    EMAIL
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-primary transition-colors"
                >
                  <span className="relative">
                    GITHUB
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-primary transition-colors"
                >
                  <span className="relative">
                    LINKEDIN
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-[#3F3F46] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-wider text-[#71717A]">
            © 2026 QENIXLABS. BUILT FOR RESULTS.
          </p>
          <p className="text-sm text-[#52525B]">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  )
}
