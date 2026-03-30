# NEXT.JS SEO + AI SEO IMPLEMENTATION FILE

## Project: Yasir Khan Website

## Goal: Complete SEO, AEO, GEO, LLM-search readiness, semantic SEO, topical authority foundation

## Target stack: Next.js App Router + TypeScript + Tailwind CSS

---

# 0) HOW THE AI AGENT SHOULD USE THIS FILE

This file is the implementation source of truth for SEO.

The AI agent must:

1. keep the existing brand voice and page copy
2. preserve the current page URLs
3. implement all metadata, schema, sitemap, robots, internal-link, and semantic HTML improvements
4. add answer-first summary blocks near the top of each page
5. add visible breadcrumbs on non-home pages
6. avoid inventing any business details not present in the source content
7. replace all placeholder values before final deploy

This guide is written for a project using:

- `app/` directory
- TypeScript
- App Router
- existing marketing pages already built or about to be built

If the project uses `src/`, mirror the same structure under `src/`.

If the project does not use the `@/` alias, convert imports to relative paths.

---

# 1) REPLACE THESE PLACEHOLDERS FIRST

Before implementing anything, replace these values:

- `https://www.example.com` → final production domain
- `/logo.png` → real logo asset path
- `/og/default.jpg` → real default OG image
- `/images/yasir-khan.jpg` → real founder photo
- `/images/projects/apna-qarz-homepage.jpg` → real project screenshot
- `/images/projects/prime-tools-provider-homepage.jpg` → real project screenshot
- `/images/projects/ghulam-seeds-homepage.jpg` → real project screenshot

Also create:

- `.env.local`
- required image assets in `public/`

---

# 2) FINAL FILE TREE

Use this structure:

```txt
app/
├─ about/
│  └─ page.tsx
├─ contact/
│  └─ page.tsx
├─ projects/
│  ├─ apna-qarz/
│  │  └─ page.tsx
│  └─ page.tsx
├─ services/
│  └─ page.tsx
├─ layout.tsx
├─ page.tsx
├─ robots.ts
├─ sitemap.ts
└─ not-found.tsx

components/
└─ seo/
   ├─ answer-first-block.tsx
   ├─ breadcrumbs.tsx
   └─ json-ld.tsx

lib/
├─ seo.ts
├─ site-config.ts
├─ site-data.ts
└─ schema.ts

public/
├─ logo.png
├─ og/
│  ├─ default.jpg
│  ├─ services.jpg
│  ├─ projects.jpg
│  ├─ apna-qarz.jpg
│  ├─ about.jpg
│  └─ contact.jpg
└─ images/
   ├─ yasir-khan.jpg
   └─ projects/
      ├─ apna-qarz-homepage.jpg
      ├─ prime-tools-provider-homepage.jpg
      └─ ghulam-seeds-homepage.jpg

.env.local
```

---

# 3) ENVIRONMENT VARIABLES

## File: `.env.local`

```env
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

> Important: this must be the final canonical production domain.  
> Example: `https://yasirkhan.dev`

---

# 4) CREATE GLOBAL SITE CONFIG

## File: `lib/site-config.ts`

```ts
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'
).replace(/\/$/, '')

export const SITE_NAME = 'Yasir Khan'
export const SITE_TITLE_DEFAULT = 'Yasir Khan'
export const SITE_DESCRIPTION =
  'Yasir Khan builds complete websites for small businesses — branding, design, development, hosting, SEO setup, and post-launch support handled by one person.'

export const SITE_LANGUAGE = 'en-US'
export const SITE_LOCALE = 'en_US'

export const LOGO_PATH = '/logo.png'
export const DEFAULT_OG_IMAGE = '/og/default.jpg'
export const PERSON_IMAGE_PATH = '/images/yasir-khan.jpg'

export const CONTACT = {
  email: 'itsyasirkhan.dev@gmail.com',
  whatsapp: 'https://wa.me/923014545482',
  linkedin: 'https://linkedin.com/in/connectyasir',
  calendar: 'https://cal.com/connectyasir/30min',
}

export const AVAILABILITY = {
  badge: '🟢 Taking on 2 new projects',
  footer: '🟢 Taking on 2 new projects',
  contact: '🟢 Currently taking on 2 new projects',
}

export const BUSINESS_FACTS = {
  yearsExperience: '3+ years',
  projectsLaunched: '3 businesses launched',
  leadsGenerated: '1,000+ leads generated',
}

export const DEFAULT_LAST_MODIFIED = '2026-03-30'
```

---

# 5) CREATE CENTRALIZED SEO DATA

## File: `lib/site-data.ts`

