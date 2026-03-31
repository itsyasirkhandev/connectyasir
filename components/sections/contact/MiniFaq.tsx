import Link from 'next/link'
import { CONTACT_FAQS } from '@/lib/site-data'

export default function MiniFaq() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          <div>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Quick Answers
            </span>
            <h2 className="text-foreground mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Before you book
            </h2>
          </div>

          {/* Right Column: FAQ List */}
          <div className="max-w-3xl">
            <dl className="flex flex-col gap-10 md:gap-16">
              {CONTACT_FAQS.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <dt className="text-foreground text-xl font-semibold">
                    {faq.question}
                  </dt>
                  <dd className="text-muted-foreground max-w-prose text-base leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-border mt-16 border-t pt-8">
              <p className="text-muted-foreground text-base">
                Still comparing options? Review the{' '}
                <Link
                  href="/services"
                  className="text-foreground decoration-primary/30 hover:text-primary font-semibold underline underline-offset-4 transition-colors"
                >
                  website pricing
                </Link>{' '}
                or browse{' '}
                <Link
                  href="/projects"
                  className="text-foreground decoration-primary/30 hover:text-primary font-semibold underline underline-offset-4 transition-colors"
                >
                  real client projects
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
