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
  before?: string
  after?: string
}

export type PricingPackage = {
  name: string
  price: number
  timeline: string
  tagline: string
  description: string
}

export const PAGE_SEO = {
  home: {
    title: 'Your website should win trust — not lose customers.',
    description:
      'I design and build modern websites for small businesses that look credible, load fast, and help turn visitors into leads.',
    path: '/',
    ogImage: '/og/default.jpg',
  },
  services: {
    title: 'Websites built to make your business look credible online.',
    description:
      'From branding and design to development, launch, and support — everything is handled in one place.',
    path: '/services',
    ogImage: '/og/services.jpg',
  },
  projects: {
    title: 'A few businesses I’ve helped improve online.',
    description:
      'Real projects built to increase trust, improve design, and support growth.',
    path: '/projects',
    ogImage: '/og/projects.jpg',
  },
  apnaQarz: {
    title: 'Apna Qarz Case Study: Finance Advisory Website & Lead Generation',
    description: 'Full platform, admin dashboard, 1,000+ leads in month one.',
    path: '/projects/apna-qarz',
    ogImage: '/og/apna-qarz.jpg',
  },
  about: {
    title:
      'I build websites that help small businesses look more established online.',
    description:
      'I’m Yasir — a full-stack developer focused on modern, high-trust websites for small businesses.',
    path: '/about',
    ogImage: '/og/about.jpg',
  },
  contact: {
    title: 'Let’s talk about your website.',
    description:
      'Book a free 30-minute call and I’ll help you figure out the best next step.',
    path: '/contact',
    ogImage: '/og/contact.jpg',
  },
} satisfies Record<string, PageSeoConfig>

export const PAGE_SUMMARIES = {
  home: 'I design and build modern websites for small businesses that look credible, load fast, and help turn visitors into leads.',
  services:
    'From branding and design to development, launch, and support — everything is handled in one place.',
  projects:
    'A few businesses I’ve helped improve online. Real projects built to increase trust, improve design, and support growth.',
  apnaQarz:
    'From no website to a full platform with 1,000+ leads in the first month.',
  about:
    'I build websites that help small businesses look more established online.',
  contact:
    'Book a free 30-minute call and I’ll help you figure out the best next step.',
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Apna Qarz',
    slug: 'apna-qarz',
    path: '/projects/apna-qarz',
    image: '/images/projects/apna-qarz-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Apna Qarz website',
    shortDescription:
      'Complete digital platform built from scratch. 1,000+ targeted leads generated in month one.',
    projectType: 'Full-Stack · Done-for-You',
    before:
      'Zero digital footprint. No brand identity. No automated lead capture. Total reliance on manual outreach.',
    after:
      'A blazing fast custom platform with a secure admin dashboard, resulting in 1,000+ high-intent leads generated in 30 days.',
  },
  {
    name: 'Prime Tools Provider',
    slug: 'prime-tools-provider',
    path: '/projects#prime-tools-provider',
    image: '/images/projects/prime-tools-provider-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Prime Tools Provider website',
    shortDescription:
      'Revamped an outdated, low-trust site into a category-leading digital storefront.',
    projectType: 'Marketing Site',
    before: 'Outdated and untrustworthy site.',
    after: 'Cleaner, stronger, more premium online presence.',
  },
  {
    name: 'Ghulam Seeds',
    slug: 'ghulam-seeds',
    path: '/projects#ghulam-seeds',
    image: '/images/projects/ghulam-seeds-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Ghulam Seeds website',
    shortDescription:
      'Replaced an invisible, underperforming site with a lead-generating engine.',
    projectType: 'Marketing Site',
    before: 'Old site with no inbound leads.',
    after: 'Modern website with more traffic and weekly inquiries.',
  },
]

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Starter',
    price: 497,
    timeline: '~1 week',
    tagline: 'Launch your professional presence fast.',
    description:
      'A simple, professional 3–4 page site for businesses that need to get online fast.',
  },
  {
    name: 'Standard',
    price: 997,
    timeline: '~2 weeks',
    tagline: 'Turn your website into an automated lead machine.',
    description:
      'A 7–10 page website with trust-building design, lead capture, analytics, Search Console, and on-page SEO.',
  },
  {
    name: 'Premium',
    price: 2997,
    timeline: '~3 weeks',
    tagline: 'Dominate your market with a powerful custom platform.',
    description:
      'Everything in Standard plus logo, brand identity, custom features, backend systems, admin dashboards, and priority delivery.',
  },
]

export const SERVICES_FAQS: FaqItem[] = [
  {
    question: 'How completely hands-off is this for me?',
    answer:
      'Very. Give me your goals during our call, and I handle the design, code, and launch.',
  },
  {
    question: 'Do I own my website and domain?',
    answer:
      '100%. You maintain total ownership and admin access to everything we build.',
  },
  {
    question: 'Is my current site hurting my business?',
    answer:
      "If it's slow, outdated, or confusing, yes. A complete redesign is the fastest way to fix that.",
  },
  {
    question: 'I hate writing copy. Will you do it?',
    answer:
      'Absolutely. I’ll write clear, high-converting copy that sounds like you.',
  },
  {
    question: 'What happens if something breaks next month?',
    answer:
      'Every package includes an initial support window, and ongoing support retainers are always available.',
  },
]

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'What actually happens on this free call?',
    answer:
      'I listen to your business goals and map out precisely what your website needs to help you reach them. No hard pitches.',
  },
  {
    question: 'Do I need to prep documentation or specs?',
    answer: 'None. Just show up knowing who your best customers are.',
  },
  {
    question: 'I’m not tech-savvy at all. Is that an issue?',
    answer: "Not even slightly. That's exactly why you hire me.",
  },
  {
    question: 'Is a quick WhatsApp message okay instead of a call?',
    answer: 'Absolutely. My WhatsApp is always open for quick questions.',
  },
]
