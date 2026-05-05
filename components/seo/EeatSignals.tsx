import { SITE_NAME, DEFAULT_LAST_MODIFIED } from '@/lib/site-config'
import Link from 'next/link'
import { Calendar, UserCheck, ShieldCheck, Award } from 'lucide-react'

export function EeatSignals() {
  const publishedDate = '2026-03-30T08:00:00Z' // Hardcoded for homepage authority

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <UserCheck className="h-3 w-3 text-primary" />
          <span>
            By:{' '}
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors border-b border-border/40 hover:border-primary font-bold"
            >
              {SITE_NAME}
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3 text-primary" />
          <span>
            Updated:{' '}
            <time
              dateTime={DEFAULT_LAST_MODIFIED}
              className="text-foreground font-bold"
            >
              {new Date(DEFAULT_LAST_MODIFIED).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="h-3 w-3 text-primary" />
          <span>Certified Web Expert</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3 text-primary" />
          <span>Verified Authority</span>
        </div>
      </div>
      
      {/* Hidden but machine-readable datePublished for bots that check visible content */}
      <div className="sr-only">
        <span>Published on: </span>
        <time dateTime={publishedDate}>{new Date(publishedDate).toLocaleDateString()}</time>
      </div>
    </div>
  )
}

