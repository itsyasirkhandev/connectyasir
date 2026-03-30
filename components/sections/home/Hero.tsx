'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="grid-wrapper overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="grid-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center transition-all duration-300 ease-out starting:translate-y-4 starting:opacity-0">
          <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Your website should <span className="text-primary">win trust</span> not lose customers.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I design and build modern websites for small businesses that look
            credible, load fast, and help turn visitors into leads. Designed with intent, built for growth.
          </p>

          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row">
            <PrimaryButton
              text="Book a Free Call"
              onClick={() => router.push('/contact')}
              className="h-14 px-10 text-lg"
            />
            <a
              href="https://wa.me/923014545482"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              Message on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <footer className="mt-16 grid grid-cols-2 gap-12 border-t border-border pt-12 md:gap-24">
            <div className="flex flex-col items-center">
              <p className="font-mono text-3xl font-semibold tracking-tighter text-foreground">3</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Businesses Launched</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-mono text-3xl font-semibold tracking-tighter text-foreground">1k+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Leads Generated</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
