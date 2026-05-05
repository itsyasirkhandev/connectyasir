import { SITE_NAME, DEFAULT_LAST_MODIFIED } from '@/lib/site-config'
import Link from 'next/link'
import { Calendar, UserCheck, ShieldCheck } from 'lucide-react'

export function EeatSignals() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest">
      <div className="flex items-center gap-1.5">
        <UserCheck className="h-3 w-3 text-primary" />
        <span>Author: <Link href="/about" className="text-foreground hover:text-primary transition-colors border-b border-border/40 hover:border-primary">{SITE_NAME}</Link></span>
      </div>
      <div className="flex items-center gap-1.5">
        <Calendar className="h-3 w-3 text-primary" />
        <span>Last Updated: <time dateTime={DEFAULT_LAST_MODIFIED}>{new Date(DEFAULT_LAST_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time></span>
      </div>
      <div className="flex items-center gap-1.5">
        <ShieldCheck className="h-3 w-3 text-primary" />
        <span>Verified Technical Expert</span>
      </div>
    </div>
  )
}
