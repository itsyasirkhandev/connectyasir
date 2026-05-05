import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHeader from '@/components/sections/projects/PageHeader'
import ProjectGrid from '@/components/sections/projects/ProjectGrid'
import CtaBlock from '@/components/sections/projects/CtaBlock'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getBreadcrumbNode,
  getProjectsCollectionPageNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.projects)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
]

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getProjectsCollectionPageNode(),
        ])}
      />
      <Navbar />
      <main id="main-content">
        <div className="container mx-auto px-4 pt-10 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <PageHeader />

        <section className="bg-background relative overflow-hidden py-16 md:py-32">
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <AnswerFirstBlock
              heading="Real client websites and outcomes"
              summary={PAGE_SUMMARIES.projects}
            />

            <div className="mx-auto mt-12 max-w-4xl px-4 md:px-12">
              <div className="border-border/40 flex flex-col items-center justify-between gap-6 border-t pt-10 md:flex-row">
                <p className="text-muted-foreground text-sm font-medium tracking-tight">
                  Looking for more?
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  <Link
                    href="/services"
                    className="group text-foreground hover:text-primary flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Pricing & Packages
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/about"
                    className="group text-foreground hover:text-primary flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    My Journey
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group text-foreground hover:text-primary flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectGrid />

        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
