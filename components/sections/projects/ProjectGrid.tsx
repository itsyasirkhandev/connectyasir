import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PROJECTS } from '@/lib/site-data'

export default function ProjectGrid() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
          {PROJECTS.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className={`flex flex-col gap-12 lg:flex-row lg:items-start ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="group border-border bg-muted/30 hover:border-primary/20 relative aspect-[16/10] overflow-hidden rounded-3xl border shadow-sm transition-all duration-500 hover:shadow-md">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="from-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center lg:w-1/2 lg:px-12 xl:px-20">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                    {project.projectType}
                  </span>
                  <div className="bg-border/60 h-px flex-1" />
                </div>

                <h2 className="text-foreground mt-6 text-3xl font-semibold tracking-tighter md:text-5xl">
                  {project.name}
                </h2>

                <p className="text-muted-foreground mt-8 text-lg leading-relaxed md:text-xl">
                  {project.shortDescription}
                </p>

                {/* Outcomes */}
                <div className="bg-muted/30 border-border/40 mt-12 grid gap-8 rounded-2xl border p-8">
                  {project.before && (
                    <div className="flex gap-4">
                      <div className="border-destructive/20 bg-destructive/5 text-destructive mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border">
                        <span className="text-[10px] font-bold">X</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                          The Challenge
                        </span>
                        <p className="text-foreground/80 mt-1 text-sm leading-relaxed">
                          {project.before}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.after && (
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <div>
                        <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                          The Outcome
                        </span>
                        <p className="text-foreground/80 mt-1 text-sm leading-relaxed font-medium">
                          {project.after}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-12">
                  {project.slug === 'apna-qarz' ? (
                    <Link
                      href={project.path}
                      className="group/link bg-foreground text-background hover:bg-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
                    >
                      Read the full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="border-border text-muted-foreground inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium">
                      Detailed case study coming soon
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
