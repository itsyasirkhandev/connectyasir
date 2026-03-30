import type { Metadata } from 'next'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/sections/home/Hero'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects'
import HowItWorks from '@/components/sections/home/HowItWorks'
import Testimonials from '@/components/sections/shared/Testimonials'
import TechStack from '@/components/sections/home/TechStack'
import FinalCta from '@/components/sections/home/FinalCta'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES } from '@/lib/site-data'
import { getHomePageNode, schemaGraph } from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.home)

export default function Home() {
  return (
    <>
      <JsonLd data={schemaGraph([getHomePageNode()])} />
      <Navbar />
      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-6 py-10">
          <AnswerFirstBlock
            heading="What Yasir Khan does"
            summary={PAGE_SUMMARIES.home}
          />

          <div className="mt-6 text-sm text-zinc-700">
            <p>
              Looking for pricing? Visit the{' '}
              <Link
                href="/services"
                className="font-medium text-zinc-900 underline"
              >
                website design and development pricing page
              </Link>
              . Want proof? See the{' '}
              <Link
                href="/projects"
                className="font-medium text-zinc-900 underline"
              >
                web design case studies
              </Link>
              . Ready to talk?{' '}
              <Link
                href="/contact"
                className="font-medium text-zinc-900 underline"
              >
                Book a free website call
              </Link>
              .
            </p>
          </div>
        </section>

        <ServicesOverview />
        <FeaturedProjects />
        <HowItWorks />
        <Testimonials />
        <TechStack />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
