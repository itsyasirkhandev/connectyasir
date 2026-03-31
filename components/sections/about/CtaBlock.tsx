'use client'

import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/ui/primary-button'
import { AVAILABILITY, CONTACT } from '@/lib/site-config'

export default function CtaBlock() {
  const router = useRouter()
  const availabilityText = AVAILABILITY.contact.replace('🟢 ', '')

  return (
    <section className="bg-background @container overflow-hidden py-16 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-muted/30 border-border/50 relative overflow-hidden rounded-2xl border p-6 sm:rounded-[2.5rem] @3xl:p-20">
          <div className="bg-primary/10 pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full blur-[80px] sm:-top-24 sm:-right-24 sm:h-96 sm:w-96 sm:blur-[100px]" />
          <div className="bg-primary/5 pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full blur-[60px] sm:-bottom-24 sm:-left-24 sm:h-72 sm:w-72 sm:blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 sm:gap-12 @4xl:grid-cols-[1.3fr_0.7fr]">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex h-full w-full rounded-full bg-success"></span>
                </span>
                <span className="text-muted-foreground/90 text-[10px] font-semibold tracking-[0.25em] uppercase sm:text-xs">
                  {availabilityText}
                </span>
              </div>

              <h2 className="text-foreground text-3xl leading-[1.1] font-semibold tracking-tighter sm:text-4xl @3xl:text-6xl">
                If your work is world-class,{' '}
                <span className="text-primary">
                  your website needs to prove it.
                </span>
              </h2>

              <p className="text-muted-foreground max-w-[45ch] text-base leading-relaxed sm:text-lg @3xl:text-xl">
                Let’s engineer a digital presence that matches the true quality
                of your business.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <PrimaryButton
                text="Book Your Free Call →"
                onClick={() => {
                  router.push(CONTACT.calendar)
                }}
                className="shadow-primary/25 h-14 rounded-xl px-8 text-base font-semibold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] sm:h-16 sm:rounded-2xl sm:px-10 sm:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
