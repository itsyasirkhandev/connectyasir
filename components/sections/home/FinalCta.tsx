import Link from 'next/link'
import { ArrowRight, Circle } from 'lucide-react'

export default function FinalCta() {
  return (
    <section>
      <header>
        <h2>Picture this.</h2>
        <p>
          A customer Googles what you sell. Your site comes up. It loads fast.
          It looks sharp. They fill out your contact form within 60 seconds.
        </p>
        <p>That&apos;s what we&apos;re building.</p>
        <p>
          Or you can keep losing those customers to competitors who already
          figured this out.
        </p>
        <p>
          30-minute call. Free. I&apos;ll map out what your website needs. No
          commitment. If I&apos;m not the right fit, I&apos;ll tell you.
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

      <div className="mt-8">
        <span className="flex items-center gap-2">
          <Circle className="h-2 w-2 fill-green-500 text-green-500" />
          Currently taking on 2 new projects
        </span>
      </div>
    </section>
  )
}
