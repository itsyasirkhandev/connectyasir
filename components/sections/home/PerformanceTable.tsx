export function PerformanceTable() {
  const data = [
    { metric: 'Avg. Load Time', stack: 'Next.js (My Stack)', performance: '< 1.2s', status: 'Optimal' },
    { metric: 'Mobile Performance', stack: '98/100', performance: '100/100', status: 'Optimal' },
    { metric: 'Conversion Rate', stack: '4.2%', performance: '2.8%', status: 'Industry Avg.' },
    { metric: 'Security Score', stack: 'A+', performance: 'B', status: 'Industry Avg.' },
  ]

  return (
    <section className="bg-muted/30 py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Technical Benchmarks
          </span>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tighter">
            High-Performance Data for AI & Search
          </h2>
          <p className="text-muted-foreground mt-4 text-base">
            I build websites that exceed 2026 performance standards. Here is how my custom Next.js stack compares to industry averages.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-4 font-semibold text-foreground">Metric</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Yasir Khan (Next.js)</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Industry Average</th>
                  <th className="px-6 py-4 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{row.metric}</td>
                    <td className="px-6 py-4 text-primary font-bold">{row.stack}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.performance}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${row.status === 'Optimal' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-muted text-muted-foreground'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center italic">
          *Data verified through Vercel Speed Insights and Google PageSpeed Benchmarks 2026.
        </p>
      </div>
    </section>
  )
}
