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
    <footer className="bg-primary text-black">
      {/* Footer Marquee */}
      <div className="py-8 border-b-2 border-black overflow-hidden">
        <Marquee speed={60} gradient={false} autoFill>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold uppercase tracking-tighter mx-2 md:mx-4">
            LET'S BUILD SOMETHING GREAT
          </span>
          <span className="text-[2rem] md:text-[4rem] lg:text-[6rem] mx-2 md:mx-4">★</span>
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
                src="/logo-black.png"
                alt="QenixLabs - Custom Software Development"
                width={180}
                height={80}
                className="object-contain rounded"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </a>
            <p className="text-black/70 text-base max-w-xs">
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
            <h3 className="font-bold text-lg uppercase tracking-wider mb-6">NAVIGATION</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
                  >
                    {link.label}
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
            <h3 className="font-bold text-lg uppercase tracking-wider mb-6">CONNECT</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@qenixlabs.com"
                className="block text-base font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
              >
                EMAIL
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-wider text-black/70">
            © 2026 QENIXLABS. BUILT FOR RESULTS.
          </p>
          <p className="text-sm text-black/50">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  )
}
