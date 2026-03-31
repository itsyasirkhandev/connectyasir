import { ArrowUpRight } from 'lucide-react'

export default function ProjectOverview() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
        {/* Project Summary Details */}
        <div>
          <h2 className="text-foreground mb-8 text-2xl font-semibold tracking-tight">
            Case study summary
          </h2>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-muted-foreground border-b pb-2 text-xs font-semibold tracking-widest uppercase">
                Client
              </dt>
              <dd className="text-foreground mt-3 text-sm font-medium">
                Rashid Bashir / Apna Qarz
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground border-b pb-2 text-xs font-semibold tracking-widest uppercase">
                Timeline
              </dt>
              <dd className="text-foreground mt-3 text-sm font-medium">
                14 Days
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground border-b pb-2 text-xs font-semibold tracking-widest uppercase">
                Scope
              </dt>
              <dd className="text-foreground mt-3 text-sm leading-relaxed font-medium">
                Complete Branding, UX Design, Custom Development, Backend
                Systems, SEO, Managed Hosting
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground border-b pb-2 text-xs font-semibold tracking-widest uppercase">
                Live Site
              </dt>
              <dd className="mt-3">
                <a
                  href="https://apnaqarz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  apnaqarz.com <ArrowUpRight className="h-4 w-4" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Before & After */}
        <div className="bg-card rounded-2xl border p-8 shadow-sm">
          <h3 className="text-foreground mb-6 text-lg font-semibold tracking-tight">
            The Transformation
          </h3>

          <div className="space-y-6">
            <div className="before:bg-destructive/50 relative pl-6 before:absolute before:top-2 before:left-0 before:h-[calc(100%-16px)] before:w-0.5">
              <span className="text-destructive mb-2 block text-xs font-semibold tracking-widest uppercase">
                Before
              </span>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Zero digital footprint</li>
                <li>• Absent brand identity</li>
                <li>• Total reliance on manual outreach</li>
              </ul>
            </div>

            <div className="relative pl-6 before:absolute before:top-2 before:left-0 before:h-[calc(100%-16px)] before:w-0.5 before:bg-success/50">
              <span className="text-success mb-2 block text-xs font-semibold tracking-widest uppercase">
                After
              </span>
              <ul className="text-foreground space-y-2 text-sm font-medium">
                <li>• Blazing fast custom platform</li>
                <li>• Secure admin dashboard</li>
                <li>• 1,000+ high-intent leads generated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
