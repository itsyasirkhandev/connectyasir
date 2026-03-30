import { MessageSquare, Tag, Zap, Hammer } from 'lucide-react'

const VALUES = [
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'You work directly with the person building your website.',
  },
  {
    icon: Tag,
    title: 'Clear Pricing',
    description: 'You know the scope, price, and timeline before we begin.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most projects launch in 1–3 weeks without cutting corners.',
  },
  {
    icon: Hammer,
    title: 'Custom-Built',
    description:
      'Your website is built for your business — not copied from a template.',
  },
]

export default function MyValues() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="how-i-work">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            How I Work
          </span>
          <h2 className="text-foreground mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tighter md:text-5xl">
            What it’s like to work with me.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          {VALUES.map((value) => (
            <div key={value.title} className="flex flex-col items-start gap-5">
              <div className="bg-primary/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
                <value.icon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-foreground text-xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground max-w-prose text-lg leading-relaxed">
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
