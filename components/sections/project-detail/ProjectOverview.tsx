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
            <td>2 weeks</td>
            <td>Branding, design, development, backend, SEO, hosting</td>
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
        <h2>The transformation</h2>
        <table>
          <thead>
            <tr>
              <th>BEFORE</th>
              <th>AFTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>- No website</td>
              <td>- Full website</td>
            </tr>
            <tr>
              <td>- No logo</td>
              <td>- Brand identity</td>
            </tr>
            <tr>
              <td>- No online presence</td>
              <td>- Admin dashboard</td>
            </tr>
            <tr>
              <td>- No lead system</td>
              <td>- 1,000+ leads in month one</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}
