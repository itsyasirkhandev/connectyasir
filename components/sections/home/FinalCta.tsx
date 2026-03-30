import Link from 'next/link'
import { ArrowRight, Circle } from 'lucide-react'

export default function FinalCta() {
  return (
    <section>
      <header>
        <h2>If your website doesn’t build trust, it’s costing you business.</h2>
        <p>
          Book a free 30-minute call and I’ll show you what your site needs
          next.
        </p>
      </header>

      <div>
        <Link href="/contact" className="flex items-center gap-2">
          Book a Free Call <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href="https://wa.me/923014545482"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Message on WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8">
        <span className="flex items-center gap-2">
          <Circle className="h-2 w-2 fill-green-500 text-green-500" />
          Taking on 2 new projects
        </span>
      </div>
    </section>
  )
}
