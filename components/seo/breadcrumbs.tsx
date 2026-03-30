import Link from 'next/link'
import type { BreadcrumbItem } from '@/lib/site-data'

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-6 pt-8 md:pt-12">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-bold text-foreground"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )}

              {!isLast && (
                <span className="text-muted-foreground/30 font-light select-none">/</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
