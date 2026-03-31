import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section className="border-t py-24">
      <div className="bg-card mx-auto flex max-w-4xl flex-col items-center rounded-3xl border p-8 text-center shadow-sm md:p-16">
        <h2 className="text-foreground text-3xl font-semibold tracking-tight lg:text-5xl">
          Ready for a website that actually works for you?
        </h2>
        <p className="text-muted-foreground mt-6 max-w-prose text-xl">
          Secure your free 30-minute strategy call today and let&apos;s discuss
          how we can transform your digital presence.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold shadow transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Book Your Free Call <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/923014545482"
            target="_blank"
            rel="noopener noreferrer"
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-12 items-center justify-center rounded-full border px-8 text-sm font-medium shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      <nav className="mx-auto mt-24 flex w-full max-w-5xl items-center justify-between border-t pt-8">
        <span className="text-muted-foreground hidden text-sm font-medium tracking-widest uppercase md:block">
          Project Nav
        </span>
        <ul className="flex w-full items-center justify-between md:w-auto md:gap-16">
          <li>
            <span className="text-muted-foreground flex cursor-not-allowed items-center gap-2 text-sm opacity-50">
              <ArrowLeft className="h-4 w-4" /> Previous
            </span>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Next project <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
