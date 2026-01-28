"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  {
    label: "SERVICES",
    href: "/services",
    dropdown: [
      { label: "AI Automation", href: "/services#ai-automation" },
      { label: "Custom Platforms", href: "/services#custom-platforms" },
      { label: "Infrastructure", href: "/services#infrastructure" },
      { label: "Consulting", href: "/services#consulting" },
    ],
  },
  {
    label: "WORK",
    href: "/work",
    dropdown: [
      { label: "Shipped Projects", href: "/work" },
      { label: "AI Capabilities", href: "/work" },
    ],
  },
  {
    label: "APPROACH",
    href: "/approach",
    dropdown: [
      { label: "Process", href: "/approach#process" },
      { label: "Why Us", href: "/approach#differentiators" },
      { label: "Client Portal", href: "/approach#portal" },
    ],
  },
  {
    label: "ABOUT",
    href: "/about",
    dropdown: [
      { label: "Team", href: "/about" },
      { label: "Story", href: "/about#story" },
    ],
  },
  { label: "PRICING", href: "/pricing" },
  { label: "SECURITY", href: "/security" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#09090B]/80 backdrop-blur-md border-b border-[#3F3F46]/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/logo.png"
                alt="QenixLabs - Custom Software Development"
                width={160}
                height={60}
                priority
                className="object-contain"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setHoveredDropdown(link.label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <motion.div className="flex items-center gap-1 group">
                    <a
                      href={link.href}
                      className="relative text-sm font-bold text-[#A1A1AA] hover:text-primary transition-colors uppercase tracking-wider py-2"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`text-[#A1A1AA] transition-transform duration-200 ${
                          hoveredDropdown === link.label ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    )}
                  </motion.div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && hoveredDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[200px] bg-[#09090B]/95 backdrop-blur-md border border-[#3F3F46] shadow-lg shadow-primary/5"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-sm font-bold text-[#A1A1AA] hover:text-primary hover:bg-[#18181B] transition-colors uppercase tracking-wider whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="/#contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-primary text-black font-bold uppercase tracking-tighter text-sm hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                LET'S TALK
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-[#FAFAFA]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#09090B] overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center min-h-full gap-6 py-20">
              {navLinks.map((link, index) => (
                <div key={link.label} className="w-full max-w-xs">
                  <motion.button
                    onClick={() => {
                      if (link.dropdown) {
                        toggleMobileDropdown(link.label)
                      } else {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full flex items-center justify-between text-2xl md:text-3xl font-bold text-[#FAFAFA] uppercase tracking-tighter hover:text-primary transition-colors py-3"
                  >
                    <span>{link.label}</span>
                    {link.dropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${openMobileDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </motion.button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && openMobileDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-6 py-4">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-lg font-bold text-[#A1A1AA] hover:text-primary transition-colors uppercase tracking-wider"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 inline-flex items-center justify-center h-14 px-12 bg-primary text-black font-bold uppercase tracking-tighter text-lg"
              >
                LET'S TALK
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
