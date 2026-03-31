import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHeader from '@/components/sections/services/PageHeader'
import ServicesBreakdown from '@/components/sections/services/ServicesBreakdown'
import PricingPackages from '@/components/sections/services/PricingPackages'
import MyProcess from '@/components/sections/services/MyProcess'
import Faq from '@/components/sections/services/Faq'
import CtaBlock from '@/components/sections/services/CtaBlock'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getPrimaryServiceNode,
  getServicesFaqNode,
  getServicesPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.services)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getServicesPageNode(),
          getPrimaryServiceNode(),
          getServicesFaqNode(),
        ])}
      />
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-10 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <PageHeader />

        <div className="container mx-auto px-4 sm:px-6">
          <AnswerFirstBlock
            heading="Website packages, pricing, timelines, and support"
            summary={PAGE_SUMMARIES.services}
          />
        </div>

        <ServicesBreakdown />
        <PricingPackages />
        <MyProcess />
        <Faq />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
