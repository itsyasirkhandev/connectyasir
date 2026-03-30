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
            <td>
              Logo, Design, Dev, Backend, SEO, Hosting, Dashboard, Content
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
        <h2>The transformation.</h2>
        <table>
          <thead>
            <tr>
              <th>BEFORE</th>
              <th>AFTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No website</td>
              <td>10+ page website</td>
            </tr>
            <tr>
              <td>No logo</td>
              <td>Full brand identity</td>
            </tr>
            <tr>
              <td>No online presence</td>
              <td>Running paid ads</td>
            </tr>
            <tr>
              <td>Zero leads</td>
              <td>1,000+ leads/month</td>
            </tr>
            <tr>
              <td>No backend system</td>
              <td>Admin dashboard</td>
            </tr>
            <tr>
              <td>Couldn&apos;t track anything</td>
              <td>Full analytics + Search Console</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}
