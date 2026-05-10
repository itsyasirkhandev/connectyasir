'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SafeEmailLinkProps {
  email: string
  className?: string
  children: React.ReactNode
}

/**
 * A component that renders an email link without exposing the raw email to
 * server-side scanners (like Cloudflare's Email Obfuscation).
 * This prevents the injection of render-blocking 'email-decode.min.js'.
 */
export function SafeEmailLink({
  email,
  className,
  children,
}: SafeEmailLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const [user, domain] = email.split('@')
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className={cn('cursor-pointer', className)}
    >
      {children}
    </a>
  )
}
