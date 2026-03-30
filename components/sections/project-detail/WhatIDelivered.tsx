import { Check } from 'lucide-react'

export default function WhatIDelivered() {
  return (
    <section>
      <h2>What I built.</h2>
      <p>
        Every part of the project — handled from scratch. One person. Two weeks.
      </p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Logo and complete brand
          identity
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Full website strategy and
          sitemap
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Custom design for every
          page
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Frontend and backend
          development
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Copywriting for all pages
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Admin dashboard for
          managing loan applications
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> On-page and technical SEO
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Google Analytics + Search
          Console
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Hosting configuration and
          domain connection
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" /> Post-launch support
        </li>
      </ul>
    </section>
  )
}
