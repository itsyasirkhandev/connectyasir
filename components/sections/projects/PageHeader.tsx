'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function PageHeader() {
  const router = useRouter()

  return (
    <header className="bg-background pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          {/* Left Column: Label */}
          <div className="transition-all duration-500 ease-out starting:translate-y-2 starting:opacity-0">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Recent Work
            </span>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-4xl transition-all delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
            <h1 className="text-foreground text-5xl leading-[1.05] font-semibold tracking-tighter md:text-7xl">
              A few businesses I’ve helped{' '}
              <span className="text-muted-foreground">improve online.</span>
            </h1>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
              <p className="text-muted-foreground max-w-prose text-lg leading-relaxed md:text-xl">
                Real projects built to increase trust, improve design, and
                support growth. Every site is designed with a specific business
                goal in mind.
              </p>

              <div className="flex flex-col items-start gap-8">
                <PrimaryButton
                  text="Start Your Project"
                  onClick={() => {
                    router.push(CONTACT.calendar)
                  }}
                  className="h-16 px-10 text-lg"
                />
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-foreground hover:text-primary flex items-center gap-2 text-base font-semibold transition-colors"
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
