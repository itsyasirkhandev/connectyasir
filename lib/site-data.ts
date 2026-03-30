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
      'From no website to a full platform with 1,000+ leads in the first month.',
    projectType: 'Full-Stack · Done-for-You',
  },
  {
    name: 'Prime Tools Provider',
    slug: 'prime-tools-provider',
    path: '/projects#prime-tools-provider',
    image: '/images/projects/prime-tools-provider-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Prime Tools Provider website',
    shortDescription:
      'Upgraded an outdated site into a cleaner, more trustworthy business presence.',
    projectType: 'Marketing Site',
  },
  {
    name: 'Ghulam Seeds',
    slug: 'ghulam-seeds',
    path: '/projects#ghulam-seeds',
    image: '/images/projects/ghulam-seeds-homepage.jpg',
    imageAlt: 'Homepage screenshot of the Ghulam Seeds website',
    shortDescription:
      'Rebuilt an old website into a modern site that brought weekly inquiries.',
    projectType: 'Marketing Site',
  },
]

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Starter',
    price: 497,
    timeline: '~1 week',
    tagline: 'A simple, professional website — live fast.',
    description:
      'A simple, professional 3–4 page site for businesses that need to get online fast.',
  },
  {
    name: 'Standard',
    price: 997,
    timeline: '~2 weeks',
    tagline: 'A complete website built to grow trust and leads.',
    description:
      'A 7–10 page website with trust-building design, lead capture, analytics, Search Console, and on-page SEO.',
  },
  {
    name: 'Premium',
    price: 2997,
    timeline: '~3 weeks',
    tagline: 'A complete digital presence with advanced features.',
    description:
      'Everything in Standard plus logo, brand identity, custom features, backend systems, admin dashboards, and priority delivery.',
  },
]

export const SERVICES_FAQS: FaqItem[] = [
  {
    question: 'How long does it take?',
    answer: 'Most websites launch in 1–3 weeks depending on scope.',
  },
  {
    question: 'Do I own the website?',
    answer: 'Yes — the code, design, and assets are yours.',
  },
  {
    question: 'Can you redesign my current site?',
    answer: 'Yes. That’s a big part of what I do.',
  },
  {
    question: 'Do you write the content?',
    answer: 'Yes, I can help write and structure your website copy.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every package includes support, and ongoing help is available too.',
  },
  {
    question: 'How does payment work?',
    answer: '50% upfront, 50% before launch.',
  },
]

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'What happens on the call?',
    answer:
      'We talk about your business, your goals, and what kind of website you need.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'No — just come with a basic idea of what your business does.',
  },
  {
    question: 'Is the call free?',
    answer: 'Yes, completely free.',
  },
  {
    question: 'I’m not sure what I need yet. Is that okay?',
    answer: 'Yes — that’s exactly what the call is for.',
  },
  {
    question: 'Can I message you first instead?',
    answer: 'Absolutely. WhatsApp is always open.',
  },
]
