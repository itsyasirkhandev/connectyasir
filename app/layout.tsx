import type { Metadata, Viewport } from 'next'
import { Outfit, Lora } from 'next/font/google'
import './globals.css'

import { JsonLd } from '@/components/seo/json-ld'
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_URL,
} from '@/lib/site-config'
import {
  getDatasetNode,
  getOrganizationNode,
  getPersonNode,
  getSpeakableNode,
  getWebsiteNode,
  schemaGraph,
} from '@/lib/schema'

import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/components/theme-provider'
import { IconLoader } from '@/components/IconLoader'
import { SkipLink } from '@/components/seo/skip-link'

const loraHeading = Lora({ subsets: ['latin'], variable: '--font-heading' })

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: 'Yasir Khan',
  },
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('font-sans', outfit.variable, loraHeading.variable)}
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com https://cloudflareinsights.com https://wa.me; frame-ancestors 'none'; upgrade-insecure-requests;"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd
            data={schemaGraph([
              getWebsiteNode(),
              getOrganizationNode(),
              getPersonNode(),
              getDatasetNode(),
              getSpeakableNode(['h1', 'p']),
            ])}
          />

          <SkipLink />
          <IconLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
