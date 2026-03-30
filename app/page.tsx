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

        <section>
          <AnswerFirstBlock
            heading="What Yasir Khan does"
            summary={PAGE_SUMMARIES.home}
          />

          <div>
            <p>
              Looking for pricing? Visit the{' '}
              <Link
                href="/services"
              >
                website design and development pricing page
              </Link>
              . Want proof? See the{' '}
              <Link
                href="/projects"
              >
                web design case studies
              </Link>
              . Ready to talk?{' '}
              <Link
                href="/contact"
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
