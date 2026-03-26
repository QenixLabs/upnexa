# UPNexa Website Transformation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the existing QenixLabs website (dark brutalist software dev agency) into UPNexa (corporate consulting firm with navy/white/gold theme targeting Uttar Pradesh).

**Architecture:** Next.js 16 App Router with TypeScript and Tailwind CSS v4. Light corporate theme replacing dark brutalist theme. New pages added, obsolete pages removed. All components rewritten with corporate design language.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, react-fast-marquee, react-markdown

**PRD Source:** `PRD.md` at project root

---

## Design System Reference

### Color Mapping (apply everywhere)
| Old (QenixLabs) | New (UPNexa) | Usage |
|---|---|---|
| `#09090B` | `#FFFFFF` | Main background |
| `#18181B` | `#F8FAFC` | Elevated surfaces |
| `#27272A` | `#F1F5F9` | Hover surfaces |
| `#3F3F46` | `#E2E8F0` | Borders |
| `#FAFAFA` | `#0F2557` | Primary text |
| `#A1A1AA` | `#475569` | Secondary text |
| `#71717A` | `#64748B` | Tertiary text |
| `#52525B` | `#94A3B8` | Muted text |
| `#0D0D0F` | `#F8FAFC` | Subtle surfaces |
| `#dc143c` | `#B8860B` | Gold accent |

### Typography Rules
- Remove ALL `uppercase` classes
- Remove ALL `tracking-tighter` and `tracking-[0.3em]` classes
- Remove ALL `tracking-widest` on labels
- Use mixed-case headings and body text
- Use `tracking-tight` sparingly on major headings only

### Design Language Changes
- Border-radius: `--radius: 8px` (was `0px`)
- Cards: `rounded-lg shadow-sm` with `hover:shadow-md` (was `border-2 border-[#3F3F46]`)
- Remove corner bracket decorative elements
- Remove noise texture overlay
- Remove grid pattern backgrounds
- Subtle animations (reduce scale from 1.02 to 1.01, reduce y-offset from 30 to 15)
- CTA buttons: `bg-[#0F2557] text-white rounded-md` (navy) or `bg-[#B8860B] text-white rounded-md` (gold)

---

## Task 1: Foundation — CSS Design System

**Files:**
- Modify: `app/globals.css`

**Step 1: Rewrite globals.css with corporate design system**

