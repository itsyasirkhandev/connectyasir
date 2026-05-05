import { type FaqItem } from '@/lib/site-data'

type FaqSectionProps = {
  faqs: FaqItem[]
  title?: string
  description?: string
  badge?: string
}

export default function FaqSection({
  faqs,
  title = 'Questions before you book?',
  description = 'Everything you need to know about the process, ownership, and support.',
  badge = 'FAQ',
}: FaqSectionProps) {
  return (
    <section className="border-border border-t py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-primary mb-4 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
              {badge}
            </span>
            <h2 className="text-foreground text-2xl leading-tight font-semibold tracking-tighter sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-sm text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {faqs.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-foreground text-lg leading-snug font-semibold tracking-tight">
                  {item.question}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
