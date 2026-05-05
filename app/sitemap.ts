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
      images: [absoluteUrl('/og/default.png')],
    },
    {
      url: absoluteUrl('/services'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [absoluteUrl('/og/services.png')],
    },
    {
      url: absoluteUrl('/projects'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [absoluteUrl('/og/projects.png')],
    },
    {
      url: absoluteUrl('/projects/apna-qarz'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        absoluteUrl('/og/apna-qarz.png'),
        absoluteUrl('/images/projects/apna-qarz-homepage.webp'),
      ],
    },
    {
      url: absoluteUrl('/projects/rehman-veterinary-clinic'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        absoluteUrl('/og/rehman-vet-clinic.png'),
        absoluteUrl(
          '/images/projects/rehman_veterinary_clinic/rehman_veterinary_clinic_lahore.webp'
        ),
      ],
    },
    {
      url: absoluteUrl('/about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [absoluteUrl('/og/about.png')],
    },
    {
      url: absoluteUrl('/contact'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [absoluteUrl('/og/contact.png')],
    },
    {
      url: absoluteUrl('/insights/nextjs-vs-wordpress-small-business-roi'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [absoluteUrl('/og/insights-nextjs.png')],
    },
    {
      url: absoluteUrl('/insights/local-seo-checklist-lahore-regional-markets'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [absoluteUrl('/og/insights-localseo.png')],
    },
    {
      url: absoluteUrl('/insights/custom-design-vs-templates-lead-gen'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [absoluteUrl('/og/insights-custom.png')],
    },
  ]
}
