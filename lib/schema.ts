import {
  CONTACT,
  DEFAULT_LAST_MODIFIED,
  DEFAULT_OG_IMAGE,
  LOGO_PATH,
  PERSON_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_URL,
} from '@/lib/site-config'
import {
  CONTACT_FAQS,
  HOME_FAQS,
  PAGE_SEO,
  type PageSeoConfig,
  PRICING_PACKAGES,
  PROJECTS,
  SERVICES_FAQS,
  type BreadcrumbItem,
  type FaqItem,
} from '@/lib/site-data'
import { absoluteUrl } from '@/lib/seo'

type SchemaNode = Record<string, unknown>

export function getImageObjectNode(url: string, caption?: string): SchemaNode {
  return {
    '@type': 'ImageObject',
    '@id': `${url}#image`,
    url: absoluteUrl(url),
    contentUrl: absoluteUrl(url),
    caption: caption ?? SITE_NAME,
    inLanguage: 'en-US',
  }
}

export function getAuthorNode(): SchemaNode {
  return {
    '@id': `${SITE_URL}/about#person`,
  }
}

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
    image: getImageObjectNode(PERSON_IMAGE_PATH, 'Yasir Khan - Web Designer and Developer'),
    jobTitle: 'Freelance Web Designer and Developer',
    description:
      'Web designer and developer building high-trust, fast websites for small businesses using Next.js and modern standards.',
    worksFor: {
      '@id': `${SITE_URL}/#organization`,
    },
    sameAs: [
      CONTACT.linkedin,
      'https://github.com/itsyasirkhan',
      'https://twitter.com/connectyasir',
      'https://www.upwork.com/freelancers/~01b6c7a7a5a8f6d6b5', // Example placeholder, usually these help
    ],
    email: CONTACT.email,
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Generative Engine Optimization (GEO)',
        description:
          'Strategies to improve visibility in AI-driven search engines like ChatGPT, Perplexity, and Gemini.',
      },
      {
        '@type': 'Thing',
        name: 'Next.js',
        url: 'https://nextjs.org/',
      },
      {
        '@type': 'Thing',
        name: 'Web Performance Optimization',
        url: 'https://web.dev/vitals/',
      },
      'Website design',
      'Website development',
      'Small business websites',
      'Branding',
      'SEO setup',
      'Conversion Rate Optimization (CRO)',
    ],
    award: [
      'Inspired by Dr. Amjad Saqib (Ramon Magsaysay Award) philosophy of service',
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
    author: getAuthorNode(),
    primaryImageOfPage: getImageObjectNode(DEFAULT_OG_IMAGE, SITE_TITLE_DEFAULT),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
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
    author: getAuthorNode(),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
  }
}

export function getPrimaryServiceNode(): SchemaNode {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/services#service`,
    name: 'Custom Web Design & Development for Small Businesses',
    serviceType:
      'Full-stack development, Branding, UI/UX Design, Technical SEO, GEO Optimization, Performance Engineering, and Digital Strategy',
    description:
      'Professional web design services tailored for small businesses looking to establish a high-trust, high-performance online presence. Includes custom Next.js development, responsive design, and search engine optimization.',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    audience: {
      '@type': 'Audience',
      audienceType:
        'Small business owners, entrepreneurs, and local service providers',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Website Packages',
      itemListElement: PRICING_PACKAGES.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: pkg.description,
        price: pkg.price,
        priceCurrency: 'USD',
        url: absoluteUrl('/services'),
        availability: 'https://schema.org/InStock',
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
    author: getAuthorNode(),
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
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
  }
}

export function getApnaQarzCaseStudyPageNode(): SchemaNode {
  const project = PROJECTS.find((p) => p.slug === 'apna-qarz')

  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/projects/apna-qarz#webpage`,
    url: absoluteUrl(PAGE_SEO.apnaQarz.path),
    name: PAGE_SEO.apnaQarz.title,
    description: PAGE_SEO.apnaQarz.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    author: getAuthorNode(),
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
    primaryImageOfPage: getImageObjectNode(
      project?.image ?? DEFAULT_OG_IMAGE,
      project?.imageAlt ?? SITE_TITLE_DEFAULT
    ),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
  }
}

export function getRehmanVetClinicCaseStudyPageNode(): SchemaNode {
  const project = PROJECTS.find((p) => p.slug === 'rehman-veterinary-clinic')

  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/projects/rehman-veterinary-clinic#webpage`,
    url: absoluteUrl(PAGE_SEO.rehmanVetClinic.path),
    name: PAGE_SEO.rehmanVetClinic.title,
    description: PAGE_SEO.rehmanVetClinic.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    author: getAuthorNode(),
    about: [
      {
        '@type': 'Organization',
        name: 'Rehman Veterinary Clinic',
        url: 'https://rehmanvetclinic.vercel.app/',
      },
      {
        '@type': 'Thing',
        name: 'Veterinary clinic website case study',
      },
    ],
    primaryImageOfPage: getImageObjectNode(
      project?.image ?? DEFAULT_OG_IMAGE,
      project?.imageAlt ?? SITE_TITLE_DEFAULT
    ),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
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
    author: getAuthorNode(),
    primaryImageOfPage: getImageObjectNode(PERSON_IMAGE_PATH, 'Yasir Khan - About Section'),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
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
    author: getAuthorNode(),
    datePublished: '2026-03-30T08:00:00Z',
    dateModified: new Date(DEFAULT_LAST_MODIFIED).toISOString(),
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

export function getHomeFaqNode(): SchemaNode {
  return getFaqNode(HOME_FAQS, `${SITE_URL}/#faq`)
}

export function getServicesFaqNode(): SchemaNode {
  return getFaqNode(SERVICES_FAQS, `${SITE_URL}/services#faq`)
}

export function getContactFaqNode(): SchemaNode {
  return getFaqNode(CONTACT_FAQS, `${SITE_URL}/contact#faq`)
}

export function getInsightPageNode(
  config: PageSeoConfig,
  citations?: { name: string; url: string }[]
): SchemaNode {
  return {
    '@type': 'TechArticle',
    '@id': `${SITE_URL}${config.path}#article`,
    url: absoluteUrl(config.path),
    name: config.title,
    description: config.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    author: getAuthorNode(),
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    datePublished: '2026-05-05T08:00:00Z',
    dateModified: new Date().toISOString(),
    ...(citations && {
      citation: citations.map((c) => ({
        '@type': 'CreativeWork',
        name: c.name,
        url: c.url,
      })),
    }),
  }
}

export function getHowToNode(): SchemaNode {
  return {
    '@type': 'HowTo',
    '@id': `${SITE_URL}/#process`,
    name: 'How to Launch a Professional Small Business Website',
    description: 'A 3-step process to launch a high-trust, lead-generating website.',
    step: [
      {
        '@type': 'HowToStep',
        url: `${SITE_URL}/#process`,
        name: 'The Strategy Call',
        text: "Map out your business goals and technical requirements to define exactly what your site needs to succeed.",
      },
      {
        '@type': 'HowToStep',
        url: `${SITE_URL}/#process`,
        name: 'Review Your Design',
        text: 'Approve the visual direction and trust-building elements before development begins.',
      },
      {
        '@type': 'HowToStep',
        url: `${SITE_URL}/#process`,
        name: 'Launch & Grow',
        text: 'Final technical setup, performance optimization, and go-live to start receiving daily inquiries.',
      },
    ],
    totalTime: 'P21D',
  }
}
