export interface Project {
  name: string
  id: string
  api: string
  slug: string
  category: "SHIPPED" | "CAPABILITY"
  subtitle: string
  challenge: string
  metrics: { value: string; label: string }[]
  tech: string
  isAI?: boolean
  isLocal?: boolean
  detailedContent?: string
  image?: string
  carousels?: string[]
  tags?: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    name: "Vulsphere",
    id: "691dde1c506ad6b73f7884e4",
    api: "https://www.nileshjaiswar.tech/projects/691dde1c506ad6b73f7884e4",
    slug: "vulsphere",
    category: "SHIPPED",
    subtitle: "Vulnerability Lifecycle Management System",
    challenge: "Enterprise security teams struggling to orchestrate the complete vulnerability remediation loop—from asset discovery and scanning to multi-stage approvals and confirmatory retesting across the organization.",
    metrics: [
      { value: "END-TO-END", label: "LIFECYCLE" },
      { value: "4-LEVEL", label: "APPROVAL FLOW" },
      { value: "NESSUS", label: "INTEGRATION" },
    ],
    tech: "Next.js, NestJS, MongoDB, PDFMake",
  },
  {
    name: "Client Management System",
    id: "681239fbd1762386f222cafa",
    api: "https://www.nileshjaiswar.tech/projects/681239fbd1762386f222cafa",
    slug: "client-management",
    category: "SHIPPED",
    subtitle: "Operational Software Platform",
    challenge: "Operations team drowning in Excel. Manual data entry, no visibility, constant errors, lost revenue from missed renewals.",
    metrics: [
      { value: "15 HRS", label: "SAVED/WEEK" },
      { value: "$24K+", label: "RECOVERED/YR" },
      { value: "500+", label: "CLIENTS" },
    ],
    tech: "Next.js, NestJS, MongoDB, Redis",
  },
  {
    name: "Creator Toolkit",
    id: "6819c04d5a53f64d0b5b8971",
    api: "https://www.nileshjaiswar.tech/projects/6819c04d5a53f64d0b5b8971",
    slug: "creator-toolkit",
    category: "SHIPPED",
    subtitle: "Complete SaaS Platform",
    challenge: "Content creators spending 20+ hours/week on production (thumbnails, editing, voice-overs, metadata).",
    metrics: [
      { value: "3X", label: "OUTPUT" },
      { value: "14 WKS", label: "TO LAUNCH" },
      { value: "GLOBAL", label: "USERS" },
    ],
    tech: "Next.js, Node.js, AWS, OpenAI",
  },
  {
    name: "Education App",
    id: "680e4d53b167467cbc8a3a3c",
    api: "https://www.nileshjaiswar.tech/projects/680e4d53b167467cbc8a3a3c",
    slug: "education-app",
    category: "SHIPPED",
    subtitle: "Mobile + Custom CMS",
    challenge: "Static website couldn't showcase dynamic campus life. Non-technical staff needed content control.",
    metrics: [
      { value: "10K+", label: "USERS" },
      { value: "67%", label: "OPEN RATE" },
      { value: "MINUTES", label: "TO UPDATE" },
    ],
    tech: "React Native, Expo, NestJS, AWS",
  },
  {
    name: "AI Audit Reports",
    id: "68232a891fdfca1edc35ded9",
    api: "https://www.nileshjaiswar.tech/projects/68232a891fdfca1edc35ded9",
    slug: "ai-audit-reports",
    category: "CAPABILITY",
    subtitle: "AI Agent Automation",
    challenge: "Audit teams spending 6 hours per report analyzing data, structuring findings, and generating documents manually. AI agents trained on audit framework now handle the repetitive work.",
    metrics: [
      { value: "97%", label: "TIME REDUCTION" },
      { value: "8 MIN", label: "VS 6 HRS" },
      { value: "10X", label: "OUTPUT CAPACITY" },
    ],
    tech: "OpenAI, LangChain, Next.js",
    isAI: true,
  },
  {
    name: "Etrends Technology",
    id: "etrends-client-order-system",
    api: "",
    slug: "etrends-technology",
    category: "SHIPPED",
    subtitle: "Client & Order Intelligence System",
    challenge: "GRC company struggling with Excel chaos for client and order management—info scattered across teams, missed deadlines, and no visibility into financial pulse.",
    metrics: [
      { value: "15+", label: "HRS SAVED/WEEK" },
      { value: "GLOBAL", label: "OPERATIONS" },
      { value: "REAL-TIME", label: "ANALYTICS" },
    ],
    tech: "Next.js, NestJS, MongoDB, Redis, RTK Query",
    isLocal: true,
    image: "",
    tags: ["Next.js", "NestJS", "MongoDB", "Redis", "RTK Query", "Dashboard", "Automation"],
    detailedContent: `# The Brain Behind Etrends' Global GRC Client Operations

Ever dealt with a business where tracking clients and orders feels like wrestling with half a dozen wild spreadsheets—and losing? That was Etrends Technology before we upgraded their workflow. Their old process was pure Excel chaos: info scattered across teams, deadlines sneaking up, and no clean picture of the company's financial pulse. Reporting became a hassle. Payment follow-ups? Missed more than anyone liked to admit.

So we got to work, building a single, intelligent hub that replaced clunky spreadsheets with real-time dashboards, automation, and smooth collaboration. The improvement? Immediate and a little bit breathtaking.

## 🌐 About Etrends

If you're in the GRC (Governance, Risk & Compliance) space, you've heard of Etrends. With 10+ years under their belt and a flagship Laser® product line, this team helps companies navigate risk, audits, compliance, and controls—stretching across India, the UK, US, Australia, Africa, and the Middle East.

## 🧠 Project at a Glance: The New Client & Order Intelligence System

Here's the pitch: One platform, built on **Next.js, NestJS, MongoDB, Redis, and RTK Query** that brings every piece of the puzzle—onboarding, payments, AMC renewals, even deep analytics—onto a single dashboard. No more siloed files, no more manual reminders. Just insight, clarity, and peace of mind.

## 🔍 Core Features (That Actually Change the Game)

### 👤 All-in-One Client Management
- Register new clients with rich profiles and points of contact
- Every client dashboard at-a-glance: orders, active licenses, modules, AMC status
- See pending payments, revenue metrics, and a record of all agreements

### 📦 Laser-Focused Order & Payment Tracking
- Log orders and follow-ups, split by service details
- Track milestone payments, custom add-ons, all in one feed
- A central, honest view of pending payments across every client

### 🔁 AMC Lifecycle on Autopilot
- See upcoming, due, and overdue AMCs (as they happen, not after)
- One-click updates for payments, receipts, or agreements
- Automated reminders—agreement expiries, due AMCs, and everything in-between

### 📬 Communication—All Built In
- Email composer with templates and custom messages
- Client AMCs and agreement alerts sent directly—no clumsy mail merges
- Smart follow-ups, scheduled and forgetproof

### 📊 Analytics That Matter
- Real-time stats: revenue, billing, collections—down to products and industries
- AMC collected vs expected, new business vs renewal
- Filter, sort, and download reports—bye-bye, tedious number crunching

### ⚙️ Automation & Scheduling
- Redis-powered background jobs: create payment plans, update AMCs, trigger reminders
- All the repeat work handled behind the scenes so you can focus on growth

## 🛠️ The Tech Stack

**Frontend:** Next.js, TypeScript, ShadCN, Tailwind CSS, RTK Query
**Backend:** NestJS, MongoDB, Redis
**Automation & Infra:** Redis Schedulers, a custom email system, dynamic reporting modules

## 🧩 Outcome

> "The Client & Order Intelligence System has replaced spreadsheet chaos with a robust, collaborative platform that centralizes client data, streamlines operations, and unlocks deep insights—dramatically reducing overhead and missed opportunities."

The result? Centralized insight, fewer missed payments, and hours saved every week. If you've ever lost sleep worrying about "Did we miss that deadline?"—this system puts those days behind you.

## Why It Matters

Sometimes, the right platform doesn't just ease the workload—it opens new doors. For Etrends, this shift was about more than cleaning up processes. It meant unlocking the confidence to scale, letting the team focus on what they do best.

And honestly, who ever missed those old spreadsheets?`,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Service, Industry, Approach, Company data structures
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: string
  subcategories: {
    title: string
    services: string[]
  }[]
}

