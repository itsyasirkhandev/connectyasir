'use client'

import { useEffect } from 'react'

/**
 * Component that dynamically loads icon styles on mount.
 * This prevents the icon CSS from being included in the initial critical CSS bundle.
 */
export function IconLoader() {
  useEffect(() => {
    // Dynamically import the icons CSS file
    import('../app/icons.css').catch((err: unknown) => {
      console.error('Failed to load icon styles:', err)
    })
  }, [])

  return null
}
