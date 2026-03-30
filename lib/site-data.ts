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
} satisfies Record<string, PageSeoConfig>

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
