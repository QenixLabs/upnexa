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
  title: "QENIXLABS | WE BUILD SOFTWARE THAT WORKS",
  description:
    "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
  generator: "v0.app",
  keywords: [
    "software development",
    "AI integration",
    "enterprise platforms",
    "custom software",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: "QenixLabs" }],
  metadataBase: new URL("https://qenixlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QENIXLABS | WE BUILD SOFTWARE THAT WORKS",
    description:
      "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
    type: "website",
    url: "https://qenixlabs.com",
    siteName: "QenixLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "QENIXLABS | WE BUILD SOFTWARE THAT WORKS",
    description:
      "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
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
      telephone: "+91-",
      contactType: "sales",
      email: "info@qenixlabs.com",
    },
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
