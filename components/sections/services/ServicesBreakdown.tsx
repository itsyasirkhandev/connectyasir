import { Palette, Monitor, Settings, Globe, Search, Wrench } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding & Logo',
    description: 'A clean, professional identity for your business.',
  },
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Strategic layouts that build trust and guide action.',
  },
  {
    icon: Settings,
    title: 'Development',
    description: 'Fast, responsive websites built with modern tools.',
  },
  {
    icon: Globe,
    title: 'Domain & Hosting',
    description: 'Setup, security, and launch handled for you.',
  },
  {
    icon: Search,
    title: 'SEO Setup',
    description:
      'Search-ready pages with analytics and technical basics in place.',
  },
  {
    icon: Wrench,
    title: 'Post-Launch Support',
    description: 'Updates, fixes, and help after your website goes live.',
  },
]

export default function ServicesBreakdown() {
  return (
    <section className="py-20 md:py-24">
      <div className="mb-16">
        <span className="text-primary mb-4 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
          What I Handle
        </span>
        <h2 className="text-foreground max-w-2xl text-3xl leading-tight font-semibold tracking-tighter md:text-4xl">
          One person. One process. Everything covered.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="group flex gap-8">
            <div className="flex shrink-0 flex-col items-center">
              <span className="text-muted-foreground/15 group-hover:text-primary/30 font-mono text-4xl font-semibold transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="bg-border mt-4 h-full w-[1px]" />
            </div>
            <div className="pb-8">
              <div className="bg-muted/50 border-border group-hover:border-primary/50 group-hover:bg-primary/5 mb-4 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors">
                <service.icon className="text-foreground group-hover:text-primary h-5 w-5 transition-colors" />
              </div>
              <h3 className="text-foreground text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-sm text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
