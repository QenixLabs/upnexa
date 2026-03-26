"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format",
    headline: "Secure Your Digital Future",
    subheadline:
      "Advanced cybersecurity solutions that protect your organization from evolving threats while enabling confident digital growth.",
    accent: "Cybersecurity",
    cta: { label: "Explore Security", href: "/services#cybersecurity" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80&auto=format",
    headline: "Harness the Power of AI",
    subheadline:
      "Intelligent automation and AI-driven strategies that transform operations, reduce costs, and unlock new revenue streams.",
    accent: "AI Automation",
    cta: { label: "Discover AI Solutions", href: "/services#ai-automation" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format",
    headline: "Accelerate Digital Transformation",
    subheadline:
      "End-to-end technology solutions that modernize your infrastructure, streamline workflows, and future-proof your business.",
    accent: "Transformation",
    cta: { label: "Start Transforming", href: "/services#digital-transformation" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80&auto=format",
    headline: "Build Authority, Shape Perception",
    subheadline:
      "Strategic PR and media visibility that positions your brand as an industry leader and drives measurable business results.",
    accent: "PR & Media",
    cta: { label: "Build Your Brand", href: "/services#pr-media" },
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isPaused = useRef(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-clip">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%] h-full overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              {/* Multi-layer overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2557]/95 via-[#0F2557]/70 to-[#0F2557]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2557]/80 via-transparent to-[#0F2557]/20" />

              {/* Content */}
              <AnimatePresence mode="wait">
                {currentSlide === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full px-6 md:px-12 lg:px-20 py-28">
                      <div className="max-w-3xl">
                        {/* Gold accent bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="w-16 h-1 bg-[#B8860B] mb-8 origin-left"
                        />

                        {/* Tag */}
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="inline-block text-[#B8860B] text-sm font-semibold tracking-wide uppercase mb-4"
                        >
                          {slide.accent}
                        </motion.span>

                        {/* Headline */}
                        <motion.h1
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-white mb-6"
                        >
                          {slide.headline}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-10"
                        >
                          {slide.subheadline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <a
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2.5 bg-[#B8860B] text-[#0F2557] rounded-lg px-8 py-4 font-semibold text-base hover:bg-[#9A7209] transition-all duration-300 shadow-lg shadow-[#B8860B]/25 hover:shadow-[#B8860B]/40 hover:translate-y-[-1px]"
                          >
                            Book Strategic Consultation
                            <ArrowRight size={18} />
                          </a>
                          <a
                            href={slide.cta.href}
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white rounded-lg px-8 py-4 font-medium text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                          >
                            {slide.cta.label}
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide counter & dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        {/* Dots */}
        <div className="flex items-center gap-2.5" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-500 ${
                index === selectedIndex
                  ? "w-10 h-2 rounded-full bg-[#B8860B]"
                  : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Slide number */}
        <span className="text-white/50 text-sm font-medium tabular-nums hidden sm:block">
          <span className="text-white">{String(selectedIndex + 1).padStart(2, "0")}</span>
          <span className="mx-1.5">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </span>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  )
}