Replace the entire file with the new corporate CSS variables and utility classes. Key changes:
- `:root` variables: white background, navy primary, gold accent, slate text hierarchy
- `--radius: 8px` with sm/md/lg/xl variants
- `--font-sans: "Inter", system-ui, sans-serif`
- Add `--gold`, `--gold-light`, `--gold-dim`, `--gold-glow` variables
- Remove `.noise-overlay`, `.corner-bracket-*`, brutalist glow classes
- Corporate card utilities with `rounded-md shadow-sm`
- Light scrollbar, navy selection
- Add `.section-dark` class for navy contrast sections

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: Build succeeds (may have warnings about missing Inter import — that's Task 2)

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: replace dark brutalist CSS with corporate light design system"
```

---

## Task 2: Foundation — Layout, Metadata & Font

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Rewrite layout.tsx**

Key changes:
- Replace `Space_Grotesk` + `Geist_Mono` imports with `Inter`
- Font variable: `--font-inter`
- Update ALL metadata to UPNexa branding
- JSON-LD: name="UPNexa", dual addresses (Mumbai + UP), new email
- Remove `className="dark"` from `<html>` → light mode default
- Remove noise texture overlay SVG
- Body class: `font-sans antialiased`

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update layout with Inter font, UPNexa metadata, light mode"
```

---

## Task 3: Foundation — Data Layer

**Files:**
- Modify: `lib/data.ts`

**Step 1: Add new data structures to lib/data.ts**

Keep existing `Project` interface and `projects` array. Add after it:

```typescript
// Service categories (7 from PRD)
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

// Industries (6 from PRD)
export interface Industry {
  id: string
  title: string
  description: string
  icon: string
  services: string[]
}

// Approach steps (4 from PRD)
export interface ApproachStep {
  number: number
  title: string
  description: string
  details: string[]
  icon: string
}

// Why Choose Us (4 from PRD)
export interface WhyChooseReason {
  title: string
  description: string
  icon: string
}

// Company info
export interface CompanyInfo {
  whoWeAre: string
  vision: string
  mission: string
  upCommitment: string
}
```

Then add the actual data arrays populated from PRD content. See `PRD.md` lines 288-529 for services, lines 421-529 for industries, lines 87-94 for approach, lines 98-108 for why choose, and lines 170-224 for company info.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add service, industry, and company data structures from PRD"
```

---

## Task 4: Foundation — Sitemap

**Files:**
- Modify: `app/sitemap.ts`

**Step 1: Update sitemap with new page structure**

- Change `baseUrl` to `https://upnexa.com`
- Remove: `/work`, `/approach`, `/pricing`, `/security`
- Add: `/industries`, `/regional-impact`, `/case-studies`, `/insights`, `/contact`

**Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "chore: update sitemap for UPNexa page structure"
```

---

## Task 5: Core Component — Navbar

**Files:**
- Modify: `components/navbar.tsx`

**Step 1: Rewrite navbar with new navigation and corporate styling**

New nav links array:
```typescript
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Regional Impact", href: "/regional-impact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
]
```

Key styling changes:
- Remove all dropdown menus (flat nav for corporate)
- CTA: "Book Consultation" with `bg-[#0F2557] text-white rounded-md`
- Navbar bg: `bg-white/90 backdrop-blur-md` (not dark)
- Border: `border-b border-slate-200` (not `border-[#3F3F46]`)
- Nav text: `text-slate-600 hover:text-[#0F2557]` (not uppercase zinc)
- Remove all `uppercase`, `tracking-wider`, `tracking-tighter`
- Logo: Update alt text to UPNexa
- Mobile menu: white bg panel (not dark full-screen)
- Reduce animation intensity

**Step 2: Verify build and visually check**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add components/navbar.tsx
git commit -m "feat: rewrite navbar with UPNexa navigation and corporate styling"
```

---

## Task 6: Core Component — Footer

**Files:**
- Modify: `components/footer.tsx`

**Step 1: Rewrite footer with dark navy design**

Key changes:
- Background: `bg-[#0F2557]` (dark navy contrast section)
- Marquee: gold background `bg-[#B8860B]` or remove entirely
- New footer links: About, Services, Industries, Regional Impact, Case Studies, Insights, Contact
- Text colors: white and `white/70` for readability on navy
- Border colors: `border-white/10` and `border-white/20`
- Remove `uppercase`, `tracking-wider`
- Add dual office addresses (Mumbai + Uttar Pradesh)
- Social links: LinkedIn, Email, WhatsApp
- Copyright: "© 2026 UPNexa. All Rights Reserved."
- Location: "Mumbai, Maharashtra & Azamgarh, Uttar Pradesh, India"
- Replace `border-t-2` with `border-t border-white/10`

**Step 2: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: rewrite footer with dark navy design and UPNexa branding"
```

---

## Task 7: Core Component — Hero Section

**Files:**
- Modify: `components/hero.tsx`

**Step 1: Complete rewrite with corporate hero design**

Content from PRD lines 3-11:
- Headline: "Transform Your Business with Strategic Technology, Cybersecurity & Media Influence"
- Subheadline: "We help organizations, founders and institutions accelerate growth through digital transformation, advanced cybersecurity, AI automation and strategic public relations."
- CTAs: "Book Strategic Consultation" (gold bg) + "Explore Our Services" (white outline)

Design changes:
- Background: `bg-[#0F2557]` (dark navy hero)
- Remove grid pattern, massive "01" number, corner brackets, parallax scale
- Text: `text-white` (on dark bg)
- Gold accent: `text-[#B8860B]` for highlighted words
- Clean, minimal layout with headline + subheadline + CTAs
- Simpler fade-in animations (no blur-reveal word animation)
- Subtle radial gradient decoration instead of grid
- Remove scroll indicator or make it minimal white line

**Step 2: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: rewrite hero with corporate navy design and UPNexa messaging"
```

---

## Task 8: Core Component — Stats Marquee

**Files:**
- Modify: `components/statsMarquee.tsx`

**Step 1: Rewrite with new metrics and gold styling**

New stats from PRD:
```typescript
const stats = [
  { value: "6+", label: "Industries Served" },
  { value: "50+", label: "Organizations Served" },
  { value: "15+", label: "Services Offered" },
  { value: "100+", label: "Projects Delivered" },
  { value: "2", label: "Office Locations" },
  { value: "UP", label: "Regional Focus" },
]
```

- Background: `bg-[#B8860B]` (gold)
- Text: `text-[#0F2557]` (navy on gold)
- Remove `tracking-tighter`
- Replace `★` separator with `●` or `|`

**Step 2: Commit**

```bash
git add components/statsMarquee.tsx
git commit -m "feat: update stats marquee with UPNexa metrics and gold theme"
```

---

## Task 9: Core Component — Contact Section

**Files:**
- Modify: `components/contact.tsx`

**Step 1: Rewrite with corporate form styling and dual offices**

Key changes:
- Background: white or `bg-slate-50`
- Heading: "Connect With Our Team" (not "LET'S TALK")
- Remove `uppercase`, `tracking-tighter` from everything
- Form inputs: bordered inputs with `border-slate-300 rounded-md bg-white` (not dark underline)
- Placeholders: "Your Name", "Your Email", "Your Phone", "Your Message" (normal case)
- Add phone input field and service interest dropdown
- Add dual office addresses: Mumbai + Uttar Pradesh
- Add WhatsApp contact link
- Submit button: `bg-[#0F2557] text-white rounded-md`
- Remove corner bracket decorations
- Replace `text-[#FAFAFA]` → `text-[#0F2557]`, `text-[#A1A1AA]` → `text-slate-600`
- Remove `bg-[#09090B]` → white bg with `border border-slate-200 rounded-lg`
- Email: `info@upnexa.com`

**Step 2: Commit**

```bash
git add components/contact.tsx
git commit -m "feat: rewrite contact section with corporate form and dual offices"
```

---

## Task 10: Core Component — CTA Section

**Files:**
- Modify: `components/cta.tsx`

**Step 1: Rewrite with navy background and UPNexa content**

Content from PRD lines 119-125:
- Headline: "Ready to Transform Your Business?"
- Description: "Whether you are seeking advanced cybersecurity protection, digital transformation or strategic PR visibility, our team is ready to help."
- CTA: "Schedule Consultation" (gold bg)

Design:
- Background: `bg-[#0F2557]` (navy)
- Text: white
- Button: `bg-[#B8860B] text-[#0F2557] rounded-md`
- Remove `uppercase`, `tracking-tighter`
- Mixed-case headings

**Step 2: Commit**

```bash
git add components/cta.tsx
git commit -m "feat: rewrite CTA section with navy design and consultation messaging"
```

---

## Task 11: New Component — Sticky CTA + WhatsApp

**Files:**
- Create: `components/stickyCta.tsx`

**Step 1: Create sticky CTA and WhatsApp floating buttons**

```typescript
"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MessageCircle } from "lucide-react"
```

Requirements from PRD "Conversion Features":
- Fixed-position "Book Consultation" button on right edge
- Floating WhatsApp chat button (bottom-right corner)
- Only visible after scrolling past hero (useEffect with scroll listener, threshold ~600px)
- AnimatePresence for smooth show/hide
- Navy (#0F2557) for consultation button, green (#25D366) for WhatsApp
- `rounded-md shadow-lg` professional styling
- Link consultation to `/#contact`, WhatsApp to `https://wa.me/919999999999`

**Step 2: Commit**

```bash
git add components/stickyCta.tsx
git commit -m "feat: add sticky consultation CTA and WhatsApp floating button"
```

---

## Task 12: New Homepage Component — Authority Section

**Files:**
- Create: `components/authoritySection.tsx`

**Step 1: Create authority and credibility section**

Content from PRD lines 13-19:
- Heading: "Trusted Strategic Partner for Growth and Reputation"
- Two challenges: managing digital risk, building market credibility
- Integrated expertise description
- "We work with organizations seeking long-term growth, operational efficiency and strong brand reputation."

Design:
- White background section
- Navy text headings
- Two-column layout: challenge cards on left, description on right
- `border border-slate-200 rounded-lg p-6` cards with subtle shadow
- Gold accent lines on card tops or icon accents
- Framer Motion fade-in on scroll

**Step 2: Commit**

```bash
git add components/authoritySection.tsx
git commit -m "feat: add authority and credibility section for homepage"
```

---

## Task 13: New Homepage Component — Service Divisions

**Files:**
- Create: `components/serviceDivisions.tsx`

**Step 1: Create 4 core service divisions grid**

Content from PRD lines 21-63:
1. Cybersecurity & Risk Advisory (5 sub-services)
2. AI & Business Automation (5 sub-services)
3. Digital Transformation Services (5 sub-services)
4. Strategic PR & Media Visibility (5 sub-services + publication names)

Design:
- Section heading: "Core Service Divisions"
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each card: icon, title, description, bullet list of services
- `border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-[#B8860B]/30`
- Use lucide-react icons: Shield, Bot, Monitor, Newspaper
- "Learn More" link to `/services` per card
- No `uppercase`, no `tracking-tighter`
- Navy headings, slate body text

**Step 2: Commit**

```bash
git add components/serviceDivisions.tsx
git commit -m "feat: add core service divisions section with 4 service cards"
```

---

## Task 14: New Homepage Component — Industries Served

**Files:**
- Create: `components/industriesServed.tsx`

**Step 1: Create industries preview grid**

Content from PRD lines 65-84:
1. Banking & Financial Services
2. Technology & Startups
3. Healthcare & Hospitals
4. Education & Universities
5. Government & Public Sector
6. Real Estate & Infrastructure

Design:
- Section heading: "Industries We Serve"
- Subtitle: "Our experience spans multiple industries where trust, technology and reputation are critical."
- 3x2 grid on desktop, 2x3 tablet, 1x6 mobile
- Each card: icon, industry name, brief description
- `border border-slate-200 rounded-lg p-6 hover:shadow-md`
- Optional: dark navy `bg-[#0F2557]` section background for contrast
- "View All Industries" CTA linking to `/industries`

**Step 2: Commit**

```bash
git add components/industriesServed.tsx
git commit -m "feat: add industries served preview section with 6 industry cards"
```

---

## Task 15: New Homepage Component — Strategic Approach

**Files:**
- Create: `components/strategicApproach.tsx`

**Step 1: Create 4-step consulting approach**

Content from PRD lines 85-94:
1. Discovery & Assessment
2. Strategy Development
3. Implementation
4. Optimization

Design:
- Section heading: "Our Strategic Approach"
- Subtitle: "We follow a structured consulting model designed to deliver measurable impact."
- Horizontal 4-step layout on desktop, vertical on mobile
- Numbered circles (1, 2, 3, 4) with connecting lines/arrows
- Each step: number, title, description, bullet details
- Use lucide-react icons: Search, Target, Wrench, TrendingUp
- Navy step numbers, slate descriptions
- `bg-slate-50 rounded-lg p-6` cards
- No `uppercase`

**Step 2: Commit**

```bash
git add components/strategicApproach.tsx
git commit -m "feat: add strategic approach section with 4-step consulting flow"
```

---

## Task 16: New Homepage Component — Why Choose Us

**Files:**
- Create: `components/whyChooseUs.tsx`

**Step 1: Create why organizations choose us section**

Content from PRD lines 96-108:
1. Integrated Expertise
2. Strategic Advisory Approach
3. Industry Experience
4. Results-Oriented Execution

Design:
- Section heading: "Why Organizations Choose Us"
- 2x2 grid on desktop, 1 column on mobile
- Each card: icon, title, description
- `border border-slate-200 rounded-lg p-8 hover:shadow-md`
- Optional dark navy section background for contrast
- Gold accent on icons or title underlines
- No `uppercase`, no corner brackets

**Step 2: Commit**

```bash
git add components/whyChooseUs.tsx
git commit -m "feat: add why choose us section with 4 differentiators"
```

---

## Task 17: New Homepage Component — Thought Leadership

**Files:**
- Create: `components/thoughtLeadership.tsx`

**Step 1: Create insights preview section**

Content from PRD lines 109-117:
- Section heading: "Insights & Industry Perspectives"
- Subtitle: "Stay informed with expert insights on technology, cybersecurity and strategic communications."
- 4 article preview cards:
  - Cybersecurity Risk Management
  - AI Automation for Business Growth
  - Personal Branding for Founders
  - Digital Transformation Strategies
- Each card: title, brief excerpt, topic tag
- "Read More" link to `/insights`

Design:
- White background
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- `border border-slate-200 rounded-lg p-6 hover:shadow-md` cards
- Topic tags with `bg-[#0F2557]/10 text-[#0F2557] rounded-full px-3 py-1 text-xs`

**Step 2: Commit**

```bash
git add components/thoughtLeadership.tsx
git commit -m "feat: add thought leadership preview section with insights cards"
```

---

## Task 18: Rewrite Component — Testimonials

**Files:**
- Modify: `components/testimonials.tsx`

**Step 1: Rewrite with corporate testimonial design**

- Replace placeholder text with professional testimonial structure
- Clean card: `bg-white border border-slate-200 rounded-lg p-8 shadow-sm`
- Quote mark icon, testimonial text, attribution
- Navy text, gold accent line
- Remove `uppercase`, `tracking-tighter`
- Can keep placeholder until real testimonials are available, but style it professionally

**Step 2: Commit**

```bash
git add components/testimonials.tsx
git commit -m "style: rewrite testimonials section with corporate card design"
```

---

## Task 19: Rewrite Component — Clients/Credibility

**Files:**
- Modify: `components/clients.tsx`

**Step 1: Rewrite as credibility section**

- Change heading from "TRUSTED BY TEAMS" to "Our Clients & Partners"
- Replace industry icons with a professional credibility layout
- Light background, subtle borders
- Remove `uppercase`
- Keep 6 items as industry categories but with corporate card styling
- `border border-slate-200 rounded-lg hover:shadow-md` cards
- Remove `bg-[#09090B]` → white bg
- Text: navy headings, slate descriptions

**Step 2: Commit**

```bash
git add components/clients.tsx
git commit -m "style: rewrite clients section as credibility partners grid"
```

---

## Task 20: Assemble Homepage

**Files:**
- Modify: `app/page.tsx`

**Step 1: Reassemble homepage with new components**

```tsx
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { StatsMarquee } from "@/components/statsMarquee"
import { AuthoritySection } from "@/components/authoritySection"
import { ServiceDivisions } from "@/components/serviceDivisions"
import { IndustriesServed } from "@/components/industriesServed"
import { StrategicApproach } from "@/components/strategicApproach"
import { WhyChooseUs } from "@/components/whyChooseUs"
import { ThoughtLeadership } from "@/components/thoughtLeadership"
import { CtaSection } from "@/components/cta"
import { TestimonialsSection } from "@/components/testimonials"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StickyCta } from "@/components/stickyCta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsMarquee />
      <AuthoritySection />
      <ServiceDivisions />
      <IndustriesServed />
      <StrategicApproach />
      <WhyChooseUs />
      <ThoughtLeadership />
      <CtaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <StickyCta />
    </main>
  )
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds. Fix any import errors.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble homepage with new UPNexa sections"
```

---

## Task 21: About Page Rewrite

**Files:**
- Modify: `app/about/page.tsx`

**Step 1: Complete rewrite with PRD About content**

Content from PRD lines 170-224:
- Hero: "About UPNexa" heading
- Section 1: "Who We Are" (full paragraph from PRD)
- Section 2: "Our Vision" (dark navy contrast section)
- Section 3: "Our Mission"
- Section 4: "Why Choose Us" (4 reasons with descriptions)
- Section 5: "Our Commitment to Uttar Pradesh"

Remove all QenixLabs content:
- Remove specialist network section
- Remove "Currently Building" banner
- Remove "Currently Available" status
- Remove LinkedIn CTA to specific person

Design:
- White backgrounds with navy contrast sections
- `text-[#0F2557]` headings, `text-slate-600` body
- Remove all `uppercase`, `tracking-tighter`
- `border-slate-200 rounded-lg` cards
- Professional spacing and typography
- Keep ContactSection and Footer at bottom

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: rewrite about page with UPNexa vision, mission, and UP commitment"
```

---

## Task 22: Services Page Rewrite

**Files:**
- Modify: `app/services/page.tsx`

**Step 1: Complete rewrite with 7 service categories from PRD**

Content from PRD lines 288-419:
1. Digital Transformation Services (3 sub-categories × 5 services each)
2. AI Automation for Businesses (3 sub-categories × 5 services each)
3. Cybersecurity Services (3 sub-categories × 3-5 services each)
4. Digital Marketing & Growth (3 sub-categories × 5 services each)
5. PR & Media Brand Building (3 sub-categories × 4 services each)
6. Skill Development & Training (3 sub-categories × 4-5 services each)
7. MSME & ODOP Digital Enablement (3 sub-categories × 4 services each)

Design:
- Hero section with "Our Services" heading
- Each service category as a full-width section
- Sub-categories as expandable/collapsible cards or nested grid
- Use lucide-react icons per category
- Light background with alternating `bg-slate-50` sections
- Navy headings, slate body text
- CTA: "Book Consultation" button
- Remove `bg-[#09090B]`, remove `uppercase`

**Step 2: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: rewrite services page with 7 service categories from PRD"
```

---

## Task 23: New Page — Industries

**Files:**
- Create: `app/industries/page.tsx`

**Step 1: Create industries page with 6 detailed industry sections**

Content from PRD lines 421-529:
- Hero: "Industries We Serve"
- Intro: "Delivering Strategic Solutions Across Diverse Industries"
- 6 industry sections with full descriptions and key services:
  1. Banking & Financial Services
  2. Government & Public Sector
  3. Education & Academic Institutions
  4. Startups & Technology Companies
  5. Small & Medium Enterprises (SMEs)
  6. Regional Enterprises & Traditional Industries
- "Our Approach" section at bottom (3 principles)

Design:
- Navbar + Footer (same as other pages)
- White bg with navy headings
- Each industry: title, description paragraph, key services bullet list
- `border-b border-slate-200` between sections
- Cards for key services within each industry
- CTA at bottom: "Discuss Your Industry Needs"

**Step 2: Commit**

```bash
git add app/industries/page.tsx
git commit -m "feat: add industries page with 6 detailed industry sections"
```

---

## Task 24: New Page — Regional Impact

**Files:**
- Create: `app/regional-impact/page.tsx`

**Step 1: Create regional impact page**

Content from PRD lines 226-286:
- Hero: "Regional Impact & Development"
- Subtitle: "Supporting Innovation, Skills and Entrepreneurship in Uttar Pradesh"
- Section 1: "Empowering Local Industries" (ODOP alignment, 4 initiatives)
- Section 2: "Skill Development & Digital Literacy" (4 programs, university partnerships)
- Section 3: "Supporting Emerging Entrepreneurs" (4 advisory areas)
- Section 4: "Our Commitment to Regional Growth" (long-term vision)

Design:
- Navbar + Footer
- Optional dark navy hero section
- White bg content sections
- UP-themed styling
- CTA: "Partner With Us"

**Step 2: Commit**

```bash
git add app/regional-impact/page.tsx
git commit -m "feat: add regional impact page for Uttar Pradesh development focus"
```

---

## Task 25: New Page — Case Studies

**Files:**
- Create: `app/case-studies/page.tsx`

**Step 1: Create case studies page reusing existing project data**

- Import projects from `@/lib/data`
- Hero: "Case Studies"
- Subtitle: "Real projects. Measurable impact."
- Grid of project cards using existing `projects` array
- Each card: title, subtitle, metrics, tech stack, category badge
- Filter buttons: All, Shipped, Capability
- Links to `/projects/[id]` for detail pages
- Corporate card design: `border border-slate-200 rounded-lg hover:shadow-md`

**Step 2: Commit**

```bash
git add app/case-studies/page.tsx
git commit -m "feat: add case studies page reusing existing project data"
```

---

## Task 26: New Page — Insights

**Files:**
- Create: `app/insights/page.tsx`

**Step 1: Create insights/blog page**

Content from PRD lines 109-117:
- Hero: "Insights & Industry Perspectives"
- Subtitle: "Stay informed with expert insights on technology, cybersecurity and strategic communications."
- 4 placeholder article cards:
  1. "Cybersecurity Risk Management: A Guide for Modern Organizations"
  2. "How AI Automation is Reshaping Business Operations"
  3. "Personal Branding for Founders: Building Authority in the Digital Age"
  4. "Digital Transformation Strategies for Regional Enterprises"
- Category filter: All, Cybersecurity, AI, PR & Media, Digital Transformation
- Corporate card design

**Step 2: Commit**

```bash
git add app/insights/page.tsx
git commit -m "feat: add insights page with placeholder thought leadership articles"
```

---

## Task 27: New Page — Contact

**Files:**
- Create: `app/contact/page.tsx`

**Step 1: Create dedicated contact page**

Content from PRD lines 127-133:
- Hero: "Connect With Our Team"
- Two-column layout:
  - Left: Full contact form (name, email, phone, company, service interest dropdown, message)
  - Right: Office addresses, phone, email, WhatsApp
- Mumbai Office details
- Uttar Pradesh Office details

Design:
- Navbar + Footer
- White background
- Corporate form styling (bordered inputs, rounded corners)
- Office cards with icons
- Submit button: `bg-[#0F2557] text-white rounded-md`

**Step 2: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add dedicated contact page with form and dual office addresses"
```

---

## Task 28: Update Project Detail Page

**Files:**
- Modify: `app/projects/[id]/page.tsx`

**Step 1: Update styling to match corporate theme**

Systematic color/style replacements:
- `bg-[#09090B]` → `bg-white` or remove
- `text-[#FAFAFA]` → `text-[#0F2557]`
- `text-[#A1A1AA]` → `text-slate-600`
- `border-[#3F3F46]` → `border-slate-200`
- `bg-[#18181B]` → `bg-slate-50`
- `text-primary` context-dependent (navy or gold depending on usage)
- `bg-primary` → `bg-[#0F2557]` for buttons
- Back link: point to `/case-studies` instead of `/work`
- Remove `uppercase` from labels

**Step 2: Commit**

```bash
git add app/projects/[id]/page.tsx
git commit -m "style: update project detail page with corporate theme"
```

---

## Task 29: Update Contact API

**Files:**
- Modify: `app/api/contact/route.ts`

**Step 1: Update email branding**

- `from`: "UPNexa Contact Form <noreply@upnexa.com>"
- `to`: ["info@upnexa.com"]
- Email template header gradient: `#0F2557` to `#1E3A7B` (navy)
- Label color: `#0F2557` (navy)
- Border-left accent: `#B8860B` (gold)
- Footer: "This email was sent from the UPNexa contact form"

**Step 2: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "chore: update contact API email branding to UPNexa"
```

---

## Task 30: Delete Obsolete Pages

**Files:**
- Delete: `app/pricing/page.tsx`
- Delete: `app/security/page.tsx`
- Delete: `app/approach/page.tsx`
- Delete: `app/work/page.tsx`

**Step 1: Delete obsolete page files**

```bash
rm -rf app/pricing app/security app/approach app/work
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds (no remaining imports of deleted pages)

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove obsolete pages (pricing, security, approach, work)"
```

---

## Task 31: Delete Obsolete Components

**Files:**
- Delete: `components/pricing.tsx`
- Delete: `components/painPoints.tsx`
- Delete: `components/companyInfo.tsx`
- Delete: `components/guarantee.tsx`
- Delete: `components/clientPortal.tsx`
- Delete: `components/founder.tsx`
- Delete: `components/team.tsx`
- Delete: `components/services.tsx`
- Delete: `components/workPreview.tsx`
- Delete: `components/caseStudies.tsx`
- Delete: `components/servicesOverview.tsx` (replaced by serviceDivisions)
- Delete: `components/process.tsx` (replaced by strategicApproach)
- Delete: `components/whyUs.tsx` (replaced by whyChooseUs)

**Step 1: Delete obsolete component files**

```bash
rm -f components/pricing.tsx components/painPoints.tsx components/companyInfo.tsx components/guarantee.tsx components/clientPortal.tsx components/founder.tsx components/team.tsx components/services.tsx components/workPreview.tsx components/caseStudies.tsx components/servicesOverview.tsx components/process.tsx components/whyUs.tsx
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove obsolete QenixLabs components"
```

---

## Task 32: Final Build Verification & Polish

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Fix any remaining issues**

If build fails, fix import errors, type errors, or missing references.

**Step 3: Visual spot-check**

Run: `npm run dev`
Check:
- Homepage renders with navy hero, gold stats, white content sections
- Navbar shows new links, "Book Consultation" CTA
- Footer shows dark navy background
- Sticky CTA and WhatsApp buttons appear on scroll
- All page routes work: /about, /services, /industries, /regional-impact, /case-studies, /insights, /contact
- Old routes return 404: /pricing, /security, /approach, /work
- Project detail pages work: /projects/[id]

**Step 4: Final commit if any fixes**

```bash
git add -A
git commit -m "fix: final polish and build verification"
```

---

## Dependency Graph

```
Task 1 (globals.css) ──┐
Task 2 (layout.tsx)  ──┤── Task 5-10 (core components) ──┐
Task 3 (data.ts)     ──┤                                  ├── Task 20 (assemble homepage)
Task 4 (sitemap.ts)  ──┘                                  │
                                                          ├── Task 21 (about page)
Task 11 (stickyCta)  ─────────────────────────────────────┤
Task 12-19 (new homepage components) ──────────────────────┤
                                                          ├── Task 22 (services page)
                                                          ├── Task 23-27 (new pages)
                                                          ├── Task 28 (project detail)
                                                          ├── Task 29 (API update)
                                                          ├── Task 30-31 (delete obsolete)
                                                          └── Task 32 (final verification)
```