```ts
export type PageSeoConfig = {
  title: string
  description: string
  path: string
  ogImage?: string
}

export type BreadcrumbItem = {
  name: string
  path: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ProjectItem = {
  name: string
  slug: string
  path: string
  image: string
  imageAlt: string
  shortDescription: string
  projectType: string
}

export type PricingPackage = {
  name: string
  price: number
  timeline: string
  tagline: string
  description: string
}

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    title: 'Small Business Website Design & Development',
    description:
      'Yasir Khan builds complete websites for small businesses — branding, design, development, hosting, and SEO handled by one person. Launch in weeks, not months.',
    path: '/',
    ogImage: '/og/default.jpg',
  },
  services: {
    title: 'Website Design & Development Pricing for Small Businesses',
    description:
      'See website packages, pricing, timelines, and what’s included. Branding, design, development, hosting, SEO, and post-launch support for small businesses.',
    path: '/services',
    ogImage: '/og/services.jpg',
  },
  projects: {
    title: 'Web Design Case Studies for Small Businesses',
    description:
      'Explore live website projects and before-and-after results from Yasir Khan, including Apna Qarz, Prime Tools Provider, and Ghulam Seeds.',
    path: '/projects',
    ogImage: '/og/projects.jpg',
  },
  apnaQarz: {
    title: 'Apna Qarz Case Study: Finance Advisory Website & Lead Generation',
    description:
      'See how Yasir Khan built Apna Qarz from zero to a full finance advisory web app with branding, admin dashboard, and 1,000+ leads in the first month.',
    path: '/projects/apna-qarz',
    ogImage: '/og/apna-qarz.jpg',
  },
  about: {
    title: 'About Yasir Khan',
    description:
      'Meet Yasir Khan, a freelance web designer and developer who builds custom websites for small businesses without agency middlemen.',
    path: '/about',
    ogImage: '/og/about.jpg',
  },
  contact: {
    title: 'Contact Yasir Khan | Book a Free Website Strategy Call',
    description:
      'Book a free 30-minute call with Yasir Khan to discuss your website project, timeline, pricing, and best-fit package.',
    path: '/contact',
    ogImage: '/og/contact.jpg',
  },
}

export const PAGE_SUMMARIES = {
  home: 'Yasir Khan designs, builds, and launches complete websites for small businesses. He handles branding, website design, development, hosting setup, SEO setup, and post-launch support so businesses can go live fast without hiring an agency.',
  services:
    'Yasir Khan offers fixed-price website packages for small businesses, from fast starter sites to full branding, custom features, backend systems, and launch support. Every package includes direct communication, clear timelines, and post-launch support.',
  projects:
    'This page showcases real client website projects by Yasir Khan, including full builds and redesigns for small businesses. Each project shows what existed before, what was built, and what changed after launch.',
  apnaQarz:
    'Yasir Khan built Apna Qarz from scratch as a complete finance advisory website and web app, including branding, content, frontend, backend, admin dashboard, hosting, and SEO setup. The result was a professional launch-ready system built in two weeks.',
  about:
    'Yasir Khan is a freelance website designer and developer focused on small business websites. He works directly with clients and handles branding, design, development, hosting setup, SEO setup, and post-launch support himself.',
  contact:
    'Book a free 30-minute call with Yasir Khan to discuss your business, website goals, recommended package, timeline, and pricing. If you prefer, you can also message directly on WhatsApp or email first.',
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Apna Qarz',
    slug: 'apna-qarz',
    path: '/projects/apna-qarz',
    image: '/images/projects/apna-qarz-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Apna Qarz website',
    shortDescription:
      'Full website and web app build with brand identity, admin dashboard, and 1,000+ leads in the first month.',
    projectType: 'Full-Stack · Done-for-You',
  },
  {
    name: 'Prime Tools Provider',
    slug: 'prime-tools-provider',
    path: '/projects#prime-tools-provider',
    image: '/images/projects/prime-tools-provider-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Prime Tools Provider website',
    shortDescription:
      'Premium marketing site redesign that improved trust and conversions.',
    projectType: 'Marketing Site',
  },
  {
    name: 'Ghulam Seeds',
    slug: 'ghulam-seeds',
    path: '/projects#ghulam-seeds',
    image: '/images/projects/ghulam-seeds-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Ghulam Seeds website',
    shortDescription:
      'Modern rebuild that increased traffic and led to consistent weekly inquiries.',
    projectType: 'Marketing Site',
  },
]

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Starter',
    price: 497,
    timeline: '~1 week',
    tagline: 'Go from zero to live in 7 days.',
    description:
      'A clean, professional 3–4 page site for businesses that need to get online fast.',
  },
  {
    name: 'Standard',
    price: 997,
    timeline: '~2 weeks',
    tagline: 'A complete website built to bring you customers.',
    description:
      'A 7–10 page website with trust-building design, lead capture, analytics, Search Console, and on-page SEO.',
  },
  {
    name: 'Premium',
    price: 2997,
    timeline: '~3 weeks',
    tagline: 'Your entire digital presence — built, branded, and launched.',
    description:
      'Everything in Standard plus logo, brand identity, custom features, backend systems, admin dashboards, and priority delivery.',
  },
]

export const SERVICES_FAQS: FaqItem[] = [
  {
    question: 'How long until my site is live?',
    answer:
      '1 to 3 weeks. Starter sites launch in about 7 days. Premium projects with branding and custom features take up to 3 weeks. You’ll get a clear timeline on our first call — and I stick to it.',
  },
  {
    question: 'I only need a simple landing page. Which plan?',
    answer:
      'Starter. 3–4 pages. Clean design. Live in a week. $497. If you’re not sure it’s enough, book a call and I’ll tell you honestly — even if it means you spend less.',
  },
  {
    question: 'Do I own the website and code?',
    answer:
      'Yes. Everything — the design, the code, the content, the logo. It’s all yours. I hand it over. No licensing fees. No lock-in.',
  },
  {
    question: 'Do you write the website content too?',
    answer:
      'Every word on every page. You review it, give feedback, and we finalize together. You don’t need to show up with a Google Doc full of marketing copy.',
  },
  {
    question: 'I already have a site. Can you redo it?',
    answer:
      'That’s most of my work. Clients come to me with a site that looks outdated or isn’t bringing in leads. I rebuild it from scratch — focused on trust and conversions. The difference between before and after is usually night and day.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every package includes post-launch support — 14 to 60 days depending on the plan. After that, we can set up ongoing support if you need it. You’re not on your own.',
  },
  {
    question: 'What if I need something custom that’s not in any package?',
    answer:
      'Book a call. Tell me what you need. I’ll give you an honest recommendation — even if the honest answer is “I’m not the right person for this.”',
  },
  {
    question: 'How does payment work?',
    answer:
      '50% upfront to start. 50% before I hit publish. No surprise invoices. No hourly billing. You know the full cost before a single pixel gets designed.',
  },
  {
    question: 'What technology do you use?',
    answer:
      'Next.js, React, and Tailwind CSS — the same technology stack behind Netflix, Twitch, and Nike. In plain terms: your site loads fast, ranks well on Google, and handles traffic without breaking.',
  },
]

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'What happens on the call?',
    answer:
      'You tell me about your business. I ask questions. Then I tell you exactly what I’d build, which package fits, and how long it’d take. That’s it. No slides. No pitch deck.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer:
      'Nope. Just know what your business does and what you’re hoping a website will do for you. I’ll guide the rest of the conversation.',
  },
  {
    question: 'Is the call actually free?',
    answer:
      'Completely free. 30 minutes. If I’m not the right fit for your project, I’ll tell you — and point you somewhere better if I can.',
  },
  {
    question: 'I’m not sure what I need yet — is that okay?',
    answer:
      'That’s literally what the call is for. Most people who book aren’t sure. They know they need “something.” By the end of 30 minutes, you’ll know exactly what that something is.',
  },
  {
    question: 'Can I just WhatsApp you instead?',
    answer:
      'Absolutely. Message me anything — a question, a project idea, a screenshot of your current site. I’ll reply within a few hours during working hours.',
  },
]
```

