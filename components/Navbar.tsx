'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Home01Icon,
  Briefcase01Icon,
  Configuration01Icon,
  UserEdit01Icon,
} from '@hugeicons/core-free-icons'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { PrimaryButton } from '@/components/ui/primary-button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { HamburgerMenu } from '@/components/ui/hamburger-menu'

const NAV_LINKS = [
  { label: 'Home', href: '/', icon: Home01Icon },
  { label: 'Projects', href: '/projects', icon: Briefcase01Icon },
  { label: 'Services', href: '/services', icon: Configuration01Icon },
  { label: 'About', href: '/about', icon: UserEdit01Icon },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="border-border/50 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          className="font-heading text-foreground hover:text-foreground/80 focus-visible:ring-primary text-lg font-semibold tracking-tight transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Yasir Khan
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'hover:text-foreground focus-visible:ring-primary text-sm font-normal transition-colors focus-visible:ring-2 focus-visible:outline-none',
                    pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section / Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />

          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/contact"
              className="focus-visible:ring-ring outline-none"
            >
              <PrimaryButton
                size="sm"
                text="Book Your Free Call →"
                className="pointer-events-none"
              />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <HamburgerMenu isOpen={isOpen} />
            </SheetTrigger>
            <SheetContent side="right" className="w-full px-4 sm:max-w-xs">
              <SheetHeader className="pb-8">
                <SheetTitle className="font-heading text-left text-xl">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-6"
                aria-label="Mobile Navigation"
              >
                <ul className="flex flex-col gap-4 px-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                        className={cn(
                          'active:bg-muted focus-visible:ring-primary flex items-center gap-3 rounded-lg p-3 text-base font-normal transition-colors focus-visible:ring-2 focus-visible:outline-none',
                          pathname === link.href
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        )}
                      >
                        <HugeiconsIcon icon={link.icon} size={20} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <hr className="border-border/50" />

                <div className="flex flex-col gap-4 px-6 pb-8">
                  <Link
                    href="/contact"
                    className="focus-visible:ring-ring w-full outline-none"
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    <PrimaryButton
                      text="Book Your Free Call →"
                      className="pointer-events-none w-full"
                    />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
