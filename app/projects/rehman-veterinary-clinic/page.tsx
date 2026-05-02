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
  getRehmanVetClinicCaseStudyPageNode,
  getBreadcrumbNode,
  schemaGraph,
} from '@/lib/schema'

export const metadata: Metadata = createMetadata(PAGE_SEO.rehmanVetClinic)

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  {
    name: 'Rehman Veterinary Clinic',
    path: '/projects/rehman-veterinary-clinic',
  },
]

export default function RehmanVetClinicPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph([
          getBreadcrumbNode(breadcrumbs),
          getRehmanVetClinicCaseStudyPageNode(),
        ])}
      />
      <Navbar />
      <main>
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Breadcrumbs items={breadcrumbs} />

          <ProjectHero
            title="Rehman Veterinary Clinic"
            description="A professional, trust-focused landing page for a local clinic, resulting in daily customer inquiries."
            industry="Local Veterinary Clinic"
            services="Full Landing Page Design · Technical · On-page SEO"
            image="/images/projects/rehman_veterinary_clinic/rehman_veterinary_clinic_lahore.webp"
            imageAlt="Desktop screenshot of the Rehman Veterinary Clinic homepage"
          />

          <div className="mb-16">
            <AnswerFirstBlock
              heading="What was built for Rehman Vet Clinic"
              summary={PAGE_SUMMARIES.rehmanVetClinic}
            />
          </div>

          <div className="flex flex-col gap-16">
            <ProjectOverview
              client="Dr. Rehman / Rehman Veterinary Clinic"
              timeline="4 Days"
              scope="Landing Page Design, Technical SEO, On-page Optimization, WhatsApp Integration, Google My Business Synergy"
              liveSiteUrl="https://rehmanvetclinic.vercel.app/"
              liveSiteDisplay="rehmanvetclinic.vercel.app"
              beforePoints={[
                'No website, only a GMB profile',
                'Limited digital credibility',
                'Hard for new customers to find full service details',
              ]}
              afterPoints={[
                'Professional digital presence',
                'Showcases services and builds trust with FAQs',
                'Generates daily inquiries via WhatsApp',
              ]}
            />

            <TheChallenge content="Rehman Veterinary Clinic had a solid local reputation and a Google My Business profile, but lacked a dedicated website. This limited their ability to showcase the full range of their services and answer common pet owner questions before they even walked through the door. They needed a professional digital home that would instantly build trust with new pet owners in Lahore." />

            <WhatIDelivered
              deliverables={[
                'Custom Landing Page Design',
                'Service Showcase Section',
                'Interactive FAQ Section',
                'Google My Business Integration',
                'WhatsApp CTA Integration',
                'Technical & On-page SEO',
                'High-speed Next.js Frontend',
              ]}
            />

            <SolutionApproach content="I built a high-performance landing page using Next.js to ensure the best possible SEO and load speeds. The design focuses on trust-building elements: clear service descriptions, a comprehensive FAQ section to address common concerns, and prominent WhatsApp CTAs to make it effortless for pet owners to reach out." />

            <TechStackUsed
              stack={[
                'Next.js',
                'React',
                'Tailwind CSS',
                'TypeScript',
                'Vercel',
              ]}
            />

            <ScreenshotsVisuals
              screenshots={[
                {
                  src: '/images/projects/rehman_veterinary_clinic/rehman_veterinary_clinic_lahore.webp',
                  alt: 'Rehman Veterinary Clinic homepage desktop view',
                  label: 'Desktop · Homepage',
                  width: 1280,
                  height: 800,
                },
                {
                  src: '/images/projects/rehman_veterinary_clinic/services.webp',
                  alt: 'Services section of the Rehman Veterinary Clinic website',
                  label: 'Desktop · Services',
                  width: 1280,
                  height: 800,
                },
                {
                  src: '/images/projects/rehman_veterinary_clinic/faq.webp',
                  alt: 'FAQ section of the Rehman Veterinary Clinic website',
                  label: 'Desktop · FAQs',
                  width: 1280,
                  height: 800,
                },
              ]}
            />

            <Results
              metrics={[
                {
                  value: 'Daily',
                  label:
                    'New inquiries generated through the website and WhatsApp integration.',
                },
                {
                  value: '4',
                  label:
                    'Days from initial concept to a fully optimized, live production site.',
                },
                {
                  value: '100%',
                  label:
                    'Increase in digital touchpoints for potential local customers.',
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
