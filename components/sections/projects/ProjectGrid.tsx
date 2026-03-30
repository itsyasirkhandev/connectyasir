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
                <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-md">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center lg:w-1/2 lg:px-12 xl:px-20">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {project.projectType}
                  </span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
                  {project.name}
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {project.shortDescription}
                </p>

                {/* Outcomes */}
                <div className="mt-12 grid gap-8 rounded-2xl bg-muted/30 p-8 border border-border/40">
                  {project.before && (
                    <div className="flex gap-4">
                      <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-destructive/20 bg-destructive/5 text-destructive">
                        <span className="text-[10px] font-bold">X</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Challenge</span>
                        <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{project.before}</p>
                      </div>
                    </div>
                  )}
                  {project.after && (
                    <div className="flex gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Outcome</span>
                        <p className="mt-1 text-sm text-foreground/80 leading-relaxed font-medium">{project.after}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-12">
                  {project.slug === 'apna-qarz' ? (
                    <Link
                      href={project.path}
                      className="group/link inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary"
                    >
                      Read the full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground">
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
