import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProjectGrid() {
  return (
    <section>
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
            <div>
              <strong>Before:</strong>
              <p>No website, no brand, no online presence.</p>
            </div>
            <div>
              <strong>After:</strong>
              <p>Full platform, admin dashboard, 1,000+ leads in month one.</p>
            </div>
            <Link
              href="/projects/apna-qarz"
              className="flex items-center gap-2"
            >
              Read Case Study <ArrowRight className="h-4 w-4" />
            </Link>
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
            <div>
              <strong>Before:</strong>
              <p>Outdated and untrustworthy site.</p>
            </div>
            <div>
              <strong>After:</strong>
              <p>Cleaner, stronger, more premium online presence.</p>
            </div>
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
            <div>
              <strong>Before:</strong>
              <p>Old site with no inbound leads.</p>
            </div>
            <div>
              <strong>After:</strong>
              <p>Modern website with more traffic and weekly inquiries.</p>
            </div>
            <span>Case Study Coming Soon</span>
          </article>
        </li>
      </ul>
    </section>
  )
}
