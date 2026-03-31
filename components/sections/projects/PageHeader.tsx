'use client'

import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

export default function PageHeader() {
  const router = useRouter()

  return (
    <header className="bg-background pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          {/* Left Column: Label */}
          <div className="transition-all duration-500 ease-out starting:translate-y-2 starting:opacity-0">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Projects
            </span>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-4xl transition-all delay-100 duration-700 ease-out starting:translate-y-4 starting:opacity-0">
            <h1 className="text-foreground text-5xl leading-[1.05] font-semibold tracking-tighter md:text-7xl">
              See the businesses already dominating their markets.
            </h1>

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
              <p className="text-muted-foreground max-w-prose text-lg leading-relaxed md:text-xl">
                Real projects engineered to maximize trust, load instantly, and
                drive revenue.
              </p>

              <div className="flex flex-col items-start gap-8">
                <PrimaryButton
                  text="Book Your Free Call →"
                  onClick={() => {
                    router.push(CONTACT.calendar)
                  }}
                  className="h-16 px-10 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
