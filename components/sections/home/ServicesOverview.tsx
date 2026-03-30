import { Palette, Monitor, Globe, Wrench } from 'lucide-react'

const SERVICES = [
  {
    title: 'Branding & Logo',
    description: 'A clean identity that makes your business look professional.',
    icon: Palette,
    id: '01',
  },
  {
    title: 'Website Design & Development',
    description: 'Fast, modern pages built to earn trust and drive action.',
    icon: Monitor,
    id: '02',
  },
  {
    title: 'Domain & Hosting',
    description: 'Setup, launch, security, and technical details handled for you.',
    icon: Globe,
    id: '03',
  },
  {
    title: 'SEO & Support',
    description: 'Basic SEO setup and post-launch help when you need it.',
    icon: Wrench,
    id: '04',
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              What You Get
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-5xl">
              Everything you need to launch — handled by one person.
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted-foreground">
              Branding, design, development, hosting, SEO, and support. No
              chasing multiple freelancers. No messy handoffs.
            </p>
          </div>

          {/* Right Side: Editorial List */}
          <div className="space-y-px border-y border-border/40 lg:border-y-0 lg:border-l lg:border-border/40">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative border-b border-border/40 py-10 transition-colors last:border-0 hover:bg-muted/30 lg:px-12 lg:py-16"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-sm font-medium text-muted-foreground/50">
                      {service.id}
                    </span>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground md:h-14 md:w-14">
                    <service.icon className="h-6 w-6" />
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
