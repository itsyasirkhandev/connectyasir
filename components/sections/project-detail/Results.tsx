export default function Results() {
  return (
    <section className="border-t py-16">
      <div className="grid grid-cols-1 items-start gap-8 border-t py-16 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          The Impact
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          <div className="flex flex-col">
            <span className="text-foreground text-5xl font-semibold tracking-tight">
              1,000+
            </span>
            <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Qualified form submissions generated within the very first month.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-foreground text-5xl font-semibold tracking-tight">
              14
            </span>
            <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Days to design, code, and successfully launch the entire platform.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-foreground text-5xl font-semibold tracking-tight">
              50k+
            </span>
            <span className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Monthly visitors comfortably handled by the new scalable
              architecture.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
