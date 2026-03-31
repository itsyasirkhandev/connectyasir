import Link from 'next/link'
import { Home } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-background flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 py-20 text-center sm:gap-20">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase sm:text-sm">
            404 — Page Not Found
          </span>
          <div className="max-w-2xl space-y-4 px-6 sm:space-y-6">
            <h1 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              This path doesn&apos;t{' '}
              <span className="text-muted-foreground">exist.</span>
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-prose text-base leading-relaxed sm:text-lg md:text-xl">
              The page you’re looking for doesn’t exist or may have been moved.
              Try heading back home or browsing the site sections.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row lg:gap-10">
          <Link
            href="/"
            className="bg-primary text-primary-foreground focus-visible:ring-primary flex h-14 items-center justify-center gap-2 rounded-2xl px-8 text-base font-semibold shadow-lg transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] sm:h-16 sm:px-10 sm:text-lg"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors sm:text-base"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors sm:text-base"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors sm:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
