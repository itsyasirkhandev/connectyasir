import Image from 'next/image'
import Link from 'next/link'
import { Circle, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section>
      <header>
        <span className="flex items-center gap-2">
          <Circle className="h-2 w-2 fill-green-500 text-green-500" />
          Taking on 2 new projects
        </span>
      </header>

      <div>
        <h1>Your website should win trust — not lose customers.</h1>
        <p>
          I design and build modern websites for small businesses that look
          credible, load fast, and help turn visitors into leads.
        </p>

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

        <p>
          3 businesses launched · 1,000+ leads generated · Built with modern web
          tech
        </p>
      </div>

      <div>
        <Image
          src="/images/yasir-khan.jpg"
          alt="Professional photo of Yasir Khan"
          width={400}
          height={400}
          priority
        />
      </div>
    </section>
  )
}
