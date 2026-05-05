import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'

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

export const metadata: Metadata = createMetadata(PAGE_SEO.localSeoChecklist)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Insights', path: '/insights' },
  {
    name: 'Local SEO Checklist',
    path: '/insights/local-seo-checklist-lahore-regional-markets',
  },
]

const citations = [
  {
    name: 'Google Business Profile Help Center',
    url: 'https://support.google.com/business/',
  },
  {
    name: 'Moz Local Search Ranking Factors',
    url: 'https://moz.com/local-search-ranking-factors',
  },
  {
    name: 'Google Search Central Local SEO Guide',
    url: 'https://developers.google.com/search/docs/appearance/locally-relevant-pages',
  },
]

export default function LocalSeoChecklistPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getInsightPageNode(PAGE_SEO.localSeoChecklist, citations),
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
                The 2026 Local SEO Checklist for Lahore & Regional Markets
              </h1>

              <div className="mt-12">
                <AnswerFirstBlock
                  heading="How to Dominate the Local Map Pack"
                  summary={PAGE_SUMMARIES.localSeoChecklist}
                />
              </div>

              <div className="prose prose-invert prose-lg mt-16 max-w-none">
                <p>
                  In a fast-moving city like Lahore, your digital storefront is
                  often more important than your physical one. Whether you are a
                  dental clinic in <strong>DHA</strong>, a boutique in{' '}
                  <strong>Gulberg</strong>, or a software house in{' '}
                  <strong>Johar Town</strong>, ranking in the top 3 results of
                  Google Maps (the &quot;Map Pack&quot;) is the single
                  highest-ROI activity you can undertake.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  1. Google Business Profile (GBP) Fundamentals
                </h2>
                <p>
                  Your GBP is the source of truth for Google Maps. In 2026,
                  verification has become stricter—especially in Pakistan.
                </p>
                <div className="bg-muted/30 my-8 rounded-2xl border p-6">
                  <ul className="list-none space-y-4 pl-0">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                      <div>
                        <strong>Video Verification:</strong> Postcards are
                        rarely used in Pakistan now. Prepare a continuous video
                        take showing your street signage, unlocking your office
                        door, and internal branding.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                      <div>
                        <strong>Exact Legal Name:</strong> Avoid keyword
                        stuffing (e.g., &quot;Best Biryani Lahore&quot;). Use
                        your real trade name to avoid suspension.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                      <div>
                        <strong>Primary Category:</strong> This is your biggest
                        ranking lever. Be specific—choose &quot;Pakistani
                        Restaurant&quot; or &quot;Cosmetic Dentist&quot; instead
                        of generic categories.
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  2. The NAP Consistency Rule
                </h2>
                <p>
                  <strong>NAP</strong> stands for Name, Address, and Phone
                  number. Google compares this data across your website, GBP,
                  and local directories like <em>HamariWeb</em>,{' '}
                  <em>Yellow Pages PK</em>, and <em>OLX</em>.
                </p>
                <p>
                  Inconsistent formatting (e.g., &quot;St. 4&quot; vs
                  &quot;Street 4&quot;) can dilute your &quot;prominence&quot;
                  score. Ensure your international format number (+92 XXX
                  XXXXXXX) is identical everywhere.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  3. Hyper-Local Content & Neighborhood Signals
                </h2>
                <p>
                  Google&apos;s algorithm now places extreme weight on{' '}
                  <strong>proximity</strong> and <strong>relevance</strong>. To
                  rank across Lahore, you need location-specific landing pages.
                </p>
                <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-xl border p-4 text-center">
                    <MapPin className="text-primary mx-auto mb-2 h-6 w-6" />
                    <span className="text-sm font-semibold">
                      DHA (Phase 1-11)
                    </span>
                  </div>
                  <div className="rounded-xl border p-4 text-center">
                    <MapPin className="text-primary mx-auto mb-2 h-6 w-6" />
                    <span className="text-sm font-semibold">
                      Gulberg & MM Alam
                    </span>
                  </div>
                  <div className="rounded-xl border p-4 text-center">
                    <MapPin className="text-primary mx-auto mb-2 h-6 w-6" />
                    <span className="text-sm font-semibold">
                      Johar Town & Model Town
                    </span>
                  </div>
                </div>
                <p>
                  Mentioning local landmarks (like Liberty Market, Badshahi
                  Mosque, or Emporium Mall) in your business description and
                  website copy helps signal your relevance to those specific
                  areas.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  4. Review Management: Keywords are King
                </h2>
                <p>
                  Reviews are word-of-mouth for the AI age. When asking for
                  reviews, encourage customers to mention the{' '}
                  <strong>service</strong> and <strong>location</strong>.
                </p>
                <blockquote className="border-primary text-muted-foreground border-l-4 py-2 pl-6 italic">
                  &quot;Instead of just &apos;Great service!&apos;, aim for
                  &apos;The best <strong>website design service</strong>{' '}
                  I&apos;ve used in <strong>Lahore</strong>!&apos;&quot;
                </blockquote>
                <p>
                  Always reply to reviews within 24 hours. Your replies are also
                  crawlable content—use them to reinforce your key services.
                </p>

                <div className="bg-primary/5 border-primary/20 mt-16 rounded-3xl border p-8 md:p-12">
                  <h3 className="text-2xl font-bold">
                    Is your business invisible in Lahore?
                  </h3>
                  <p className="text-muted-foreground mt-4">
                    If you are not in the top 3 results on Google Maps, you are
                    losing up to 70% of local phone calls and direction
                    requests. I help local businesses audit their GBP and
                    technical SEO to dominate regional markets.
                  </p>
                  <div className="mt-10 flex justify-center">
                    <Link href="/contact">
                      <button className="bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-transform hover:scale-105 active:scale-95">
                        Get Your Free Local Audit{' '}
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
