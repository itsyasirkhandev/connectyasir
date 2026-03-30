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
    description:
      'Setup, launch, security, and technical details handled for you.',
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
            <span className="text-muted-foreground text-[10px] font-semibold tracking-[0.2em] uppercase">
              What You Get
            </span>
            <h2 className="text-foreground mt-6 text-4xl leading-tight font-semibold tracking-tighter md:text-5xl">
              Everything you need to launch — handled by one person.
            </h2>
            <p className="text-muted-foreground mt-8 max-w-prose text-lg leading-relaxed">
              Branding, design, development, hosting, SEO, and support. No
              chasing multiple freelancers. No messy handoffs.
            </p>
          </div>

          {/* Right Side: Editorial List */}
          <div className="border-border/40 lg:border-border/40 space-y-px border-y lg:border-y-0 lg:border-l">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group border-border/40 hover:bg-muted/30 relative border-b py-10 transition-colors last:border-0 lg:px-12 lg:py-16"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-6">
                    <span className="text-muted-foreground/50 font-mono text-sm font-medium">
                      {service.id}
                    </span>
                    <div className="space-y-4">
                      <h3 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground max-w-prose text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-border bg-card text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all group-hover:scale-110 md:h-14 md:w-14">
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
