export default function SolutionApproach() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground sticky top-8 text-2xl font-semibold tracking-tight lg:text-3xl">
          How I Solved It
        </h2>
        <div>
          <p className="text-muted-foreground max-w-prose text-lg leading-relaxed">
            I engineered the site around one primary metric:{' '}
            <strong className="text-foreground font-semibold">trust</strong>. By
            combining ultra-fast load times with a frictionless application
            process, we created a system that made submitting an inquiry feel
            effortless and secure.
          </p>
          <p className="text-muted-foreground mt-4 max-w-prose text-lg leading-relaxed">
            Every interaction was optimized to ask for less upfront,
            progressively disclosing the form to avoid overwhelming users, while
            behind the scenes securely saving and syncing data in real-time.
          </p>
        </div>
      </div>
    </section>
  )
}
