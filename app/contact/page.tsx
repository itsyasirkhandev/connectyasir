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
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <PageHeader />

        <AnswerFirstBlock
          heading="How to start your project"
          summary={PAGE_SUMMARIES.contact}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Before you book
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-700">
            {CONTACT_FAQS.slice(0, 3).map((faq) => (
              <li key={faq.question}>
                <strong className="text-zinc-900">{faq.question}</strong>
                <p className="mt-1">{faq.answer}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Still comparing options? Review the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website pricing
            </Link>{' '}
            or browse{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              real client projects
            </Link>
            .
          </p>
        </section>

        <ContactOptions />
        <MiniFaq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
