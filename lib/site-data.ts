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
  nextjsVsWordpress: {
    title: 'Next.js vs. WordPress for Small Business ROI | Yasir Khan',
    description:
      'A technical and financial comparison of Next.js and WordPress for small businesses in 2026. Why modern stacks deliver 2-5x better ROI.',
    path: '/insights/nextjs-vs-wordpress-small-business-roi',
    keywords: [
      'Next.js vs WordPress 2026',
      'small business website ROI',
      'headless CMS vs WordPress',
      'website performance comparison',
      'high performance business websites',
    ],
    ogImage: '/og/insights-nextjs.png',
  },
  localSeoChecklist: {
    title: 'Local SEO Checklist for Lahore & Regional Markets | Yasir Khan',
    description:
      'Dominating local search in Lahore and regional markets. A complete 2026 checklist for Google Business Profile and Map Pack rankings.',
    path: '/insights/local-seo-checklist-lahore-regional-markets',
    keywords: [
      'Local SEO Lahore',
      'Google Business Profile optimization Pakistan',
      'Lahore local search checklist',
      'regional market SEO strategy',
      'DHA Lahore SEO expert',
    ],
    ogImage: '/og/insights-localseo.png',
  },
  customVsTemplate: {
    title: 'Custom Web Design vs. Templates for Lead Generation | Yasir Khan',
    description:
      'Does custom design actually convert better? Analyzing the conversion math and trust signals of bespoke vs. template websites.',
    path: '/insights/custom-design-vs-templates-lead-gen',
    keywords: [
      'custom web design vs templates',
      'lead generation website design',
      'conversion rate optimization tips',
      'bespoke website ROI',
      'high trust web design',
    ],
    ogImage: '/og/insights-custom.png',
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
  nextjsVsWordpress:
    'Next.js is faster, more secure, and cheaper long-term. While WordPress is easier for non-developers, Next.js delivers 2-5x better performance and ROI for businesses that rely on their website for growth.',
  localSeoChecklist:
    'Ranking #1 in Lahore’s Local Pack requires more than just keywords. You need a verified Google Business Profile, consistent NAP data, and hyper-local content targeting neighborhoods like DHA, Gulberg, and Johar Town.',
  customVsTemplate:
    'Templates focus on appearance; custom design focuses on action. Bespoke websites convert better because they remove friction points, load faster, and build higher levels of user trust through unique brand authority.',
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
      'A premium website is a 24/7 salesperson. Stanford research shows 75% of users judge credibility by design. Modern stacks like Next.js improve load times by 60%, boosting search visibility and trust.',
  },
  {
    question: 'How does your web design help with lead generation?',
    answer:
      'I use proven CRO best practices. "Answer-first" structures and clear CTA paths helped Apna Qarz generate 1,000+ leads in month one. That is a 400% increase over traditional templates.',
  },
  {
    question: 'What makes your approach different from a typical agency?',
    answer:
      'You work directly with the expert. Skip the 30-50% agency overhead. My lean stack builds for speed and GEO (Generative Engine Optimization). This ensures AI search engines cite your business more often.',
  },
  {
    question: 'Do you offer services globally or just locally?',
    answer:
      'I work with businesses worldwide, from local clinics to global platforms. My approach is inspired by Dr. Amjad Saqib (Ramon Magsaysay Award winner). I focus on high-impact, trust-based solutions that work anywhere.',
  },
  {
    question: 'How long does it take to see results from a new website?',
    answer:
      'SEO and performance gains are immediate. Most clients see better rankings and engagement within 14-30 days. Rehman Vet Clinic saw daily inquiries start in their first week.',
  },
]

export const CITATIONS = [
  {
    name: 'Stanford Web Credibility Research',
    url: 'https://credibility.stanford.edu/guidelines/',
    fact: '75% of users judge a company’s credibility based on its website design.',
  },
  {
    name: 'Google Mobile Speed Research',
    url: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
    fact: '53% of mobile visitors leave a page if it takes longer than 3 seconds to load.',
  },
  {
    name: 'Dr. Amjad Saqib (Ramon Magsaysay Award winner)',
    url: 'https://www.rmaward.asia/awardee/saqib-muhammad-amjad',
    fact: 'Philanthropic and service-based business models build deep community trust.',
  },
  {
    name: 'Next.js Performance Documentation',
    url: 'https://nextjs.org/learn/dashboard-app/optimizing-fonts-images',
    fact: 'Modern frameworks improve performance by up to 60% through automatic optimization.',
  },
]
