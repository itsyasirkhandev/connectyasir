import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>
          Imagine sending someone a link to your website and feeling proud of
          what they see.
        </h2>
        <p>
          Let&apos;s build that. 30 minutes. Free. I&apos;ll map out what your
          project needs.
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

      <nav>
        <span>Project Nav:</span>
        <ul>
          <li className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> (none — first project)
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" /> Next project (when available)
          </li>
        </ul>
      </nav>
    </section>
  )
}
