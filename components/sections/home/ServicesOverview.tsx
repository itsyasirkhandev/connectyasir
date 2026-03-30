import { Palette, Monitor, Globe, Wrench } from 'lucide-react'

export default function ServicesOverview() {
  return (
    <section>
      <header>
        <span>What You Get</span>
        <h2>Everything you need to launch — handled by one person.</h2>
        <p>
          Branding, design, development, hosting, SEO, and support. No chasing
          multiple freelancers. No messy handoffs.
        </p>
      </header>

      <ul>
        <li>
          <Palette className="h-6 w-6" />
          <h3>Branding & Logo</h3>
          <p>A clean identity that makes your business look professional.</p>
        </li>
        <li>
          <Monitor className="h-6 w-6" />
          <h3>Website Design & Development</h3>
          <p>Fast, modern pages built to earn trust and drive action.</p>
        </li>
        <li>
          <Globe className="h-6 w-6" />
          <h3>Domain & Hosting</h3>
          <p>Setup, launch, security, and technical details handled for you.</p>
        </li>
        <li>
          <Wrench className="h-6 w-6" />
          <h3>SEO & Support</h3>
          <p>Basic SEO setup and post-launch help when you need it.</p>
        </li>
      </ul>
    </section>
  )
}
