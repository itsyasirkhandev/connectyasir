import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedProjects() {
  return (
    <section>
      <header>
        <span>Recent Work</span>
        <h2>
          These aren&apos;t mockups. These are live businesses you can visit
          right now.
        </h2>
        <p>
          Real clients. Real websites. Real results. Click any project to see
          what they had before, what I built, and what happened after launch.
        </p>
      </header>

      <ul>
        <li>
          <article>
            <Image
              src="/images/projects/apna-qarz-homepage.jpg"
              alt="Homepage screenshot of the Apna Qarz website"
              width={600}
              height={400}
            />
            <span>Full-Stack · Done-for-You</span>
            <h3>Apna Qarz</h3>
            <p>
              Had nothing &mdash; no website, no logo, no online presence. Two
              weeks later: a full web app with admin dashboard. 1,000+ leads in
              the first month.
            </p>
            <Link href="/projects/apna-qarz">See the full story →</Link>
          </article>
        </li>
        <li>
          <article>
            <Image
              src="/images/projects/prime-tools-provider-homepage.jpg"
              alt="Homepage screenshot of the Prime Tools Provider website"
              width={600}
              height={400}
            />
            <span>Marketing Site</span>
            <h3>Prime Tools Provider</h3>
            <p>
              Before: a site that looked like it was built in 2012. Visitors
              didn&apos;t trust it. After: a premium site. Conversions went up
              immediately.
            </p>
            <span>Case study coming soon</span>
          </article>
        </li>
        <li>
          <article>
            <Image
              src="/images/projects/ghulam-seeds-homepage.jpg"
              alt="Homepage screenshot of the Ghulam Seeds website"
              width={600}
              height={400}
            />
            <span>Marketing Site</span>
            <h3>Ghulam Seeds</h3>
            <p>
              Outdated site. Zero inbound leads. After the rebuild &mdash;
              consistent weekly inquiries and significantly more traffic.
            </p>
            <span>Case study coming soon</span>
          </article>
        </li>
      </ul>

      <Link href="/projects">View all projects → /projects</Link>
    </section>
  )
}
