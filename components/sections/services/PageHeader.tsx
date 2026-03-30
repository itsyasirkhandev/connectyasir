'use client'

import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function PageHeader() {
  return (
    <header className="bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left Column: Label */}
          <div className="transition-all duration-500 ease-out starting:translate-y-2 starting:opacity-0">
            <span className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase">
              Services & Pricing
            </span>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-4xl transition-all delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
            <h1 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl lg:text-7xl">
              Websites built to make your business{' '}
              <span className="text-muted-foreground/60">
                look credible online.
              </span>
            </h1>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:gap-16 @2xl:grid-cols-2">
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                From branding and design to development, launch, and support —{' '}
                <span className="text-foreground font-medium">
                  everything is handled in one place.
                </span>{' '}
                No chasing multiple freelancers or managing messy handoffs.
              </p>

              <div className="flex flex-col items-start gap-8">
                <PrimaryButton
                  text="View Pricing"
                  onClick={() => {
                    const element = document.getElementById('pricing')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="h-14 px-10 text-lg font-bold"
                />
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  Message on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
