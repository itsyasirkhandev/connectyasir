import { Star } from 'lucide-react'

export default function ClientTestimonial() {
  return (
    <section>
      <blockquote>
        &quot;One of the most professional developers I&apos;ve worked with.
        Latest technology. On-time delivery. Fair pricing. I personally
        recommend Yasir Khan.&quot;
      </blockquote>
      <cite>
        <span>Rashid Bashir</span>
        <span>Finance Advisor</span>
        <span>Business: Apna Qarz</span>
        <span className="flex items-center gap-2">
          Source: <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{' '}
          Google Review
        </span>
      </cite>
    </section>
  )
}
