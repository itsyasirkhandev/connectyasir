'use client'

import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function CtaBlock() {
  const router = useRouter()

  return (
    <section className="bg-background @container overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="bg-muted/30 border-border/50 relative overflow-hidden rounded-[2.5rem] border p-8 @3xl:p-20">
          <div className="bg-primary/10 pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />
          <div className="bg-primary/5 pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 @4xl:grid-cols-[1.3fr_0.7fr]">
            <div className="flex flex-col gap-8">
              <h2 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tighter @3xl:text-6xl">
                A premium website transforms how customers see you.
              </h2>

              <p className="text-muted-foreground max-w-[45ch] text-lg leading-relaxed @3xl:text-xl">
                Grab a 30-minute slot and I’ll tell you exactly what your
                business needs next.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <PrimaryButton
                text="Book Your Free Call →"
                onClick={() => {
                  router.push(CONTACT.calendar)
                }}
                className="shadow-primary/25 h-16 rounded-2xl px-10 text-lg font-semibold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
