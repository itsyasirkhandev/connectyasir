'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { AVAILABILITY, CONTACT } from '@/lib/site-config'

export default function PageHeader() {
  const router = useRouter()
  const availabilityText = AVAILABILITY.contact.replace('🟢 ', '')

  return (
    <header className="grid-wrapper overflow-hidden pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
      <div className="grid-background" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl transition-all duration-300 ease-out starting:translate-y-4 starting:opacity-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/90">
              {availabilityText}
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            A few businesses I’ve helped <span className="text-primary text-balance inline-block">improve online.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Real projects built to increase trust, improve design, and support
            growth. Every site is designed with a specific business goal in
            mind.
          </p>

          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <PrimaryButton
              text="Start Your Project"
              onClick={() => router.push(CONTACT.calendar)}
              className="h-14 px-10 text-lg font-bold"
            />
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              Message on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
