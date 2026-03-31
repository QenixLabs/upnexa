"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar } from "lucide-react"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Check initial scroll position on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Sticky "Book Consultation" button - right edge of screen */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] bg-[#0F2557] text-white rounded-l-md rounded-r-none shadow-lg shadow-[#0F2557]/20 px-3 py-6 flex flex-col items-center gap-3 group cursor-pointer hover:bg-[#0d1f48] transition-colors duration-200"
            aria-label="Book Consultation"
          >
            <Calendar className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Book Consultation
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
