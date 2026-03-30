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
          <span className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">
            Recent Work
          </span>
          <h2 className="text-foreground mt-6 text-4xl leading-tight font-semibold tracking-tighter">
            Real projects. Real businesses. Real results.
          </h2>
          <p className="text-muted-foreground mt-8 max-w-prose text-base leading-relaxed">
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
              <div className="border-border bg-muted relative aspect-16/10 overflow-hidden rounded-2xl border lg:w-3/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col lg:w-2/5">
                <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
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
                      className="group/link text-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    >
                      {project.status}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/60 text-sm font-medium">
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
            className="group text-foreground hover:text-primary inline-flex items-center gap-3 text-base font-semibold transition-colors"
          >
            View All Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
