"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta"
import { motion } from "framer-motion"
import { ArrowRight, Clock, User } from "lucide-react"

const categories = [
  "All",
  "Cybersecurity",
  "AI",
  "PR & Media",
  "Digital Transformation",
]

const articles = [
  {
    title: "Cybersecurity Risk Management: A Guide for Modern Organizations",
    category: "Cybersecurity",
    description:
      "Explore actionable strategies for identifying, assessing and mitigating cybersecurity risks across your organization. Learn how modern frameworks can protect critical assets in an evolving threat landscape.",
    author: "UPNexa Team",
    readTime: "8 min read",
    date: "Mar 15, 2026",
  },
  {
    title: "How AI Automation is Reshaping Business Operations",
    category: "AI",
    description:
      "Discover how intelligent automation is streamlining workflows, reducing operational costs and unlocking new levels of efficiency for enterprises of all sizes across India.",
    author: "UPNexa Team",
    readTime: "6 min read",
    date: "Mar 8, 2026",
  },
  {
    title: "Personal Branding for Founders: Building Authority in the Digital Age",
    category: "PR & Media",
    description:
      "Learn proven frameworks for establishing thought leadership, growing your digital presence and positioning yourself as a trusted voice in your industry.",
    author: "UPNexa Team",
    readTime: "7 min read",
    date: "Feb 28, 2026",
  },
  {
    title: "Digital Transformation Strategies for Regional Enterprises",
    category: "Digital Transformation",
    description:
      "A practical roadmap for businesses in Uttar Pradesh and beyond looking to modernize their operations, adopt cloud infrastructure and compete in the digital economy.",
    author: "UPNexa Team",
    readTime: "9 min read",
    date: "Feb 20, 2026",
  },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-[#0F2557]">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-0.5 bg-[#B8860B] mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Insights & Industry
              <br />
              Perspectives
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Stay informed with expert insights on technology, cybersecurity and
              strategic communications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-slate-200 bg-white sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#0F2557] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={cardVariants}
                className="border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Placeholder image area */}
                <div className="w-full h-48 bg-slate-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-slate-300 text-sm font-medium">
                    Article Image
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category tag */}
                  <span className="inline-block self-start px-3 py-1 rounded-md text-xs font-medium bg-[#0F2557]/10 text-[#0F2557] mb-4">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-[#0F2557] leading-snug mb-3">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {article.description}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {article.date}
                    </span>
                  </div>

                  {/* Read more */}
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#0F2557] mt-5 hover:text-[#B8860B] transition-colors duration-200"
                  >
                    Read article
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 text-base">
                No articles found in this category. Check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter / Subscribe teaser */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2557] mb-4">
              Never miss an insight
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Get expert perspectives on cybersecurity, AI and digital strategy
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white border border-slate-200 rounded-md px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F2557] focus:ring-1 focus:ring-[#0F2557]/20 outline-none transition-colors"
              />
              <button className="h-12 bg-[#0F2557] text-white rounded-md px-6 text-sm font-medium hover:bg-[#0C1D45] transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
