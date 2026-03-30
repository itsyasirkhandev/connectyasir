import Link from 'next/link'
import { Circle, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav>
      <div>Yasir Khan</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Circle className="h-2 w-2 fill-green-500 text-green-500" />
          Taking on 2 new projects
        </span>
        <Link href="/contact" className="flex items-center gap-2">
          Start With a Free Call <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </nav>
  )
}
