const technologies = [
  { name: 'Next.js', icon: 'devicon--nextjs' },
  { name: 'React', icon: 'devicon--react' },
  { name: 'Tailwind CSS', icon: 'devicon--tailwindcss' },
  { name: 'shadcn/ui', icon: 'hugeicons--shadcn-square' },
  { name: 'Convex', icon: 'bxl--convex' },
  { name: 'Vercel', icon: 'devicon--vercel' },
]

export default function TechStackUsed() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          The Architecture
        </h2>

        <ul className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="bg-muted/20 text-foreground hover:bg-muted/40 flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
            >
              <span
                className={`${tech.icon} h-4 w-4 shrink-0`}
                aria-hidden="true"
              />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
