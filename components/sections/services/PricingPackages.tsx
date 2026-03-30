import Link from 'next/link'
import { Star, ShieldCheck, ArrowRight, Check } from 'lucide-react'

export default function PricingPackages() {
  return (
    <section>
      <header>
        <span>Pricing</span>
        <h2>Agencies charge $5,000–$15,000 for what I deliver in 1–3 weeks.</h2>
        <p>
          And they take 2–3 months. And you talk to a project manager instead of
          the person building your site.
        </p>
        <p>
          Three packages. Transparent pricing. 50% upfront. 50% before launch.
          No hidden fees. No hourly billing. You know the total before we start.
        </p>
      </header>

      <div>
        {/* Starter Package */}
        <article>
          <h3>Starter</h3>
          <p>Go from zero to live in 7 days.</p>
          <div>
            <strong>Ideal For:</strong>
            <p>
              You need a clean, professional site — fast. A few pages. Done
              right. No overthinking.
            </p>
          </div>
          <div>
            <span>$497</span>
            <span>One-time · No recurring fees</span>
            <span>Timeline: ~1 week</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 3–4 custom designed
              pages
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Clean, modern design
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Looks great on phones
              and tablets
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Clear calls-to-action
              on every page
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Fast-loading pages
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Contact form — wired
              up and working
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 1 round of design
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 14 days post-launch
              support
            </li>
          </ul>
          <p>Great for businesses that need to get online — now.</p>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        {/* Standard Package */}
        <article>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> Most
            Popular — chosen by 2 out of 3 clients
          </span>
          <h3>Standard</h3>
          <p>
            A complete website built to bring you customers — not just visitors.
          </p>
          <div>
            <strong>Ideal For:</strong>
            <p>
              You&apos;re ready to grow. You want a site that ranks on Google,
              captures leads, and makes people trust you before they ever call.
            </p>
          </div>
          <div>
            <span>$997</span>
            <span>One-time · No recurring fees</span>
            <span>Timeline: ~2 weeks</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 7–10 page full
              website
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Designed to build
              trust and convert
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Customer reviews and
              trust signals built into the design
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Google Analytics +
              Search Console configured
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> On-page SEO for every
              page
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Lead capture forms
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> I show you how to
              update content yourself
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 2 rounds of design
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 30 days post-launch
              support
            </li>
          </ul>
          <p>
            For $500 more than Starter, you get 3× the pages, full SEO, lead
            capture, and double the support.
          </p>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        {/* Premium Package */}
        <article>
          <h3>Premium</h3>
          <p>Your entire digital presence — built, branded, and launched.</p>
          <div>
            <strong>Ideal For:</strong>
            <p>
              You want the full treatment. Brand identity. A high-performance
              website with custom features, backend systems, and admin
              dashboards. Everything handled. Fast.
            </p>
          </div>
          <div>
            <span>$2,997</span>
            <span>One-time · No recurring fees</span>
            <span>Timeline: ~3 weeks</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Everything in
              Standard
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Logo and full brand
              identity
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 1-on-1 strategy
              session
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Priority fast-track
              delivery
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Custom features and
              integrations
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Admin dashboards and
              backend systems
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 3 rounds of design
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> 60 days post-launch
              support
            </li>
          </ul>
          <p>
            For businesses that want everything done — with zero loose ends.
          </p>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>

      <section>
        <h4 className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-500" /> THE PROMISE
        </h4>
        <p>You approve the design before I build it.</p>
        <p>You see the site before I launch it.</p>
        <p>
          You own everything I create — code, design, content, logo. It&apos;s
          all yours.
        </p>
        <p>If the design doesn&apos;t feel right, we revise until it does.</p>
        <p>
          50% upfront. 50% before launch. You never pay for something you
          haven&apos;t seen and approved.
        </p>
      </section>

      <section>
        <p>I take on 2–3 projects at a time.</p>
        <p>
          Not because I can&apos;t handle more — because your project deserves
          my full attention. If I&apos;m at capacity when you reach out,
          I&apos;ll let you know and give you the earliest available slot.
        </p>
      </section>
    </section>
  )
}
