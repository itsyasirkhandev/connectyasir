import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProjectHero from '@/components/sections/project-detail/ProjectHero'
import ProjectOverview from '@/components/sections/project-detail/ProjectOverview'
import TheChallenge from '@/components/sections/project-detail/TheChallenge'
import WhatIDelivered from '@/components/sections/project-detail/WhatIDelivered'
import SolutionApproach from '@/components/sections/project-detail/SolutionApproach'
import TechStackUsed from '@/components/sections/project-detail/TechStackUsed'
import ScreenshotsVisuals from '@/components/sections/project-detail/ScreenshotsVisuals'
import Results from '@/components/sections/project-detail/Results'
import Testimonials from '@/components/sections/shared/Testimonials'
import CtaBlock from '@/components/sections/project-detail/CtaBlock'

import { AnswerFirstBlock } from '@/components/seo/answer-first-block'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, PAGE_SUMMARIES, type BreadcrumbItem } from '@/lib/site-data'
import {
  getApnaQarzCaseStudyPageNode,
  getBreadcrumbNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.apnaQarz)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Apna Qarz', path: '/projects/apna-qarz' },
]

export default function ApnaQarzPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getApnaQarzCaseStudyPageNode(),
        ])}
      />
      <Navbar />
      <main>
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Breadcrumbs items={breadcrumbs} />

          <ProjectHero
            title="Apna Qarz"
            description="A secure dashboard and blazing fast platform, built from zero digital presence to 1,000+ leads in 30 days."
            industry="Finance Advisory"
            services="Full-Stack · Done-for-You"
            image="/images/projects/apnaqarz/apna-qarz-homepage.webp"
            imageAlt="Desktop screenshot of the Apna Qarz homepage"
          />

          <div className="mb-16">
            <AnswerFirstBlock
              heading="What was built for Apna Qarz"
              summary={PAGE_SUMMARIES.apnaQarz}
            />
          </div>

          <div className="flex flex-col gap-16">
            <ProjectOverview
              client="Rashid Bashir / Apna Qarz"
              timeline="14 Days"
              scope="Complete Branding, UX Design, Custom Development, Backend Systems, SEO, Managed Hosting"
              liveSiteUrl="https://apnaqarz.com"
              liveSiteDisplay="apnaqarz.com"
              beforePoints={[
                'Zero digital footprint',
                'Absent brand identity',
                'Total reliance on manual outreach',
              ]}
              afterPoints={[
                'Blazing fast custom platform',
                'Secure admin dashboard',
                '1,000+ high-intent leads generated',
              ]}
            />
            <TheChallenge content="Apna Qarz needed to emerge from nothing and instantly appear as the most trusted finance advisory in their space. They required a secure dashboard to manage applications and a lead flow that never slept. The absence of any pre-existing digital footprint meant every pixel had to immediately convey authority and reliability to a skeptical audience seeking financial services. Their internal operation also totally relied on manual outreach, creating a bottleneck for growth." />
            <WhatIDelivered
              deliverables={[
                'Premium brand identity & logo',
                'High-converting site architecture',
                'Custom Next.js frontend',
                'Secure data dashboard',
                'Persuasive, human-first copywriting',
                'Technical SEO foundation',
                'Zero-maintenance managed hosting',
              ]}
            />
            <SolutionApproach content="I engineered the site around one primary metric: trust. By combining ultra-fast load times with a frictionless application process, we created a system that made submitting an inquiry feel effortless and secure. Every interaction was optimized to ask for less upfront, progressively disclosing the form to avoid overwhelming users, while behind the scenes securely saving and syncing data in real-time." />
            <TechStackUsed
              stack={[
                'Next.js',
                'React',
                'Tailwind CSS',
                'TypeScript',
                'Convex',
              ]}
            />
            <ScreenshotsVisuals
              screenshots={[
                {
                  src: '/images/projects/apnaqarz/apna-qarz-homepage.webp',
                  alt: 'Apna Qarz desktop homepage — full hero section with loan application entry',
                  label: 'Desktop · Homepage',
                  width: 1280,
                  height: 800,
                },
                {
                  src: '/images/projects/apnaqarz/apnaqarz application form desktop.webp',
                  alt: 'Apna Qarz desktop application form — multi-step loan application flow',
                  label: 'Desktop · Application Form',
                  width: 1280,
                  height: 800,
                },
                {
                  src: '/images/projects/apnaqarz/apnaqarz mobile hero.webp',
                  alt: 'Apna Qarz mobile view — hero and primary call-to-action on small screen',
                  label: 'Mobile · Hero',
                  width: 390,
                  height: 844,
                },
                {
                  src: '/images/projects/apnaqarz/apnaqarz admin dashboard.webp',
                  alt: 'Apna Qarz admin dashboard — analytics, lead trends and loan type distribution',
                  label: 'Admin · Dashboard & Analytics',
                  width: 1280,
                  height: 800,
                },
              ]}
            />
            <Results
              metrics={[
                {
                  value: '1,000+',
                  label:
                    'Qualified form submissions generated within the very first month.',
                },
                {
                  value: '14',
                  label:
                    'Days to design, code, and successfully launch the entire platform.',
                },
                {
                  value: '50k+',
                  label:
                    'Monthly visitors comfortably handled by the new scalable architecture.',
                },
              ]}
            />
          </div>
        </div>

        <Testimonials />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
