import type { Metadata } from 'next'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHeader from '@/components/sections/about/AboutHero'
import MyValues from '@/components/sections/about/MyValues'
import TechStack from '@/components/sections/about/TechStack'
import Testimonials from '@/components/sections/shared/Testimonials'
import CtaBlock from '@/components/sections/about/CtaBlock'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getAboutPageNode,
  getBreadcrumbNode,
  getPersonNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.about)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getAboutPageNode(),
          getPersonNode(),
        ])}
      />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <PageHeader />

        <AnswerFirstBlock
          heading="Who Yasir Khan is and how he works"
          summary={PAGE_SUMMARIES.about}
        />

        <section className="mt-8 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What to expect
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
            <li>You talk directly to the person building your website.</li>
            <li>You see the price before the work starts.</li>
            <li>Most projects launch in 1–3 weeks.</li>
            <li>Every website is custom-built for the business.</li>
          </ul>

          <p className="mt-6 text-sm text-zinc-700">
            Want to see proof before contacting Yasir? Browse the{' '}
            <Link
              href="/projects"
              className="font-medium text-zinc-900 underline"
            >
              project case studies
            </Link>
            . Want pricing first? See the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              service packages
            </Link>
            .
          </p>
        </section>

        <MyValues />
        <TechStack />
        <Testimonials />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
