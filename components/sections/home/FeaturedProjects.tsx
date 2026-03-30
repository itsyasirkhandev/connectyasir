import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedProjects() {
  return (
    <section>
      <header>
        <span>Recent Work</span>
        <h2>Real projects. Real businesses. Real results.</h2>
        <p>
          A few examples of websites I’ve designed and built for businesses.
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
              From no website to a full platform with 1,000+ leads in the first
              month.
            </p>
            <Link href="/projects/apna-qarz">View Case Study →</Link>
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
              Upgraded an outdated site into a cleaner, more trustworthy
              business presence.
            </p>
            <span>Case Study Coming Soon</span>
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
              Rebuilt an old website into a modern site that brought weekly
              inquiries.
            </p>
            <span>Case Study Coming Soon</span>
          </article>
        </li>
      </ul>

      <Link href="/projects">View All Projects →</Link>
    </section>
  )
}
