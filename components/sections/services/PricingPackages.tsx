import Link from 'next/link'
import { Star, ShieldCheck, ArrowRight, Check } from 'lucide-react'

export default function PricingPackages() {
  return (
    <section>
      <header>
        <span>Pricing</span>
        <h2>Simple packages. Clear scope. No hidden fees.</h2>
        <p>
          Choose the package that fits your business stage. All projects are
          fixed-price with clear deliverables.
        </p>
      </header>

      <div>
        {/* Starter Package */}
        <article>
          <h3>Starter</h3>
          <p>A simple, professional website — live fast.</p>
          <div>
            <span>$497</span>
            <span>Timeline: ~1 week</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 3–4 pages
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Modern responsive
              design
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Clear
              calls-to-action
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Contact form
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Fast-loading pages
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 1 round of
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 14 days support
            </li>
          </ul>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        {/* Standard Package */}
        <article>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> Most
            Popular
          </span>
          <h3>Standard</h3>
          <p>A complete website built to grow trust and leads.</p>
          <div>
            <span>$997</span>
            <span>Timeline: ~2 weeks</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 7–10 pages
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Conversion-focused
              structure
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Trust signals built
              into design
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Google Analytics +
              Search Console
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ On-page SEO basics
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Lead forms
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 2 rounds of
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 30 days support
            </li>
          </ul>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        {/* Premium Package */}
        <article>
          <h3>Premium</h3>
          <p>A complete digital presence with advanced features.</p>
          <div>
            <span>$2,997</span>
            <span>Timeline: ~3 weeks</span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Everything in
              Standard
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Logo + brand
              identity
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Strategy session
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Priority delivery
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Custom features
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ Admin
              dashboard/backend systems
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 3 rounds of
              revisions
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> ✓ 60 days support
            </li>
          </ul>
          <Link href="/contact" className="flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>

      <section>
        <h4 className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-500" /> THE PROMISE
        </h4>
        <h2>Clear process. Full ownership. No surprises.</h2>
        <ul>
          <li>- You approve the design before development starts</li>
          <li>- You review the site before launch</li>
          <li>- You own the code, design, and assets</li>
          <li>- 50% upfront, 50% before launch</li>
        </ul>
      </section>
    </section>
  )
}
