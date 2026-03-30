import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>Need a website that makes your business look credible?</h2>
        <p>Book a free call and let’s map out what your project needs.</p>
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
