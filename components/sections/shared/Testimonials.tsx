'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Professional, modern, on-time, and fairly priced. I highly recommend Yasir Khan for any business looking to level up their online presence.",
    author: "Rashid Bashir",
    role: "Finance Advisor",
    company: "Apna Qarz",
    featured: true,
  },
  {
    quote: "The new site looks premium, loads fast, and helped improve trust and conversions significantly within the first month.",
    author: "Prime Tools Provider",
    role: "Owner",
    company: "Industrial Supplies",
  },
  {
    quote: "Our old site brought no leads. After the rebuild, traffic and inquiries improved significantly. A complete transformation of our digital identity.",
    author: "Ghulam Yaseen",
    role: "Director",
    company: "Ghulam Seeds",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Client Success
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tighter text-foreground md:text-5xl">
            Trusted by founders and <br className="hidden md:block" />
            business owners.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured Testimonial */}
          {testimonials.filter(t => t.featured).map((t, i) => (
            <div 
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/20 md:p-12"
            >
              <div>
                <div className="mb-8 flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Verified Review
                  </span>
                </div>
                <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              
              <footer className="mt-12 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-border bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
                  {t.author[0]}
                </div>
                <div>
                  <cite className="not-italic text-base font-semibold text-foreground">
                    {t.author}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {t.role} &middot; {t.company}
                  </p>
                </div>
              </footer>
            </div>
          ))}

          {/* Secondary Testimonials */}
          <div className="flex flex-col gap-8">
            {testimonials.filter(t => !t.featured).map((t, i) => (
              <div 
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/20"
              >
                <blockquote className="text-lg leading-relaxed text-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                
                <footer className="mt-8 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full border border-border bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                    {t.author[0]}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-foreground">
                      {t.author}
                    </cite>
                    <p className="text-xs text-muted-foreground">
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
