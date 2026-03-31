'use client'

import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT, AVAILABILITY } from '@/lib/site-config'

export default function PageHeader() {
  const availabilityText = AVAILABILITY.contact.replace('🟢 ', '')

  return (
    <header className="bg-background pt-16 pb-12 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          {/* Left Column: Label */}
          <div className="transition-all duration-500 ease-out starting:translate-y-2 starting:opacity-0">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-4xl transition-all delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              <span className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
                {availabilityText}
              </span>
            </div>

            <h1 className="text-foreground mt-8 text-3xl leading-[1.05] font-semibold tracking-tighter sm:text-5xl md:text-7xl">
              Let’s architect your next{' '}
              <span className="text-muted-foreground">growth engine.</span>
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
              <p className="text-muted-foreground max-w-prose text-base leading-relaxed sm:text-lg md:text-xl">
                Grab a totally free 30-minute call. I’ll audit your current
                process and tell you exactly how to capture more leads.
              </p>

              <div className="flex flex-col items-start gap-8">
                <PrimaryButton
                  text="Schedule a Call"
                  onClick={() => window.open(CONTACT.calendar, '_blank')}
                  className="h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg"
                />
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold transition-colors sm:text-base"
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
