import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section>
      <header>
        <span>Client Reviews</span>
        <h2>
          Three business owners trusted me with their online presence.
          Here&apos;s what they said — unedited.
        </h2>
      </header>

      <ul>
        <li>
          <blockquote>
            &quot;One of the most professional developers I&apos;ve worked with.
            Latest technology. On-time delivery. Fair pricing. I personally
            recommend Yasir Khan.&quot;
          </blockquote>
          <cite>
            <span>Rashid Bashir</span>
            <span>Finance Advisor · Apna Qarz</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
            <span>Full-Stack · Done-for-You</span>
          </div>
        </li>
        <li>
          <blockquote>
            &quot;I struggled with credibility. My old site didn&apos;t inspire
            confidence — I was losing people because it didn&apos;t look
            official enough. Yasir stepped in and fixed that. The new page is
            clean, fast, and actually looks like a premium business. My
            conversions improved because people actually trust the site now.
            It&apos;s a huge relief.&quot;
          </blockquote>
          <cite>
            <span>Prime SEO Tools</span>
            <span>Owner · Prime Tools Provider</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
            <span>Marketing Site Redesign</span>
          </div>
        </li>
        <li>
          <blockquote>
            &quot;We had an outdated website bringing in zero leads. Yasir
            completely transformed our online presence. Traffic and inquiries
            went up significantly. Communication was smooth, delivery was on
            time, quality beyond expectations. Highly recommend.&quot;
          </blockquote>
          <cite>
            <span>Ghulam Yaseen</span>
            <span>Owner · Ghulam Seeds</span>
          </cite>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Google Review</span>
            <span>Marketing Site</span>
          </div>
        </li>
      </ul>
    </section>
  )
}
