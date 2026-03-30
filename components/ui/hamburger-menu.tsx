import * as React from 'react'
import { cn } from '@/lib/utils'

type HamburgerMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
}

export function HamburgerMenu({
  isOpen,
  className,
  ...props
}: HamburgerMenuProps) {
  return (
    <div
      className={cn(
        'relative block h-4.5 w-6 cursor-pointer bg-transparent',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'bg-foreground absolute top-0 left-0 h-0.5 w-full origin-left rotate-0 rounded-full opacity-100 transition-all duration-250 ease-in-out',
          isOpen && 'top-0 left-0.75 rotate-45'
        )}
      />
      <span
        className={cn(
          'bg-foreground absolute top-1/2 left-0 h-0.5 w-full origin-left -translate-y-1/2 rotate-0 rounded-full opacity-100 transition-all duration-250 ease-in-out',
          isOpen && 'w-0 opacity-0'
        )}
      />
      <span
        className={cn(
          'bg-foreground absolute top-full left-0 h-0.5 w-full origin-left -translate-y-full rotate-0 rounded-full opacity-100 transition-all duration-250 ease-in-out',
          isOpen && 'top-4.25 left-0.75 -rotate-45'
        )}
      />
    </div>
  )
}
