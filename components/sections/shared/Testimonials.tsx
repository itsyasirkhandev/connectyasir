'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I found more professional and best web developer using next.js and latest technology, to building websites and completing projects on time in normal service charges, Personally I like and recommend yasir Khan as web developer',
    shortQuote: 'Personally I like and recommend yasir Khan as web developer',
    author: 'Rashid Bashir',
    role: 'Finance Advisor',
    company: 'Apna Qarz',
    featured: true,
  },
  {
    quote:
      "I really struggled with credibility early on. I had a great service with Prime Tools, but the way my site looked before... well, it just didn't inspire much confidence. I was losing people because it didn't look 'official' enough, I think. Yasir Khan really stepped in and fixed that. The new landing page is clean, fast, and actually looks like a premium business. My conversion rates have improved quite a bit because people actually trust the site now. It’s a huge relief.",
    shortQuote:
      'The new landing page is clean, fast, and actually looks like a premium business.',
    author: 'Mohummad Ayan',
    role: 'Owner',
    company: 'Prime Tools',
  },
  {
    quote:
      "We were struggling with an outdated website that wasn't bringing in any leads. Yasir khan completely transformed our online presence by building us a professional, modern marketing website with great design and clear messaging. Since the new site went live, our traffic and inquiries have significantly increased. Communication was smooth, delivery was on time, and the quality exceeded our expectations. Highly recommend for anyone needing a website that actually delivers results!",
    shortQuote:
      'Yasir khan completely transformed our online presence by building us a professional, modern marketing website.',
    author: 'Ghulam Yaseen',
    role: 'Director',
    company: 'Ghulam Seeds',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl sm:mb-24">
          <span className="text-primary-foreground text-xs font-semibold tracking-widest uppercase">
            Client Reviews
          </span>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tighter">
            Trusted by founders who demand results.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured Testimonial */}
          {testimonials
            .filter((t) => t.featured)
            .map((t, i) => (
              <div
                key={i}
                className="border-border bg-card hover:border-primary/20 flex flex-col justify-between rounded-2xl border p-6 transition-colors sm:p-8 md:p-12"
              >
                <div>
                  <div className="text-primary mb-8 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="text-muted-foreground ml-2 text-xs font-semibold tracking-widest uppercase">
                      Verified Review
                    </span>
                  </div>
                  <blockquote className="text-foreground text-3xl leading-tight font-semibold tracking-tight">
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
                    <p className="text-muted-foreground text-xs">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                </footer>
              </div>
            ))}

          {/* Secondary Testimonials */}
          <div className="flex flex-col gap-6 sm:gap-8">
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
                      <p className="text-muted-foreground text-xs">
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
