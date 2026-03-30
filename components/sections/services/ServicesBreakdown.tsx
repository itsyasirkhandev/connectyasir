import { Palette, Monitor, Settings, Globe, Search, Wrench } from 'lucide-react'

export default function ServicesBreakdown() {
  return (
    <section>
      <header>
        <span>What I Handle</span>
        <h2>One person. One process. Everything covered.</h2>
      </header>

      <ul>
        <li>
          <Palette className="h-8 w-8" />
          <h3>Branding & Logo</h3>
          <p>A clean, professional identity for your business.</p>
        </li>
        <li>
          <Monitor className="h-8 w-8" />
          <h3>Website Design</h3>
          <p>Strategic layouts that build trust and guide action.</p>
        </li>
        <li>
          <Settings className="h-8 w-8" />
          <h3>Development</h3>
          <p>Fast, responsive websites built with modern tools.</p>
        </li>
        <li>
          <Globe className="h-8 w-8" />
          <h3>Domain & Hosting</h3>
          <p>Setup, security, and launch handled for you.</p>
        </li>
        <li>
          <Search className="h-8 w-8" />
          <h3>SEO Setup</h3>
          <p>
            Search-ready pages with analytics and technical basics in place.
          </p>
        </li>
        <li>
          <Wrench className="h-8 w-8" />
          <h3>Post-Launch Support</h3>
          <p>Updates, fixes, and help after your website goes live.</p>
        </li>
      </ul>
    </section>
  )
}
