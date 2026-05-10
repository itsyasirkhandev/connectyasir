'use client'

const CLIENTS = [
  { name: 'Apna Qarz', industry: 'FINANCE' },
  { name: 'Rehman Vet', industry: 'HEALTHCARE' },
]

export function TrustBar() {
  return (
    <section className="border-border/50 bg-muted/10 border-y py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-muted-foreground/80 mb-10 text-center text-[10px] font-bold tracking-[0.3em] uppercase">
          Trusted by Industry Leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group relative flex flex-col items-center transition-transform duration-500 ease-out hover:-translate-y-1"
            >
              <div className="relative">
                <span className="font-heading text-foreground/60 group-hover:text-foreground relative z-10 text-2xl font-black tracking-tighter transition-all duration-500 sm:text-3xl">
                  {client.name}
                </span>
                <div className="bg-primary/10 absolute -inset-x-4 -inset-y-2 scale-75 rounded-xl opacity-0 blur-xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
              </div>

              <span className="text-muted-foreground/60 group-hover:text-primary mt-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500">
                {client.industry}
              </span>

              {/* Decorative micro-interaction element */}
              <div className="bg-primary absolute -bottom-4 h-0.5 w-0 rounded-full opacity-0 transition-all duration-500 group-hover:w-8 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
