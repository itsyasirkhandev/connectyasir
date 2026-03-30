import type { Metadata } from 'next'
import Link from 'next/link'

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
import {
  PAGE_SEO,
  PAGE_SUMMARIES,
  PROJECTS,
  type BreadcrumbItem,
} from '@/lib/site-data'
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
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <PageHeader />

        <AnswerFirstBlock
          heading="Real client websites and outcomes"
          summary={PAGE_SUMMARIES.projects}
        />

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="rounded-2xl border border-zinc-200 p-5"
            >
              <p className="text-sm font-medium text-emerald-700">
                {project.projectType}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                {project.name}
              </h2>
              <p className="mt-3 text-zinc-700">{project.shortDescription}</p>
              <Link
                href={project.path}
                className="mt-4 inline-flex text-sm font-medium text-zinc-900 underline"
              >
                {project.slug === 'apna-qarz'
                  ? 'Read the full case study'
                  : 'View project section'}
              </Link>
            </article>
          ))}
        </section>

        <ProjectGrid />

        <div className="mt-8 text-sm text-zinc-700">
          <p>
            Need pricing before you browse? Go to the{' '}
            <Link
              href="/services"
              className="font-medium text-zinc-900 underline"
            >
              website pricing page
            </Link>
            . Ready to start your own project?{' '}
            <Link
              href="/contact"
              className="font-medium text-zinc-900 underline"
            >
              Book a free call
            </Link>
            .
          </p>
        </div>

        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
