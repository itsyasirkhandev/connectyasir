'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function AboutHero() {
  const router = useRouter()

  return (
    <header className="bg-background overflow-hidden pt-16 pb-12 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24 xl:grid-cols-[1.5fr_1fr] xl:gap-32">
          {/* Left Column: Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="transition-[opacity,transform] duration-500 ease-out starting:translate-y-2 starting:opacity-0">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                The Builder
              </span>
            </div>

            <div className="transition-[opacity,transform] delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
              <h1 className="sr-only">
                About Yasir Khan | Professional Small Business Website Designer
              </h1>
              <h2 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tighter sm:text-5xl md:text-7xl">
                I build the digital assets that make small businesses{' '}
                <span className="text-muted-foreground">undeniable.</span>
              </h2>
            </div>

            <div className="text-muted-foreground space-y-6 text-base leading-relaxed transition-[opacity,transform] delay-200 duration-700 ease-out sm:space-y-8 sm:text-lg starting:translate-y-4 starting:opacity-0">
              <p className="max-w-prose">
                I&rsquo;m Yasir. I engineer screaming-fast, high-trust websites
                that turn your visitors into actual clients. No agencies. No
                junior developers. You get my absolute best work, from the first
                strategy call to the final launch.
              </p>

              <div className="flex flex-col items-start gap-8 pt-4 sm:flex-row sm:items-center">
                <PrimaryButton
                  text="Book Your Free Call"
                  onClick={() => {
                    router.push(CONTACT.calendar)
                  }}
                  className="h-14 px-8 text-base md:h-16 md:px-10"
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
