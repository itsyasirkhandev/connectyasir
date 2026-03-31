type AnswerFirstBlockProps = {
  heading: string
  summary: string
}

export function AnswerFirstBlock({ heading, summary }: AnswerFirstBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="border-border bg-card/50 mx-auto max-w-4xl rounded-2xl border p-6 backdrop-blur-sm sm:rounded-3xl md:p-12"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
        </span>
        <p className="text-muted-foreground text-[10px] font-semibold tracking-[0.2em] uppercase sm:text-sm">
          Quick answer
        </p>
      </div>
      <h2
        id="quick-answer-heading"
        className="text-foreground mt-4 text-2xl leading-tight font-semibold tracking-tighter sm:mt-6 sm:text-4xl"
      >
        {heading}
      </h2>
      <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed sm:text-base">
        {summary}
      </p>
    </section>
  )
}
