'use client'

export default function Loading() {
  return (
    <div className="bg-background flex min-h-[60vh] w-full flex-col items-center justify-center gap-6">
      <div className="relative h-12 w-12">
        <div className="border-primary/20 absolute inset-0 rounded-full border-4" />
        <div className="border-primary absolute inset-0 animate-spin rounded-full border-t-4 border-r-transparent border-b-transparent border-l-transparent" />
      </div>
      <p className="text-muted-foreground animate-pulse text-sm font-medium tracking-widest uppercase">
        Loading...
      </p>
    </div>
  )
}
