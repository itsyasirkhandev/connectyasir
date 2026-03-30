import type { Metadata } from 'next'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProjectHero from '@/components/sections/project-detail/ProjectHero'
import ProjectOverview from '@/components/sections/project-detail/ProjectOverview'
import TheChallenge from '@/components/sections/project-detail/TheChallenge'
import WhatIDelivered from '@/components/sections/project-detail/WhatIDelivered'
import SolutionApproach from '@/components/sections/project-detail/SolutionApproach'
import TechStackUsed from '@/components/sections/project-detail/TechStackUsed'
import ScreenshotsVisuals from '@/components/sections/project-detail/ScreenshotsVisuals'
import Results from '@/components/sections/project-detail/Results'
import ClientTestimonial from '@/components/sections/project-detail/ClientTestimonial'
import CtaBlock from '@/components/sections/project-detail/CtaBlock'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getApnaQarzCaseStudyPageNode,
  getBreadcrumbNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.apnaQarz)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Apna Qarz', path: '/projects/apna-qarz' },
]

export default function ApnaQarzPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getApnaQarzCaseStudyPageNode(),
        ])}
      />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <ProjectHero />

        <AnswerFirstBlock
          heading="What was built for Apna Qarz"
          summary={PAGE_SUMMARIES.apnaQarz}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Case study summary
          </h2>

          <dl className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-zinc-600">Client</dt>
              <dd className="mt-1 text-zinc-900">Rashid Bashir / Apna Qarz</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Timeline</dt>
              <dd className="mt-1 text-zinc-900">2 weeks</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Scope</dt>
              <dd className="mt-1 text-zinc-900">
                Logo, brand identity, design, development, backend, SEO,
                hosting, dashboard, content
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-600">Result</dt>
              <dd className="mt-1 text-zinc-900">
                1,000+ form submissions in the first month
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-zinc-700">
            Want a site with similar strategic thinking behind it? Review the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website packages
            </Link>{' '}
            or{' '}
            <Link
              href="/contact"
              className="font-medium text-zinc-900 underline"
            >
              book a free call
            </Link>
            .
          </p>
        </section>

        <ProjectOverview />
        <TheChallenge />
        <WhatIDelivered />
        <SolutionApproach />
        <TechStackUsed />
        <ScreenshotsVisuals />
        <Results />
        <ClientTestimonial />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
