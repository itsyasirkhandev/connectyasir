'use client'

import React from 'react'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { PrimaryButton } from '@/components/ui/primary-button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="bg-background flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 py-20 text-center sm:gap-12">
      <div className="bg-destructive/10 text-destructive flex h-20 w-20 items-center justify-center rounded-3xl sm:h-24 sm:w-24">
        <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12" />
      </div>

      <div className="max-w-xl space-y-4 px-6 sm:space-y-6">
        <h1 className="text-foreground text-3xl leading-tight font-semibold tracking-tighter sm:text-5xl md:text-6xl">
          Something went wrong
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-xl">
          We encountered an unexpected error. This is likely on our end—please
          try again.
        </p>

        {error.digest && (
          <code className="bg-muted text-muted-foreground mt-4 inline-block rounded-md px-2 py-1 font-mono text-[10px] break-all">
            Ref: {error.digest}
          </code>
        )}
      </div>

      <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
        <PrimaryButton
          text="Try again →"
          onClick={() => {
            reset()
          }}
          className="h-14 rounded-2xl px-8 text-lg"
        />
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors sm:text-base"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
