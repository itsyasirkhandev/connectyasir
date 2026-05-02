export default function TechStackUsed({ stack }: { stack: string[] }) {
  return (
    <section className="border-t py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <span
              key={index}
              className="bg-muted text-foreground rounded-full px-4 py-1.5 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
