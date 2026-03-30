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
        <h1>
          Right now, someone is Googling what you sell. They&apos;re picking
          your competitor.
        </h1>
        <p>
          Your website is either building trust or losing customers.
          There&apos;s no in-between.
        </p>
        <p>
          I design, build, and launch complete websites for small businesses —
          logo, content, hosting, SEO — all handled by one person. Live in
          weeks.
        </p>

        <div>
          <Link href="/contact" className="flex items-center gap-2">
            Start With a Free Call <ArrowRight className="h-4 w-4" />
            <span>No commitment. No pitch.</span>
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
          3 businesses launched · 1,000+ leads generated · Built with the same
          tech behind Netflix and Twitch
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
