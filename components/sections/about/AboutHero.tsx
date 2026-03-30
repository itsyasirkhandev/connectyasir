'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function AboutHero() {
  const router = useRouter()

  return (
    <header className="bg-background pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          {/* Left Column: Label */}
          <div className="transition-all duration-500 ease-out starting:translate-y-2 starting:opacity-0">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              About
            </span>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-4xl">
            <div className="transition-all delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
              <h1 className="text-foreground text-5xl leading-[1.05] font-semibold tracking-tighter md:text-7xl">
                I build websites that help small businesses{' '}
                <span className="text-muted-foreground">look more established online.</span>
              </h1>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
              <div className="text-muted-foreground space-y-8 text-lg leading-relaxed transition-all delay-200 duration-700 ease-out md:text-xl starting:translate-y-4 starting:opacity-0">
                <p className="max-w-prose">
                  I&rsquo;m Yasir — a full-stack developer focused on modern, high-trust websites for small businesses. I handle everything from strategy and design to development and launch, with direct communication throughout.
                </p>

                <div className="flex flex-col items-start gap-8 pt-6 sm:flex-row sm:items-center">
                  <PrimaryButton
                    text="Book a Call"
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
                    WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground hover:text-primary flex items-center gap-2 text-base font-semibold transition-colors"
                  >
                    LinkedIn
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="border-border/50 relative aspect-4/5 w-full max-w-100 overflow-hidden rounded-3xl border transition-all delay-300 duration-1000 ease-out starting:scale-95 starting:opacity-0">
                <Image
                  src="/images/yasir-khan.jpg"
                  alt="Yasir Khan - Web Designer & Developer"
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