---

# 6) CREATE METADATA HELPERS

## File: `lib/seo.ts`

```ts
import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site-config'
import type { PageSeoConfig } from '@/lib/site-data'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return new URL(path, `${SITE_URL}/`).toString()
}

export function buildFullTitle(title: string) {
  return `${title} | ${SITE_NAME}`
}

export function createMetadata(config: PageSeoConfig): Metadata {
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE
  const fullTitle = buildFullTitle(config.title)

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: config.path,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      title: fullTitle,
      description: config.description,
      url: config.path,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: [ogImage],
    },
  }
}
```

---

# 7) CREATE JSON-LD COMPONENT

## File: `components/seo/json-ld.tsx`

```tsx
type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
```

---

# 8) CREATE BREADCRUMBS COMPONENT

## File: `components/seo/breadcrumbs.tsx`

```tsx
import Link from 'next/link'
import type { BreadcrumbItem } from '@/lib/site-data'

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-zinc-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-zinc-900">
                  {item.name}
                </Link>
              )}

              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
```

---

# 9) CREATE ANSWER-FIRST BLOCK COMPONENT

## File: `components/seo/answer-first-block.tsx`

```tsx
type AnswerFirstBlockProps = {
  heading: string
  summary: string
}

export function AnswerFirstBlock({ heading, summary }: AnswerFirstBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8"
    >
      <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
        Quick answer
      </p>
      <h2
        id="quick-answer-heading"
        className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900"
      >
        {heading}
      </h2>
      <p className="mt-3 text-base leading-7 text-zinc-700">{summary}</p>
    </section>
  )
}
```

