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
    <section className="bg-background py-32 md:py-40 lg:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-32">
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              The Package
            </span>
            <h2 className="text-foreground mt-8 text-4xl leading-tight font-semibold tracking-tighter md:text-5xl">
              Complete Small Business Web Design & Development Without the
              Headache.
            </h2>
            <div className="mt-10 max-w-prose space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stop chasing designers, developers, and hosting companies. You
                get an entire digital team in one expert.
              </p>
            </div>
          </div>

          {/* Right Side: Editorial List */}
          <div className="border-border/40 divide-border/40 flex flex-col divide-y border-y lg:border-y-0 lg:border-l lg:pl-16">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative py-14 lg:py-20">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-8">
                    <span className="text-muted-foreground/90 font-mono text-sm font-semibold">
                      {service.id}
                    </span>
                    <div className="space-y-6">
                      <h3 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground max-w-prose text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-border bg-card text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all sm:h-16 sm:w-16">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
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
