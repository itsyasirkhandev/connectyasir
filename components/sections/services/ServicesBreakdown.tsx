import { Palette, Monitor, Settings, Globe, Search, Wrench } from 'lucide-react'

export default function ServicesBreakdown() {
  return (
    <section>
      <header>
        <span>What I Handle</span>
        <h2>You tell me about your business. I handle everything else.</h2>
        <p>
          No coordinating between designers, developers, and &quot;SEO
          guys.&quot; One person. One process. You focus on running your
          business.
        </p>
      </header>

      <ul>
        <li>
          <Palette className="h-8 w-8" />
          <h3>Branding & Logo</h3>
          <p>
            A professional logo and brand identity that makes your business look
            like it&apos;s been around for years — even if you launched last
            month. No Canva. No generic icons. Custom and yours.
          </p>
        </li>
        <li>
          <Monitor className="h-8 w-8" />
          <h3>Website Design</h3>
          <p>
            Every page is designed with one job: make visitors trust you and
            take action. Strategic layout. Clear CTAs. Looks sharp on every
            screen — phone, tablet, desktop.
          </p>
        </li>
        <li>
          <Settings className="h-8 w-8" />
          <h3>Development</h3>
          <p>
            Hand-coded. Not dragged and dropped. Your site loads in under 2
            seconds, ranks well on Google, and handles traffic spikes without
            crashing. Built with the same stack behind Netflix and Nike.
          </p>
        </li>
        <li>
          <Globe className="h-8 w-8" />
          <h3>Domain & Hosting</h3>
          <p>
            Domain connected. Hosting configured. SSL installed. DNS pointed.
            You don&apos;t need to know what any of that means — I handle it.
          </p>
        </li>
        <li>
          <Search className="h-8 w-8" />
          <h3>SEO Setup</h3>
          <p>
            Page titles. Meta descriptions. Image optimization. Google Search
            Console. Google Analytics. Your site is ready to be found from the
            day it goes live.
          </p>
        </li>
        <li>
          <Wrench className="h-8 w-8" />
          <h3>Post-Launch Support</h3>
          <p>
            I don&apos;t vanish after launch. Bug? Fixed. Text change? Done.
            Question? Answered. Every package includes dedicated support —
            you&apos;re covered.
          </p>
        </li>
      </ul>
    </section>
  )
}
