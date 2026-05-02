import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type ProjectHeroProps = {
  title: string
  description: string
  industry: string
  services: string
  image: string
  imageAlt: string
}

export default function ProjectHero({
  title,
  description,
  industry,
  services,
  image,
  imageAlt,
}: ProjectHeroProps) {
  return (
    <section className="flex flex-col pt-12 pb-16">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground mb-12 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        All Projects
      </Link>

      <div className="mb-16 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h1 className="text-foreground text-5xl leading-tight font-semibold tracking-tight lg:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-prose text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-1 lg:text-right">
          <span className="text-foreground mt-4 text-xs font-semibold tracking-widest uppercase lg:mt-0">
            Industry
          </span>
          <span className="text-muted-foreground text-sm">{industry}</span>

          <span className="text-foreground mt-4 text-xs font-semibold tracking-widest uppercase">
            Services
          </span>
          <span className="text-muted-foreground text-sm">{services}</span>
        </div>
      </div>

      <div className="bg-muted/20 relative aspect-auto w-full overflow-hidden rounded-2xl border shadow-sm md:aspect-video">
        <Image
          src={image}
          alt={imageAlt}
          width={1280}
          height={905}
          className="h-auto w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  )
}