---

# 10) CREATE STRUCTURED DATA HELPERS

## File: `lib/schema.ts`

```ts
import {
  CONTACT,
  DEFAULT_OG_IMAGE,
  LOGO_PATH,
  PERSON_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site-config'
import {
  CONTACT_FAQS,
  PAGE_SEO,
  PRICING_PACKAGES,
  PROJECTS,
  SERVICES_FAQS,
  type BreadcrumbItem,
  type FaqItem,
} from '@/lib/site-data'
import { absoluteUrl } from '@/lib/seo'

type SchemaNode = Record<string, unknown>

export function schemaGraph(nodes: SchemaNode[]): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}

export function getWebsiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  }
}

export function getOrganizationNode(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: CONTACT.email,
        url: CONTACT.whatsapp,
      },
    ],
  }
}

export function getPersonNode(): SchemaNode {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#person`,
    name: 'Yasir Khan',
    url: `${SITE_URL}/about`,
    image: absoluteUrl(PERSON_IMAGE_PATH),
    jobTitle: 'Freelance Web Designer and Developer',
    worksFor: {
      '@id': `${SITE_URL}/#organization`,
    },
    sameAs: [CONTACT.linkedin],
    email: CONTACT.email,
    knowsAbout: [
      'Website design',
      'Website development',
      'Small business websites',
      'Website redesign',
      'Branding',
      'Logo design',
      'SEO setup',
      'Hosting setup',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Convex',
      'Vercel',
    ],
  }
}

export function getBreadcrumbNode(items: BreadcrumbItem[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function getHomePageNode(): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#home`,
    url: absoluteUrl(PAGE_SEO.home.path),
    name: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}

export function getServicesPageNode(): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/services#webpage`,
    url: absoluteUrl(PAGE_SEO.services.path),
    name: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/services#service`,
    },
  }
}

export function getPrimaryServiceNode(): SchemaNode {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/services#service`,
    name: 'Website design and development for small businesses',
    serviceType:
      'Branding, logo design, website design, website development, hosting setup, SEO setup, and post-launch support',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Small business owners',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website packages',
      itemListElement: PRICING_PACKAGES.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: pkg.description,
        price: pkg.price,
        priceCurrency: 'USD',
        url: absoluteUrl('/services'),
      })),
    },
  }
}

export function getProjectsCollectionPageNode(): SchemaNode {
  return {
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/projects#collection`,
    url: absoluteUrl(PAGE_SEO.projects.path),
    name: PAGE_SEO.projects.title,
    description: PAGE_SEO.projects.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(project.path),
        name: project.name,
        description: project.shortDescription,
      })),
    },
  }
}

export function getApnaQarzCaseStudyPageNode(): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/projects/apna-qarz#webpage`,
    url: absoluteUrl(PAGE_SEO.apnaQarz.path),
    name: PAGE_SEO.apnaQarz.title,
    description: PAGE_SEO.apnaQarz.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: [
      {
        '@type': 'Organization',
        name: 'Apna Qarz',
        url: 'https://apnaqarz.com',
      },
      {
        '@type': 'Thing',
        name: 'Finance advisory website case study',
      },
    ],
  }
}

export function getAboutPageNode(): SchemaNode {
  return {
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    url: absoluteUrl(PAGE_SEO.about.path),
    name: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/about#person`,
    },
  }
}

