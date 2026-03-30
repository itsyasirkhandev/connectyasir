import type { Metadata } from 'next'
import Link from 'next/link'

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
import {
  PAGE_SEO,
  PAGE_SUMMARIES,
  PRICING_PACKAGES,
  type BreadcrumbItem,
} from '@/lib/site-data'
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
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <PageHeader />

        <AnswerFirstBlock
          heading="Website packages, pricing, timelines, and support"
          summary={PAGE_SUMMARIES.services}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Quick pricing summary
          </h2>

          <ul className="mt-4 space-y-4">
            {PRICING_PACKAGES.map((pkg) => (
              <li
                key={pkg.name}
                className="rounded-xl border border-zinc-200 p-4"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-zinc-700">{pkg.tagline}</p>
                <p className="mt-2 text-zinc-900">
                  <strong>${pkg.price}</strong> · {pkg.timeline}
                </p>
                <p className="mt-2 text-sm text-zinc-700">{pkg.description}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Want examples before choosing a package? See the{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              website project portfolio
            </Link>{' '}
            or read the{' '}
            <Link
              href="/projects/apna-qarz"
              className="font-medium text-zinc-900 underline"
            >
              Apna Qarz case study
            </Link>
            .
          </p>
        </section>

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
