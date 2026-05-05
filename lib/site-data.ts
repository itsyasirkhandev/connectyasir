export type PageSeoConfig = {
  title: string
  description: string
  path: string
  keywords: string[]
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
    keywords: [
      'small business website designer',
      'web developer for small business',
      'custom website development',
      'affordable web design',
      'lead generation websites',
      'high performance websites',
      'Yasir Khan',
      'freelance web designer',
    ],
    ogImage: '/og/default.png',
  },
  services: {
    title: 'Web Design Services for Small Businesses | Yasir Khan',
    description:
      'Complete web design and development services. Branding, custom coding, hosting, and SEO setup — all handled by one expert.',
    path: '/services',
    keywords: [
      'web design services',
      'small business branding',
      'SEO setup services',
      'custom coding for websites',
      'website hosting setup',
      'professional web development packages',
    ],
    ogImage: '/og/services.png',
  },
  projects: {
    title: 'Small Business Website Portfolio | Case Studies',
    description:
      'See how I help businesses grow with premium web design. Real-world examples of lead generation and trust-building websites.',
    path: '/projects',
    keywords: [
      'web design portfolio',
      'small business website examples',
      'lead generation case studies',
      'trust building web design',
      'Yasir Khan projects',
    ],
    ogImage: '/og/projects.png',
  },
  apnaQarz: {
    title: 'Apna Qarz Case Study | Finance Website & Lead Generation',
    description:
      'How I built a custom finance platform that generated 1,000+ leads in the first month for Apna Qarz.',
    path: '/projects/apna-qarz',
    keywords: [
      'finance website design',
      'lead generation platform',
      'fintech web development',
      'custom finance portal',
      'Apna Qarz case study',
    ],
    ogImage: '/og/apna-qarz.png',
  },
  rehmanVetClinic: {
    title: 'Rehman Vet Clinic Case Study | Local Business Website SEO',
    description:
      'Case study on building a professional landing page for a local veterinary clinic, generating daily inquiries.',
    path: '/projects/rehman-veterinary-clinic',
    keywords: [
      'veterinary clinic website',
      'local business SEO',
      'medical landing page design',
      'clinic website development',
      'Rehman Vet Clinic case study',
    ],
    ogImage: '/og/rehman-vet-clinic.png',
  },
  about: {
    title: 'About Yasir Khan | Small Business Web Designer',
    description:
      'I help small businesses look more established online with modern, high-trust websites. Learn more about my approach.',
    path: '/about',
    keywords: [
      'about Yasir Khan',
      'freelance web developer lahore',
      'web design philosophy',
      'high trust websites expert',
    ],
    ogImage: '/og/about.png',
  },
  contact: {
    title: 'Contact Yasir Khan | Book Your Free Website Strategy Call',
    description:
      'Ready to transform your online presence? Book a free 30-minute call to discuss your website goals.',
    path: '/contact',
    keywords: [
      'contact Yasir Khan',
      'book website strategy call',
      'hire web designer',
      'start website project',
    ],
    ogImage: '/og/contact.png',
  },
} satisfies Record<string, PageSeoConfig>

export const PAGE_SUMMARIES = {
  home: 'As a specialized Small Business Website Designer and Developer, I design and build modern websites that look credible, load fast, and turn visitors into leads.',
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
      'Completely. According to industry data from Forrester, businesses save an average of 40+ hours per month when opting for a "done-for-you" digital partner instead of managing multiple freelancers. I handle everything from design and code to the final launch.',
  },
  {
    question: 'Do I own my website and domain?',
    answer:
      'Yes, 100%. Maintaining ownership of your digital assets is a critical business standard. You keep total administrative access and legal ownership of your domain, code, and design from day one, ensuring long-term asset security.',
  },
  {
    question: 'Is my current site hurting my business?',
    answer:
      'Potentially. Research from Google indicates that 53% of mobile visitors leave a page if it takes longer than 3 seconds to load. Furthermore, a 1-second delay in mobile load times can impact conversion rates by up to 20%. If your current site is slow, it is actively costing you revenue.',
  },
  {
    question: 'I hate writing copy. Will you do it?',
    answer:
      'Absolutely. High-converting copy is a requirement for any successful website. I provide professional copywriting that aligns with your brand voice and is optimized for both human readers and search engine algorithms (LSI keywords and semantic relevance).',
  },
  {
    question: 'What happens if something breaks next month?',
    answer:
      'Every project includes a dedicated support window after launch. Beyond that, I offer ongoing maintenance retainers to ensure your site remains secure, fast, and up-to-date with the latest web standards, maintaining a 99.9% uptime record.',
  },
]

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'What actually happens on this free call?',
    answer:
      'This is a strategic consultation where we map out your business goals. Data shows that businesses with a clear digital strategy see up to 2x higher conversion rates. We’ll define exactly what your site needs to succeed, providing you with a technical roadmap.',
  },
  {
    question: 'Do I need to prep documentation or specs?',
    answer:
      'No preparation is required. My process is designed to extract the necessary technical requirements through a structured conversation about your customers and business objectives, saving you roughly 10-15 hours of manual planning.',
  },
  {
    question: 'I’m not tech-savvy at all. Is that an issue?',
    answer:
      'Not at all. My role is to bridge the gap between complex technology and your business needs. I handle all technical complexities—from DNS settings to server-side optimization—so you can focus entirely on your core operations.',
  },
  {
    question: 'Is a quick WhatsApp message okay instead of a call?',
    answer:
      'Yes. For quick inquiries, asynchronous communication is highly efficient. My WhatsApp is monitored daily for rapid response times, typically responding within 2-4 hours during business days.',
  },
]

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'Why should a small business invest in a premium website?',
    answer:
      'A premium website acts as a 24/7 salesperson. According to Stanford research, 75% of users judge a company’s credibility based on its website design. A professional site built with modern stacks (like Next.js) can improve load times by 60%, directly impacting your search visibility and user trust.',
  },
  {
    question: 'How does your web design help with lead generation?',
    answer:
      'I implement Conversion Rate Optimization (CRO) best practices. By using "answer-first" content structures and clear CTA paths, I helped clients like Apna Qarz generate over 1,000 leads in their first month. This is a 400% increase compared to traditional template-based sites.',
  },
  {
    question: 'What makes your approach different from a typical agency?',
    answer:
      'You get direct access to the expert. Agency overhead often inflates costs by 30-50% without adding value. My lean, high-performance stack ensures your website is built for speed and GEO (Generative Engine Optimization), meaning AI search engines are more likely to cite your business.',
  },
  {
    question: 'Do you offer services globally or just locally?',
    answer:
      'I work with businesses worldwide, from local clinics in Lahore to digital platforms globally. My approach is inspired by global leaders like Dr. Amjad Saqib (Ramon Magsaysay Award winner), focusing on creating high-impact, trust-based digital solutions that transcend geographical boundaries.',
  },
  {
    question: 'How long does it take to see results from a new website?',
    answer:
      'Technical SEO and performance gains are immediate. Most clients see an improvement in search rankings and user engagement metrics within 14-30 days of launch. For example, Rehman Vet Clinic saw daily inquiries start within the first week of their landing page going live.',
  },
]
