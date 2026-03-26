"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Monitor,
  Bot,
  ShieldCheck,
  TrendingUp,
  Newspaper,
  GraduationCap,
  Store,
  ChevronDown,
  ArrowRight,
  Globe,
  Smartphone,
  Server,
  Workflow,
  Brain,
  Plug,
  Search,
  Lock,
  AlertTriangle,
  BarChart3,
  Share2,
  Target,
  Megaphone,
  Eye,
  Award,
  BookOpen,
  Users,
  Landmark,
  ShoppingCart,
  Palette,
  Rocket,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

/* -------------------------------------------------------------------------- */
/*  Data: 7 service categories, each with 3 sub-categories and their items    */
/* -------------------------------------------------------------------------- */

interface SubCategory {
  title: string
  items: string[]
}

interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accentColor: string // tailwind text/bg color token
  subCategories: SubCategory[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Services",
    description:
      "Comprehensive web, app, and platform solutions that modernize how your business operates and engages customers.",
    icon: Monitor,
    accentColor: "blue",
    subCategories: [
      {
        title: "Website Development",
        items: [
          "Corporate Website Development",
          "Startup Landing Pages",
          "Portfolio & Personal Websites",
          "eCommerce Website Development",
          "Website Maintenance & Optimization",
        ],
      },
      {
        title: "Web Application Development",
        items: [
          "Custom Business Applications",
          "CRM & ERP Development",
          "Marketplace Platforms",
          "SaaS Product Development",
          "Customer Portals & Dashboards",
        ],
      },
      {
        title: "Mobile App Development",
        items: [
          "Android App Development",
          "iOS App Development",
          "Cross-Platform Mobile Apps",
          "eCommerce Mobile Applications",
          "Business Automation Apps",
        ],
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation for Businesses",
    description:
      "Leverage artificial intelligence to automate workflows, boost productivity, and integrate intelligent systems into your operations.",
    icon: Bot,
    accentColor: "violet",
    subCategories: [
      {
        title: "AI Business Automation",
        items: [
          "AI Workflow Automation",
          "Business Process Automation",
          "AI Customer Support Chatbots",
          "AI Email & Lead Automation",
          "AI Sales Funnel Automation",
        ],
      },
      {
        title: "AI Productivity Solutions",
        items: [
          "AI Document Processing",
          "AI Data Analysis & Reporting",
          "AI Marketing Automation",
          "AI Content Generation Tools",
          "AI Meeting & Task Automation",
        ],
      },
      {
        title: "AI Integration Services",
        items: [
          "AI Integration with CRM Systems",
          "AI Integration with Websites & Apps",
          "AI API Integration",
          "Custom AI Solution Development",
          "AI Strategy Consulting",
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with security assessments, business-grade solutions, and organization-wide awareness programs.",
    icon: ShieldCheck,
    accentColor: "emerald",
    subCategories: [
      {
        title: "Security Assessment",
        items: [
          "Website Security Testing",
          "Web Application Security Testing",
          "API Security Testing",
          "Vulnerability Assessment",
          "Security Risk Analysis",
        ],
      },
      {
        title: "Business Security Solutions",
        items: [
          "Security Architecture Consulting",
          "Data Protection Strategy",
          "Security Policy Development",
          "Incident Response Planning",
          "Compliance & Risk Management",
        ],
      },
      {
        title: "Security Awareness",
        items: [
          "Cybersecurity Awareness Programs",
          "Digital Fraud Prevention Training",
          "Phishing Awareness Workshops",
          "Small Business Security Training",
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    description:
      "Drive organic and paid visibility across search engines, social platforms, and advertising networks to grow your audience.",
    icon: TrendingUp,
    accentColor: "orange",
    subCategories: [
      {
        title: "Search Engine Optimization (SEO)",
        items: [
          "SEO Audit & Strategy",
          "On-Page SEO Optimization",
          "Local SEO for Businesses",
          "Content SEO Strategy",
          "Performance Tracking & Reporting",
        ],
      },
      {
        title: "Social Media Marketing",
        items: [
          "Social Media Strategy & Management",
          "Instagram & Facebook Marketing",
          "LinkedIn Brand Marketing",
          "Content Creation & Campaigns",
          "Influencer Collaborations",
        ],
      },
      {
        title: "Paid Advertising",
        items: [
          "Google Ads Campaigns",
          "Facebook & Instagram Advertising",
          "YouTube Ads Campaigns",
          "Lead Generation Campaigns",
          "Retargeting & Conversion Optimization",
        ],
      },
    ],
  },
  {
    id: "pr-media",
    title: "PR & Media Brand Building",
    description:
      "Build credibility and authority through strategic media relations, reputation management, and thought leadership programs.",
    icon: Newspaper,
    accentColor: "rose",
    subCategories: [
      {
        title: "Media & Public Relations",
        items: [
          "Press Release Creation & Distribution",
          "Media Coverage & News Publications",
          "Founder Personal Branding",
          "Business Story Publishing",
          "Media Outreach Campaigns",
        ],
      },
      {
        title: "Online Reputation Management",
        items: [
          "Brand Reputation Monitoring",
          "Google Search Reputation Management",
          "Review Management Strategy",
          "Crisis Reputation Management",
        ],
      },
      {
        title: "Brand Authority Building",
        items: [
          "Thought Leadership Content",
          "Industry Interviews & Podcast Features",
          "Founder Profile Promotion",
          "LinkedIn Authority Building",
        ],
      },
    ],
  },
  {
    id: "skill-development",
    title: "Skill Development & Training",
    description:
      "Future-proof your workforce with technology training, professional development workshops, and institutional programs.",
    icon: GraduationCap,
    accentColor: "cyan",
    subCategories: [
      {
        title: "Technology Skill Programs",
        items: [
          "Web Development Training",
          "AI & Automation Training",
          "Cybersecurity Fundamentals",
          "Digital Marketing Training",
          "Data Analytics Basics",
        ],
      },
      {
        title: "Professional Development",
        items: [
          "Entrepreneurship Training",
          "Freelancing & Remote Work Skills",
          "Business Growth Strategy Workshops",
          "Startup Bootcamps",
        ],
      },
      {
        title: "Institutional Programs",
        items: [
          "College Skill Development Programs",
          "Internship Training Programs",
          "Industry Certification Courses",
          "Placement Support Programs",
        ],
      },
    ],
  },
  {
    id: "msme-odop",
    title: "MSME & ODOP Digital Enablement",
    description:
      "Empower micro, small, and medium enterprises with digital storefronts, branding, and online marketplace growth strategies.",
    icon: Store,
    accentColor: "amber",
    subCategories: [
      {
        title: "Digital Business Setup",
        items: [
          "Online Store Development",
          "Product Catalog Digitization",
          "Digital Payment Integration",
          "Business Listing Setup",
        ],
      },
      {
        title: "Branding & Design",
        items: [
          "Logo & Brand Identity",
          "Packaging Design",
          "Product Branding",
          "Business Profile & Brochure Design",
        ],
      },
      {
        title: "Online Sales Growth",
        items: [
          "Marketplace Setup (Amazon, Flipkart)",
          "Social Commerce Setup",
          "Product Photography & Catalog Design",
          "Digital Marketing for MSMEs",
        ],
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Accent color map for consistent icon + badge theming                      */
/* -------------------------------------------------------------------------- */

const accentMap: Record<
  string,
  { iconBg: string; iconText: string; badgeBg: string; badgeText: string; border: string }
> = {
  blue: {
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    border: "border-blue-100",
  },
  violet: {
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    border: "border-violet-100",
  },
  emerald: {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    border: "border-emerald-100",
  },
  orange: {
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    border: "border-orange-100",
  },
  rose: {
    iconBg: "bg-rose-50",
    iconText: "text-rose-600",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    border: "border-rose-100",
  },
  cyan: {
    iconBg: "bg-cyan-50",
    iconText: "text-cyan-600",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-700",
    border: "border-cyan-100",
  },
  amber: {
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    border: "border-amber-100",
  },
}

/* -------------------------------------------------------------------------- */
/*  Sub-category icon mapping (one icon per sub-category for visual variety)  */
/* -------------------------------------------------------------------------- */

const subCategoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Website Development": Globe,
  "Web Application Development": Server,
  "Mobile App Development": Smartphone,
  "AI Business Automation": Workflow,
  "AI Productivity Solutions": Brain,
  "AI Integration Services": Plug,
  "Security Assessment": Search,
  "Business Security Solutions": Lock,
  "Security Awareness": AlertTriangle,
  "Search Engine Optimization (SEO)": BarChart3,
  "Social Media Marketing": Share2,
  "Paid Advertising": Target,
  "Media & Public Relations": Megaphone,
  "Online Reputation Management": Eye,
  "Brand Authority Building": Award,
  "Technology Skill Programs": BookOpen,
  "Professional Development": Users,
  "Institutional Programs": Landmark,
  "Digital Business Setup": ShoppingCart,
  "Branding & Design": Palette,
  "Online Sales Growth": Rocket,
}

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                       */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* -------------------------------------------------------------------------- */
/*  SubCategoryCard: collapsible card within each service category           */
/* -------------------------------------------------------------------------- */

function SubCategoryCard({
  sub,
  accent,
  index,
}: {
  sub: SubCategory
  accent: (typeof accentMap)[string]
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)
  const SubIcon = subCategoryIcons[sub.title] ?? Monitor

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors duration-300"
    >
      {/* Header -- clickable to expand/collapse */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-md ${accent.iconBg} shrink-0`}
        >
          <SubIcon className={`w-5 h-5 ${accent.iconText}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-[#0F2557]">{sub.title}</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {sub.items.length} service{sub.items.length !== 1 ? "s" : ""}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </button>

      {/* Collapsible items list */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 border-t border-slate-100">
              <ul className="mt-4 space-y-2">
                {sub.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.badgeBg} shrink-0`}
                      style={{
                        backgroundColor:
                          accent.iconText === "text-blue-600"
                            ? "#2563eb"
                            : accent.iconText === "text-violet-600"
                              ? "#7c3aed"
                              : accent.iconText === "text-emerald-600"
                                ? "#059669"
                                : accent.iconText === "text-orange-600"
                                  ? "#ea580c"
                                  : accent.iconText === "text-rose-600"
                                    ? "#e11d48"
                                    : accent.iconText === "text-cyan-600"
                                      ? "#0891b2"
                                      : "#d97706",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  ServiceCategorySection: full-width alternating section for one category  */
/* -------------------------------------------------------------------------- */

function ServiceCategorySection({
  category,
  index,
}: {
  category: ServiceCategory
  index: number
}) {
  const accent = accentMap[category.accentColor] ?? accentMap.blue
  const CategoryIcon = category.icon
  const isEven = index % 2 === 0

  return (
    <section
      id={category.id}
      className={`py-16 md:py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
        {/* Category header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 mb-10 md:mb-14"
        >
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl ${accent.iconBg} shrink-0`}
          >
            <CategoryIcon className={`w-7 h-7 ${accent.iconText}`} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold ${accent.badgeBg} ${accent.badgeText}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2557]">
              {category.title}
            </h2>
            <p className="text-base md:text-lg text-slate-500 mt-3 max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </motion.div>

        {/* Sub-category cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {category.subCategories.map((sub, subIndex) => (
            <SubCategoryCard
              key={sub.title}
              sub={sub}
              accent={accent}
              index={subIndex}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero section                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-white">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Accent line */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="w-12 h-0.5 bg-[#B8860B] mb-8"
            />

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F2557] leading-tight"
            >
              Our Services
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-slate-500 mt-6 max-w-2xl leading-relaxed"
            >
              Seven strategic service verticals designed to accelerate your
              organization&apos;s growth, protect your digital assets, and build
              lasting market authority.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0F2557] text-white rounded-md px-7 py-3.5 text-sm font-semibold hover:bg-[#0C1D45] transition-colors duration-300"
              >
                Book Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#digital-transformation"
                className="inline-flex items-center justify-center border border-slate-300 text-[#0F2557] rounded-md px-7 py-3.5 text-sm font-semibold hover:bg-slate-50 transition-colors duration-300"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Service categories                                                 */}
      {/* ------------------------------------------------------------------ */}
      {serviceCategories.map((category, index) => (
        <ServiceCategorySection
          key={category.id}
          category={category}
          index={index}
        />
      ))}

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA banner                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0F2557] py-16 md:py-24">
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-6xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-base md:text-lg text-white/70 mt-4 max-w-xl mx-auto leading-relaxed"
            >
              Schedule a free consultation with our team to discuss which
              services align best with your goals.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8860B] text-[#0F2557] rounded-md px-8 py-4 font-semibold text-base hover:bg-[#9A7209] transition-colors duration-300"
              >
                Book Consultation
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
