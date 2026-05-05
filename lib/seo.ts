import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site-config'
import type { PageSeoConfig } from '@/lib/site-data'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return new URL(path, `${SITE_URL}/`).toString()
}

export function buildFullTitle(title: string) {
  return `${title} | ${SITE_NAME}`
}

export function createMetadata(config: PageSeoConfig): Metadata {
  const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE
  const fullTitle = buildFullTitle(config.title)

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: {
      canonical: config.path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      title: fullTitle,
      description: config.description,
      url: config.path,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: [ogImage],
    },
  }
}
