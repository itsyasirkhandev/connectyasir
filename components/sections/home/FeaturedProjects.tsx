import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const FEATURED_PROJECTS = [
  {
    title: 'Apna Qarz',
    description:
      'From no website to a full platform with 1,000+ leads in the first month.',
    category: 'Full-Stack · Done-for-You',
    image: '/images/projects/apna-qarz-homepage.jpg',
    href: '/projects/apna-qarz',
    status: 'View Case Study',
  },
  {
    title: 'Prime Tools Provider',
    description:
      'Upgraded an outdated site into a cleaner, more trustworthy business presence.',
    category: 'Marketing Site',
    image: '/images/projects/prime-tools-provider-homepage.jpg',
    href: '/projects#prime-tools-provider',
    status: 'Case Study Coming Soon',
  },
  {
    title: 'Ghulam Seeds',
    description:
      'Rebuilt an old website into a modern site that brought weekly inquiries.',
    category: 'Marketing Site',
    image: '/images/projects/ghulam-seeds-homepage.jpg',
    href: '/projects#ghulam-seeds',
    status: 'Case Study Coming Soon',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Recent Work
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            Real projects. Real businesses. Real results.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A few examples of websites I’ve designed and built for businesses.
          </p>
        </div>

        {/* Project Staggered List */}
        <div className="mt-20 space-y-32 md:mt-32">
          {FEATURED_PROJECTS.map((project, index) => (
            <article
              key={project.title}
              className={`group flex flex-col gap-12 lg:flex-row lg:items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted lg:w-3/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col lg:w-2/5">
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  {project.category}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {project.description}
                </p>

                <div className="mt-10">
                  {project.href && project.status !== 'Case Study Coming Soon' ? (
                    <Link
                      href={project.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {project.status}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground/60">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 border-t border-border/40 pt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-foreground transition-colors hover:text-primary md:text-xl"
          >
            View All Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
