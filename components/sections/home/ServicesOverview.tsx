import { Palette, Monitor, Globe, Wrench } from 'lucide-react'

export default function ServicesOverview() {
  return (
    <section>
      <header>
        <span>What You Get</span>
        <h2>
          Most businesses hire 4–5 people to get a website done. You need one.
        </h2>
        <p>
          A designer. A developer. An SEO person. A copywriter. Someone to set
          up hosting. That&apos;s $3,000–$8,000 and 2–3 months of back-and-forth
          with strangers.
        </p>
        <p>
          Or — one developer who does all of it. Direct communication. One
          invoice. Live in weeks.
        </p>
      </header>

      <ul>
        <li>
          <Palette className="h-6 w-6" />
          <h3>Logo & Brand Identity</h3>
          <p>
            Your business gets a real identity — not a Canva logo you made at
            midnight. Professional. Memorable. Yours.
          </p>
        </li>
        <li>
          <Monitor className="h-6 w-6" />
          <h3>Design & Development</h3>
          <p>
            A website your customers actually trust the second it loads.
            Custom-built. Not a recycled WordPress theme 500 other businesses
            are using.
          </p>
        </li>
        <li>
          <Globe className="h-6 w-6" />
          <h3>Domain & Hosting</h3>
          <p>
            Domain connected. Hosting configured. SSL secured. You never Google
            &quot;how to point a DNS record&quot; at 2 AM.
          </p>
        </li>
        <li>
          <Wrench className="h-6 w-6" />
          <h3>SEO & Ongoing Support</h3>
          <p>
            Google finds your site. Customers find your site. And when something
            needs fixing after launch — I&apos;m a message away.
          </p>
        </li>
      </ul>
    </section>
  )
}
