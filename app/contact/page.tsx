import type { Metadata } from 'next'
import Link from 'next/link'

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
import {
  CONTACT_FAQS,
  PAGE_SEO,
  PAGE_SUMMARIES,
  type BreadcrumbItem,
} from '@/lib/site-data'
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

          <section className="border-border bg-muted/30 mt-8 rounded-2xl border p-6">
            <h2 className="text-foreground text-2xl font-semibold">
              Before you book
            </h2>

            <ul className="text-muted-foreground mt-4 space-y-3">
              {CONTACT_FAQS.slice(0, 3).map((faq) => (
                <li key={faq.question}>
                  <strong className="text-foreground">{faq.question}</strong>
                  <p className="mt-1">{faq.answer}</p>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mt-6 text-sm">
              Still comparing options? Review the{' '}
              <Link
                href="/services"
                className="text-foreground decoration-primary/30 font-medium underline underline-offset-4"
              >
                website pricing
              </Link>{' '}
              or browse{' '}
              <Link
                href="/projects"
                className="text-foreground decoration-primary/30 font-medium underline underline-offset-4"
              >
                real client projects
              </Link>
              .
            </p>
          </section>
        </div>

        <ContactOptions />
        <MiniFaq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
