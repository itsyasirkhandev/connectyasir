import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
        Page not found
      </h1>
      <p className="mt-4 text-zinc-700">
        The page you’re looking for doesn’t exist or may have moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="underline">
          Go home
        </Link>
        <Link href="/services" className="underline">
          View services
        </Link>
        <Link href="/projects" className="underline">
          View projects
        </Link>
        <Link href="/contact" className="underline">
          Contact Yasir
        </Link>
      </div>
    </main>
  )
}
