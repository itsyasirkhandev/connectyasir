'use client'

const steps = [
  {
    number: '01',
    title: 'The Strategy Call',
    description:
      "Tell me about your business. We'll map out exactly what you need to grow.",
  },
  {
    number: '02',
    title: 'Review Your Design',
    description:
      'You approve the visual direction before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Launch & Grow',
    description:
      'I handle the complete technical setup. You start receiving leads.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="process">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-32">
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              The Process
            </span>
            <h2 className="text-foreground mt-4 text-4xl leading-tight font-semibold tracking-tighter">
              Get your new website live in 3 simple steps.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-sm text-base leading-relaxed">
              You’ll never have to ask &quot;what happens next?&quot;
            </p>
          </div>

          {/* Steps List */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group border-border relative flex flex-col gap-6 border-t pt-12 md:flex-row md:gap-12"
              >
                <span className="text-muted-foreground/30 group-hover:text-primary/40 font-mono text-6xl font-semibold tracking-tighter transition-colors">
                  {step.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-foreground text-3xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-prose text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
