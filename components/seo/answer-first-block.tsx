type AnswerFirstBlockProps = {
  heading: string
  summary: string
}

export function AnswerFirstBlock({ heading, summary }: AnswerFirstBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="mx-auto max-w-4xl rounded-3xl border border-border bg-card/50 p-8 md:p-12 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Quick answer
        </p>
      </div>
      <h2
        id="quick-answer-heading"
        className="mt-6 text-3xl font-semibold tracking-tight text-foreground leading-tight md:text-4xl"
      >
        {heading}
      </h2>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted-foreground md:text-xl">
        {summary}
      </p>
    </section>
  )
}
