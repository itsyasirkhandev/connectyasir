import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PageHeader from '@/components/sections/about/AboutHero'
import MyValues from '@/components/sections/about/MyValues'
import MissionSection from '@/components/sections/about/MissionSection'
import TechStack from '@/components/sections/home/TechStack'
import Testimonials from '@/components/sections/shared/Testimonials'
import CtaBlock from '@/components/sections/about/CtaBlock'

import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/seo'
import { PAGE_SEO, type BreadcrumbItem } from '@/lib/site-data'
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
      <main id="main-content">
        <div className="container mx-auto px-4 pt-10 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <PageHeader />
        <MyValues />
        <MissionSection />
        <TechStack />
        <Testimonials />
        <CtaBlock />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
