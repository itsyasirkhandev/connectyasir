import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getInsightPageNode,
  getPersonNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.nextjsVsWordpress)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Insights', path: '/insights' },
  {
    name: 'Next.js vs. WordPress',
    path: '/insights/nextjs-vs-wordpress-small-business-roi',
  },
]

const citations = [
  { name: 'Next.js Official Documentation', url: 'https://nextjs.org/' },
  { name: 'Google Core Web Vitals Guide', url: 'https://web.dev/vitals/' },
  {
    name: 'W3Techs CMS Market Share',
    url: 'https://w3techs.com/technologies/overview/content_management',
  },
]

export default function NextJsVsWordpressPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getInsightPageNode(PAGE_SEO.nextjsVsWordpress, citations),
          getPersonNode(),
        ])}
      />
      <Navbar />
      <main id="main-content">
        <div className="container mx-auto px-4 pt-10 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Next.js vs. WordPress for Small Business ROI in 2026
              </h1>

              <div className="mt-12">
                <AnswerFirstBlock
                  heading="The Verdict for Small Business Owners"
                  summary={PAGE_SUMMARIES.nextjsVsWordpress}
                />
              </div>

              <div className="prose prose-invert prose-lg mt-16 max-w-none">
                <p>
                  For over a decade, WordPress has been the default choice for
                  small businesses. It&apos;s accessible, familiar, and powers
                  over 43% of the web. However, as Google&apos;s ranking
                  algorithms shift toward <strong>Core Web Vitals</strong> and
                  AI-driven search (GEO), the technical limitations of
                  traditional WordPress are becoming a growth bottleneck.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  1. Performance & Conversion: The Sub-Second Advantage
                </h2>
                <p>
                  Data from{' '}
                  <a
                    href="https://web.dev/vitals/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&apos;s web.dev
                  </a>{' '}
                  consistently shows that every 100ms of latency can reduce
                  conversion rates by up to 7%.
                </p>
                <div className="bg-muted/30 my-8 rounded-2xl border p-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="flex items-center gap-2 font-bold">
                        <Zap className="h-5 w-5 text-yellow-500" /> WordPress
                        (Average)
                      </h4>
                      <ul className="mt-4 list-disc pl-5 text-sm">
                        <li>LCP: 3.5s - 5.0s</li>
                        <li>TTFB: 600ms - 1.5s</li>
                        <li>PageSpeed: 30-60/100</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-bold">
                        <Zap className="h-5 w-5 text-green-500" /> Next.js
                        (Bespoke)
                      </h4>
                      <ul className="mt-4 list-disc pl-5 text-sm">
                        <li>LCP: 0.8s - 1.5s</li>
                        <li>TTFB: 50ms - 200ms</li>
                        <li>PageSpeed: 95-100/100</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Next.js achieves this through{' '}
                  <strong>Static Site Generation (SSG)</strong>. Instead of
                  building the page from a database every time a user visits,
                  Next.js pre-builds the entire site. This means your visitors
                  get instant load times, which directly correlates to higher
                  search rankings and more leads.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  2. Long-Term Cost: Eliminating the &apos;Plugin Tax&apos;
                </h2>
                <p>
                  The &quot;hidden costs&quot; of WordPress are significant. To
                  keep a WordPress site secure and fast, you often need premium
                  plugins for SEO, caching, security, and forms. Over 3 years,
                  these licenses—plus managed hosting and maintenance—can cost
                  between <strong>$8,000 and $25,000</strong>.
                </p>
                <p>
                  A Next.js site has higher upfront development costs but{' '}
                  <strong>near-zero ongoing fees</strong>. Deployed on platforms
                  like Vercel or Cloudflare, hosting is often free for small
                  businesses, and there are no plugin licenses to renew or
                  security patches to worry about.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  3. Security: A Structurally Smaller Attack Surface
                </h2>
                <p>
                  97% of WordPress vulnerabilities come from third-party
                  plugins. A monolithic architecture with a public login page (
                  <code>/wp-admin</code>) is a constant target for brute-force
                  attacks.
                </p>
                <p>
                  Next.js sites are decoupled. There is no public admin panel to
                  attack, no database exposed to the web by default, and no
                  plugin system running third-party code on your server. For
                  businesses in finance, legal, or healthcare, this security gap
                  is often the deciding factor.
                </p>

                <div className="bg-primary/5 border-primary/20 mt-16 rounded-3xl border p-8 md:p-12">
                  <h3 className="text-2xl font-bold">
                    Which one is right for you?
                  </h3>
                  <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="text-foreground font-bold">
                        Choose WordPress if:
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          Budget is under $3,000 total.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          You need to launch in under 2 weeks.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          Non-technical staff need to edit layouts daily.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-foreground font-bold">
                        Choose Next.js if:
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          Website speed is critical for lead generation.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          You want the lowest 3-year total cost of ownership.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          Security and &quot;unhackable&quot; architecture are
                          priorities.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 flex justify-center">
                    <Link href="/contact">
                      <button className="bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-transform hover:scale-105 active:scale-95">
                        Discuss Your Project ROI{' '}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
