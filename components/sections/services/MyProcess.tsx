const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: "We expose exactly what's blocking your online growth.",
  },
  {
    number: '02',
    title: 'Planning',
    description: 'I map your site architecture and brand direction.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'You critically review the visual layout before the build.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'I engineer your custom website to load instantly.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Your domain, analytics, and SEO flip live seamlessly.',
  },
  {
    number: '06',
    title: 'Support',
    description: 'You enjoy priority access for updates and technical help.',
  },
]

export default function MyProcess() {
  return (
    <section className="border-border border-t py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <span className="text-primary mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            The Process
          </span>
          <h2 className="text-foreground max-w-2xl text-2xl leading-tight font-semibold tracking-tighter sm:text-3xl md:text-4xl">
            What happens the moment you book a call.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-muted-foreground/10 font-mono text-4xl font-semibold sm:text-5xl">
                {step.number}
              </span>
              <div className="mt-3 sm:mt-4">
                <h3 className="text-foreground text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
