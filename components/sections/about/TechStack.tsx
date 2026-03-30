'use client'

import { cn } from '@/lib/utils'

const techCategories = [
  {
    name: 'Frontend Core',
    description: 'Highly interactive, fast, and SEO-optimized interfaces.',
    tools: [
      { name: 'Next.js', icon: 'devicon--nextjs' },
      { name: 'React', icon: 'devicon--react' },
      { name: 'Tailwind CSS', icon: 'devicon--tailwindcss' },
      { name: 'TypeScript', icon: 'vscode-icons--file-type-typescript-official' },
      { name: 'shadcn/ui', icon: 'hugeicons--shadcn-square' },
    ],
  },
  {
    name: 'Backend & Hosting',
    description: 'Reliable infrastructure for content and user data.',
    tools: [
      { name: 'Vercel', icon: 'devicon--vercel' },
      { name: 'Convex', icon: 'bxl--convex' },
      { name: 'Node.js', icon: 'material-icon-theme--nodejs' },
    ],
  },
  {
    name: 'Design & Tools',
    description: 'Visual systems that speak your brand identity.',
    tools: [
      { name: 'Figma', icon: 'devicon--figma' },
      { name: 'Google Stitch', icon: 'material-icon-theme--google' },
      { name: 'Git', icon: 'material-icon-theme--git' },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-48" id="stack">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            The Toolkit
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tighter text-foreground md:text-5xl">
            My Technical Arsenal
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I don&apos;t just use tools; I master the ones that deliver the best 
            performance, security, and developer experience for my clients.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div 
              key={category.name}
              className="flex flex-col border-l border-border pl-8 transition-colors hover:border-primary/40"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {category.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              
              <ul className="mt-8 flex flex-wrap gap-4">
                {category.tools.map((tool) => (
                  <li 
                    key={tool.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                  >
                    {tool.icon && (
                      <span className={cn(tool.icon, "h-4 w-4")} />
                    )}
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
