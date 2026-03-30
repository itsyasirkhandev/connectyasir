import { MessageSquare, Search, Zap, Sparkles } from 'lucide-react'

export default function MyValues() {
  return (
    <section>
      <header>
        <span>How I Work</span>
        <h2>What working with me actually looks like.</h2>
        <p>
          No vanishing acts. No &quot;I&apos;ll get back to you next week.&quot;
          Here&apos;s what you can expect from day one.
        </p>
      </header>

      <ul>
        <li>
          <MessageSquare className="h-8 w-8" />
          <h3>You talk to the person building your site.</h3>
          <p>
            Not an assistant. Not a chatbot. Me. One person who knows every
            detail of your project because I&apos;m the one building it.
          </p>
        </li>
        <li>
          <Search className="h-8 w-8" />
          <h3>You see the price before we start. Period.</h3>
          <p>
            No vague estimates. No &quot;we&apos;ll figure it out later.&quot;
            You know exactly what you&apos;re paying, what you&apos;re getting,
            and when it&apos;s done &mdash; before you send a single dollar.
          </p>
        </li>
        <li>
          <Zap className="h-8 w-8" />
          <h3>
            Fast because the process is tight &mdash; not because I cut corners.
          </h3>
          <p>
            Most projects launch in 1&ndash;3 weeks. That&apos;s not rushing.
            That&apos;s what happens when one focused person handles everything
            without committee meetings and approval chains.
          </p>
        </li>
        <li>
          <Sparkles className="h-8 w-8" />
          <h3>Custom-built. Not copy-pasted.</h3>
          <p>
            No WordPress themes. No templates that 500 other businesses use with
            different colors. Every site is designed and coded specifically for
            your business. When you see it, you&apos;ll know it&apos;s yours.
          </p>
        </li>
      </ul>
    </section>
  )
}
