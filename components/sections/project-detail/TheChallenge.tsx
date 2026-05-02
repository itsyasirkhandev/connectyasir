type TheChallengeProps = {
  content: string
}

export default function TheChallenge({ content }: TheChallengeProps) {
  return (
    <section className="border-t py-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight lg:text-3xl">
          The Challenge
        </h2>
        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}
