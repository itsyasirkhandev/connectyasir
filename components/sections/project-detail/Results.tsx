type ResultMetric = {
  value: string
  label: string
}

type ResultsProps = {
  metrics: ResultMetric[]
}

export default function Results({ metrics }: ResultsProps) {
  return (
    <section className="border-t py-16">
      <div className="grid grid-cols-1 items-start gap-8 border-t py-16 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          The Impact
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-foreground text-5xl font-semibold tracking-tight">
                {metric.value}
              </span>
              <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
