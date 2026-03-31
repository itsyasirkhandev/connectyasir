import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PROJECTS } from '@/lib/site-data'

export default function ProjectGrid() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-40 md:gap-56 lg:gap-72">
          {PROJECTS.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-24 ${
                index % 2 !== 0 ? 'lg:grid-cols-[1fr_1.4fr]' : ''
              }`}
            >
              {/* Image Side */}
              <div
                className={`relative w-full ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
              >
                {/* Soft background glow */}
                <div className="bg-muted absolute top-1/2 left-1/2 -z-10 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700 md:w-[90%]" />

                <div className="group border-border bg-muted/20 relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl md:aspect-[16/10] xl:aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="from-background/40 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 0 ? 'lg:pl-8 xl:pl-16' : 'lg:pr-8 xl:pr-16'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="bg-muted text-foreground flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                    {project.projectType}
                  </span>
                </div>

                <h2 className="text-foreground mt-8 text-4xl leading-tight font-semibold tracking-tighter md:text-5xl">
                  {project.name}
                </h2>

                <p className="text-muted-foreground mt-6 max-w-prose text-lg leading-relaxed md:text-xl">
                  {project.shortDescription}
                </p>

                {/* Outcomes */}
                <div className="border-border/60 mt-12 flex flex-col gap-8 border-l-2 pl-6 md:pl-8">
                  {project.before && (
                    <div className="max-w-prose">
                      <div className="flex items-center gap-3">
                        <span className="bg-destructive/10 text-destructive flex h-5 w-5 items-center justify-center rounded-sm text-[10px] font-bold">
                          ×
                        </span>
                        <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                          The Challenge
                        </span>
                      </div>
                      <p className="text-foreground/80 mt-3 text-base leading-relaxed md:text-lg">
                        {project.before}
                      </p>
                    </div>
                  )}
                  {project.after && (
                    <div className="max-w-prose">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-sm">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </span>
                        <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                          The Outcome
                        </span>
                      </div>
                      <p className="text-foreground mt-3 text-base leading-relaxed font-semibold md:text-lg">
                        {project.after}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-14">
                  {project.slug === 'apna-qarz' ? (
                    <Link
                      href={project.path}
                      className="group/link bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-primary inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98]"
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="text-muted-foreground inline-flex items-center gap-4 text-sm font-semibold tracking-wide">
                      <div className="bg-muted-foreground/30 h-0.5 w-6 rounded-full" />
                      Case Study Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
