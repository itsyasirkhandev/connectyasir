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
  HOME_FAQS,
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
      'Generative Engine Optimization (GEO)',
      'Technical SEO',
      'Lead Generation Strategy',
      'Conversion Rate Optimization (CRO)',
      'Responsive Web Design',
      'Full-stack JavaScript Development',
      'API Integration',
      'Serverless Architecture',
      'Digital Strategy for Entrepreneurs',
      'Performance Engineering',
      'User Experience (UX) Design',
    ],
    award: [
      'Inspired by Dr. Amjad Saqib (Ramon Magsaysay Award winner) philosophy of service',
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

export function getRehmanVetClinicCaseStudyPageNode(): SchemaNode {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/projects/rehman-veterinary-clinic#webpage`,
    url: absoluteUrl(PAGE_SEO.rehmanVetClinic.path),
    name: PAGE_SEO.rehmanVetClinic.title,
    description: PAGE_SEO.rehmanVetClinic.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
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

export function getHomeFaqNode(): SchemaNode {
  return getFaqNode(HOME_FAQS, `${SITE_URL}/#faq`)
}

export function getServicesFaqNode(): SchemaNode {
  return getFaqNode(SERVICES_FAQS, `${SITE_URL}/services#faq`)
}

export function getContactFaqNode(): SchemaNode {
  return getFaqNode(CONTACT_FAQS, `${SITE_URL}/contact#faq`)
}
