import { Check } from 'lucide-react'

const standardFeatures = [
  'Mobile-responsive design',
  'Fast-loading performance',
  'Secure SSL setup',
  'Basic on-page SEO',
  'Contact form integration',
  'Social media links',
  'Training on how to use your site',
  'Ownership of all code & assets',
]

export default function WhatEveryPackageIncludes() {
  return (
    <section className="border-border border-t py-20 md:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-foreground text-2xl leading-tight font-semibold tracking-tighter md:text-3xl">
            What every package includes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-sm text-base leading-relaxed">
            Regardless of the size of your project, I ensure these essentials
            are always in place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {standardFeatures.map((feature) => (
            <div
              key={feature}
              className="border-border/50 flex items-center gap-3 border-b py-2"
            >
              <div className="bg-primary/10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                <Check className="text-primary h-3 w-3" />
              </div>
              <span className="text-foreground/80 text-sm font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
