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
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
