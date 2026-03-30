import Link from 'next/link'
import { Circle, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <section>
        <div>
          <h2>Yasir Khan</h2>
          <p>
            I build websites for small businesses — from first logo to final
            launch.
          </p>
          <span>
            <Circle className="h-2 w-2 fill-green-500 text-green-500" />
            Taking on 2 new projects
          </span>
        </div>

        <nav>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Let&apos;s talk</h3>
          <ul>
            <li>
              <a
                href="https://wa.me/923014545482"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <ArrowRight className="h-4 w-4" /> wa.me/923014545482
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/connectyasir"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowRight className="h-4 w-4" />{' '}
                linkedin.com/in/connectyasir
              </a>
            </li>
            <li>
              <a href="mailto:itsyasirkhan.dev@gmail.com">
                Email <ArrowRight className="h-4 w-4" />{' '}
                itsyasirkhan.dev@gmail.com
              </a>
            </li>
            <li>
              <Link href="/contact">
                Start With a Free Call <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <p>© 2025 Yasir Khan. All rights reserved.</p>
      </section>
    </footer>
  )
}
