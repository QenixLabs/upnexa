import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "UPNexa | Strategic Technology, Cybersecurity & Media Advisory",
  description:
    "We help organizations, founders and institutions accelerate growth through digital transformation, advanced cybersecurity, AI automation and strategic public relations in Uttar Pradesh and beyond.",
  keywords: [
    "technology consulting",
    "cybersecurity advisory",
    "digital transformation",
    "AI automation",
    "strategic PR",
    "media visibility",
    "Uttar Pradesh",
    "brand building",
    "business growth",
    "MSME digital enablement",
    "ODOP",
    "consulting firm India",
  ],
  authors: [{ name: "UPNexa" }],
  metadataBase: new URL("https://upnexa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UPNexa | Strategic Technology, Cybersecurity & Media Advisory",
    description:
      "We help organizations, founders and institutions accelerate growth through digital transformation, advanced cybersecurity, AI automation and strategic public relations in Uttar Pradesh and beyond.",
    type: "website",
    url: "https://upnexa.com",
    siteName: "UPNexa",
    images: [
      {
        url: "https://upnexa.com/og.png",
        width: 1200,
        height: 630,
        alt: "UPNexa - Strategic Technology, Cybersecurity & Media Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPNexa | Strategic Technology, Cybersecurity & Media Advisory",
    description:
      "We help organizations, founders and institutions accelerate growth through digital transformation, advanced cybersecurity, AI automation and strategic public relations in Uttar Pradesh and beyond.",
    images: ["https://upnexa.com/og.png"],
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
    name: "UPNexa",
    description:
      "Strategic technology, cybersecurity, and communications advisory firm.",
    url: "https://upnexa.com",
    logo: "https://upnexa.com/logo.png",
    email: "info@upnexa.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Azamgarh",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    ],
    sameAs: ["https://linkedin.com"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@upnexa.com",
      availableLanguage: ["English", "Hindi"],
    },
    areaServed: ["India", "Uttar Pradesh", "Maharashtra"],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
