import Link from 'next/link'
import type { BreadcrumbItem } from '@/lib/site-data'

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-zinc-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-zinc-900">
                  {item.name}
                </Link>
              )}

              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