export function getContactPageNode(): SchemaNode {
  return {
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    url: absoluteUrl(PAGE_SEO.contact.path),
    name: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}

export function getFaqNode(faqs: FaqItem[], id: string): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getServicesFaqNode(): SchemaNode {
  return getFaqNode(SERVICES_FAQS, `${SITE_URL}/services#faq`)
}

export function getContactFaqNode(): SchemaNode {
  return getFaqNode(CONTACT_FAQS, `${SITE_URL}/contact#faq`)
}
```

---

# 11) UPDATE ROOT LAYOUT

## File: `app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import './globals.css'

import { JsonLd } from '@/components/seo/json-ld'
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_URL,
} from '@/lib/site-config'
import { getOrganizationNode, getWebsiteNode, schemaGraph } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={schemaGraph([getWebsiteNode(), getOrganizationNode()])} />
        {children}
      </body>
    </html>
  )
}
```

---

# 12) ADD ROBOTS.TS

## File: `app/robots.ts`

```ts
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
```

---

# 13) ADD SITEMAP.TS

## File: `app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next'
import { DEFAULT_LAST_MODIFIED } from '@/lib/site-config'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(DEFAULT_LAST_MODIFIED)

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [absoluteUrl('/og/default.jpg')],
    },
    {
      url: absoluteUrl('/services'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [absoluteUrl('/og/services.jpg')],
    },
    {
      url: absoluteUrl('/projects'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [absoluteUrl('/og/projects.jpg')],
    },
    {
      url: absoluteUrl('/projects/apna-qarz'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        absoluteUrl('/og/apna-qarz.jpg'),
        absoluteUrl('/images/projects/apna-qarz-homepage.jpg'),
      ],
    },
    {
      url: absoluteUrl('/about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [absoluteUrl('/og/about.jpg')],
    },
    {
      url: absoluteUrl('/contact'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [absoluteUrl('/og/contact.jpg')],
    },
  ]
}
```

---

# 14) HOME PAGE SEO IMPLEMENTATION

## File: `app/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES } from '@/lib/site-data'
import { getHomePageNode, schemaGraph } from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.home)

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemaGraph([getHomePageNode()])} />

      <main>
        {/* KEEP your existing navbar globally in layout or page shell */}

        {/* EXISTING HERO SECTION GOES HERE */}

        <section className="mx-auto max-w-6xl px-6 py-10">
          <AnswerFirstBlock
            heading="What Yasir Khan does"
            summary={PAGE_SUMMARIES.home}
          />

          <div className="mt-6 text-sm text-zinc-700">
            <p>
              Looking for pricing? Visit the{' '}
              <Link
                href="/services"
                className="font-medium text-zinc-900 underline"
              >
                website design and development pricing page
              </Link>
              . Want proof? See the{' '}
              <Link
                href="/projects"
                className="font-medium text-zinc-900 underline"
              >
                web design case studies
              </Link>
              . Ready to talk?{' '}
              <Link
                href="/contact"
                className="font-medium text-zinc-900 underline"
              >
                Book a free website call
              </Link>
              .
            </p>
          </div>
        </section>

        {/* KEEP EXISTING SECTIONS BELOW IN THIS ORDER */}
        {/* 1. What You Get */}
        {/* 2. Featured Projects */}
        {/* 3. How It Works */}
        {/* 4. Testimonials */}
        {/* 5. Tech Stack */}
        {/* 6. Final CTA */}

        {/* IMPORTANT SEO NOTES FOR HOME:
            - keep only one H1 on the page
            - add descriptive alt text to the professional photo
            - add internal links to /services, /projects, /projects/apna-qarz, /about, /contact
            - ensure featured project cards use real <a> or <Link> elements
        */}
      </main>
    </>
  )
}
```

---

# 15) SERVICES PAGE SEO IMPLEMENTATION

## File: `app/services/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import {
  PAGE_SEO,
  PAGE_SUMMARIES,
  PRICING_PACKAGES,
  SERVICES_FAQS,
  type BreadcrumbItem,
} from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getPrimaryServiceNode,
  getServicesFaqNode,
  getServicesPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.services)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getServicesPageNode(),
          getPrimaryServiceNode(),
          getServicesFaqNode(),
        ])}
      />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* EXISTING PAGE HEADER GOES HERE */}

        <AnswerFirstBlock
          heading="Website packages, pricing, timelines, and support"
          summary={PAGE_SUMMARIES.services}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Quick pricing summary
          </h2>

          <ul className="mt-4 space-y-4">
            {PRICING_PACKAGES.map((pkg) => (
              <li
                key={pkg.name}
                className="rounded-xl border border-zinc-200 p-4"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-zinc-700">{pkg.tagline}</p>
                <p className="mt-2 text-zinc-900">
                  <strong>${pkg.price}</strong> · {pkg.timeline}
                </p>
                <p className="mt-2 text-sm text-zinc-700">{pkg.description}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Want examples before choosing a package? See the{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              website project portfolio
            </Link>{' '}
            or read the{' '}
            <Link
              href="/projects/apna-qarz"
              className="font-medium text-zinc-900 underline"
            >
              Apna Qarz case study
            </Link>
            .
          </p>
        </section>

        {/* KEEP EXISTING SECTIONS BELOW */}
        {/* 1. Services Breakdown */}
        {/* 2. Pricing Intro */}
        {/* 3. Starter / Standard / Premium */}
        {/* 4. Promise */}
        {/* 5. Capacity Note */}
        {/* 6. Process */}
        {/* 7. FAQ */}
        {/* 8. CTA */}

        {/* IMPORTANT:
            - render the visible FAQ content from SERVICES_FAQS if possible
            - if the FAQ UI is hardcoded elsewhere, text must match schema exactly
            - ensure one clear H1
            - keep package names, prices, and timelines visible in plain text
        */}
      </main>
    </>
  )
}
```

---

# 16) PROJECTS PAGE SEO IMPLEMENTATION

## File: `app/projects/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import {
  PAGE_SEO,
  PAGE_SUMMARIES,
  PROJECTS,
  type BreadcrumbItem,
} from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getProjectsCollectionPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.projects)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
]

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getProjectsCollectionPageNode(),
        ])}
      />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* EXISTING PAGE HEADER GOES HERE */}

        <AnswerFirstBlock
          heading="Real client websites and outcomes"
          summary={PAGE_SUMMARIES.projects}
        />

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="rounded-2xl border border-zinc-200 p-5"
            >
              <p className="text-sm font-medium text-emerald-700">
                {project.projectType}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                {project.name}
              </h2>
              <p className="mt-3 text-zinc-700">{project.shortDescription}</p>
              <Link
                href={project.path}
                className="mt-4 inline-flex text-sm font-medium text-zinc-900 underline"
              >
                {project.slug === 'apna-qarz'
                  ? 'Read the full case study'
                  : 'View project section'}
              </Link>
            </article>
          ))}
        </section>

        <div className="mt-8 text-sm text-zinc-700">
          <p>
            Need pricing before you browse? Go to the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website pricing page
            </Link>
            . Ready to start your own project?{' '}
            <Link
              href="/contact"
              className="font-medium text-zinc-900 underline"
            >
              Book a free call
            </Link>
            .
          </p>
        </div>

        {/* KEEP EXISTING CTA BLOCK BELOW */}
      </main>
    </>
  )
}
```

---

# 17) APNA QARZ CASE STUDY SEO IMPLEMENTATION

## File: `app/projects/apna-qarz/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getApnaQarzCaseStudyPageNode,
  getBreadcrumbNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.apnaQarz)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Apna Qarz', path: '/projects/apna-qarz' },
]

