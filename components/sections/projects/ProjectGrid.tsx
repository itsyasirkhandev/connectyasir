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
              <p>No website. No logo. No online presence. Running zero ads.</p>
            </div>
            <div>
              <strong>After:</strong>
              <p>
                Full web app. Admin dashboard. Brand identity. 1,000+ leads in
                the first month.
              </p>
            </div>
            <span>Timeline: Built in 2 weeks</span>
            <Link
              href="/projects/apna-qarz"
              className="flex items-center gap-2"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
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
              <p>
                Site looked amateur. Visitors left because it didn&apos;t feel
                trustworthy.
              </p>
            </div>
            <div>
              <strong>After:</strong>
              <p>
                Premium redesign. Clean, fast, professional. Conversions went up
                immediately.
              </p>
            </div>
            <span>Timeline: Redesign</span>
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
            <div>
              <strong>Before:</strong>
              <p>
                Outdated website. Zero inbound leads. No online credibility.
              </p>
            </div>
            <div>
              <strong>After:</strong>
              <p>
                Modern site. Traffic up. Weekly inquiries from new customers.
              </p>
            </div>
            <span>Timeline: Full rebuild</span>
            <span>Case study coming soon</span>
          </article>
        </li>
      </ul>
    </section>
  )
}
