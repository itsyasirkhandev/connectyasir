import { MessageSquare, Calendar, Zap } from 'lucide-react'

export default function MyValues() {
  return (
    <section>
      <header>
        <h2>Why work with me?</h2>
      </header>

      <ul>
        <li>
          <MessageSquare className="h-8 w-8" />
          <h3>Direct communication</h3>
          <p>
            You work directly with me. No middlemen, no project managers, and no
            communication gaps.
          </p>
        </li>
        <li>
          <Calendar className="h-8 w-8" />
          <h3>Fixed pricing</h3>
          <p>
            You know exactly what you’re paying before we start – no hidden fees
            or surprise invoices.
          </p>
        </li>
        <li>
          <Zap className="h-8 w-8" />
          <h3>Modern stack</h3>
          <p>
            I build with the same tools used by the world’s biggest companies,
            ensuring your site is fast and reliable.
          </p>
        </li>
      </ul>
    </section>
  )
}