export default function ApnaQarzPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getApnaQarzCaseStudyPageNode(),
        ])}
      />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* EXISTING HERO GOES HERE */}

        <AnswerFirstBlock
          heading="What was built for Apna Qarz"
          summary={PAGE_SUMMARIES.apnaQarz}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Case study summary
          </h2>

          <dl className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-zinc-600">Client</dt>
              <dd className="mt-1 text-zinc-900">Rashid Bashir / Apna Qarz</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Timeline</dt>
              <dd className="mt-1 text-zinc-900">2 weeks</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Scope</dt>
              <dd className="mt-1 text-zinc-900">
                Logo, brand identity, design, development, backend, SEO,
                hosting, dashboard, content
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Result</dt>
              <dd className="mt-1 text-zinc-900">
                1,000+ form submissions in the first month
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-zinc-700">
            Want a site with similar strategic thinking behind it? Review the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website packages
            </Link>{' '}
            or{' '}
            <Link
              href="/contact"
              className="font-medium text-zinc-900 underline"
            >
              book a free call
            </Link>
            .
          </p>
        </section>

        {/* KEEP EXISTING CASE STUDY SECTIONS BELOW */}
        {/* 1. Overview */}
        {/* 2. Before / After */}
        {/* 3. The Challenge */}
        {/* 4. What I Delivered */}
        {/* 5. The Approach */}
        {/* 6. Tech Stack */}
        {/* 7. Screenshots */}
        {/* 8. Results */}
        {/* 9. Client Testimonial */}
        {/* 10. CTA */}

        {/* IMPORTANT:
            - keep all major metrics visible in plain text
            - keep the testimonial visible exactly as shown in the source content
            - add descriptive alt text to every case study screenshot
        */}
      </main>
    </>
  )
}
```

---

# 18) ABOUT PAGE SEO IMPLEMENTATION

## File: `app/about/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getAboutPageNode,
  getBreadcrumbNode,
  getPersonNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.about)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getAboutPageNode(),
          getPersonNode(),
        ])}
      />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* EXISTING ABOUT HERO GOES HERE */}

        <AnswerFirstBlock
          heading="Who Yasir Khan is and how he works"
          summary={PAGE_SUMMARIES.about}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What to expect
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
            <li>You talk directly to the person building your website.</li>
            <li>You see the price before the work starts.</li>
            <li>Most projects launch in 1–3 weeks.</li>
            <li>Every website is custom-built for the business.</li>
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Want to see proof before contacting Yasir? Browse the{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              project case studies
            </Link>
            . Want pricing first? See the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              service packages
            </Link>
            .
          </p>
        </section>

        {/* KEEP EXISTING SECTIONS BELOW */}
        {/* 1. How I Work */}
        {/* 2. Tech Stack */}
        {/* 3. Testimonials */}
        {/* 4. CTA */}
      </main>
    </>
  )
}
```

---

# 19) CONTACT PAGE SEO IMPLEMENTATION

## File: `app/contact/page.tsx`

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import {
  CONTACT_FAQS,
  PAGE_SEO,
  PAGE_SUMMARIES,
  type BreadcrumbItem,
} from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getContactFaqNode,
  getContactPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.contact)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getContactPageNode(),
          getContactFaqNode(),
        ])}
      />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* EXISTING PAGE HEADER GOES HERE */}

        <AnswerFirstBlock
          heading="How to start your project"
          summary={PAGE_SUMMARIES.contact}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Before you book
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-700">
            {CONTACT_FAQS.slice(0, 3).map((faq) => (
              <li key={faq.question}>
                <strong className="text-zinc-900">{faq.question}</strong>
                <p className="mt-1">{faq.answer}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Still comparing options? Review the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website pricing
            </Link>{' '}
            or browse{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              real client projects
            </Link>
            .
          </p>
        </section>

        {/* KEEP EXISTING CONTACT OPTIONS + MINI FAQ BELOW */}
        {/* IMPORTANT:
            - keep the booking embed crawl-safe by surrounding it with visible text context
            - keep email, WhatsApp, and LinkedIn links as real clickable anchors
            - if using target="_blank", also use rel="noopener noreferrer"
        */}
      </main>
    </>
  )
}
```

