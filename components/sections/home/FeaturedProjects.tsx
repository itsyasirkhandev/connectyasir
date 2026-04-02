import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const FEATURED_PROJECTS = [
  {
    title: 'Apna Qarz',
    description:
      'From zero online presence to 1,000+ verified leads in the first 30 days.',
    category: 'Full-Stack · Done-for-You',
    image: '/images/projects/apnaqarz/apna-qarz-homepage.webp',
    href: '/projects/apna-qarz',
    status: 'View Case Study →',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Recent Work
          </span>
          <h2 className="text-foreground mt-6 text-3xl leading-tight font-semibold tracking-tighter">
            See how a premium website transforms your business.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed">
            Proof that a modern online presence drives real revenue.
          </p>
        </div>

        {/* Project Staggered List */}
        <div className="mt-20 space-y-24 md:mt-32 md:space-y-40">
          {FEATURED_PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className={cn(
                'group flex flex-col gap-10 md:gap-16 lg:flex-row lg:items-center',
                index % 2 !== 0 && 'lg:flex-row-reverse'
              )}
            >
              {/* Image Container */}
              <div className="border-border bg-muted relative aspect-[16/10] overflow-hidden rounded-2xl border lg:w-3/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col lg:w-2/5">
                <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-foreground mt-4 text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-6 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-10">
                  {project.href &&
                  project.status !== 'Case Study Coming Soon' ? (
                    <Link
                      href={project.href}
                      className={cn(
                        'group/link inline-flex items-center gap-2 py-2 text-base font-semibold transition-colors',
                        'text-foreground hover:text-primary focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80'
                      )}
                    >
                      {project.status}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/60 text-base font-medium">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link */}
        <div className="border-border/40 mt-24 border-t pt-16">
          <Link
            href="/projects"
            className={cn(
              'group inline-flex items-center gap-3 py-2 text-base font-semibold transition-colors',
              'text-foreground hover:text-primary focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:opacity-80'
            )}
          >
            View All Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
