"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"

const footerLinks = [
  { href: "#services", label: "SERVICES" },
  { href: "#process", label: "PROCESS" },
  { href: "#work", label: "WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-black">
      {/* Footer Marquee */}
      <div className="py-8 border-b-2 border-black">
        <Marquee speed={60} gradient={false} autoFill>
          <span className="text-[4rem] md:text-[8rem] font-bold uppercase tracking-tighter mx-4">
            LET'S BUILD SOMETHING GREAT
          </span>
          <span className="text-[4rem] md:text-[8rem] mx-4">★</span>
        </Marquee>
      </div>

      <div className="max-w-[95vw] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-reverse.png"
                alt="Aurelius"
                width={180}
                height={80}
                className="object-contain"
              />
            </a>
            <p className="text-black/70 text-base max-w-xs">
              Custom software that solves real problems. No templates, no shortcuts—just code that works.
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
                href="mailto:hello@aurelius.engineering"
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
            © 2026 AURELIUS ENGINEERING. BUILT FOR RESULTS.
          </p>
        </div>
      </div>
    </footer>
  )
}
