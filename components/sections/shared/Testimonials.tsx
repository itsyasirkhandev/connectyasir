'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Professional, modern, on-time, and fairly priced. I highly recommend Yasir Khan.',
    shortQuote: 'Professional, modern, on-time, and fairly priced.',
    author: 'Rashid Bashir',
    role: 'Finance Advisor',
    company: 'Apna Qarz',
    featured: true,
  },
  {
    quote:
      'The new site looks premium, loads fast, and helped improve trust and conversions.',
    shortQuote: 'The new site feels premium and helped improve trust.',
    author: 'Owner',
    role: 'Owner',
    company: 'Prime Tools Provider',
  },
  {
    quote:
      'Our old site brought no leads. After the rebuild, traffic and inquiries improved significantly.',
    shortQuote: 'Traffic and inquiries improved after the rebuild.',
    author: 'Ghulam Yaseen',
    role: 'Director',
    company: 'Ghulam Seeds',
  },
]

type TestimonialsProps = {
  variant?: 'home' | 'about'
}

export default function Testimonials({ variant = 'home' }: TestimonialsProps = {}) {
  const isAbout = variant === 'about'

  return (
    <section
      className="bg-background py-24 md:py-32 lg:py-48"
      id="testimonials"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          {!isAbout && (
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Client Reviews
            </span>
          )}
          <h2 className="text-foreground mt-4 text-4xl leading-tight font-semibold tracking-tighter">
            {isAbout ? 'What founders say' : 'Trusted by founders who demand results.'}
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
                    &ldquo;{isAbout ? t.shortQuote : t.quote}&rdquo;
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
                    &ldquo;{isAbout ? t.shortQuote : t.quote}&rdquo;
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
