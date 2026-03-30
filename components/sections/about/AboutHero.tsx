import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section>
      <header>
        <span>About</span>
        <h1>
          I&apos;m Yasir. I build websites that make small businesses look like
          they&apos;ve been around for decades.
        </h1>
      </header>

      <div>
        <p>
          I got into development through curiosity. I liked figuring out how
          things work — and how one small detail can completely change whether
          someone trusts a website or clicks away. That curiosity turned into 3+
          years of building for real businesses.
        </p>
        <p>
          I freelance because I don&apos;t like middlemen. No project managers.
          No ticket queues. You talk to me. I talk to you. Decisions happen
          based on what actually fits your business — not what&apos;s fastest
          for an agency to ship and invoice.
        </p>
        <p>
          I work mostly with small businesses because the work feels honest.
          There&apos;s usually a real person behind it who genuinely cares about
          what they do. They just need their online presence to match the
          quality of their actual work. That&apos;s where I come in.
        </p>

        <ul>
          <li>
            <a
              href="https://linkedin.com/in/connectyasir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              LinkedIn <ArrowRight className="h-4 w-4" />{' '}
              linkedin.com/in/connectyasir
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/923014545482"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              WhatsApp <ArrowRight className="h-4 w-4" /> wa.me/923014545482
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Image
          src="/images/yasir-khan.jpg"
          alt="Professional photo of Yasir Khan"
          width={600}
          height={800}
        />
      </div>
    </section>
  )
}
