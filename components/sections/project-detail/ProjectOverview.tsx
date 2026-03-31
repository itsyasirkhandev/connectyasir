import { ArrowRight } from 'lucide-react'

export default function ProjectOverview() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Timeline</th>
            <th>Scope</th>
            <th>Live Site</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rashid Bashir</td>
            <td>14 Days</td>
            <td>
              Complete Branding, UX Design, Custom Development, Backend Systems,
              SEO, Managed Hosting
            </td>
            <td>
              <a
                href="https://apnaqarz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                apnaqarz.com [visit <ArrowRight className="h-4 w-4" />]
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <section>
        <h2>The Before &amp; After</h2>
        <table>
          <thead>
            <tr>
              <th>BEFORE</th>
              <th>AFTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>- Zero digital footprint.</td>
              <td>- A blazing fast custom platform.</td>
            </tr>
            <tr>
              <td>- No brand identity.</td>
              <td>- Secure admin dashboard.</td>
            </tr>
            <tr>
              <td>- No automated lead capture.</td>
              <td>- 1,000+ high-intent leads generated.</td>
            </tr>
            <tr>
              <td>- Total reliance on manual outreach.</td>
              <td>- Launched in 30 days.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}
