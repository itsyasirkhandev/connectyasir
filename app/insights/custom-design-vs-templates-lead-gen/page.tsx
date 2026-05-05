import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

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

export const metadata: Metadata = createMetadata(PAGE_SEO.customVsTemplate)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Insights', path: '/insights' },
  { name: 'Custom Design vs. Templates', path: '/insights/custom-design-vs-templates-lead-gen' },
]

const citations = [
  { name: 'Stanford Persuasive Technology Lab - Web Credibility Research', url: 'https://captology.stanford.edu/' },
  { name: 'Nielsen Norman Group - Conversion Rate Optimization Basics', url: 'https://www.nngroup.com/articles/conversion-rate/' },
  { name: 'Google Search Central - Page Experience Guide', url: 'https://developers.google.com/search/docs/appearance/page-experience' },
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

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Custom Web Design vs. Templates: Which Actually Generates More Leads?
              </h1>
              
              <div className="mt-12">
                <AnswerFirstBlock
                  heading="The Business Math of Custom Design"
                  summary={PAGE_SUMMARIES.customVsTemplate}
                />
              </div>

              <div className="prose prose-invert prose-lg mt-16 max-w-none">
                <p>
                  Most business owners view a website as a digital business card. But if your goal is <strong>lead generation</strong>, your website is actually a sales funnel. The decision between a $50 template and a custom bespoke build is not about aesthetics—it&apos;s about <strong>conversion rates</strong> and <strong>trust signals</strong>.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">1. The &quot;Template Tax&quot; on User Trust</h2>
                <p>
                  According to research from Stanford, <strong>75% of users</strong> judge a company&apos;s credibility based on its website design. When a visitor lands on a site that looks like a generic template they&apos;ve seen elsewhere, their &quot;trust alarm&quot; goes off. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                  <div className="bg-muted/30 rounded-2xl border p-6">
                    <h4 className="flex items-center gap-2 font-bold mb-4"><ShieldCheck className="h-5 w-5 text-red-500" /> Template Issues</h4>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                      <li>&quot;Cookie-cutter&quot; look reduces brand authority.</li>
                      <li>Forced layouts: Your message must fit the design.</li>
                      <li>Generic CTA placements that users ignore.</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-2xl border p-6">
                    <h4 className="flex items-center gap-2 font-bold mb-4"><ShieldCheck className="h-5 w-5 text-green-500" /> Custom Benefits</h4>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                      <li>Unique brand identity built on research.</li>
                      <li>Design supports the message and user journey.</li>
                      <li>Strategic CTA placements based on user behavior.</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-primary mt-12 text-3xl font-semibold">2. Analyzing the Conversion Math</h2>
                <p>
                  A custom-built website focuses on removing <strong>friction points</strong>. If your website currently has a 1% conversion rate and you generate 1,000 visitors, you get 10 leads. 
                </p>
                <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center my-8">
                  <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                    <div>
                      <span className="text-muted-foreground text-sm uppercase tracking-widest">Template Site</span>
                      <p className="text-3xl font-bold mt-2">1% Conv. = 10 Leads</p>
                    </div>
                    <div className="text-primary text-4xl hidden md:block">→</div>
                    <div>
                      <span className="text-muted-foreground text-sm uppercase tracking-widest">Custom Site</span>
                      <p className="text-3xl font-bold mt-2 text-primary">2.5% Conv. = 25 Leads</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm italic">That&apos;s a 150% increase in leads from the exact same traffic volume.</p>
                </div>
                <p>
                  Bespoke design allows us to place action points exactly where users are psychologically ready to respond, rather than where a template&apos;s pre-defined grid allows them to be.
                </p>

                <h2 className="text-primary mt-12 text-3xl font-semibold">3. Technical SEO & AI Readiness (GEO)</h2>
                <p>
                  AI search engines like <em>Perplexity</em> and <em>Gemini</em> favor sites with clean, semantic code. Templates often include bloated &quot;div soup&quot; and unused CSS from multiple plugins. 
                </p>
                <p>
                  Custom Next.js sites deliver <strong>clean HTML architecture</strong>. This makes it easier for AI crawlers to extract your services, locations, and unique value propositions, directly increasing your visibility in AI-generated answers.
                </p>

                <div className="bg-primary/5 mt-16 rounded-3xl border border-primary/20 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-center">Is your template holding you back?</h3>
                  <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                    If your website is a primary lead source, every percentage point of conversion matters. I specialize in building custom, high-trust platforms that turn browsers into buyers.
                  </p>
                  <div className="mt-10 flex justify-center">
                    <Link href="/contact">
                      <button className="bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-transform hover:scale-105 active:scale-95">
                        Book Your Free Conversion Strategy Call <ArrowRight className="h-4 w-4" />
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
