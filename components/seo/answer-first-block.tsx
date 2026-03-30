type AnswerFirstBlockProps = {
  heading: string
  summary: string
}

export function AnswerFirstBlock({ heading, summary }: AnswerFirstBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8"
    >
      <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
        Quick answer
      </p>
      <h2
        id="quick-answer-heading"
        className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900"
      >
        {heading}
      </h2>
      <p className="mt-3 text-base leading-7 text-zinc-700">{summary}</p>
    </section>
  )
}
