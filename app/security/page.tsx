import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Lock, FileCheck, AlertCircle, Eye, Server, Code, UserCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security & Compliance | QENIXLABS",
  description: "Enterprise-grade security practices. GDPR-compliant data handling. NDA-protected engagements. Your IP stays yours.",
  keywords: [
    "security",
    "compliance",
    "GDPR",
    "data protection",
    "NDA",
    "enterprise security",
    "application security",
  ],
  openGraph: {
    title: "Security & Compliance | QENIXLABS",
    description: "Enterprise-grade security practices. GDPR-compliant data handling. NDA-protected engagements.",
    type: "website",
    url: "https://qenixlabs.com/security",
  },
  alternates: {
    canonical: "/security",
  },
}

const securityPractices = [
  {
    icon: Shield,
    title: "SECURITY-FIRST DEVELOPMENT",
    description: "Security is built into every layer of our development process—from architecture decisions to deployment strategies.",
    practices: [
      "Threat modeling during architecture phase",
      "Secure coding standards enforced via code review",
      "Regular dependency vulnerability scanning",
      "Security testing integrated into CI/CD pipeline",
    ],
  },
  {
    icon: Lock,
    title: "DATA PROTECTION",
    description: "Your data is processed with enterprise-grade security. We implement encryption at rest and in transit.",
    practices: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for all data in transit",
      "Secure key management practices",
      "Regular security audits and penetration testing",
    ],
  },
  {
    icon: Eye,
    title: "GDPR COMPLIANCE",
    description: "We comply with GDPR requirements for handling personal data. Your users' privacy is respected.",
    practices: [
      "Data minimization principles",
      "Clear data retention policies",
      "User consent management",
      "Data subject request handling",
    ],
  },
  {
    icon: Server,
    title: "INFRASTRUCTURE SECURITY",
    description: "Our cloud infrastructure follows security best practices. We use hardened configurations and continuous monitoring.",
    practices: [
      "Cloud provider security certifications (SOC 2, ISO 27001)",
      "Network segmentation and firewalls",
      "Intrusion detection and prevention",
      "24/7 security monitoring",
    ],
  },
  {
    icon: Code,
    title: "APPLICATION SECURITY",
    description: "We build secure applications following OWASP guidelines and industry best practices.",
    practices: [
      "Input validation and sanitization",
      "SQL injection and XSS prevention",
      "Authentication and authorization best practices",
      "Session management and secure cookies",
    ],
  },
  {
    icon: FileCheck,
    title: "NDA & CONFIDENTIALITY",
    description: "Every project starts with comprehensive NDAs. Your intellectual property stays yours.",
    practices: [
      "Standard NDA for all engagements",
      "Confidentiality clauses in all contracts",
      "Secure project communication channels",
      "No public case studies without permission",
    ],
  },
  {
    icon: AlertCircle,
    title: "INCIDENT RESPONSE",
    description: "We have clear processes for handling security incidents. Rapid response is our commitment.",
    practices: [
      "Documented incident response plan",
      "24-hour initial response commitment",
      "Transparent communication during incidents",
      "Post-incident analysis and remediation",
    ],
  },
  {
    icon: UserCheck,
    title: "ACCESS CONTROL",
    description: "Strict access controls ensure only authorized team members can access your project data.",
    practices: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication required",
      "Regular access reviews",
      "Secure onboarding and offboarding",
    ],
  },
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase tracking-tighter leading-[0.85] text-[#FAFAFA]">
            SECURITY &
            <br />
            <span className="text-primary">COMPLIANCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl mt-8">
            Enterprise-grade security practices. GDPR-compliant data handling. NDA-protected engagements. Your IP stays yours.
          </p>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 border-t-2 border-[#3F3F46]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <div key={index} className="border-2 border-[#3F3F46] p-8">
                <practice.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-3">
                  {practice.title}
                </h3>
                <p className="text-base text-[#A1A1AA] mb-4">{practice.description}</p>
                <ul className="space-y-2">
                  {practice.practices.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary shrink-0">→</span>
                      <span className="text-sm text-[#A1A1AA]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t-2 border-[#3F3F46]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-6">
            HAVE QUESTIONS?
          </h2>
          <p className="text-lg text-[#A1A1AA] mb-8">
            We're happy to complete your security questionnaire or provide more details about our practices.
          </p>
          <a
            href="mailto:info@qenixlabs.com"
            className="inline-flex items-center justify-center h-16 px-12 bg-primary text-black font-bold uppercase tracking-tighter text-lg hover:scale-105 transition-transform"
          >
            CONTACT US
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
