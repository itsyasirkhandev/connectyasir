import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section>
      <header>
        <span>Client Reviews</span>
        <h2>Trusted by business owners.</h2>
      </header>

      <ul>
        <li>
          <blockquote>
            &quot;Professional, modern, on-time, and fairly priced. I highly
            recommend Yasir Khan.&quot;
          </blockquote>
          <cite>
            <span>Rashid Bashir</span>
            <span>Finance Advisor · Apna Qarz</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
          </div>
        </li>
        <li>
          <blockquote>
            &quot;The new site looks premium, loads fast, and helped improve
            trust and conversions.&quot;
          </blockquote>
          <cite>
            <span>Prime Tools Provider</span>
            <span>Owner</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
          </div>
        </li>
        <li>
          <blockquote>
            &quot;Our old site brought no leads. After the rebuild, traffic and
            inquiries improved significantly.&quot;
          </blockquote>
          <cite>
            <span>Ghulam Yaseen</span>
            <span>Owner · Ghulam Seeds</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
          </div>
        </li>
      </ul>
    </section>
  )
}
