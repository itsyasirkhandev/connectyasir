'use client'

const CLIENTS = [
  { name: 'Apna Qarz', industry: 'Finance' },
  { name: 'Rehman Vet', industry: 'Healthcare' },
  { name: 'Green Earth', industry: 'Non-profit' },
  { name: 'TechFlow', industry: 'SaaS' },
  { name: 'Blue Ridge', industry: 'Real Estate' },
]

export function TrustBar() {
  return (
    <section className="border-border/50 bg-muted/20 border-y py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-muted-foreground mb-8 text-center text-xs font-semibold tracking-[0.2em] uppercase">
          Trusted by growing businesses and local experts
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          {CLIENTS.map((client) => (
            <div key={client.name} className="group flex flex-col items-center">
              <span className="font-heading text-foreground text-xl font-bold tracking-tighter sm:text-2xl">
                {client.name}
              </span>
              <span className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
