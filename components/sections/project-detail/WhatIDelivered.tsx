import { Check } from 'lucide-react'

export default function WhatIDelivered() {
  return (
    <section>
      <h2>What I delivered</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Logo and brand identity
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Website strategy and page
          structure
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Custom design and
          development
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Admin dashboard
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Copywriting
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> SEO setup
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Analytics and Search
          Console
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Hosting and launch
          support
        </li>
      </ul>
    </section>
  )
}
