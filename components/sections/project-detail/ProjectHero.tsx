import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ProjectHero() {
  return (
    <section>
      <Link href="/projects" className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />← All Projects
      </Link>
      <h1>Apna Qarz</h1>
      <span>Full-Stack · Done-for-You</span>
      <span>Industry: Finance Advisory</span>
      <Image
        src="/images/projects/apna-qarz-homepage.jpg"
        alt="Desktop screenshot of the Apna Qarz homepage"
        width={1200}
        height={600}
        priority
      />
    </section>
  )
}
