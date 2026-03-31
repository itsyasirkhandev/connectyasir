import { Palette, Monitor, Globe, Wrench } from 'lucide-react'

const SERVICES = [
  {
    title: 'Brand & Identity',
    description:
      'Look instantly credible with a clean, professional logo and brand design.',
    icon: Palette,
    id: '01',
  },
  {
    title: 'High-Converting Design',
    description:
      'Guide your visitors effortlessly from their first click to booking a call.',
    icon: Monitor,
    id: '02',
  },
  {
    title: 'Complete Tech Setup',
    description:
      'Never worry about domains, hosting, or security updates. It’s handled.',
    icon: Globe,
    id: '03',
  },
  {
    title: 'Search & Support',
    description:
      'Rank on Google from day one and get direct support whenever you need it.',
    icon: Wrench,
    id: '04',
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">
              The Package
            </span>
            <h2 className="text-foreground mt-6 text-3xl leading-tight font-semibold tracking-tighter sm:text-4xl">
              Launch your website without the freelancer headache.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed sm:mt-8">
              Stop chasing designers, developers, and hosting companies. You get
              an entire digital team in one expert.
            </p>
          </div>

          {/* Right Side: Editorial List */}
          <div className="border-border/40 lg:border-border/40 space-y-px border-y lg:border-y-0 lg:border-l">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group border-border/40 hover:bg-muted/30 relative border-b py-8 transition-colors last:border-0 sm:py-10 lg:px-12 lg:py-16"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-muted-foreground/50 font-mono text-sm font-medium">
                      {service.id}
                    </span>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground max-w-prose text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-border bg-card text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all group-hover:scale-110 sm:h-14 sm:w-14">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
