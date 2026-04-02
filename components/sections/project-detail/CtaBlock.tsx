import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import CtaSection from '@/components/sections/shared/CtaSection'

export default function CtaBlock() {
  return (
    <>
      <CtaSection
        heading={<>Ready for a website that actually works for you?</>}
        subtext="Secure your free 30-minute strategy call and let's discuss how to transform your digital presence."
      />

      {/* Project navigation */}
      <nav
        aria-label="Project navigation"
        className="container mx-auto px-4 pb-16 sm:px-6 md:pb-24"
      >
        <div className="border-border/40 flex items-center justify-between border-t pt-8">
          <span className="text-muted-foreground hidden text-xs font-semibold tracking-[0.2em] uppercase md:block">
            Project Nav
          </span>
          <ul className="flex w-full items-center justify-between md:w-auto md:gap-16">
            <li>
              <span className="text-muted-foreground flex cursor-not-allowed items-center gap-2 text-sm opacity-40 select-none">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Previous
              </span>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-foreground hover:text-primary focus-visible:ring-ring flex items-center gap-2 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Next project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
