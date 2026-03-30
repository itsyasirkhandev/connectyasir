import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHeader from '@/components/sections/contact/PageHeader'
import ContactOptions from '@/components/sections/contact/ContactOptions'
import MiniFaq from '@/components/sections/contact/MiniFaq'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getContactFaqNode,
  getContactPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.contact)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getContactPageNode(),
          getContactFaqNode(),
        ])}
      />
      <Navbar />
      <main>
        <div className="container mx-auto px-6 pt-10">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <PageHeader />

        <div className="container mx-auto px-6">
          <AnswerFirstBlock
            heading="How to start your project"
            summary={PAGE_SUMMARIES.contact}
          />
        </div>

        <ContactOptions />
        <MiniFaq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
