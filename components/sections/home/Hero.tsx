'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="grid-wrapper overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="grid-background" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="start flex flex-col items-start text-left transition-all duration-300 ease-out starting:translate-y-4 starting:opacity-0">
          <h1 className="text-foreground max-w-[18ch] text-5xl leading-tight font-semibold tracking-tighter md:text-6xl">
            Your website should <span className="text-primary">win trust</span>{' '}
            not lose customers.
          </h1>

          <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed">
            I design and build modern websites for small businesses that look
            credible, load fast, and help turn visitors into leads. Designed
            with intent, built for growth.
          </p>

          <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <PrimaryButton
              text="Book a Free Call"
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
              Message on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <footer className="border-border mt-16 flex gap-12 border-t pt-12 md:gap-24">
            <div className="flex flex-col items-start">
              <p className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                3
              </p>
              <p className="text-muted-foreground mt-1 text-sm tracking-widest uppercase">
                Businesses Launched
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-foreground font-mono text-3xl font-semibold tracking-tighter">
                1k+
              </p>
              <p className="text-muted-foreground mt-1 text-sm tracking-widest uppercase">
                Leads Generated
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
