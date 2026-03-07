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

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