export interface Industry {
  id: string
  title: string
  description: string
  icon: string
  services: string[]
}

export interface ApproachStep {
  number: number
  title: string
  description: string
  details: string[]
  icon: string
}

export interface WhyChooseReason {
  title: string
  description: string
  icon: string
}

export interface Insight {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
}

export interface CompanyInfo {
  whoWeAre: string[]
  vision: string[]
  mission: string[]
  whyChoose: WhyChooseReason[]
  upCommitment: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Categories
// ─────────────────────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Services",
    description:
      "Enable business growth through modern digital systems including websites, web applications, and mobile apps.",
    icon: "Globe",
    subcategories: [
      {
        title: "Website Development",
        services: [
          "Corporate Website Development",
          "Startup Landing Pages",
          "Portfolio & Personal Websites",
          "eCommerce Website Development",
          "Website Maintenance & Optimization",
        ],
      },
      {
        title: "Web Application Development",
        services: [
          "Custom Business Applications",
          "CRM & ERP Development",
          "Marketplace Platforms",
          "SaaS Product Development",
          "Customer Portals & Dashboards",
        ],
      },
      {
        title: "Mobile App Development",
        services: [
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
      "Improve operational efficiency with intelligent automation, productivity solutions, and AI integration services.",
    icon: "Cpu",
    subcategories: [
      {
        title: "AI Business Automation",
        services: [
          "AI Workflow Automation",
          "Business Process Automation",
          "AI Customer Support Chatbots",
          "AI Email & Lead Automation",
          "AI Sales Funnel Automation",
        ],
      },
      {
        title: "AI Productivity Solutions",
        services: [
          "AI Document Processing",
          "AI Data Analysis & Reporting",
          "AI Marketing Automation",
          "AI Content Generation Tools",
          "AI Meeting & Task Automation",
        ],
      },
      {
        title: "AI Integration Services",
        services: [
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
      "Protect your organization from evolving cyber threats through proactive security strategies and business security solutions.",
    icon: "Shield",
    subcategories: [
      {
        title: "Security Assessment",
        services: [
          "Website Security Testing",
          "Web Application Security Testing",
          "API Security Testing",
          "Vulnerability Assessment",
          "Security Risk Analysis",
        ],
      },
      {
        title: "Business Security Solutions",
        services: [
          "Security Architecture Consulting",
          "Data Protection Strategy",
          "Security Policy Development",
          "Incident Response Planning",
          "Compliance & Risk Management",
        ],
      },
      {
        title: "Security Awareness",
        services: [
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
      "Accelerate business growth through SEO, social media marketing, and strategic paid advertising campaigns.",
    icon: "TrendingUp",
    subcategories: [
      {
        title: "Search Engine Optimization (SEO)",
        services: [
          "SEO Audit & Strategy",
          "On-Page SEO Optimization",
          "Local SEO for Businesses",
          "Content SEO Strategy",
          "Performance Tracking & Reporting",
        ],
      },
      {
        title: "Social Media Marketing",
        services: [
          "Social Media Strategy & Management",
          "Instagram & Facebook Marketing",
          "LinkedIn Brand Marketing",
          "Content Creation & Campaigns",
          "Influencer Collaborations",
        ],
      },
      {
        title: "Paid Advertising",
        services: [
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
      "Build authority, credibility and trust through strategic communications, reputation management, and brand authority building.",
    icon: "Megaphone",
    subcategories: [
      {
        title: "Media & Public Relations",
        services: [
          "Press Release Creation & Distribution",
          "Media Coverage & News Publications",
          "Founder Personal Branding",
          "Business Story Publishing",
          "Media Outreach Campaigns",
        ],
      },
      {
        title: "Online Reputation Management",
        services: [
          "Brand Reputation Monitoring",
          "Google Search Reputation Management",
          "Review Management Strategy",
          "Crisis Reputation Management",
        ],
      },
      {
        title: "Brand Authority Building",
        services: [
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
      "Build workforce capabilities through technology skill programs, professional development, and institutional training initiatives.",
    icon: "GraduationCap",
    subcategories: [
      {
        title: "Technology Skill Programs",
        services: [
          "Web Development Training",
          "AI & Automation Training",
          "Cybersecurity Fundamentals",
          "Digital Marketing Training",
          "Data Analytics Basics",
        ],
      },
      {
        title: "Professional Development",
        services: [
          "Entrepreneurship Training",
          "Freelancing & Remote Work Skills",
          "Business Growth Strategy Workshops",
          "Startup Bootcamps",
        ],
      },
      {
        title: "Institutional Programs",
        services: [
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
      "Empower small enterprises and traditional industries with digital business setup, branding, and online sales growth solutions.",
    icon: "Store",
    subcategories: [
      {
        title: "Digital Business Setup",
        services: [
          "Online Store Development",
          "Product Catalog Digitization",
          "Digital Payment Integration",
          "Business Listing Setup",
        ],
      },
      {
        title: "Branding & Design",
        services: [
          "Logo & Brand Identity",
          "Packaging Design",
          "Product Branding",
          "Business Profile & Brochure Design",
        ],
      },
      {
        title: "Online Sales Growth",
        services: [
          "Marketplace Setup (Amazon, Flipkart)",
          "Social Commerce Setup",
          "Product Photography & Catalog Design",
          "Digital Marketing for MSMEs",
        ],
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────────────────────────────────────

export const industries: Industry[] = [
  {
    id: "banking-financial",
    title: "Banking & Financial Services",
    description:
      "Financial institutions operate in highly regulated environments where cybersecurity, data protection, and operational reliability are critical. Our solutions for the BFSI sector focus on strengthening digital security, improving compliance readiness, and supporting secure technology infrastructure.",
    icon: "Landmark",
    services: [
      "Cybersecurity risk assessments",
      "Vulnerability assessment and penetration testing",
      "Security awareness training for employees",
      "Technology infrastructure advisory",
      "Digital transformation consulting",
    ],
  },
  {
    id: "government-public",
    title: "Government & Public Sector",
    description:
      "Government departments and public institutions are increasingly adopting digital platforms to improve service delivery and operational efficiency. We support government and institutional initiatives through technology consulting, digital transformation, and skill development programs aligned with development initiatives such as One District One Product.",
    icon: "Building",
    services: [
      "Digital infrastructure advisory",
      "Cybersecurity awareness initiatives",
      "Technology adoption programs",
      "Skill development and training workshops",
    ],
  },
  {
    id: "education-academic",
    title: "Education & Academic Institutions",
    description:
      "Educational institutions are rapidly transitioning toward digital learning environments and technology-driven operations. We help institutions modernize their digital infrastructure and enhance student engagement through technology solutions.",
    icon: "BookOpen",
    services: [
      "Website and digital platform development",
      "Cybersecurity awareness programs",
      "Digital marketing for educational institutions",
      "Digital admissions and student engagement solutions",
    ],
  },
  {
    id: "startups-technology",
    title: "Startups & Technology Companies",
    description:
      "Startups require a strong foundation in technology, cybersecurity, and brand visibility to compete effectively in the digital marketplace. Our advisory services help startups build scalable digital infrastructure while establishing strong market credibility.",
    icon: "Rocket",
    services: [
      "Technology consulting and digital infrastructure",
      "Cybersecurity advisory",
      "Strategic public relations and media visibility",
      "Digital marketing strategies",
      "Brand positioning and founder visibility",
    ],
  },
  {
    id: "smes",
    title: "Small & Medium Enterprises (SMEs)",
    description:
      "Small and medium enterprises are a major driver of economic growth and innovation across India. We support SMEs in adopting digital technologies and expanding their market reach through integrated business solutions.",
    icon: "Briefcase",
    services: [
      "Digital transformation consulting",
      "Website and e-commerce development",
      "Digital marketing strategies",
      "Cybersecurity awareness and protection",
      "Brand building and media visibility",
    ],
  },
  {
    id: "regional-traditional",
    title: "Regional Enterprises & Traditional Industries",
    description:
      "Many regional industries possess strong craftsmanship and production capabilities but require digital enablement to access broader markets. We support enterprises aligned with the vision of One District One Product by helping them adopt digital tools, improve product branding, and reach national and international markets.",
    icon: "MapPin",
    services: [
      "Digital product catalog development",
      "E-commerce enablement",
      "Digital marketing and brand positioning",
      "PR and media visibility campaigns",
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Approach Steps
// ─────────────────────────────────────────────────────────────────────────────

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    title: "Discovery & Assessment",
    description:
      "Understanding your organization's goals, challenges and opportunities through thorough analysis.",
    details: [
      "Understanding your organization's goals and strategic priorities",
      "Identifying current challenges and pain points",
      "Assessing existing digital capabilities and infrastructure",
      "Defining growth opportunities and transformation potential",
    ],
    icon: "Search",
  },
  {
    number: 2,
    title: "Strategy Development",
    description:
      "Developing customized technology, cybersecurity and communication strategies tailored to your business.",
    details: [
      "Customized technology strategies aligned with business objectives",
      "Cybersecurity frameworks and risk mitigation plans",
      "Strategic communication and PR plans",
      "Comprehensive implementation roadmap with milestones",
    ],
    icon: "Layout",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "Deploying solutions including digital infrastructure, automation and PR programs with precision.",
    details: [
      "Deploying digital infrastructure and technology solutions",
      "Implementing automation systems and AI integration",
      "Executing PR programs and media visibility campaigns",
      "Establishing security measures and compliance protocols",
    ],
    icon: "Code",
  },
  {
    number: 4,
    title: "Optimization",
    description:
      "Continuous monitoring and improvement for sustained growth and competitive advantage.",
    details: [
      "Continuous monitoring of performance and security posture",
      "Performance improvement and process optimization",
      "Growth adaptation and scaling strategies",
      "Regular reviews and strategic adjustments",
    ],
    icon: "BarChart3",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Why Choose Reasons
// ─────────────────────────────────────────────────────────────────────────────

export const whyChooseReasons: WhyChooseReason[] = [
  {
    title: "Integrated Expertise",
    description:
      "Few firms combine technology consulting, cybersecurity advisory and strategic communications under one umbrella.",
    icon: "Layers",
  },
  {
    title: "Strategic Advisory Approach",
    description:
      "We work as long-term advisors focused on sustainable business growth.",
    icon: "Target",
  },
  {
    title: "Industry Experience",
    description:
      "Our experience across technology, financial services and consulting enables us to provide tailored solutions.",
    icon: "Building2",
  },
  {
    title: "Results-Oriented Execution",
    description:
      "Every project is designed to deliver measurable business impact.",
    icon: "TrendingUp",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Insights
// ─────────────────────────────────────────────────────────────────────────────

export const insights: Insight[] = [
  {
    id: "cybersecurity-risk-management",
    title: "Cybersecurity Risk Management",
    excerpt:
      "Understanding and mitigating cyber risks is essential for modern organizations. Learn how proactive security strategies can protect your digital assets and strengthen business resilience.",
    category: "Cybersecurity",
    date: "2026-03-15",
  },
  {
    id: "ai-automation-business-growth",
    title: "AI Automation for Business Growth",
    excerpt:
      "Discover how intelligent automation is transforming business operations, reducing costs, and enabling organizations to scale efficiently in the digital economy.",
    category: "AI",
    date: "2026-03-01",
  },
  {
    id: "personal-branding-founders",
    title: "Personal Branding for Founders",
    excerpt:
      "Building a strong personal brand is critical for founders seeking visibility, credibility, and trust. Explore strategies to establish thought leadership and market authority.",
    category: "PR & Media",
    date: "2026-02-15",
  },
  {
    id: "digital-transformation-strategies",
    title: "Digital Transformation Strategies",
    excerpt:
      "Effective digital transformation requires more than technology adoption. Learn the strategic frameworks that help organizations modernize operations and achieve sustainable growth.",
    category: "Digital Transformation",
    date: "2026-02-01",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Company Info
// ─────────────────────────────────────────────────────────────────────────────

export const companyInfo: CompanyInfo = {
  whoWeAre: [
    "We are a strategic technology, cybersecurity, and communications advisory firm committed to supporting organizations, entrepreneurs, and institutions in navigating the evolving digital economy.",
    "With a strong presence in Uttar Pradesh and Mumbai, our firm focuses on enabling businesses to adopt modern technologies, strengthen cybersecurity resilience, and build credible market presence through strategic communications.",
    "Our work is particularly aligned with the emerging opportunities across Uttar Pradesh's rapidly growing digital and entrepreneurial ecosystem, where traditional industries, startups, and institutions are increasingly embracing innovation and digital transformation.",
    "By combining expertise in technology consulting, cybersecurity advisory, digital transformation, and public relations, we provide integrated solutions that help organizations operate securely, grow sustainably, and build lasting credibility.",
  ],
  vision: [
    "To become a leading strategic advisory firm contributing to the digital and economic transformation of Uttar Pradesh, by empowering businesses, institutions, and entrepreneurs with technology, cybersecurity expertise, and global market visibility.",
    "We envision a future where regional enterprises and emerging entrepreneurs from cities like Azamgarh and across Purvanchal are able to compete confidently in national and international markets through innovation, digital capabilities, and strong brand reputation.",
  ],
  mission: [
    "Our mission is to enable organizations and entrepreneurs to grow in the digital economy by providing practical, impactful solutions across technology, cybersecurity, automation, and strategic communications.",
    "We aim to support regional development by helping businesses modernize operations, protect their digital assets, and access wider markets through digital platforms and media visibility.",
    "Our initiatives also align with development programs such as One District One Product, which promotes district-specific industries and local entrepreneurship across the state.",
    "Through training programs, advisory services, and technology solutions, we work to bridge the gap between traditional industries and modern digital opportunities.",
  ],
  whyChoose: whyChooseReasons,
  upCommitment: [
    "Uttar Pradesh is witnessing significant growth in entrepreneurship, digital adoption, and infrastructure development.",
    "Our firm is committed to supporting this transformation by enabling businesses, educational institutions, and emerging entrepreneurs to leverage modern technologies, improve cybersecurity resilience, and build strong brand credibility.",
    "By connecting regional enterprises with digital tools, automation, and strategic communications, we aim to contribute to the creation of a more innovative, secure, and globally competitive business ecosystem in Uttar Pradesh.",
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Project lookup helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
