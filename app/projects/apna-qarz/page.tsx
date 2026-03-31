import type { Metadata } from 'next'

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
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <ProjectHero />

        <div className="mb-16">
          <AnswerFirstBlock
            heading="What was built for Apna Qarz"
            summary={PAGE_SUMMARIES.apnaQarz}
          />
        </div>

        <div className="divide-y">
          <ProjectOverview />
          <TheChallenge />
          <WhatIDelivered />
          <SolutionApproach />
          <TechStackUsed />
          <ScreenshotsVisuals />
          <Results />
        </div>

        <ClientTestimonial />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
