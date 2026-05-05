import { CITATIONS } from '@/lib/site-data'

export function Citations() {
  return (
    <section className="border-border border-t py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Data & References
          </span>
          <h2 className="text-foreground mt-4 text-2xl leading-tight font-semibold tracking-tighter">
            Evidence-Based Design & Strategy
          </h2>
          <p className="text-muted-foreground mt-4 text-base">
            My approach is backed by industry research and global standards in
            web performance and social impact.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CITATIONS.map((citation, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="text-foreground text-sm leading-relaxed font-medium italic">
                &ldquo;{citation.fact}&rdquo;
              </p>
              <div className="mt-auto">
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-xs font-semibold underline underline-offset-4 transition-colors"
                >
                  {citation.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
