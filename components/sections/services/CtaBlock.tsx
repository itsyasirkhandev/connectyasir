import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>
          Three weeks from now, you could have a website that makes people take
          your business seriously.
        </h2>
        <p>Or you could still be thinking about it.</p>
        <p>
          30-minute call. Free. I&apos;ll map out what your website needs. No
          commitment. If we&apos;re not a fit, I&apos;ll tell you.
        </p>
      </header>

      <div>
        <Link href="/contact" className="flex items-center gap-2">
          Start With a Free Call <ArrowRight className="h-4 w-4" />
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
