import Link from 'next/link'
import { Star, ArrowRight, Check, Zap, Rocket, Crown } from 'lucide-react'
import { PRICING_PACKAGES } from '@/lib/site-data'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function PricingPackages() {
  const starter = {
    ...PRICING_PACKAGES[0],
    icon: Zap,
    features: [
      '3–4 static pages',
      'Flawless mobile-responsive design',
      'Clear lead flow',
      'Sub-100ms load times',
      '1 round of revisions',
      '14 days of direct support',
    ],
  }
  const standard = {
    ...PRICING_PACKAGES[1],
    icon: Rocket,
    features: [
      '7–10 conversion-optimized pages',
      'Advanced trust-building design logic',
      'Google Analytics + Search Console integration',
      'On-page SEO optimization',
      'Custom lead capture systems',
      '2 rounds of revisions',
      '30 days of direct support',
    ],
  }
  const premium = {
    ...PRICING_PACKAGES[2],
    icon: Crown,
    features: [
      'Everything in the Standard Package',
      'Custom logo + deep brand identity',
      '1-on-1 strategy deep dive',
      'Priority development timeline',
      'Advanced custom integrations',
      'Secure admin dashboard/backend',
      '3 rounds of revisions',
      '60 days of direct support',
    ],
  }

  const packages = [starter, standard, premium]

  return (
    <section className="py-16 md:py-32" id="pricing">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16 md:mb-24">
          <div className="border-primary/30 text-primary bg-primary/5 mb-4 inline-flex items-center rounded-full border px-4 py-1 text-[10px] font-semibold tracking-widest uppercase">
            Pricing
          </div>
          <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Simple packages. No surprise invoices.
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Choose the exact package that fits your goals. You own 100% of your
            code and design from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-stretch lg:gap-12">
          {packages.map((pkg, idx) => {
            const isMain = idx === 1
            const Icon = pkg.icon

            return (
              <Card
                key={pkg.name}
                className={cn(
                  'border-muted/40 hover:border-primary/30 relative flex flex-col overflow-visible transition-all duration-300',
                  isMain
                    ? 'border-primary/40 shadow-primary/5 bg-background shadow-xl lg:z-10 lg:scale-105'
                    : 'bg-muted/10 shadow-none'
                )}
              >
                {isMain && (
                  <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground ring-background flex items-center rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap shadow-lg ring-4">
                      <Star className="mr-1.5 h-3 w-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="px-6 pt-10 pb-4 text-center sm:px-8 lg:text-left">
                  <div
                    className={cn(
                      'mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
                      isMain
                        ? 'bg-primary text-primary-foreground shadow-primary/20 shadow-lg'
                        : 'bg-muted text-foreground'
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 min-h-10 text-sm leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="grow px-6 sm:px-8">
                  <div className="mb-8 flex items-baseline justify-center gap-1 lg:justify-start">
                    <span className="text-foreground font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
                      ${pkg.price}
                    </span>
                    <span className="text-muted-foreground text-xs font-medium sm:text-sm">
                      /project
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground/80 border-muted/30 border-b pb-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="group flex items-start gap-3 text-sm"
                        >
                          <div
                            className={cn(
                              'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors',
                              isMain ? 'bg-primary/10' : 'bg-muted'
                            )}
                          >
                            <Check
                              className={cn(
                                'h-3 w-3',
                                isMain
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              )}
                            />
                          </div>
                          <span className="text-foreground/80 group-hover:text-foreground leading-snug transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-4 sm:p-8">
                  <div className="w-full space-y-4">
                    <div className="text-muted-foreground flex items-center justify-between text-[11px] font-medium tracking-wider uppercase">
                      <span>Timeline</span>
                      <span className="text-foreground">{pkg.timeline}</span>
                    </div>
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({
                          variant: isMain ? 'default' : 'outline',
                        }),
                        'h-12 w-full flex-nowrap text-base font-medium whitespace-nowrap transition-all duration-300',
                        isMain &&
                          'shadow-primary/20 hover:shadow-primary/30 shadow-lg'
                      )}
                    >
                      Secure Your Spot
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* THE PROMISE */}
        <div className="bg-foreground text-background mt-20 rounded-[1.5rem] sm:mt-32 sm:rounded-[2rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
            {/* Left column — label + heading */}
            <div className="border-background/10 flex flex-col justify-between gap-12 border-b p-8 sm:p-12 lg:border-r lg:border-b-0 lg:p-16">
              <p className="text-primary-foreground text-[10px] font-semibold tracking-[0.3em] uppercase">
                The Promise
              </p>
              <div>
                <h2 className="text-3xl leading-tight font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                  Transparent
                  <br />
                  process.
                </h2>
                <p className="text-background/50 mt-4 text-xl leading-tight font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
                  No surprises.
                </p>
              </div>
            </div>

            {/* Right column — promise items */}
            <div className="divide-background/10 flex flex-col divide-y">
              {[
                {
                  index: '01',
                  text: 'You approve the exact design before any coding begins.',
                },
                {
                  index: '02',
                  text: 'You review the fully functioning site before it goes live.',
                },
                {
                  index: '03',
                  text: 'You hold 100% ownership of your code, design, and domain.',
                },
              ].map(({ index, text }) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 px-8 py-7 sm:px-12 sm:py-9 lg:px-12 lg:py-10"
                >
                  <span className="text-background/30 mt-0.5 min-w-[2rem] font-mono text-xs font-semibold tracking-widest">
                    {index}
                  </span>
                  <span className="text-background/90 group-hover:text-background text-base leading-relaxed transition-colors sm:text-lg">
                    {text}
                  </span>
                </div>
              ))}

              {/* Payment term — visually distinct footer row */}
              <div className="bg-background/5 flex flex-col gap-1.5 px-8 py-7 sm:px-12 sm:py-9 lg:px-12 lg:py-10">
                <p className="text-primary-foreground text-[10px] font-semibold tracking-[0.25em] uppercase">
                  Payment
                </p>
                <p className="text-background/90 text-base leading-relaxed sm:text-lg">
                  50% upfront to begin.{' '}
                  <span className="text-background font-semibold">
                    The remaining 50% only when you&apos;re ready to launch.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
