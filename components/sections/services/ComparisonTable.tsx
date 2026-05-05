'use client'

import { Check, X } from 'lucide-react'

type ComparisonFeature = {
  name: string
  diy: boolean | string
  pro: boolean | string
}

const FEATURES: ComparisonFeature[] = [
  { name: 'Custom Strategy & Branding', diy: false, pro: true },
  { name: 'Performance (Load Time <3s)', diy: 'Rarely', pro: true },
  { name: 'Conversion Optimization', diy: 'Basic', pro: 'Advanced' },
  { name: 'Technical SEO & GEO Setup', diy: 'Basic', pro: 'Expert' },
  { name: 'Premium Tech Stack (Next.js)', diy: false, pro: true },
  { name: 'Maintenance & Support', diy: 'You', pro: 'Included' },
]

export function ComparisonTable() {
  return (
    <section className="bg-muted/30 py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-semibold md:text-5xl">
            DIY Templates vs. <span className="text-primary">Done-For-You</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See why investing in a professional platform pays for itself in
            trust, performance, and lead generation.
          </p>
        </div>

        <div className="border-border bg-card mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-border bg-muted/50 border-b">
                <th className="text-foreground px-6 py-4 text-sm font-semibold">
                  Feature
                </th>
                <th className="text-muted-foreground px-6 py-4 text-center text-sm font-semibold">
                  DIY / Templates
                </th>
                <th className="bg-primary/5 text-primary px-6 py-4 text-center text-sm font-semibold">
                  Pro (Yasir Khan)
                </th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {FEATURES.map((feature) => (
                <tr
                  key={feature.name}
                  className="group hover:bg-muted/30 transition-colors"
                >
                  <td className="text-foreground px-6 py-5 text-sm font-medium">
                    {feature.name}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center">
                      {typeof feature.diy === 'boolean' ? (
                        feature.diy ? (
                          <Check className="text-success h-5 w-5" />
                        ) : (
                          <X className="text-muted-foreground/50 h-5 w-5" />
                        )
                      ) : (
                        <span className="text-muted-foreground bg-muted rounded px-2 py-1 text-xs font-semibold">
                          {feature.diy}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="bg-primary/5 px-6 py-5 text-center">
                    <div className="flex justify-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="text-primary h-5 w-5" />
                        ) : (
                          <X className="text-muted-foreground/50 h-5 w-5" />
                        )
                      ) : (
                        <span className="text-primary bg-primary/10 rounded px-2 py-1 text-xs font-semibold">
                          {feature.pro}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
