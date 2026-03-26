"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects, type Project } from "@/lib/data"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Shipped", "Capability"] as const
type CategoryFilter = (typeof categories)[number]

function formatCategory(cat: string): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All")
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, amount: 0.1 })

  const filteredProjects: Project[] =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toUpperCase() === activeFilter.toUpperCase()
        )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-0.5 bg-[#B8860B] mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F2557] leading-tight">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-2xl leading-relaxed">
              Real projects. Measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="pb-8">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#0F2557] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All" : formatCategory(cat)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project cards grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              ref={gridRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  variants={cardVariants}
                  className="group border border-slate-200 rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  {/* Category badge */}
                  <span
                    className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                      project.category === "SHIPPED"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {formatCategory(project.category)}
                  </span>

                  {/* Title & subtitle */}
                  <h3 className="text-lg font-semibold text-[#0F2557] leading-snug mb-1 group-hover:text-[#B8860B] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-5">
                    {project.subtitle}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center px-3 py-2 bg-slate-50 rounded-md"
                      >
                        <div className="text-sm font-bold text-[#0F2557]">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 mb-3">Tech stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.split(", ").map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View link */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[#0F2557] group-hover:text-[#B8860B] transition-colors duration-300">
                    View details
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
