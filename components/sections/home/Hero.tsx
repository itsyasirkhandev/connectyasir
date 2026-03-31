'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { AVAILABILITY } from '@/lib/site-config'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="grid-wrapper overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="grid-background" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-start text-left transition-all duration-300 ease-out lg:items-center lg:text-center starting:translate-y-4 starting:opacity-0">
          <div className="border-border/50 bg-muted/30 text-foreground/80 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            {AVAILABILITY.badge.replace('🟢 ', '')}
          </div>

          <h1 className="text-foreground max-w-[18ch] text-5xl leading-tight font-semibold tracking-tighter md:text-6xl">
            Stop losing customers to a slow, outdated website.
          </h1>

          <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed lg:mx-auto">
            Your business deserves a blazingly fast, premium website that builds
            instant trust and turns cold visitors into daily leads.
          </p>

          <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center lg:justify-center">
            <PrimaryButton
              text="Book Your Free Call →"
              onClick={() => {
                router.push('/contact')
              }}
              className="h-12 px-8 text-base"
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

          <footer className="border-border mt-16 flex flex-wrap justify-start gap-12 border-t pt-12 md:gap-24 lg:justify-center">
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                3
              </p>
              <p className="text-muted-foreground mt-1 text-sm tracking-widest uppercase">
                Businesses Launched
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                1,000+
              </p>
              <p className="text-muted-foreground mt-1 text-sm tracking-widest uppercase">
                Leads Generated
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                &lt;3s
              </p>
              <p className="text-muted-foreground mt-1 text-sm tracking-widest uppercase">
                Load Times
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
