'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { AVAILABILITY } from '@/lib/site-config'

import { AnimatedHeading } from './AnimatedHeading'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="grid-wrapper overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="grid-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start text-left transition-all duration-300 ease-out lg:items-center lg:text-center starting:translate-y-4 starting:opacity-0">
          <div className="border-border/50 bg-muted/30 text-foreground/80 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            {AVAILABILITY.badge.replace('🟢 ', '')}
          </div>

          <AnimatedHeading className="lg:mx-auto" />

          <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed lg:mx-auto">
            Your business deserves a blazingly fast, premium website that builds
            instant trust and turns cold visitors into daily leads.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8 lg:justify-center">
            <PrimaryButton
              text="Book Your Free Call →"
              onClick={() => {
                router.push('/contact')
              }}
              className="h-11 px-6 text-sm sm:h-12 sm:px-8 sm:text-base"
            />
            <a
              href="https://wa.me/923014545482"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold transition-colors"
            >
              Message on WhatsApp →
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <footer className="border-border mt-12 grid grid-cols-2 gap-8 border-t pt-12 sm:mt-16 sm:flex sm:flex-wrap sm:justify-center sm:gap-24 lg:justify-center">
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-2xl font-semibold tracking-tighter sm:text-3xl">
                3
              </p>
              <p className="text-muted-foreground mt-1 text-[10px] tracking-widest uppercase sm:text-sm">
                Businesses Launched
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-2xl font-semibold tracking-tighter sm:text-3xl">
                1,000+
              </p>
              <p className="text-muted-foreground mt-1 text-[10px] tracking-widest uppercase sm:text-sm">
                Leads Generated
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-2xl font-semibold tracking-tighter sm:text-3xl">
                &lt;3s
              </p>
              <p className="text-muted-foreground mt-1 text-[10px] tracking-widest uppercase sm:text-sm">
                Load Times
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
