"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Cybersecurity Risk Management",
    excerpt:
      "Learn how organizations can identify, assess and mitigate cyber threats to protect critical assets and maintain operational resilience in an evolving threat landscape.",
    tag: "Cybersecurity",
  },
  {
    title: "AI Automation for Business Growth",
    excerpt:
      "Discover practical strategies for leveraging artificial intelligence and automation to streamline operations, reduce costs and unlock new revenue opportunities.",
    tag: "AI & Automation",
  },
  {
    title: "Personal Branding for Founders",
    excerpt:
      "Explore how founders and executives can build a compelling personal brand that attracts investors, talent and strategic partnerships in competitive markets.",
    tag: "Branding",
  },
  {
    title: "Digital Transformation Strategies",
    excerpt:
      "A roadmap for organizations navigating digital transformation, from technology selection and change management to measuring outcomes and scaling success.",
    tag: "Digital Strategy",
  },
]

export function ThoughtLeadership() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[#B8860B]">
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2557] mt-3 mb-4">
            Insights &amp; Industry Perspectives
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Stay informed with expert insights on technology, cybersecurity and
            strategic communications.
          </p>
        </motion.div>

        {/* Article cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href="/insights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Topic tag */}
              <span className="bg-[#0F2557]/10 text-[#0F2557] rounded-full px-3 py-1 text-xs font-medium w-fit mb-4">
                {article.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0F2557] mb-3 leading-snug group-hover:text-[#0C1D45] transition-colors duration-200">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                {article.excerpt}
              </p>

              {/* Read more link */}
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B8860B] group-hover:gap-2.5 transition-all duration-200">
                Read More
                <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
