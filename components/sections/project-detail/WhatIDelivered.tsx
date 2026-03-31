import { Check } from 'lucide-react'

export default function WhatIDelivered() {
  return (
    <section>
      <h2>The Deliverables</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Premium brand identity +
          logo
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> High-converting site
          architecture
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Custom Next.js frontend
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Secure data dashboard
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Persuasive, human-first
          copywriting
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Technical SEO foundation
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Zero-maintenance managed
          hosting
        </li>
      </ul>
    </section>
  )
}
