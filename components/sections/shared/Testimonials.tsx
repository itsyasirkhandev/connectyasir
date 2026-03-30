'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Professional, modern, on-time, and fairly priced. I highly recommend Yasir Khan for any business looking to level up their online presence.',
    author: 'Rashid Bashir',
    role: 'Finance Advisor',
    company: 'Apna Qarz',
    featured: true,
  },
  {
    quote:
      'The new site looks premium, loads fast, and helped improve trust and conversions significantly within the first month.',
    author: 'Prime Tools Provider',
    role: 'Owner',
    company: 'Industrial Supplies',
  },
  {
    quote:
      'Our old site brought no leads. After the rebuild, traffic and inquiries improved significantly. A complete transformation of our digital identity.',
    author: 'Ghulam Yaseen',
    role: 'Director',
    company: 'Ghulam Seeds',
  },
]

export default function Testimonials() {
  return (
    <section
      className="bg-background py-24 md:py-32 lg:py-48"
      id="testimonials"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Client Success
          </span>
          <h2 className="text-foreground mt-4 text-4xl leading-tight font-semibold tracking-tighter">
            Trusted by founders and <br className="hidden md:block" />
            business owners.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured Testimonial */}
          {testimonials
            .filter((t) => t.featured)
            .map((t, i) => (
              <div
                key={i}
                className="border-border bg-card hover:border-primary/20 flex flex-col justify-between rounded-2xl border p-8 transition-colors md:p-12"
              >
                <div>
                  <div className="text-primary mb-8 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="text-muted-foreground ml-2 text-sm font-semibold tracking-widest uppercase">
                      Verified Review
                    </span>
                  </div>
                  <blockquote className="text-foreground text-3xl leading-snug font-semibold tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <footer className="mt-12 flex items-center gap-4">
                  <div className="border-border bg-muted text-muted-foreground flex h-12 w-12 items-center justify-center rounded-full border text-base font-semibold">
                    {t.author[0]}
                  </div>
                  <div>
                    <cite className="text-foreground text-base font-semibold not-italic">
                      {t.author}
                    </cite>
                    <p className="text-muted-foreground text-sm">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                </footer>
              </div>
            ))}

          {/* Secondary Testimonials */}
          <div className="flex flex-col gap-8">
            {testimonials
              .filter((t) => !t.featured)
              .map((t, i) => (
                <div
                  key={i}
                  className="border-border bg-background hover:border-primary/20 flex flex-col justify-between rounded-2xl border p-8 transition-colors"
                >
                  <blockquote className="text-foreground text-base leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <footer className="mt-8 flex items-center gap-4">
                    <div className="border-border bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold">
                      {t.author[0]}
                    </div>
                    <div>
                      <cite className="text-foreground text-base font-semibold not-italic">
                        {t.author}
                      </cite>
                      <p className="text-muted-foreground text-sm">
                        {t.role} &middot; {t.company}
                      </p>
                    </div>
                  </footer>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
