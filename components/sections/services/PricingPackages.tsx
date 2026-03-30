import Link from 'next/link'
import {
  Star,
  ShieldCheck,
  ArrowRight,
  Check,
  Zap,
  Rocket,
  Crown,
} from 'lucide-react'
import { PRICING_PACKAGES } from '@/lib/site-data'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function PricingPackages() {
  const starter = {
    ...PRICING_PACKAGES[0],
    icon: Zap,
    features: [
      '3–4 Essential Pages',
      'Mobile-responsive design',
      'Basic contact form',
      'Social media integration',
      '1 round of revisions',
      '15 days post-launch support',
    ],
  }
  const standard = {
    ...PRICING_PACKAGES[1],
    icon: Rocket,
    features: [
      '7–10 conversion-focused pages',
      'Trust signals & social proof design',
      'Google Analytics + Search Console',
      'On-page SEO optimization',
      'Advanced lead capture forms',
      '2 rounds of revisions',
      '30 days post-launch support',
      'Speed & performance optimization',
    ],
  }
  const premium = {
    ...PRICING_PACKAGES[2],
    icon: Crown,
    features: [
      'Everything in Standard',
      'Logo & Brand Identity design',
      'Custom backend functionality',
      'Admin dashboard / CMS',
      'E-commerce or Booking systems',
      'Priority 1-on-1 support',
      'Unlimited revisions during design',
      '90 days extended support',
    ],
  }

  const packages = [starter, standard, premium]

  return (
    <section className="py-24 md:py-32">
      <div className="mb-16 text-center md:mb-24">
        <div className="border-primary/30 text-primary bg-primary/5 mb-4 inline-flex items-center rounded-full border px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
          Flexible Pricing
        </div>
        <h2 className="text-foreground mx-auto max-w-3xl text-4xl leading-tight font-semibold tracking-tighter md:text-5xl lg:text-6xl">
          Simple packages.{' '}
          <span className="text-muted-foreground">Clear scope.</span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed">
          Choose the package that fits your business stage. All projects are
          fixed-price with zero hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
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
                  <div className="bg-primary text-primary-foreground ring-background flex items-center rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap shadow-lg ring-4">
                    <Star className="mr-1.5 h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="px-8 pt-10 pb-4 text-center lg:text-left">
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

              <CardContent className="grow px-8">
                <div className="mb-8 flex items-baseline justify-center gap-1 lg:justify-start">
                  <span className="text-foreground font-mono text-4xl font-bold tracking-tight">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    /project
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground/80 border-muted/30 border-b pb-2 text-[10px] font-bold tracking-[0.2em] uppercase">
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
                              isMain ? 'text-primary' : 'text-muted-foreground'
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

              <CardFooter className="p-8 pt-4">
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
                    Get Started
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Trust Bar / Promise */}
      <div className="bg-foreground text-background group relative mt-24 overflow-hidden rounded-[2.5rem] p-12 md:mt-32 md:p-20">
        <div className="bg-primary/20 group-hover:bg-primary/30 absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-[100px] transition-colors duration-700" />
        <div className="bg-primary/10 absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full blur-[100px]" />

        <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h4 className="text-primary flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase">
              <ShieldCheck className="h-4 w-4" /> THE PROMISE
            </h4>
            <h2 className="mt-8 text-4xl leading-[1.1] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
              Transparent process. <br />
              <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                No surprises.
              </span>
            </h2>
          </div>

          <div className="grid shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-8">
            {[
              'Approve design before dev',
              'Review site before launch',
              'You own all code & assets',
              'Simple 50/50 payment',
            ].map((item) => (
              <div key={item} className="group/item flex items-center gap-4">
                <div className="border-primary/20 bg-primary/5 group-hover/item:border-primary/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <span className="text-lg font-medium opacity-90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
