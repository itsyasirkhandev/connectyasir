import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>Your business could be the next before-and-after story.</h2>
        <p>Let’s talk about what your website needs.</p>
      </header>

      <Link href="/contact" className="flex items-center gap-2">
        Book a Free Call <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
