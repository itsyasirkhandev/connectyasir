'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function AboutHero() {
  const router = useRouter()

  return (
    <header className="bg-background overflow-hidden pt-24 pb-16 md:pt-40 md:pb-32 lg:pt-48">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-32 xl:grid-cols-[1.5fr_1fr] xl:gap-40">
          {/* Left Column: Content */}
          <div className="space-y-10 lg:space-y-14">
            <div className="transition-[opacity,transform] duration-500 ease-out starting:translate-y-2 starting:opacity-0">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                The Builder
              </span>
            </div>

            <div className="transition-[opacity,transform] delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
              <h1 className="sr-only">
                About Yasir Khan | Professional Small Business Website Designer
              </h1>
              <h2 className="text-foreground text-5xl leading-[1.05] font-semibold tracking-tighter sm:text-6xl md:text-8xl">
                I build the digital assets that make small businesses{' '}
                <span className="text-muted-foreground">undeniable.</span>
              </h2>
            </div>

            <div className="text-muted-foreground space-y-8 text-lg leading-relaxed transition-[opacity,transform] delay-200 duration-700 ease-out sm:space-y-10 sm:text-xl starting:translate-y-4 starting:opacity-0">
              <p className="max-w-prose">
                I&rsquo;m Yasir. I engineer screaming-fast, high-trust websites
                that turn your visitors into actual clients. With over{' '}
                <strong>3+ years of experience</strong> and multiple successful
                launches, I&rsquo;ve helped businesses generate{' '}
                <strong>1,000+ targeted leads</strong> through performance-first
                design. You get my absolute best work, from the first strategy
                call to the final launch.
              </p>

              <div className="flex flex-col items-start gap-10 pt-6 sm:flex-row sm:items-center">
                <PrimaryButton
                  text="Book Your Free Call"
                  onClick={() => {
                    router.push(CONTACT.calendar)
                  }}
                  className="h-14 px-10 text-lg shadow-lg md:h-16 md:px-12"
                />
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold transition-colors sm:text-base"
                  >
                    WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold transition-colors sm:text-base"
                  >
                    LinkedIn
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full transition-[opacity,transform] delay-300 duration-1000 ease-out starting:translate-y-8 starting:scale-95 starting:rotate-1 starting:opacity-0">
            <div className="border-border/50 bg-card relative aspect-square w-full overflow-hidden rounded-3xl border sm:aspect-4/3 lg:aspect-4/5">
              <Image
                src="/images/yasir-khan.webp"
                alt="Yasir Khan - Web Designer & Developer"
                fill
                className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                preload
              />
              <div className="ring-foreground/10 pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
