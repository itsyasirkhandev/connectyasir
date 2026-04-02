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
      {
        name: 'TypeScript',
        icon: 'vscode-icons--file-type-typescript-official',
      },
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
    <section className="bg-background py-24 md:py-32" id="stack">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-primary-foreground text-xs font-semibold tracking-widest uppercase">
            The Toolkit
          </span>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tighter">
            The modern stack I use to deliver exceptional results.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="border-border hover:border-primary/40 flex flex-col border-l pl-8 transition-colors"
            >
              <h3 className="text-foreground text-3xl font-semibold tracking-tight">
                {category.name}
              </h3>
              <p className="text-muted-foreground mt-6 text-base leading-relaxed">
                {category.description}
              </p>

              <ul className="mt-10 flex flex-wrap gap-2.5">
                {category.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-border bg-card text-foreground hover:bg-muted flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-all"
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
