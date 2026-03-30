'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_NAME, CONTACT, AVAILABILITY } from '@/lib/site-config'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const socials = [
  {
    name: 'LinkedIn',
    href: CONTACT.linkedin,
    icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
      <svg viewBox="0 0 128 128" fill="none" {...props}>
        <path
          fill="#0076b2"
          d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
        />
        <path
          fill="#fff"
          d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: CONTACT.whatsapp,
    icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="border-border/40 bg-background w-full border-t pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr] md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-6">
            <Link
              href="/"
              className="text-foreground text-3xl font-semibold tracking-tighter transition-opacity hover:opacity-80"
            >
              {SITE_NAME}
            </Link>

            <p className="text-muted-foreground max-w-xs text-base leading-relaxed">
              Designing and building high-trust websites for small businesses —
              from strategy to launch.
            </p>

            <div className="border-border/50 bg-muted/30 text-foreground/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              {AVAILABILITY.footer.replace('🟢 ', '')}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-muted-foreground/60 text-sm font-semibold tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-base transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-6">
            <h3 className="text-muted-foreground/60 text-sm font-semibold tracking-widest uppercase">
              Connect
            </h3>
            <ul className="flex flex-col gap-4">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-muted-foreground hover:text-foreground flex items-center gap-3 text-base transition-colors"
                  >
                    <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-foreground hover:text-primary inline-flex items-center gap-2 text-base font-semibold transition-colors"
                >
                  Book a Free Call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border/40 mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>

          <div className="text-muted-foreground flex items-center gap-3 text-sm font-semibold tracking-[0.15em] uppercase">
            <span>Built with Next.js</span>
            <span className="bg-border h-px w-6" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
