import { MessageCircle, Mail, Clock, Calendar } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/primary-button'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
    >
      <path
        fill="#0076b2"
        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
      />
      <path
        fill="#fff"
        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
      />
    </svg>
  )
}

export default function ContactOptions() {
  return (
    <section>
      <div>
        <h3>BOOK A CALL</h3>
        <h4>Pick a time that works for you.</h4>
        <p>
          I’ll ask about your business and your goals, then I’ll tell you
          exactly how I can help.
        </p>

        {/* Cal.com Embed Placeholder */}
        <div>
          <p>[Cal.com Embed Placeholder]</p>
          <a
            href="https://cal.com/connectyasir/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            cal.com/connectyasir/30min
          </a>
        </div>
      </div>

      <div>
        <h3>MESSAGE ME</h3>
        <h4>Prefer to message first?</h4>

        <ul className="mt-6 space-y-4">
          <li className="flex flex-col gap-1">
            <strong className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-500" />
              WHATSAPP:
            </strong>
            <a
              href="https://wa.me/923014545482"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
            <p>&quot;Quick questions or project ideas&quot;</p>
            <span>wa.me/923014545482</span>
          </li>
          <li className="flex flex-col items-start gap-1">
            <strong className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              EMAIL:
            </strong>
            <PrimaryButton
              text="Send Message"
              sentText="Ready to send!"
              className="mt-2"
              onClick={() => {
                window.location.href = 'mailto:itsyasirkhan.dev@gmail.com'
              }}
            />
            <p className="mt-2 text-zinc-700 italic">
              &quot;Detailed project briefs&quot;
            </p>
            <span className="text-zinc-600">itsyasirkhan.dev@gmail.com</span>
          </li>
          <li className="flex flex-col gap-1">
            <strong className="flex items-center gap-2">
              <LinkedinIcon className="h-5 w-5" />
              LINKEDIN:
            </strong>
            <a
              href="https://linkedin.com/in/connectyasir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <span>linkedin.com/in/connectyasir</span>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> I respond within a few hours.
          </p>
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Mon–Fri 9 AM – 5 PM PST
          </p>
        </div>
      </div>
    </section>
  )
}
