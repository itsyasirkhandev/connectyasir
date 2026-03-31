import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section>
      <header>
        <h2>Ready for a website that actually works for you?</h2>
        <p>Secure your free 30-minute strategy call today.</p>
      </header>

      <div>
        <Link href="/contact" className="flex items-center gap-2">
          Book Your Free Call &rarr;
        </Link>
        <a
          href="https://wa.me/923014545482"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Message on WhatsApp &rarr;
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
