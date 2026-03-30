import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>
          Imagine your business up there with a before-and-after story your
          competitors can&apos;t match.
        </h2>
        <p>
          Step 1: a 30-minute call. I&apos;ll tell you exactly what I&apos;d
          build.
        </p>
      </header>

      <Link href="/contact" className="flex items-center gap-2">
        Start With a Free Call <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
