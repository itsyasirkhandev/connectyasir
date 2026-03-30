import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>Your business does great work. Your website should show it.</h2>
        <p>
          Step 1: 30-minute call. Free. We talk about your business and I show
          you what your site could look like.
        </p>
      </header>

      <div>
        <Link href="/contact" className="flex items-center gap-2">
          Let&apos;s Plan Your Website <ArrowRight className="h-4 w-4" />
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
    </section>
  )
}