---

# 20) OPTIONAL NOT-FOUND PAGE

## File: `app/not-found.tsx`

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
        Page not found
      </h1>
      <p className="mt-4 text-zinc-700">
        The page you’re looking for doesn’t exist or may have moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="underline">
          Go home
        </Link>
        <Link href="/services" className="underline">
          View services
        </Link>
        <Link href="/projects" className="underline">
          View projects
        </Link>
        <Link href="/contact" className="underline">
          Contact Yasir
        </Link>
      </div>
    </main>
  )
}
```

---

# 21) IMAGE ALT TEXT RULES

Use descriptive alt text on all meaningful images.

## Founder photo

- `Professional photo of Yasir Khan`

## Project screenshots

- `Homepage screenshot of the Apna Qarz website`
- `Homepage screenshot of the Prime Tools Provider website`
- `Homepage screenshot of the Ghulam Seeds website`

## Case study screenshots

Examples:

- `Desktop screenshot of the Apna Qarz homepage`
- `Desktop screenshot of the Apna Qarz application form`
- `Desktop screenshot of the Apna Qarz admin dashboard`
- `Mobile screenshot of the Apna Qarz homepage`
- `Mobile screenshot of the Apna Qarz application form`
- `Close-up of the Apna Qarz logo`

Do not use:

- `image`
- `screenshot`
- `website`
- keyword-stuffed alt text like `best small business website design screenshot`

---

# 22) INTERNAL LINKING RULES

The AI agent must add or preserve these links:

## Home

Link to:

- `/services`
- `/projects`
- `/projects/apna-qarz`
- `/about`
- `/contact`

## Services

Link to:

- `/projects`
- `/projects/apna-qarz`
- `/contact`
- `/about`

## Projects

Link to:

- `/projects/apna-qarz`
- `/services`
- `/contact`

## Apna Qarz case study

Link to:

- `/projects`
- `/services`
- `/contact`

## About

Link to:

- `/services`
- `/projects`
- `/contact`

## Contact

Link to:

- `/services`
- `/projects`
- `/about`

## Preferred anchor text

Use anchors like:

- `website pricing`
- `website packages`
- `web design case studies`
- `Apna Qarz case study`
- `book a free call`
- `message on WhatsApp`
- `website redesign services`

Avoid weak anchors like:

- `click here`
- `read more`
- `learn more`

---

# 23) SEMANTIC HTML RULES

The AI agent must use semantic structure:

- page wrapper: `<main>`
- hero/page intro: `<header>`
- content blocks: `<section>`
- individual project cards: `<article>`
- navigation: `<nav>`
- FAQs: `<section>` with heading + list or accordion
- pricing comparisons: semantic lists or tables where appropriate
- metadata summary lists: `<dl>` for case study facts

Each page must have:

- exactly 1 H1
- logical H2/H3 hierarchy
- visible plain-text summary near the top
- visible CTA

---

# 24) FAQ SCHEMA RULES

Only add FAQ schema where the same questions and answers are visible on the page.

For this site:

- add FAQ schema to `/services`
- add FAQ schema to `/contact`

Do not add FAQ schema anywhere else unless there is a visible FAQ block.

If the visible FAQ content changes, update `lib/site-data.ts` first, then render the UI from that same data source.

---

# 25) AI SEO / AEO / GEO CONTENT RULES

The AI agent must make each page answer its main question fast.

## Home should answer:

Who is Yasir Khan and what does he do?

## Services should answer:

What does it cost, what’s included, and how long does it take?

## Projects should answer:

What work has he actually done?

## Apna Qarz should answer:

What was built, for whom, and what happened after launch?

## About should answer:

Who is Yasir and why trust him?

## Contact should answer:

How do I get in touch and what happens next?

To support LLM-driven search and answer engines:

- use concise fact statements
- keep key numbers visible in plain text
- use comparison blocks like before/after
- use lists for deliverables and features
- use direct language instead of vague marketing fluff
- repeat important entities consistently:
  - Yasir Khan
  - small businesses
  - website design
  - website development
  - branding
  - SEO setup
  - hosting
  - Apna Qarz
  - Prime Tools Provider
  - Ghulam Seeds

---

# 26) DO NOT DO THESE THINGS

Do not:

- invent an office address
- add LocalBusiness schema without a real public address
- make up service areas
- add fake review schema
- fake author dates
- duplicate H1s
- stuff keywords into metadata
- hide keyword blocks
- use non-clickable divs where real links should exist
- put important content only inside sliders with poor accessibility
- make the main CTA image-only

---

# 27) OPTIONAL FUTURE EXPANSIONS

These are phase-2 SEO improvements, not launch blockers.

Create these future pages only if they will have real custom copy:

- `/projects/prime-tools-provider`
- `/projects/ghulam-seeds`
- `/insights/how-much-does-a-small-business-website-cost`
- `/insights/signs-your-website-is-losing-customers`
- `/insights/landing-page-vs-full-website-for-small-business`
- `/insights/what-small-business-seo-setup-actually-includes`

Each future page should:

- have unique metadata
- include breadcrumbs
- include one answer-first summary block
- link back to `/services` and `/contact`

---

# 28) FINAL QA CHECKLIST

Before deployment, verify all of the following:

## Metadata

- [ ] every page has unique title
- [ ] every page has unique meta description
- [ ] every page has self-referencing canonical
- [ ] OG image loads
- [ ] Twitter image loads

## Indexation

- [ ] `/robots.txt` works
- [ ] `/sitemap.xml` works
- [ ] all core pages return 200
- [ ] there is no accidental `noindex`

## Schema

- [ ] JSON-LD outputs valid JSON
- [ ] breadcrumbs schema matches visible breadcrumbs
- [ ] FAQ schema matches visible FAQ text exactly
- [ ] organization/person/schema URLs use real production domain

## Content structure

- [ ] exactly one H1 per page
- [ ] answer-first block exists on each page
- [ ] internal links are present
- [ ] alt text is descriptive

## UX / conversion

- [ ] primary CTA visible near top
- [ ] WhatsApp CTA visible
- [ ] pricing visible on services page
- [ ] proof visible on projects and case study pages
- [ ] contact methods are clickable

## Technical

- [ ] build succeeds
- [ ] no broken imports
- [ ] no placeholder domain left
- [ ] no placeholder images left
- [ ] no dead internal links

---

# 29) DEPLOYMENT ORDER

The AI agent should implement in this order:

1. `.env.local`
2. `lib/site-config.ts`
3. `lib/site-data.ts`
4. `lib/seo.ts`
5. `components/seo/json-ld.tsx`
6. `components/seo/breadcrumbs.tsx`
7. `components/seo/answer-first-block.tsx`
8. `lib/schema.ts`
9. `app/layout.tsx`
10. `app/robots.ts`
11. `app/sitemap.ts`
12. `app/page.tsx`
13. `app/services/page.tsx`
14. `app/projects/page.tsx`
15. `app/projects/apna-qarz/page.tsx`
16. `app/about/page.tsx`
17. `app/contact/page.tsx`
18. `app/not-found.tsx`
19. image alt text pass
20. internal links pass
21. final QA

---

# 30) SHORT INSTRUCTION FOR THE AI AGENT

Implement all files exactly as defined in this document. Preserve the existing visual design and page copy, but add the SEO metadata, structured data, breadcrumbs, answer-first summaries, robots, sitemap, and internal links exactly as specified. Replace all placeholder URLs and image paths with production values before deploying.

---
