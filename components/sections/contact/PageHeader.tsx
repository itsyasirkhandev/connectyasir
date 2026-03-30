import { Circle } from 'lucide-react'

export default function PageHeader() {
  return (
    <header>
      <span>Contact</span>
      <h1>Step 1: Let&apos;s talk about your project.</h1>
      <p>
        30 minutes. Free. No commitment. No sales pitch. You tell me about your
        business &mdash; I tell you exactly what I&apos;d build, how long it
        takes, and what it costs.
      </p>
      <span className="flex items-center gap-2">
        <Circle className="h-2 w-2 fill-green-500 text-green-500" />
        Currently taking on 2 new projects
      </span>
    </header>
  )
}
