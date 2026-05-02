import { Check } from 'lucide-react'

type WhatIDeliveredProps = {
  deliverables: string[]
}

export default function WhatIDelivered({ deliverables }: WhatIDeliveredProps) {
  return (
    <section className="border-t py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          The Deliverables
        </h2>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {deliverables.map((item, index) => (
            <li
              key={index}
              className="bg-card/50 hover:bg-muted/50 flex items-start gap-4 rounded-xl border p-4 transition-colors"
            >
              <div className="bg-primary/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                <Check className="text-primary h-3.5 w-3.5" />
              </div>
              <span className="text-foreground mt-1 text-sm leading-tight font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
