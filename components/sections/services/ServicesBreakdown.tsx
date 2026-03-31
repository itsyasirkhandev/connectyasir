import { Palette, Monitor, Settings, Globe, Search, Wrench } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding & Logo',
    description: 'Secure a clean, premium identity for your business.',
  },
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Build instant trust with strategic, high-converting layouts.',
  },
  {
    icon: Settings,
    title: 'Development',
    description:
      'Deliver a flawless experience with an ultra-fast, responsive codebase.',
  },
  {
    icon: Globe,
    title: 'Domain & Hosting',
    description:
      'Skip the technical roadblocks. Setup and launch are fully managed.',
  },
  {
    icon: Search,
    title: 'SEO Setup',
    description: 'Launch search-ready pages mapped to Google Analytics.',
  },
  {
    icon: Wrench,
    title: 'Priority Support',
    description:
      'Get direct help and fast updates long after your website goes live.',
  },
]

export default function ServicesBreakdown() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <span className="text-primary mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            What You Get
          </span>
          <h2 className="text-foreground max-w-2xl text-2xl leading-tight font-semibold tracking-tighter sm:text-3xl md:text-4xl">
            One point of contact. Everything covered.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="group flex gap-6 sm:gap-8">
              <div className="flex shrink-0 flex-col items-center">
                <span className="text-muted-foreground/15 group-hover:text-primary/30 font-mono text-3xl font-semibold transition-colors sm:text-4xl">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="bg-border mt-4 h-full w-px" />
              </div>
              <div className="pb-6 sm:pb-8">
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
      </div>
    </section>
  )
}
