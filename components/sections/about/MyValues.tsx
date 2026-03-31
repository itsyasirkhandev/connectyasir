import { MessageSquare, Tag, Zap, Hammer } from 'lucide-react'

const VALUES = [
  {
    icon: MessageSquare,
    title: 'Direct Access',
    description:
      'You communicate exclusively with the expert writing your code and designing your site.',
  },
  {
    icon: Tag,
    title: 'Total Transparency',
    description:
      'You agree to the scope, precise timeline, and exact price before any work begins.',
  },
  {
    icon: Zap,
    title: 'Rapid Velocity',
    description:
      'You launch in 1–3 weeks without sacrificing a single drop of quality.',
  },
  {
    icon: Hammer,
    title: 'Custom Engineered',
    description:
      'You get a platform architected exclusively for your audience—never a generic template.',
  },
]

export default function MyValues() {
  return (
    <section className="bg-background py-16 md:py-32 lg:py-48" id="how-i-work">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            The Standard
          </span>
          <h2 className="text-foreground mt-4 max-w-2xl text-2xl leading-tight font-semibold tracking-tighter sm:text-3xl md:text-5xl">
            What you get when you hire me.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-24">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-start gap-4 sm:gap-5"
            >
              <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl">
                <value.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-foreground text-xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground max-w-prose text-base leading-relaxed sm:text-lg">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
