import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section>
      <header>
        <span>About</span>
        <h1>I build websites that help businesses grow.</h1>
        <p>
          My name is Yasir Khan. I&rsquo;m a developer and designer focused on
          creating professional, high-performing websites for small businesses
          and founders.
        </p>
      </header>

      <div>
        <p>
          The goal is simple: to build you a website that works as hard as you
          do. A lot of websites look good but don’t actually do anything. I
          focus on the things that matter — speed, trust, and a clear path for
          your customers to take action.
        </p>
        <p>
          When you work with me, you’re not talking to a project manager or a
          sales team. You’re talking directly to the person who will be
          designing and coding every pixel of your site. This means things get
          done faster, communication is clearer, and the final result actually
          matches your vision.
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
