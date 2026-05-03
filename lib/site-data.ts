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
    title: 'Small Business Website Designer & Developer | Yasir Khan',
    description:
      'Professional web design and development for small businesses. I build modern, high-trust websites that load fast and turn visitors into leads.',
    path: '/',
    ogImage: '/og/default.png',
  },
  services: {
    title: 'Web Design Services for Small Businesses | Yasir Khan',
    description:
      'Complete web design and development services. Branding, custom coding, hosting, and SEO setup — all handled by one expert.',
    path: '/services',
    ogImage: '/og/services.png',
  },
  projects: {
    title: 'Small Business Website Portfolio | Case Studies',
    description:
      'See how I help businesses grow with premium web design. Real-world examples of lead generation and trust-building websites.',
    path: '/projects',
    ogImage: '/og/projects.png',
  },
  apnaQarz: {
    title: 'Apna Qarz Case Study | Finance Website & Lead Generation',
    description:
      'How I built a custom finance platform that generated 1,000+ leads in the first month for Apna Qarz.',
    path: '/projects/apna-qarz',
    ogImage: '/og/apna-qarz.png',
  },
  rehmanVetClinic: {
    title: 'Rehman Vet Clinic Case Study | Local Business Website SEO',
    description:
      'Case study on building a professional landing page for a local veterinary clinic, generating daily inquiries.',
    path: '/projects/rehman-veterinary-clinic',
    ogImage: '/og/rehman-vet-clinic.png',
  },
  about: {
    title: 'About Yasir Khan | Small Business Web Designer',
    description:
      'I help small businesses look more established online with modern, high-trust websites. Learn more about my approach.',
    path: '/about',
    ogImage: '/og/about.png',
  },
  contact: {
    title: 'Contact Yasir Khan | Book Your Free Website Strategy Call',
    description:
      'Ready to transform your online presence? Book a free 30-minute call to discuss your website goals.',
    path: '/contact',
    ogImage: '/og/contact.png',
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
  rehmanVetClinic:
    'From no website to a professional landing page generating daily inquiries.',
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
    image: '/images/projects/apna-qarz-homepage.webp',
    imageAlt:
      'Modern finance platform website design for Apna Qarz — Homepage desktop view showing lead generation features',
    shortDescription:
      'Complete digital platform built from scratch. 1,000+ targeted leads generated in month one.',
    projectType: 'Full-Stack · Done-for-You',
    before:
      'Zero digital footprint. No brand identity. No automated lead capture. Total reliance on manual outreach.',
    after:
      'A blazing fast custom platform with a secure admin dashboard, resulting in 1,000+ high-intent leads generated in 30 days.',
  },
  {
    name: 'Rehman Veterinary Clinic',
    slug: 'rehman-veterinary-clinic',
    path: '/projects/rehman-veterinary-clinic',
    image:
      '/images/projects/rehman_veterinary_clinic/rehman_veterinary_clinic_lahore.webp',
    imageAlt:
      'Professional local business website design for Rehman Veterinary Clinic — Trust-focused landing page for pet care services',
    shortDescription:
      'A professional, trust-focused landing page for a local clinic, resulting in daily customer inquiries.',
    projectType: 'Full Landing Page Design · Technical · On-page SEO',
    before:
      'No website, only a Google My Business profile. Limited professional credibility without a dedicated digital home.',
    after:
      'A blazing fast landing page that showcases services, builds trust with FAQs, and generates inquiries every single day.',
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
