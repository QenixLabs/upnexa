"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 border-b-2 border-[#3F3F46]">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-widest">TEAM</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FAFAFA] leading-[0.9] mt-4">
            THE PEOPLE
            <br />
            <span className="text-primary">BUILDING</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square border-2 border-[#3F3F46] rounded-t-[100px] overflow-hidden">
              <Image
                src="/photo.png"
                alt="Founder - Lead Engineer & AI Integrator"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-right-12 p-4 md:p-6 bg-primary text-black">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter">5+</div>
              <div className="text-sm font-bold uppercase tracking-widest">YEARS</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-6">
              FOUNDED & LED BY
              <br />
              <span className="text-primary">ENGINEERS</span>
            </h3>

            <p className="text-lg md:text-xl text-[#A1A1AA] mb-8 leading-tight">
              Lead Engineer & AI Integrator with 5+ years building enterprise software. Supported by specialist network—Design, DevOps, Security.
            </p>

            {/* Specialist Network */}
            <div className="mb-8">
              <p className="font-bold text-[#FAFAFA] uppercase tracking-wider text-sm mb-4">SPECIALIST NETWORK:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Product & UX Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">DevOps & Cloud Infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span className="text-lg text-[#A1A1AA]">Security & Compliance</span>
                </li>
              </ul>
            </div>

            {/* Momentum Statement */}
            <div className="p-6 md:p-8 border-2 border-primary/50 bg-[#27272A]">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">CURRENTLY BUILDING</p>
              <p className="text-lg md:text-xl text-[#FAFAFA] font-medium leading-tight">
                The future of AI-powered business software. Whether you hire us or not.
              </p>
            </div>

            {/* LinkedIn Link */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 text-lg md:text-xl font-bold text-[#FAFAFA] hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              <Linkedin size={24} />
              CONNECT ON LINKEDIN
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
