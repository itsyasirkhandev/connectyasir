'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { AVAILABILITY } from '@/lib/site-config'
import { cn } from '@/lib/utils'

import { AnimatedHeading } from './AnimatedHeading'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="grid-wrapper overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="grid-background" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="border-border/50 bg-muted/30 text-foreground/80 mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-xs font-semibold">
            <div className="relative flex h-2 w-2">
              <div className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></div>
              <div className="bg-primary relative inline-flex h-2 w-2 rounded-full"></div>
            </div>
            {AVAILABILITY.badge.replace('🟢 ', '')}
          </div>

          <AnimatedHeading className="text-center" />

          <p className="text-muted-foreground mx-auto mt-6 max-w-prose text-base leading-relaxed md:text-lg">
            Your business deserves a blazingly fast, premium website that builds
            instant trust and turns cold visitors into daily leads.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <PrimaryButton
              text="Book Your Free Call"
              onClick={() => {
                router.push('/contact')
              }}
              className="h-12 px-8 text-base shadow-md"
            />
            <a
              href="https://wa.me/923014545482"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group flex items-center gap-2 py-2 text-base font-semibold transition-colors',
                'text-foreground hover:text-primary focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80'
              )}
            >
              Message on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="border-border mt-16 grid w-full grid-cols-1 gap-10 border-t pt-10 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                3
              </span>
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                Companies Launched
              </span>
              <p className="text-muted-foreground max-w-40 text-xs leading-relaxed">
                Strategic digital partners for growing businesses.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                1,000+
              </span>
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                Leads Generated
              </span>
              <p className="text-muted-foreground max-w-40 text-xs leading-relaxed">
                Proven results in conversion optimization.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                &lt;3s
              </span>
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                Average Load Times
              </span>
              <p className="text-muted-foreground max-w-40 text-xs leading-relaxed">
                Built for performance and technical SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
