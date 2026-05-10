import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/home/Hero'
import { TrustBar } from '@/components/sections/home/TrustBar'

// Lazy load below-the-fold components to reduce initial render-blocking CSS/JS
const ServicesOverview = dynamic(
  () => import('@/components/sections/home/ServicesOverview')
)
const FeaturedProjects = dynamic(
  () => import('@/components/sections/home/FeaturedProjects')
)
const HowItWorks = dynamic(
  () => import('@/components/sections/home/HowItWorks')
)
const Testimonials = dynamic(
  () => import('@/components/sections/shared/Testimonials')
)
const TechStack = dynamic(() => import('@/components/sections/home/TechStack'))
const PerformanceTable = dynamic(() =>
  import('@/components/sections/home/PerformanceTable').then(
    (mod) => mod.PerformanceTable
  )
)
const FaqSection = dynamic(
  () => import('@/components/sections/shared/FaqSection')
)
const FinalCta = dynamic(() => import('@/components/sections/home/FinalCta'))
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'))
const Footer = dynamic(() => import('@/components/Footer'))

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { EeatSignals } from '@/components/seo/EeatSignals'
import { AuthorProfile } from '@/components/seo/AuthorProfile'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, HOME_FAQS } from '@/lib/site-data'
import {
  getHomePageNode,
  getHomeFaqNode,
  getHowToNode,
  getNewsArticleNode,
  schemaGraph,
} from '@/lib/schema'

import { Citations } from '@/components/seo/Citations'

export const metadata: Metadata = createMetadata(PAGE_SEO.home)

export default function Home() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getHomePageNode(),
          getHomeFaqNode(),
          getHowToNode(),
          getNewsArticleNode(PAGE_SEO.home),
        ])}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />

        <section className="bg-background relative overflow-hidden py-16 md:py-32">
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <div className="mb-8 flex justify-center">
              <EeatSignals />
            </div>
            <AnswerFirstBlock
              heading="Your Specialist for Small Business Website Design & Development"
              summary={PAGE_SUMMARIES.home}
            />

            <div className="mx-auto mt-12 max-w-4xl">
              <div className="border-border/40 flex flex-col items-start justify-between gap-6 border-t pt-10 md:flex-row md:items-center">
                <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                  Looking for more?
                </p>
                <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-4">
                  <Link
                    href="/services"
                    className="group text-foreground hover:text-primary focus-visible:ring-ring flex items-center gap-1.5 text-base font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80"
                  >
                    Pricing & Packages
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/projects"
                    className="group text-foreground hover:text-primary focus-visible:ring-ring flex items-center gap-1.5 text-base font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80"
                  >
                    Case Studies
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group text-foreground hover:text-primary focus-visible:ring-ring flex items-center gap-1.5 text-base font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesOverview />
        <FeaturedProjects />
        <HowItWorks />
        <Testimonials />
        <TechStack />
        <PerformanceTable />
        <FaqSection
          faqs={HOME_FAQS}
          title="Common questions about premium web design"
          description="Everything you need to know about how a premium website helps your business grow."
        />

        <Citations />
        <AuthorProfile />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
