'use client'

import { CONTACT, AVAILABILITY } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { PrimaryButton } from '@/components/ui/primary-button'
import { useRouter } from 'next/navigation'

export default function FinalCta() {
  const router = useRouter()
  const availabilityText = AVAILABILITY.contact.replace('🟢 ', '')

  return (
    <section className="@container overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-muted/30 border-border/50 relative overflow-hidden rounded-[2.5rem] border p-8 sm:p-12 md:p-20">
          {/* Subtle background decoration */}
          <div className="bg-primary/5 pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <div className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></div>
                  <div className="bg-primary relative inline-flex h-2 w-2 rounded-full"></div>
                </div>
                <span className="text-muted-foreground/90 text-xs font-semibold tracking-widest uppercase">
                  {availabilityText}
                </span>
              </div>

              <h2 className="text-foreground text-3xl leading-tight font-semibold tracking-tighter sm:text-5xl">
                Every day you wait, you&apos;re handing customers to your
                competitors.
              </h2>

              <p className="text-muted-foreground max-w-prose text-base leading-relaxed">
                Spend 30 minutes on a free call, and I&apos;ll show you exactly
                how to fix your online presence.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <PrimaryButton
                text="Book Your Free Call"
                onClick={() => {
                  router.push(CONTACT.calendar)
                }}
                className="h-16 px-10 text-base shadow-xl"
              />

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group border-border/50 bg-background/50 flex h-16 items-center justify-center gap-3 rounded-2xl border px-10 text-base font-semibold transition-all',
                  'text-foreground hover:bg-background hover:text-primary focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80'
                )}
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
