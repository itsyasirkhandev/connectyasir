'use client'

import { cn } from '@/lib/utils'

const techCategories = [
  {
    name: 'Frontend',
    description: 'Modern, fast, and SEO-optimized interfaces.',
    tools: [
      { name: 'Next.js', icon: 'devicon--nextjs' },
      { name: 'React', icon: 'devicon--react' },
      {
        name: 'TypeScript',
        icon: 'vscode-icons--file-type-typescript-official',
      },
      { name: 'Tailwind CSS', icon: 'devicon--tailwindcss' },
      { name: 'shadcn/ui', icon: 'hugeicons--shadcn-square' },
    ],
  },
  {
    name: 'Backend & Hosting',
    description: 'Reliable infrastructure for data and deployment.',
    tools: [
      { name: 'Convex', icon: 'bxl--convex' },
      { name: 'Vercel', icon: 'devicon--vercel' },
      { name: 'GitHub', icon: 'devicon--github' },
    ],
  },
  {
    name: 'Design',
    description: 'Visual systems that speak your brand identity.',
    tools: [
      { name: 'Figma', icon: 'devicon--figma' },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="stack">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Tools
          </span>
          <h2 className="text-foreground mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tighter md:text-5xl">
            Modern tools for fast, reliable websites.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
            I don&apos;t just use tools; I master the ones that deliver the best
            performance, security, and developer experience for my clients.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="border-border hover:border-primary/40 flex flex-col border-l pl-8 transition-colors"
            >
              <h3 className="text-foreground text-xl font-semibold tracking-tight">
                {category.name}
              </h3>
              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                {category.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-4">
                {category.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-border bg-card text-foreground hover:bg-muted flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all"
                  >
                    {tool.icon && <span className={cn(tool.icon, 'h-4 w-4')} />}
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
