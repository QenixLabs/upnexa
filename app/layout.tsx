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
  title: "AURELIUS ENGINEERING | WE BUILD SOFTWARE THAT WORKS",
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
  authors: [{ name: "Aurelius Engineering" }],
  openGraph: {
    title: "AURELIUS ENGINEERING | WE BUILD SOFTWARE THAT WORKS",
    description:
      "Enterprise platforms that eliminate chaos. AI agents that automate the boring stuff. Custom systems built for YOUR workflow.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
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
