import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "QENIXLABS | Custom Software Development & AI Automation",
  description: "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
  generator: "v0.app",
  keywords: [
    "software development",
    "AI integration",
    "enterprise platforms",
    "custom software",
    "web development",
    "mobile apps",
    "custom software development Mumbai",
    "AI automation agency India",
    "enterprise software development company",
    "software outsourcing India",
  ],
  authors: [{ name: "QenixLabs" }],
  metadataBase: new URL("https://qenixlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QENIXLABS | Custom Software Development & AI Automation",
    description: "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff.",
    type: "website",
    url: "https://qenixlabs.com",
    siteName: "QenixLabs",
    images: [
      {
        url: "https://qenixlabs.com/og.png",
        width: 1200,
        height: 630,
        alt: "QENIXLABS - Custom Software Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QENIXLABS | Custom Software Development & AI Automation",
    description: "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff.",
    images: ["https://qenixlabs.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QenixLabs",
    description: "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
    url: "https://qenixlabs.com",
    logo: "https://qenixlabs.com/logo.png",
    email: "info@qenixlabs.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@qenixlabs.com",
      availableLanguage: "English",
    },
    areaServed: "Worldwide",
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Noise Texture Overlay */}
        <svg className="noise-overlay" aria-hidden="true">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
