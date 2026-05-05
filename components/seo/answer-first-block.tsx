import { ShieldCheck } from 'lucide-react'

type AnswerFirstBlockProps = {
  heading: string
  summary: string
}

export function AnswerFirstBlock({ heading, summary }: AnswerFirstBlockProps) {
  return (
    <section
      aria-labelledby="quick-answer-heading"
      className="border-border bg-card/50 mx-auto max-w-4xl rounded-[2.5rem] border p-8 backdrop-blur-sm md:p-12 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
          <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Quick summary
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">
          <ShieldCheck className="h-3 w-3" />
          Fact Verified 2026
        </div>
      </div>
      <h2
        id="quick-answer-heading"
        className="text-foreground text-3xl leading-tight font-semibold tracking-tighter"
      >
        {heading}
      </h2>
      <p className="answer-capsule text-muted-foreground mt-6 max-w-prose text-base leading-relaxed">
        {summary}
      </p>
    </section>
  )
}

