export default function TheChallenge() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground sticky top-8 text-2xl font-semibold tracking-tight lg:text-3xl">
          The Challenge
        </h2>
        <div className="prose prose-zinc dark:prose-invert">
          <p className="text-muted-foreground max-w-prose text-lg leading-relaxed">
            Apna Qarz needed to emerge from nothing and instantly appear as the
            most trusted finance advisory in their space. They required a secure
            dashboard to manage applications and a lead flow that never slept.
          </p>
          <p className="text-muted-foreground mt-4 max-w-prose text-lg leading-relaxed">
            The absence of any pre-existing digital footprint meant every pixel
            had to immediately convey authority and reliability to a skeptical
            audience seeking financial services. Their internal operation also
            totally relied on manual outreach, creating a bottleneck for growth.
          </p>
        </div>
      </div>
    </section>
  )
}
