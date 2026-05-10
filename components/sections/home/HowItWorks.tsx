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
    <section className="bg-background py-24 md:py-32" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-32">
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              The Process
            </span>
            <h2 className="text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tighter">
              Get your new website live in 3 simple steps.
            </h2>
            <p className="text-muted-foreground mt-8 max-w-sm text-base leading-relaxed">
              You’ll never have to ask &quot;what happens next?&quot;
            </p>
          </div>

          {/* Steps List */}
          <div className="divide-border/40 flex flex-col divide-y">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col gap-6 py-12 md:flex-row md:gap-12"
              >
                <span className="text-muted-foreground group-hover:text-primary font-mono text-3xl font-semibold tracking-tighter transition-colors">
                  {step.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-foreground text-3xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed">
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
