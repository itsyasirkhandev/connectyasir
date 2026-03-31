import { Monitor, Smartphone, LayoutDashboard } from 'lucide-react'

const screens = [
  { title: 'Desktop — Homepage', icon: Monitor },
  { title: 'Desktop — Application form', icon: Monitor },
  { title: 'Desktop — Admin dashboard', icon: LayoutDashboard },
  { title: 'Mobile — Homepage', icon: Smartphone },
  { title: 'Mobile — Application form', icon: Smartphone },
]

export default function ScreenshotsVisuals() {
  return (
    <section className="py-16">
      <h2 className="text-foreground mb-8 text-2xl font-semibold tracking-tight lg:text-3xl">
        The Finished Product
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((screen, idx) => {
          const Icon = screen.icon
          return (
            <div
              key={idx}
              className="group bg-muted/10 hover:bg-muted/30 flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed p-8 transition-colors hover:border-solid"
            >
              <Icon className="text-muted-foreground/50 group-hover:text-primary mb-4 h-8 w-8 transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground text-center text-sm font-medium transition-colors">
                {screen.title}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
