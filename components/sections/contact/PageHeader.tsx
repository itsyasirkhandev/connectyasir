import { Circle } from 'lucide-react'

export default function PageHeader() {
  return (
    <header>
      <span>Contact</span>
      <h1>Book a free call to discuss your project.</h1>
      <p>
        No sales pitch. No pressure. Just 30 minutes to figure out exactly what
        your website needs to succeed.
      </p>
      <span className="flex items-center gap-2">
        <Circle className="h-2 w-2 fill-green-500 text-green-500" />
        Currently taking on 2 new projects
      </span>
    </header>
  )
}
