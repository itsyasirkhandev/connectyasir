'use client'

import { MessageCircle, Mail, Calendar, ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'
import { CONTACT } from '@/lib/site-config'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
    >
      <path
        fill="currentColor"
        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
      />
      <path
        fill="var(--color-background, #fff)"
        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
      />
    </svg>
  )
}

export default function ContactOptions() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
          {/* Left Column: Heading */}
          <div>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
              Get in touch
            </h2>
            <p className="text-muted-foreground mt-4 max-w-prose text-base leading-relaxed">
              Choose the method that works best for you. I respond swiftly to
              all inquiries.
            </p>
          </div>

          {/* Right Column: Options */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Call Card */}
            <div className="bg-card hover:border-primary/30 flex flex-col items-start rounded-2xl border p-8 transition-all duration-300 hover:shadow-sm">
              <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">
                Book Your Strategy Call
              </h3>
              <p className="text-muted-foreground mt-3 grow text-base leading-relaxed">
                Pick a time that fits your schedule.
              </p>

              <div className="mt-8 flex w-full flex-col items-start gap-4 sm:w-auto">
                <PrimaryButton
                  text="Schedule a Call"
                  onClick={() => window.open(CONTACT.calendar, '_blank')}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Direct Message Card */}
            <div className="bg-card hover:border-primary/30 flex flex-col items-start rounded-2xl border p-8 transition-all duration-300 hover:shadow-sm">
              <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">
                Or bypass the calendar
              </h3>
              <p className="text-muted-foreground mt-3 grow text-base leading-relaxed">
                I personally reply to all messages within a few hours.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="bg-muted hover:bg-muted/80 text-foreground focus-visible:ring-primary flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Mail className="h-4 w-4" />
                  Email me directly
                </a>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-muted/80 text-foreground focus-visible:ring-primary flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground group focus-visible:ring-primary mt-2 flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  Connect on LinkedIn
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
