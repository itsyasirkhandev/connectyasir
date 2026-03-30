import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>Ready to work together?</h2>
        <p>Book a free call and let’s talk about your next project.</p>
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
    </section>
  )
}
