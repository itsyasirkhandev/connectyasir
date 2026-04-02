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
        absoluteUrl('/images/projects/apna-qarz-homepage.webp'),
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
