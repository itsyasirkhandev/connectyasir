'use client'

import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We discuss your business goals, target audience, and current pain points. This ensures the strategy is aligned with your bottom line before we write a single line of code.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      'I map out the user journey and design the high-fidelity pages. You’ll see exactly how the site will look and function before the build phase begins.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description:
      'I build your site using modern technologies for speed and SEO. Every page is tested for accessibility, responsiveness, and performance on all devices.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'I handle the technical setup, hosting, and domain configuration. After launch, I’m available for updates to ensure your site continues to perform.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="process">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-32">
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              The Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tighter text-foreground md:text-5xl">
              Simple process. <br />
              Clear communication. <br />
              Fast delivery.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              You’ll always know exactly where we are in the project and what comes next. No surprises, just results.
            </p>
            
            <a 
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Steps List */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="group relative flex flex-col gap-6 border-t border-border pt-12 md:flex-row md:gap-12"
              >
                <span className="font-mono text-4xl font-semibold tracking-tighter text-muted-foreground/30 transition-colors group-hover:text-primary/40 md:text-6xl">
                  {step.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
