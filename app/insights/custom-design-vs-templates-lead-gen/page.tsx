import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { PrimaryButton } from '@/components/ui/primary-button'
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

export const metadata: Metadata = createMetadata(PAGE_SEO.customVsTemplate)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Insights', path: '/insights' },
  {
    name: 'Custom Design vs. Templates',
    path: '/insights/custom-design-vs-templates-lead-gen',
  },
]

const citations = [
  {
    name: 'Stanford Persuasive Technology Lab - Web Credibility Research',
    url: 'https://captology.stanford.edu/',
  },
  {
    name: 'Nielsen Norman Group - Conversion Rate Optimization Basics',
    url: 'https://www.nngroup.com/articles/conversion-rate/',
  },
  {
    name: 'Google Search Central - Page Experience Guide',
    url: 'https://developers.google.com/search/docs/appearance/page-experience',
  },
]

export default function CustomVsTemplatePage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getInsightPageNode(PAGE_SEO.customVsTemplate, citations),
          getPersonNode(),
        ])}
      />
      <Navbar />
      <main id="main-content">
        <div className="container mx-auto px-4 pt-10 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <section className="py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-foreground text-4xl font-bold tracking-tighter sm:text-5xl lg:text-7xl">
                Custom Web Design vs. Templates: Which Actually Generates More
                Leads?
              </h1>

              <div className="mt-16">
                <AnswerFirstBlock
                  heading="The Business Math of Custom Design"
                  summary={PAGE_SUMMARIES.customVsTemplate}
                />
              </div>

              <div className="prose prose-invert prose-lg mt-20 max-w-none">
                <p>
                  Most business owners view a website as a digital business
                  card. But if your goal is <strong>lead generation</strong>,
                  your website is actually a sales funnel. The decision between
                  a $50 template and a custom bespoke build is not about
                  aesthetics—it&apos;s about <strong>conversion rates</strong>{' '}
                  and <strong>trust signals</strong>.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  1. The &quot;Template Tax&quot; on User Trust
                </h2>
                <p>
                  According to research from Stanford,{' '}
                  <strong>75% of users</strong> judge a company&apos;s
                  credibility based on its website design. When a visitor lands
                  on a site that looks like a generic template they&apos;ve seen
                  elsewhere, their &quot;trust alarm&quot; goes off.
                </p>
                <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="bg-muted/30 rounded-2xl border p-6">
                    <h4 className="mb-4 flex items-center gap-2 font-bold">
                      <ShieldCheck className="h-5 w-5 text-red-500" /> Template
                      Issues
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-sm">
                      <li>
                        &quot;Cookie-cutter&quot; look reduces brand authority.
                      </li>
                      <li>Forced layouts: Your message must fit the design.</li>
                      <li>Generic CTA placements that users ignore.</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-2xl border p-6">
                    <h4 className="mb-4 flex items-center gap-2 font-bold">
                      <ShieldCheck className="h-5 w-5 text-green-500" /> Custom
                      Benefits
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-sm">
                      <li>Unique brand identity built on research.</li>
                      <li>Design supports the message and user journey.</li>
                      <li>Strategic CTA placements based on user behavior.</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  2. Analyzing the Conversion Math
                </h2>
                <p>
                  A custom-built website focuses on removing{' '}
                  <strong>friction points</strong>. If your website currently
                  has a 1% conversion rate and you generate 1,000 visitors, you
                  get 10 leads.
                </p>
                <div className="bg-primary/5 border-primary/20 my-8 rounded-2xl border p-8 text-center">
                  <div className="flex flex-col items-center justify-around gap-8 md:flex-row">
                    <div>
                      <span className="text-muted-foreground text-sm tracking-widest uppercase">
                        Template Site
                      </span>
                      <p className="mt-2 text-3xl font-bold">
                        1% Conv. = 10 Leads
                      </p>
                    </div>
                    <div className="text-primary hidden text-4xl md:block">
                      →
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm tracking-widest uppercase">
                        Custom Site
                      </span>
                      <p className="text-primary mt-2 text-3xl font-bold">
                        2.5% Conv. = 25 Leads
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm italic">
                    That&apos;s a 150% increase in leads from the exact same
                    traffic volume.
                  </p>
                </div>
                <p>
                  Bespoke design allows us to place action points exactly where
                  users are psychologically ready to respond, rather than where
                  a template&apos;s pre-defined grid allows them to be.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">
                  3. Technical SEO & AI Readiness (GEO)
                </h2>
                <p>
                  AI search engines like <em>Perplexity</em> and <em>Gemini</em>{' '}
                  favor sites with clean, semantic code. Templates often include
                  bloated &quot;div soup&quot; and unused CSS from multiple
                  plugins.
                </p>
                <p>
                  Custom Next.js sites deliver{' '}
                  <strong>clean HTML architecture</strong>. This makes it easier
                  for AI crawlers to extract your services, locations, and
                  unique value propositions, directly increasing your visibility
                  in AI-generated answers.
                </p>

                <div className="bg-primary/5 border-primary/20 mt-24 rounded-3xl border p-10 md:p-16">
                  <h3 className="text-center text-3xl font-bold tracking-tight">
                    Is your template holding you back?
                  </h3>
                  <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed">
                    If your website is a primary lead source, every percentage
                    point of conversion matters. I specialize in building
                    custom, high-trust platforms that turn browsers into buyers.
                  </p>
                  <div className="mt-12 flex justify-center">
                    <Link href="/contact">
                      <PrimaryButton
                        text="Book Your Free Conversion Strategy Call"
                        className="h-14 px-10 text-lg shadow-lg"
                      />
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
